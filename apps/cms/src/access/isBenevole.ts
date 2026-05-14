import type { CmsUserLike } from "./roles";
import { hasRole } from "./roles";

export const isBenevole = (user: CmsUserLike) => hasRole(user, "benevole");
