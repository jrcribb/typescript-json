import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_DynamicConstant = _test_validateParse(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => TSON.validateParse<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);
