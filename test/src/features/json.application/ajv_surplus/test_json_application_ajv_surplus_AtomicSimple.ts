import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_application_ajv_surplus_AtomicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "AtomicSimple",
  })(typia.json.application<[AtomicSimple], "ajv", true>());
