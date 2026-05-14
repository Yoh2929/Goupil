import type { PayloadRequest } from "payload";
import { hasAnyRole } from "./roles";

export const canAccessAdmin = ({ req }: { req: PayloadRequest }) => hasAnyRole(req.user, ["super_admin", "admin", "technicien", "animateur", "redacteur"]);
