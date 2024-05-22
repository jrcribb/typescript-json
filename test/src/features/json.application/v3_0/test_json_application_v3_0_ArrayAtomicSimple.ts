import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_application_v3_0_ArrayAtomicSimple =
  _test_json_application({
    version: "3.0",
    name: "ArrayAtomicSimple",
  })(typia.json.application<[ArrayAtomicSimple], "3.0">());
