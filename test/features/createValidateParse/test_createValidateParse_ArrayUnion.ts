import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ArrayUnion = _test_validateParse(
    "ArrayUnion",
    ArrayUnion.generate,
    TSON.createValidateParse<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
