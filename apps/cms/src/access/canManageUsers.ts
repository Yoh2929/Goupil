import type { Access } from "payload";
import { hasRole } from "./roles";

export const canManageUsers: Access = ({ req }) => hasRole(req.user, "super_admin");
