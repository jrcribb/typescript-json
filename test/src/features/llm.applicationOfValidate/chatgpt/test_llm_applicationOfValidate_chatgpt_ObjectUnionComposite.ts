import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_llm_applicationOfValidate_chatgpt_ObjectUnionComposite =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ObjectUnionComposite",
    factory: ObjectUnionComposite,
  })(
    typia.llm.applicationOfValidate<
      ObjectUnionCompositeApplication,
      "chatgpt"
    >(),
  );

interface ObjectUnionCompositeApplication {
  insert(p: { first: ObjectUnionComposite }): Promise<void>;
  reduce(p: {
    first: ObjectUnionComposite;
    second: ObjectUnionComposite | null;
  }): Promise<ObjectUnionComposite>;
  coalesce(p: {
    first: ObjectUnionComposite | null;
    second: ObjectUnionComposite | null;
    third?: ObjectUnionComposite | null;
  }): Promise<ObjectUnionComposite | null>;
}
