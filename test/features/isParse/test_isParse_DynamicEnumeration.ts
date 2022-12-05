import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicEnumeration = _test_isParse(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => TSON.isParse<DynamicEnumeration>(input),
    DynamicEnumeration.SPOILERS,
);
