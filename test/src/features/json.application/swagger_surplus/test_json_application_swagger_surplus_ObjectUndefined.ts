import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_json_application_swagger_surplus_ObjectUndefined =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectUndefined",
  })(typia.json.application<[ObjectUndefined], "swagger", true>());
