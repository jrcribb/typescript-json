import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonUnion } from "../../../../structures/ToJsonUnion";

export const test_json_application_ajv_standard_ToJsonUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ToJsonUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ToJsonUnion",
      },
    ],
    components: {
      schemas: {
        ToJsonUnion: {
          $id: "#/components/schemas/ToJsonUnion",
          type: "array",
          items: {
            oneOf: [
              {
                type: "boolean",
              },
              {
                $ref: "#/components/schemas/ToJsonUnion.ICitizen",
              },
              {
                $ref: "#/components/schemas/ToJsonUnion.IProduct",
              },
              {
                type: "string",
              },
              {
                type: "number",
              },
              {
                $ref: "#/components/schemas/ToJsonUnion.ICitizen",
              },
            ],
          },
        },
        "ToJsonUnion.ICitizen": {
          $id: "#/components/schemas/ToJsonUnion.ICitizen",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            mobile: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
          required: ["id", "mobile", "name"],
        },
        "ToJsonUnion.IProduct": {
          $id: "#/components/schemas/ToJsonUnion.IProduct",
          type: "object",
          properties: {
            manufacturer: {
              type: "string",
            },
            brand: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
          required: ["manufacturer", "brand", "name"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
