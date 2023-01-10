import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectIntersection = _test_assert(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createAssert<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);