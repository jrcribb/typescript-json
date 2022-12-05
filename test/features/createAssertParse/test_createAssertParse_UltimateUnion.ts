import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_UltimateUnion = _test_assertParse(
    "UltimateUnion",
    UltimateUnion.generate,
    TSON.createAssertParse<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
