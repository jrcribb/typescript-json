import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_application_v3_0_AtomicAlias = _test_json_application({
  version: "3.0",
  name: "AtomicAlias",
})(typia.json.application<[AtomicAlias], "3.0">());
