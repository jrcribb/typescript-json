import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_application_ajv_standard_ArrayRepeatedRequired =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayRepeatedRequired",
  })(typia.json.application<[ArrayRepeatedRequired], "ajv", false>());
