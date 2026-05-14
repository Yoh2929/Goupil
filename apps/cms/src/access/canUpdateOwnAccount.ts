import type { Access } from "payload";
import { hasRole } from "./roles";

export const canUpdateOwnAccount: Access = ({ req }) => Boolean(req.user) || hasRole(req.user, "super_admin");
