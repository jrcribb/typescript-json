import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArraySimple = _test_assertStringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.assertStringify(input),
    ArraySimple.SPOILERS,
);