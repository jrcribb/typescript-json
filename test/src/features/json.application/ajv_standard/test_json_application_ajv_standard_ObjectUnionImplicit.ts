import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_json_application_ajv_standard_ObjectUnionImplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionImplicit",
  })(typia.json.application<[ObjectUnionImplicit], "ajv", false>());
