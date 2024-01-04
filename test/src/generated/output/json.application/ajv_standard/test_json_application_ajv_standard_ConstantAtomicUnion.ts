import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicUnion } from "../../../../structures/ConstantAtomicUnion";

export const test_json_application_ajv_standard_ConstantAtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ConstantAtomicUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ConstantAtomicUnion",
      },
    ],
    components: {
      schemas: {
        ConstantAtomicUnion: {
          $id: "#/components/schemas/ConstantAtomicUnion",
          type: "array",
          items: {
            $ref: "#/components/schemas/ConstantAtomicUnion.Union",
          },
        },
        "ConstantAtomicUnion.Union": {
          $id: "#/components/schemas/ConstantAtomicUnion.Union",
          oneOf: [
            {
              type: "boolean",
              enum: [false],
            },
            {
              type: "number",
              enum: [2, 1],
            },
            {
              type: "string",
              enum: ["three", "four"],
            },
            {
              type: "object",
              properties: {
                key: {
                  type: "string",
                  enum: ["key"],
                },
              },
              required: ["key"],
            },
          ],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
