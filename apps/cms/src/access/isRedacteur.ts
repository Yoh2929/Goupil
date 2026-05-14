import type { CmsUserLike } from "./roles";
import { hasRole } from "./roles";

export const isRedacteur = (user: CmsUserLike) => hasRole(user, "redacteur");
