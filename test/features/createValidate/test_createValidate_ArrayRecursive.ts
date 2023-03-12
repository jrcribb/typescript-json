import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createValidate_ArrayRecursive = _test_validate(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createValidate<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
