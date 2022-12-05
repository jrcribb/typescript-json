import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_DynamicUndefined = _test_assertParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    TSON.createAssertParse<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
