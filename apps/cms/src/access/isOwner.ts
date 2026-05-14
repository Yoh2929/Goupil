import type { CmsUserLike } from "./roles";
import { isOwner } from "./roles";

export const isDocumentOwner = (user: CmsUserLike, documentId?: string | number | null) => isOwner(user, documentId);
