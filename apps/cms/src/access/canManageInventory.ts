import type { Access } from "payload";
import { hasAnyRole } from "./roles";

export const canManageInventory: Access = ({ req }) => hasAnyRole(req.user, ["super_admin", "admin", "technicien"]);
