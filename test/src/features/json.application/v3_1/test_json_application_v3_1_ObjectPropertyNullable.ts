import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_json_application_v3_1_ObjectPropertyNullable =
  _test_json_application({
    version: "3.1",
    name: "ObjectPropertyNullable",
  })(typia.json.application<[ObjectPropertyNullable], "3.1">());
