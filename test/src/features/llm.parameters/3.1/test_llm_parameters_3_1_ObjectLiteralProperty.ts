import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_llm_parameters_3_1_ObjectLiteralProperty =
  _test_llm_parameters({
    model: "3.1",
    name: "ObjectLiteralProperty",
  })(typia.llm.parameters<ObjectLiteralPropertyParameters, "3.1">());

interface ObjectLiteralPropertyParameters {
  regular: ObjectLiteralProperty;
  nullable: ObjectLiteralProperty | null;
  optional: ObjectLiteralProperty | undefined;
  faint: ObjectLiteralProperty | null | undefined;
  array: Array<ObjectLiteralProperty>;
}
