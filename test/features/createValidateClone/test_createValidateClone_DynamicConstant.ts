import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_DynamicConstant = _test_validateClone(
    "DynamicConstant",
    DynamicConstant.generate,
    TSON.createValidateClone<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
