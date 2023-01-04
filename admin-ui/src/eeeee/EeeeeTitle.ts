import { Eeeee as TEeeee } from "../api/eeeee/Eeeee";

export const EEEEE_TITLE_FIELD = "id";

export const EeeeeTitle = (record: TEeeee): string => {
  return record.id || String(record.id);
};
