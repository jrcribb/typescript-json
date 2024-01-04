import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionImplicit } from "../../../../structures/ObjectUnionImplicit";

export const test_json_application_swagger_surplus_ObjectUnionImplicit =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectUnionImplicit",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionImplicit",
      },
    ],
    components: {
      schemas: {
        ObjectUnionImplicit: {
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.ILine",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.ITriangle",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.IRectangle",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPolygon",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.ICircle",
              },
            ],
          },
        },
        "ObjectUnionImplicit.IPoint": {
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
            slope: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          nullable: false,
          required: ["x", "y"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.ILine": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            width: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            distance: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          nullable: false,
          required: ["p1", "p2"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.ITriangle": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            width: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            height: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            area: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          nullable: false,
          required: ["p1", "p2", "p3"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.IRectangle": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p4: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            width: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            height: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            area: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          nullable: false,
          required: ["p1", "p2", "p3", "p4"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.IPolyline": {
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            length: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          nullable: false,
          required: ["points"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.IPolygon": {
          type: "object",
          properties: {
            outer: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            inner: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            area: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          nullable: false,
          required: ["outer"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.ICircle": {
          type: "object",
          properties: {
            radius: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            centroid: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            area: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          nullable: false,
          required: ["radius"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
