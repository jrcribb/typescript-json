import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_DynamicEnumeration = _test_validateClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    TSON.createValidateClone<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
