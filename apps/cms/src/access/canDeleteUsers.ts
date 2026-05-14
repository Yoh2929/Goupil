import type { Access } from "payload";
import { hasRole } from "./roles";

export const canDeleteUsers: Access = ({ req }) => hasRole(req.user, "super_admin");
