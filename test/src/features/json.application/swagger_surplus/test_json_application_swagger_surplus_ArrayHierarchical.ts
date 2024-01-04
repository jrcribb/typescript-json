import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_json_application_swagger_surplus_ArrayHierarchical =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayHierarchical",
  })(typia.json.application<[ArrayHierarchical], "swagger", true>());
