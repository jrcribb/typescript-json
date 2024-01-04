import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_json_application_ajv_standard_TypeTagType =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagType",
  })(typia.json.application<[TypeTagType], "ajv", false>());
