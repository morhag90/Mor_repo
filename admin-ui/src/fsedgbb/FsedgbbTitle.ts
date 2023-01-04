import { Fsedgbb as TFsedgbb } from "../api/fsedgbb/Fsedgbb";

export const FSEDGBB_TITLE_FIELD = "id";

export const FsedgbbTitle = (record: TFsedgbb): string => {
  return record.id || String(record.id);
};
