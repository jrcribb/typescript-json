import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ConstantAtomicUnion = _test_assertParse(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => TSON.assertParse<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);
