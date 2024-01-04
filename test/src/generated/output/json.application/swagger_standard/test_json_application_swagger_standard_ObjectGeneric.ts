import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";

export const test_json_application_swagger_standard_ObjectGeneric =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectGeneric",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectGeneric",
      },
    ],
    components: {
      schemas: {
        ObjectGeneric: {
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingboolean",
              },
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingnumber",
              },
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingstring",
              },
            ],
          },
          minItems: 3,
          maxItems: 3,
          "x-typia-tuple": {
            type: "array",
            items: [
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingboolean",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingnumber",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              {
                $ref: "#/components/schemas/ObjectGeneric.ISomethingstring",
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            ],
            minItems: 3,
            maxItems: 3,
          },
        },
        "ObjectGeneric.ISomethingboolean": {
          type: "object",
          properties: {
            value: {
              type: "boolean",
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
            },
            elements: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildbooleanboolean",
              },
            },
          },
          nullable: false,
          required: ["value", "child", "elements"],
        },
        "ObjectGeneric.IChildbooleanboolean": {
          type: "object",
          properties: {
            child_value: {
              type: "boolean",
            },
            child_next: {
              type: "boolean",
            },
          },
          nullable: false,
          required: ["child_value", "child_next"],
        },
        "ObjectGeneric.ISomethingnumber": {
          type: "object",
          properties: {
            value: {
              type: "number",
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
            },
            elements: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildnumbernumber",
              },
            },
          },
          nullable: false,
          required: ["value", "child", "elements"],
        },
        "ObjectGeneric.IChildnumbernumber": {
          type: "object",
          properties: {
            child_value: {
              type: "number",
            },
            child_next: {
              type: "number",
            },
          },
          nullable: false,
          required: ["child_value", "child_next"],
        },
        "ObjectGeneric.ISomethingstring": {
          type: "object",
          properties: {
            value: {
              type: "string",
            },
            child: {
              $ref: "#/components/schemas/ObjectGeneric.IChildstringstring",
            },
            elements: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectGeneric.IChildstringstring",
              },
            },
          },
          nullable: false,
          required: ["value", "child", "elements"],
        },
        "ObjectGeneric.IChildstringstring": {
          type: "object",
          properties: {
            child_value: {
              type: "string",
            },
            child_next: {
              type: "string",
            },
          },
          nullable: false,
          required: ["child_value", "child_next"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
