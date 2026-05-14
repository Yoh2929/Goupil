import type { Access } from "payload";

type AccessArgs = Parameters<Access>[0];
type BooleanAccess = (args: AccessArgs) => boolean | Promise<boolean>;

const roleOrder = {
	member: 0,
	volunteer: 1,
	technician: 2,
	manager: 3,
	admin: 4,
} as const;

type CmsRole = keyof typeof roleOrder;

const getRoleRank = (role?: string | null) => {
	if (!role || !(role in roleOrder)) {
		return -1;
	}

	return roleOrder[role as CmsRole];
};

const hasMinimumRole = (role: string | null | undefined, minimumRole: CmsRole) => {
	return getRoleRank(role) >= roleOrder[minimumRole];
};

export const canAccessAdmin: BooleanAccess = ({ req }) => Boolean(req.user);

export const canReadPublicContent: BooleanAccess = () => true;

export const canManageMedia: BooleanAccess = ({ req }) => hasMinimumRole(req.user?.role, "technician");

export const canManageContent: BooleanAccess = ({ req }) => hasMinimumRole(req.user?.role, "manager");

export const canManageUsers: BooleanAccess = ({ req }) => hasMinimumRole(req.user?.role, "manager");

export const canUpdateOwnAccount: BooleanAccess = ({ req, id }) => {
	if (!req.user) {
		return false;
	}

	if (hasMinimumRole(req.user.role, "manager")) {
		return true;
	}

	return id === req.user.id;
};

export const canCreateUsers: BooleanAccess = async ({ req }) => {
	if (hasMinimumRole(req.user?.role, "manager")) {
		return true;
	}

	const existingUsers = await req.payload.find({
		collection: "users",
		limit: 1,
		overrideAccess: true,
	});

	return existingUsers.totalDocs === 0;
};

export const canDeleteUsers: BooleanAccess = ({ req }) => hasMinimumRole(req.user?.role, "admin");

export const canManageRoles: BooleanAccess = ({ req }) => hasMinimumRole(req.user?.role, "manager");
