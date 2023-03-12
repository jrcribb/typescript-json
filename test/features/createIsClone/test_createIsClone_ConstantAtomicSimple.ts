import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createIsClone_ConstantAtomicSimple = _test_isClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createIsClone<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
