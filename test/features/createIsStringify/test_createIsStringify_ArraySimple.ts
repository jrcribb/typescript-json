import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createIsStringify_ArraySimple = _test_isStringify(
    "ArraySimple",
    ArraySimple.generate,
    typia.createIsStringify<ArraySimple>(),
    ArraySimple.SPOILERS,
);
