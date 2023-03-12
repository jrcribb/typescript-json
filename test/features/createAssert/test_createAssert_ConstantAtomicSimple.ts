import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssert_ConstantAtomicSimple = _test_assert(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createAssert<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
