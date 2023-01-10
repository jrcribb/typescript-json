import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ClassMethod = _test_assertStringify(
    "ClassMethod",
    ClassMethod.generate,
    typia.createAssertStringify<ClassMethod>(),
    ClassMethod.SPOILERS,
);