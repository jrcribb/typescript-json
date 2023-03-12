import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_is_ConstantConstEnumeration = _test_is(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.is(input),
    ConstantConstEnumeration.SPOILERS,
);
