import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createClone_ArrayMatrix = _test_clone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createClone<ArrayMatrix>(),
);
