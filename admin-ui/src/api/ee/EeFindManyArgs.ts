import { EeWhereInput } from "./EeWhereInput";
import { EeOrderByInput } from "./EeOrderByInput";

export type EeFindManyArgs = {
  where?: EeWhereInput;
  orderBy?: Array<EeOrderByInput>;
  skip?: number;
  take?: number;
};
