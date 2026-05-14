import type { CmsUserLike } from "./roles";
import { hasRole } from "./roles";

export const isSuperAdmin = (user: CmsUserLike) => hasRole(user, "super_admin");
