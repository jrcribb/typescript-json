import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_llm_applicationOfValidate_claude_TypeTagType =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "TypeTagType",
    factory: TypeTagType,
  })(typia.llm.applicationOfValidate<TypeTagTypeApplication, "claude">());

interface TypeTagTypeApplication {
  insert(p: { first: TypeTagType }): Promise<void>;
  reduce(p: {
    first: TypeTagType;
    second: TypeTagType | null;
  }): Promise<TypeTagType>;
  coalesce(p: {
    first: TypeTagType | null;
    second: TypeTagType | null;
    third?: TypeTagType | null;
  }): Promise<TypeTagType | null>;
}
