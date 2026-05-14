import type { Access } from "payload";
import { hasAnyRole } from "./roles";

export const canManageMedia: Access = ({ req }) => hasAnyRole(req.user, ["super_admin", "admin", "redacteur"]);
