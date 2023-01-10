import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectIntersection = _test_stringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createStringify<ObjectIntersection>(),
);