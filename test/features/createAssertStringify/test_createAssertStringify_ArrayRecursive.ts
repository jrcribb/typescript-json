import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createAssertStringify_ArrayRecursive = _test_assertStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createAssertStringify<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
