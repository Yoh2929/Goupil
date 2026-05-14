import type { Access } from "payload";
import { hasRole } from "./roles";

export const canReadOwnAccount: Access = ({ req }) => {
	if (!req.user) {
		return false;
	}

	if (hasRole(req.user, "super_admin")) {
		return true;
	}

	return {
		id: {
			equals: req.user.id,
		},
	};
};
