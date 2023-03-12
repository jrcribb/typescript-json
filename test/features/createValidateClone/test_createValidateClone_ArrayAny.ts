import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createValidateClone_ArrayAny = _test_validateClone(
    "ArrayAny",
    ArrayAny.generate,
    typia.createValidateClone<ArrayAny>(),
    ArrayAny.SPOILERS,
);
