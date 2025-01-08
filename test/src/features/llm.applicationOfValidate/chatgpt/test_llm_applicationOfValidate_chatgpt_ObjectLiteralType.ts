import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_applicationOfValidate_chatgpt_ObjectLiteralType =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ObjectLiteralType",
    factory: ObjectLiteralType,
  })(
    typia.llm.applicationOfValidate<ObjectLiteralTypeApplication, "chatgpt">(),
  );

interface ObjectLiteralTypeApplication {
  insert(p: { first: ObjectLiteralType }): Promise<void>;
  reduce(p: {
    first: ObjectLiteralType;
    second: ObjectLiteralType | null;
  }): Promise<ObjectLiteralType>;
  coalesce(p: {
    first: ObjectLiteralType | null;
    second: ObjectLiteralType | null;
    third?: ObjectLiteralType | null;
  }): Promise<ObjectLiteralType | null>;
}
