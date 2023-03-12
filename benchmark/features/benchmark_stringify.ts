import * as ct from "class-transformer";
import ajv from "fast-json-stringify";
import typia from "typia";

import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArraySimple } from "../../test/structures/ArraySimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { StringifyBenchmarker } from "../internal/StringifyBenchmarker";
import { CvArrayHierarchical } from "../structures/class-validator/CvArrayHierarchical";
import { CvArrayRecursive } from "../structures/class-validator/CvArrayRecursive";
import { CvArrayRecursiveUnionExplicit } from "../structures/class-validator/CvArrayRecursiveUnionExplicit";
import { CvObjectHierarchical } from "../structures/class-validator/CvObjectHierarchical";
import { CvObjectRecursive } from "../structures/class-validator/CvObjectRecursive";
import { CvObjectSimple } from "../structures/class-validator/CvObjectSimple";
import { CvObjectUnionImplicit } from "../structures/class-validator/CvObjectUnionImplicit";

function build<T>(app: typia.IJsonApplication): null | ((input: T) => string) {
    try {
        return ajv(app.schemas[0] as any, {
            // mode: "standalone",
            schema: {
                components: app.components,
            } as any,
        }) as any;
    } catch {
        return null;
    }
}

const serialize = <T extends object>(schema: ct.ClassConstructor<any>) => ({
    transform: (input: T) => ct.plainToClass(schema, input),
    stringify: (input: T) => JSON.stringify(ct.classToPlain(input)),
});

const prepare = StringifyBenchmarker.prepare([
    "typia.stringify()",
    "typia.assertStringify()",
    "typia.isStringify()",
    "fast-json-stringify",
    "class-transformer",
    "JSON.stringify",
]);

const stringify = () => [
    //----
    // OBJECT
    //----
    prepare("object (simple)", () => ObjectSimple.generate(), {
        "typia.stringify()": typia.createStringify<ObjectSimple>(),
        "typia.assertStringify()": typia.createAssertStringify<ObjectSimple>(),
        "typia.isStringify()": typia.createIsStringify<ObjectSimple>(),
        "fast-json-stringify": build(
            typia.application<[ObjectSimple], "ajv">(),
        ),
        "class-transformer": serialize(CvObjectSimple),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("object (hierarchical)", () => ObjectHierarchical.generate(), {
        "typia.stringify()": typia.createStringify<ObjectHierarchical>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ObjectHierarchical>(),
        "typia.isStringify()": typia.createIsStringify<ObjectHierarchical>(),
        "fast-json-stringify": build(
            typia.application<[ObjectHierarchical], "ajv">(),
        ),
        "class-transformer": serialize(CvObjectHierarchical),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("object (recursive)", () => ObjectRecursive.generate(), {
        "typia.stringify()": typia.createStringify<ObjectRecursive>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ObjectRecursive>(),
        "typia.isStringify()": typia.createIsStringify<ObjectRecursive>(),
        "fast-json-stringify": build(
            typia.application<[ObjectRecursive], "ajv">(),
        ),
        "class-transformer": serialize(CvObjectRecursive),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("object (union)", () => ObjectUnionImplicit.generate(), {
        "typia.stringify()": typia.createStringify<ObjectUnionImplicit>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ObjectUnionImplicit>(),
        "typia.isStringify()": typia.createIsStringify<ObjectUnionImplicit>(),
        "fast-json-stringify": build(
            typia.application<[ObjectUnionImplicit], "ajv">(),
        ),
        "class-transformer": serialize(CvObjectUnionImplicit),
        "JSON.stringify": JSON.stringify,
    }),

    //----
    // ARRAY
    //----
    prepare("array (simple)", () => ArraySimple.generate(), {
        "typia.stringify()": typia.createStringify<ArraySimple>(),
        "typia.assertStringify()": typia.createAssertStringify<ArraySimple>(),
        "typia.isStringify()": typia.createIsStringify<ArraySimple>(),
        "fast-json-stringify": build(typia.application<[ArraySimple], "ajv">()),
        "class-transformer": null,
        "JSON.stringify": JSON.stringify,
    }),
    prepare("array (hierarchical)", () => ArrayHierarchical.generate(), {
        "typia.stringify()": typia.createStringify<ArrayHierarchical>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ArrayHierarchical>(),
        "typia.isStringify()": typia.createIsStringify<ArrayHierarchical>(),
        "fast-json-stringify": build(
            typia.application<[ArrayHierarchical], "ajv">(),
        ),
        "class-transformer": serialize(CvArrayHierarchical),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("array (recursive)", () => ArrayRecursive.generate(), {
        "typia.stringify()": typia.createStringify<ArrayRecursive>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ArrayRecursive>(),
        "typia.isStringify()": typia.createIsStringify<ArrayRecursive>(),
        "fast-json-stringify": build(
            typia.application<[ArrayRecursive], "ajv">(),
        ),
        "class-transformer": serialize(CvArrayRecursive),
        "JSON.stringify": JSON.stringify,
    }),
    prepare("array (union)", () => ArrayRecursiveUnionExplicit.generate(), {
        "typia.stringify()":
            typia.createStringify<ArrayRecursiveUnionExplicit>(),
        "typia.assertStringify()":
            typia.createAssertStringify<ArrayRecursiveUnionExplicit>(),
        "typia.isStringify()":
            typia.createIsStringify<ArrayRecursiveUnionExplicit>(),
        "fast-json-stringify": build(
            typia.application<[ArrayRecursiveUnionExplicit], "ajv">(),
        ),
        "class-transformer": serialize(CvArrayRecursiveUnionExplicit),
        "JSON.stringify": JSON.stringify,
    }),
];
export { stringify as benchmark_stringify };
