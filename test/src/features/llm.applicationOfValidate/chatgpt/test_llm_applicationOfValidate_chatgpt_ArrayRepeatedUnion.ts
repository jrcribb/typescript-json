import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_llm_applicationOfValidate_chatgpt_ArrayRepeatedUnion =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ArrayRepeatedUnion",
    factory: ArrayRepeatedUnion,
  })(
    typia.llm.applicationOfValidate<ArrayRepeatedUnionApplication, "chatgpt">(),
  );

interface ArrayRepeatedUnionApplication {
  insert(p: { first: ArrayRepeatedUnion }): Promise<void>;
  reduce(p: {
    first: ArrayRepeatedUnion;
    second: ArrayRepeatedUnion | null;
  }): Promise<ArrayRepeatedUnion>;
  coalesce(p: {
    first: ArrayRepeatedUnion | null;
    second: ArrayRepeatedUnion | null;
    third?: ArrayRepeatedUnion | null;
  }): Promise<ArrayRepeatedUnion | null>;
}
