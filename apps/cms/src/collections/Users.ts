import { APIError, type CollectionConfig } from "payload";
import { canAccessAdmin, canCreateUsers, canDeleteUsers, canManageRoles, canReadOwnAccount, isSuperAdmin } from "../access";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    hidden: ({ user }) => !isSuperAdmin(user),
  },
  access: {
    admin: canAccessAdmin,
    create: canCreateUsers,
    delete: canDeleteUsers,
    read: canReadOwnAccount,
    unlock: canManageRoles,
    update: ({ req }) => Boolean(req.user),
  },
  hooks: {
    beforeChange: [
      async ({ data, operation, originalDoc, req }) => {
        if (operation === "create") {
          const existingUsers = await req.payload.find({ collection: "users", limit: 1, overrideAccess: true });

          if (existingUsers.totalDocs === 0) {
            return {
              ...data,
              role: "super_admin",
            };
          }

          if (!isSuperAdmin(req.user)) {
            throw new APIError("Only a super admin can create users.", 403);
          }
        }

        if (operation === "update") {
          if (!req.user) {
            throw new APIError("You must be logged in to update users.", 401);
          }

          if (!isSuperAdmin(req.user) && String(req.user.id) !== String(originalDoc?.id)) {
            throw new APIError("You can only update your own account.", 403);
          }

          if (!isSuperAdmin(req.user) && data.role && data.role !== originalDoc?.role) {
            throw new APIError("Only a super admin can change roles.", 403);
          }

          if (data.role === "super_admin" && !isSuperAdmin(req.user)) {
            throw new APIError("Only a super admin can assign the super admin role.", 403);
          }
        }

        return data;
      },
    ],
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "benevole",
      access: {
        create: async ({ req }) => {
          const existingUsers = await req.payload.find({ collection: "users", limit: 1, overrideAccess: true });
          if (existingUsers.totalDocs === 0) {
            return true;
          }

          return isSuperAdmin(req.user);
        },
        read: ({ req, doc }) => isSuperAdmin(req.user) || String(req.user?.id) === String(doc?.id),
        update: ({ req }) => isSuperAdmin(req.user),
      },
      options: ["super_admin", "admin", "technicien", "animateur", "redacteur", "benevole", "beneficiaire"],
    },
    {
      name: "fullName",
      type: "text",
      required: true,
    },
  ],
};
