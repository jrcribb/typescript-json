import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_reflect_metadata_ObjectPropertyNullable =
  _test_reflect_metadata("ObjectPropertyNullable")(
    (typia.reflect.metadata as any).from({
      metadatas: [
        {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [],
          constants: [],
          templates: [],
          escaped: null,
          rest: null,
          arrays: [],
          tuples: [
            {
              name: "ObjectPropertyNullable",
              tags: [],
            },
          ],
          objects: [],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
      ],
      components: {
        objects: [
          {
            name: "ObjectPropertyNullable.IPointer<boolean>",
            properties: [
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["value"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: true,
                  functional: false,
                  atomics: [
                    {
                      type: "boolean",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
            ],
            jsDocTags: [],
            index: 0,
            validated: false,
            recursive: false,
            nullables: [false],
          },
          {
            name: "ObjectPropertyNullable.IPointer<number>",
            properties: [
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["value"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: true,
                  functional: false,
                  atomics: [
                    {
                      type: "number",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
            ],
            jsDocTags: [],
            index: 1,
            validated: false,
            recursive: false,
            nullables: [false],
          },
          {
            name: "ObjectPropertyNullable.IPointer<string>",
            properties: [
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["value"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: true,
                  functional: false,
                  atomics: [
                    {
                      type: "string",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
            ],
            jsDocTags: [],
            index: 2,
            validated: false,
            recursive: false,
            nullables: [false],
          },
          {
            name: "ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>",
            properties: [
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["value"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: true,
                  functional: false,
                  atomics: [],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: ["ObjectPropertyNullable.IMember"],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
            ],
            jsDocTags: [],
            index: 3,
            validated: false,
            recursive: false,
            nullables: [false],
          },
          {
            name: "ObjectPropertyNullable.IMember",
            properties: [
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["id"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "string",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["name"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: true,
                  functional: false,
                  atomics: [
                    {
                      type: "string",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["grade"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: false,
                  optional: true,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "number",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["serial"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: false,
                  optional: true,
                  nullable: true,
                  functional: false,
                  atomics: [
                    {
                      type: "number",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["activated"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: true,
                  functional: false,
                  atomics: [
                    {
                      type: "boolean",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
            ],
            jsDocTags: [],
            index: 4,
            validated: false,
            recursive: false,
            nullables: [true],
          },
        ],
        aliases: [],
        arrays: [
          {
            name: "Array<ObjectPropertyNullable.IPointer<boolean>>",
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: ["ObjectPropertyNullable.IPointer<boolean>"],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            nullables: [false],
            recursive: false,
            index: null,
          },
          {
            name: "Array<ObjectPropertyNullable.IPointer<number>>",
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: ["ObjectPropertyNullable.IPointer<number>"],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            nullables: [false],
            recursive: false,
            index: null,
          },
          {
            name: "Array<ObjectPropertyNullable.IPointer<string>>",
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: ["ObjectPropertyNullable.IPointer<string>"],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            nullables: [false],
            recursive: false,
            index: null,
          },
          {
            name: "Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [
                "ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>",
              ],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            nullables: [false],
            recursive: false,
            index: null,
          },
        ],
        tuples: [
          {
            name: "ObjectPropertyNullable",
            index: null,
            elements: [
              {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [
                  {
                    name: "Array<ObjectPropertyNullable.IPointer<boolean>>",
                    tags: [],
                  },
                ],
                tuples: [],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
              },
              {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [
                  {
                    name: "Array<ObjectPropertyNullable.IPointer<number>>",
                    tags: [],
                  },
                ],
                tuples: [],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
              },
              {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [
                  {
                    name: "Array<ObjectPropertyNullable.IPointer<string>>",
                    tags: [],
                  },
                ],
                tuples: [],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
              },
              {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [
                  {
                    name: "Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                    tags: [],
                  },
                ],
                tuples: [],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
              },
            ],
            recursive: false,
            nullables: [false],
          },
        ],
      },
    }),
  );
