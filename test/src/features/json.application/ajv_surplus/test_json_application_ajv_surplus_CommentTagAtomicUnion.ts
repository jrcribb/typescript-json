import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_json_application_ajv_surplus_CommentTagAtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "CommentTagAtomicUnion",
  })(typia.json.application<[CommentTagAtomicUnion], "ajv", true>());
