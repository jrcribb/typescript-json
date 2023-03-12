import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_assert_ConstantAtomicSimple = _test_assert(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.assert(input),
    ConstantAtomicSimple.SPOILERS,
);
