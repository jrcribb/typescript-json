import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonArray } from "../../../../structures/ToJsonArray";

export const test_json_application_ajv_surplus_ToJsonArray =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ToJsonArray",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonArray",
      },
    ],
    components: {
      schemas: {
        ToJsonArray: {
          $id: "#/components/schemas/ToJsonArray",
          type: "array",
          items: [
            {
              type: "array",
              items: {
                type: "boolean",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "array",
              items: {
                type: "number",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "array",
              items: {
                type: "string",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ToJsonArray.IObject",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          ],
          minItems: 4,
          maxItems: 4,
        },
        "ToJsonArray.IObject": {
          $id: "#/components/schemas/ToJsonArray.IObject",
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
