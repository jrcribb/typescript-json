import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_json_application_ajv_standard_ArrayHierarchical =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayHierarchical",
  })(typia.json.application<[ArrayHierarchical], "ajv", false>());
