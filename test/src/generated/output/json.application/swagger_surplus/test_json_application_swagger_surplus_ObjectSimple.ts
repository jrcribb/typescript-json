import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectSimple } from "../../../../structures/ObjectSimple";

export const test_json_application_swagger_surplus_ObjectSimple =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectSimple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectSimple.IBox3D",
      },
    ],
    components: {
      schemas: {
        "ObjectSimple.IBox3D": {
          type: "object",
          properties: {
            scale: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            position: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            rotate: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            pivot: {
              $ref: "#/components/schemas/ObjectSimple.IPoint3D",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["scale", "position", "rotate", "pivot"],
          "x-typia-jsDocTags": [],
        },
        "ObjectSimple.IPoint3D": {
          type: "object",
          properties: {
            x: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            y: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            z: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["x", "y", "z"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
