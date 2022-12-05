import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ArrayMatrix = _test_isParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => TSON.isParse<ArrayMatrix>(input),
    ArrayMatrix.SPOILERS,
);
