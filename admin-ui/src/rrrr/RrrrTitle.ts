import { Rrrr as TRrrr } from "../api/rrrr/Rrrr";

export const RRRR_TITLE_FIELD = "id";

export const RrrrTitle = (record: TRrrr): string => {
  return record.id || String(record.id);
};
