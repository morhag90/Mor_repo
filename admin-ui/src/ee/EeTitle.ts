import { Ee as TEe } from "../api/ee/Ee";

export const EE_TITLE_FIELD = "id";

export const EeTitle = (record: TEe): string => {
  return record.id || String(record.id);
};
