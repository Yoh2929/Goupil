import type { Access } from "payload";
import { hasRole } from "./roles";

export const canCreateUsers: Access = async ({ req }) => {
	if (hasRole(req.user, "super_admin")) {
		return true;
	}

	const existingUsers = await req.payload.find({
		collection: "users",
		limit: 1,
		overrideAccess: true,
	});

	return existingUsers.totalDocs === 0;
};
