import type { CollectionConfig } from "payload";
import { canAccessAdmin, canCreateUsers, canDeleteUsers, canManageRoles, canUpdateOwnAccount } from "./access";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    admin: canAccessAdmin,
    create: canCreateUsers,
    delete: canDeleteUsers,
    read: canUpdateOwnAccount,
    unlock: canManageRoles,
    update: canUpdateOwnAccount,
  },
  hooks: {
    beforeChange: [
      async ({ data, operation, req }) => {
        if (operation === "create") {
          const existingUsers = await req.payload.find({ collection: "users", limit: 1, overrideAccess: false });

          if (existingUsers.totalDocs === 0) {
            return {
              ...data,
              role: "admin",
            };
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
      defaultValue: "member",
      access: {
        update: canManageRoles,
      },
      options: ["member", "volunteer", "technician", "manager", "admin"],
    },
    {
      name: "fullName",
      type: "text",
      required: true,
    },
  ],
};
