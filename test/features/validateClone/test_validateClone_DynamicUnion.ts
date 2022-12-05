import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_DynamicUnion = _test_validateClone(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => TSON.validateClone(input),
    DynamicUnion.SPOILERS,
);
