import type { Access } from "payload";
import { hasAnyRole } from "./roles";

export const canManageEvents: Access = ({ req }) => hasAnyRole(req.user, ["super_admin", "admin", "animateur"]);
