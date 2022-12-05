import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ConstantConstEnumeration =
    _test_assertParse(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        TSON.createAssertParse<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
