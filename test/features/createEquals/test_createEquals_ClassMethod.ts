import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createEquals_ClassMethod = _test_equals(
    "ClassMethod",
    ClassMethod.generate,
    typia.createEquals<ClassMethod>(),
);
