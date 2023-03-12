import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createValidate_ClassMethod = _test_validate(
    "ClassMethod",
    ClassMethod.generate,
    typia.createValidate<ClassMethod>(),
    ClassMethod.SPOILERS,
);
