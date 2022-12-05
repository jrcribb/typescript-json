import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_DynamicSimple = _test_validateClone(
    "DynamicSimple",
    DynamicSimple.generate,
    TSON.createValidateClone<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
