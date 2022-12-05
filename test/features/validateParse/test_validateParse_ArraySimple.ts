import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ArraySimple = _test_validateParse(
    "ArraySimple",
    ArraySimple.generate,
    (input) => TSON.validateParse<ArraySimple>(input),
    ArraySimple.SPOILERS,
);
