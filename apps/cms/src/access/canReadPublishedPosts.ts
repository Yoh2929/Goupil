import type { Access } from "payload";
import { hasAnyRole } from "./roles";

export const canReadPublishedPosts: Access = ({ req }) => {
	if (hasAnyRole(req.user, ["super_admin", "admin", "redacteur"])) {
		return true;
	}

	return {
		status: {
			equals: "published",
		},
	};
};
