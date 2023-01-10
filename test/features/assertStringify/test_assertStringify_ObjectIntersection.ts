import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectIntersection = _test_assertStringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.assertStringify(input),
    ObjectIntersection.SPOILERS,
);