import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_DynamicConstant = _test_assertParse(
    "DynamicConstant",
    DynamicConstant.generate,
    TSON.createAssertParse<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
