import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ConstantAtomicWrapper = _test_validateClone(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => TSON.validateClone(input),
    ConstantAtomicWrapper.SPOILERS,
);
