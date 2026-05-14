export const ROLE_PRIORITY = {
	super_admin: 600,
	admin: 500,
	technicien: 400,
	animateur: 300,
	redacteur: 200,
	benevole: 100,
	beneficiaire: 50,
} as const;

export type CmsRole = keyof typeof ROLE_PRIORITY;

export type CmsUserLike = {
	id?: string | number | null;
	role?: string | null;
} | null | undefined;

const normalizeRole = (role?: string | null): CmsRole | undefined => {
	if (!role) {
		return undefined;
	}

	return role in ROLE_PRIORITY ? (role as CmsRole) : undefined;
};

export const getRoleRank = (role?: string | null) => {
	const normalizedRole = normalizeRole(role);
	return normalizedRole ? ROLE_PRIORITY[normalizedRole] : 0;
};

export const hasRole = (user: CmsUserLike, minimumRole: CmsRole) => {
	return getRoleRank(user?.role) >= ROLE_PRIORITY[minimumRole];
};

export const isOwner = (user: CmsUserLike, documentId?: string | number | null) => {
	if (!user || documentId === undefined || documentId === null) {
		return false;
	}

	return String(user.id) === String(documentId);
};

export const hasAnyRole = (user: CmsUserLike, roles: CmsRole[]) => {
	return roles.some((role) => hasRole(user, role));
};
