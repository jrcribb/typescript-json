import { IJsonComponents } from "../../schemas/json/IJsonComponents";
import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { application_schema } from "./application_schema";

/**
 * @internal
 */
export const application_array =
  (options: JsonApplicationProgrammer.IOptions) =>
  (components: IJsonComponents) =>
  (array: MetadataArray): IJsonSchema.IArray[] => {
    // BASE SCHEMA
    const items: IJsonSchema = application_schema(options)(false)(components)(
      array.type.value,
    )({});
    const base: IJsonSchema.IArray = {
      type: "array",
      items: null!,
    };
    const out = (schema: IJsonSchema.IArray) => {
      schema.items = items;
      return schema;
    };
    if (array.tags.length === 0) return [out(base)];

    // CONSIDER TYPE TAGS
    const union: IJsonSchema.IArray[] = array.tags.map(
      (row) => application_array_tags(options)({ ...base })(row)!,
    );
    const map: Map<string, IJsonSchema.IArray> = new Map(
      union.map((u) => [JSON.stringify(u), u]),
    );
    return [...map.values()].map((s) => out(s));
  };

const application_array_tags =
  (options: JsonApplicationProgrammer.IOptions) =>
  (schema: IJsonSchema.IArray) =>
  (row: IMetadataTypeTag[]): IJsonSchema.IArray => {
    for (const tag of row.slice().sort((a, b) => a.kind.localeCompare(b.kind)))
      if (tag.kind === "minItems" && typeof tag.value === "number")
        schema.minItems = tag.value;
      else if (tag.kind === "maxItems" && typeof tag.value === "number")
        schema.maxItems = tag.value;
    if (options.surplus)
      schema["x-typia-typeTags"] = row.map((tag) => ({
        target: tag.target,
        name: tag.name,
        kind: tag.kind,
        value: tag.value,
        validate: tag.validate,
        exclusive: tag.exclusive,
      }));
    return schema;
  };
