import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_application_swagger_standard_ObjectPrimitive =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectPrimitive",
  })(typia.json.application<[ObjectPrimitive], "swagger", false>());
