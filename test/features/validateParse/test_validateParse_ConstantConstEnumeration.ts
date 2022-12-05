import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ConstantConstEnumeration = _test_validateParse(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => TSON.validateParse<ConstantConstEnumeration>(input),
    ConstantConstEnumeration.SPOILERS,
);
