import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createIsStringify_ArrayMatrix = _test_isStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createIsStringify<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
