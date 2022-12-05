import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_DynamicUnion = _test_validateClone(
    "DynamicUnion",
    DynamicUnion.generate,
    TSON.createValidateClone<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
