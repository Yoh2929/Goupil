import type { CmsUserLike } from "./roles";
import { hasRole } from "./roles";

export const isAdmin = (user: CmsUserLike) => hasRole(user, "admin");
