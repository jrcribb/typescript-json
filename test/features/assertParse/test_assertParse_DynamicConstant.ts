import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_DynamicConstant = _test_assertParse(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => TSON.assertParse<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);
