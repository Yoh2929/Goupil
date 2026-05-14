import type { Access } from "payload";
import { hasRole } from "./roles";

export const canManagePlatform: Access = ({ req }) => hasRole(req.user, "super_admin");
