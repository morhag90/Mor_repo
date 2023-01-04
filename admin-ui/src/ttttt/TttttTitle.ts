import { Ttttt as TTtttt } from "../api/ttttt/Ttttt";

export const TTTTT_TITLE_FIELD = "id";

export const TttttTitle = (record: TTtttt): string => {
  return record.id || String(record.id);
};
