import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicIntersection } from "../../../../structures/AtomicIntersection";

export const test_json_application_ajv_surplus_AtomicIntersection =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "AtomicIntersection",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/AtomicIntersection",
      },
    ],
    components: {
      schemas: {
        AtomicIntersection: {
          $id: "#/components/schemas/AtomicIntersection",
          type: "array",
          items: [
            {
              $ref: "#/components/schemas/AtomicIntersection.Wrapperboolean",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              $ref: "#/components/schemas/AtomicIntersection.Wrappernumber",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              $ref: "#/components/schemas/AtomicIntersection.Wrapperstring",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          ],
          minItems: 3,
          maxItems: 3,
        },
        "AtomicIntersection.Wrapperboolean": {
          $id: "#/components/schemas/AtomicIntersection.Wrapperboolean",
          type: "boolean",
        },
        "AtomicIntersection.Wrappernumber": {
          $id: "#/components/schemas/AtomicIntersection.Wrappernumber",
          type: "number",
        },
        "AtomicIntersection.Wrapperstring": {
          $id: "#/components/schemas/AtomicIntersection.Wrapperstring",
          type: "string",
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
