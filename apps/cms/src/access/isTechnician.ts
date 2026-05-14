import type { CmsUserLike } from "./roles";
import { hasRole } from "./roles";

export const isTechnician = (user: CmsUserLike) => hasRole(user, "technicien");
