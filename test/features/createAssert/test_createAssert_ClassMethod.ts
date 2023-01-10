import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ClassMethod = _test_assert(
    "ClassMethod",
    ClassMethod.generate,
    typia.createAssert<ClassMethod>(),
    ClassMethod.SPOILERS,
);