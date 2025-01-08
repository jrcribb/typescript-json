import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_applicationOfValidate_llama_TypeTagMatrix =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "TypeTagMatrix",
    factory: TypeTagMatrix,
  })(typia.llm.applicationOfValidate<TypeTagMatrixApplication, "llama">());

interface TypeTagMatrixApplication {
  insert(p: { first: TypeTagMatrix }): Promise<void>;
  reduce(p: {
    first: TypeTagMatrix;
    second: TypeTagMatrix | null;
  }): Promise<TypeTagMatrix>;
  coalesce(p: {
    first: TypeTagMatrix | null;
    second: TypeTagMatrix | null;
    third?: TypeTagMatrix | null;
  }): Promise<TypeTagMatrix | null>;
}
