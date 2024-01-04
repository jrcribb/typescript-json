import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonNull } from "../../../../structures/ToJsonNull";

export const test_json_application_ajv_standard_ToJsonNull =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ToJsonNull",
  })({
    schemas: [
      {
        type: "null",
      },
    ],
    components: {
      schemas: {},
    },
    purpose: "ajv",
    surplus: false,
  });
