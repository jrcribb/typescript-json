import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_reflect_metadata_DynamicComposite = _test_reflect_metadata(
  "DynamicComposite",
)(
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
        tuples: [],
        objects: ["DynamicComposite"],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [
        {
          name: "DynamicComposite",
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
              value: {
                any: false,
                required: true,
                optional: false,
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
                constants: [],
                templates: [
                  [
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["prefix_"],
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
                    {
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
                  ],
                ],
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
                constants: [],
                templates: [
                  [
                    {
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["_postfix"],
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
                  ],
                ],
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
                constants: [],
                templates: [
                  [
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["value_"],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
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
                  ],
                ],
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
                  {
                    type: "number",
                    tags: [],
                  },
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
            {
              key: {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [],
                templates: [
                  [
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["between_"],
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
                    {
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
                    {
                      any: false,
                      required: true,
                      optional: false,
                      nullable: false,
                      functional: false,
                      atomics: [],
                      constants: [
                        {
                          type: "string",
                          values: ["_and_"],
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
                    {
                      any: false,
                      required: true,
                      optional: false,
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
                  ],
                ],
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
      ],
      aliases: [],
      arrays: [],
      tuples: [],
    },
  }),
);
