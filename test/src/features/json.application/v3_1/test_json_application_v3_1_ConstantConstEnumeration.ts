import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_application_v3_1_ConstantConstEnumeration =
  _test_json_application({
    version: "3.1",
    name: "ConstantConstEnumeration",
  })(typia.json.application<[ConstantConstEnumeration], "3.1">());
