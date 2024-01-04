import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_application_ajv_standard_ClassMethod =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ClassMethod",
  })(typia.json.application<[ClassMethod], "ajv", false>());
