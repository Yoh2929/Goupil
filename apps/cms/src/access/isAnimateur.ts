import type { CmsUserLike } from "./roles";
import { hasRole } from "./roles";

export const isAnimateur = (user: CmsUserLike) => hasRole(user, "animateur");
