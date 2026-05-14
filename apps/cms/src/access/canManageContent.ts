import type { Access } from "payload";
import { hasAnyRole } from "./roles";

export const canManageContent: Access = ({ req }) => hasAnyRole(req.user, ["super_admin", "admin", "redacteur"]);
