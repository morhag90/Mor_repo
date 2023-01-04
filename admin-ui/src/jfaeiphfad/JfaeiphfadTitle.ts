import { Jfaeiphfad as TJfaeiphfad } from "../api/jfaeiphfad/Jfaeiphfad";

export const JFAEIPHFAD_TITLE_FIELD = "id";

export const JfaeiphfadTitle = (record: TJfaeiphfad): string => {
  return record.id || String(record.id);
};
