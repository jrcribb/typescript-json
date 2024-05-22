import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_json_application_v3_0_TupleHierarchical =
  _test_json_application({
    version: "3.0",
    name: "TupleHierarchical",
  })(typia.json.application<[TupleHierarchical], "3.0">());
