import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createValidateClone_ArraySimple = _test_validateClone(
    "ArraySimple",
    ArraySimple.generate,
    typia.createValidateClone<ArraySimple>(),
    ArraySimple.SPOILERS,
);
