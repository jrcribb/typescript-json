import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_applicationOfValidate_llama_ConstantAtomicUnion =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "ConstantAtomicUnion",
    factory: ConstantAtomicUnion,
  })(
    typia.llm.applicationOfValidate<ConstantAtomicUnionApplication, "llama">(),
  );

interface ConstantAtomicUnionApplication {
  insert(p: { first: ConstantAtomicUnion }): Promise<void>;
  reduce(p: {
    first: ConstantAtomicUnion;
    second: ConstantAtomicUnion | null;
  }): Promise<ConstantAtomicUnion>;
  coalesce(p: {
    first: ConstantAtomicUnion | null;
    second: ConstantAtomicUnion | null;
    third?: ConstantAtomicUnion | null;
  }): Promise<ConstantAtomicUnion | null>;
}
