import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_llm_applicationOfValidate_chatgpt_ObjectUnionCompositePointer =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ObjectUnionCompositePointer",
    factory: ObjectUnionCompositePointer,
  })(
    typia.llm.applicationOfValidate<
      ObjectUnionCompositePointerApplication,
      "chatgpt"
    >(),
  );

interface ObjectUnionCompositePointerApplication {
  insert(p: { first: ObjectUnionCompositePointer }): Promise<void>;
  reduce(p: {
    first: ObjectUnionCompositePointer;
    second: ObjectUnionCompositePointer | null;
  }): Promise<ObjectUnionCompositePointer>;
  coalesce(p: {
    first: ObjectUnionCompositePointer | null;
    second: ObjectUnionCompositePointer | null;
    third?: ObjectUnionCompositePointer | null;
  }): Promise<ObjectUnionCompositePointer | null>;
}
