import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../../structures/ObjectPrimitive";

export const test_json_application_ajv_surplus_ObjectPrimitive =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectPrimitive",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPrimitive.IArticle",
      },
    ],
    components: {
      schemas: {
        "ObjectPrimitive.IArticle": {
          $id: "#/components/schemas/ObjectPrimitive.IArticle",
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            extension: {
              type: "string",
              enum: ["txt", "md", "html"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            title: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            body: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            files: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPrimitive.IFile",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            secret: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: [
            "id",
            "extension",
            "title",
            "body",
            "files",
            "secret",
            "created_at",
          ],
          "x-typia-jsDocTags": [],
        },
        "ObjectPrimitive.IFile": {
          $id: "#/components/schemas/ObjectPrimitive.IFile",
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            extension: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            url: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "extension", "url", "created_at"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
