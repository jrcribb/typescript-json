import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_json_application_swagger_surplus_DynamicTree =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "DynamicTree",
  })(typia.json.application<[DynamicTree], "swagger", true>());
