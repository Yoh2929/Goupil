import type { Access } from "payload";
import { hasRole } from "./roles";

export const canManageRoles: Access = ({ req }) => hasRole(req.user, "super_admin");
