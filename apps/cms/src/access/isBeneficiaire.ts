import type { CmsUserLike } from "./roles";
import { hasRole } from "./roles";

export const isBeneficiaire = (user: CmsUserLike) => hasRole(user, "beneficiaire");
