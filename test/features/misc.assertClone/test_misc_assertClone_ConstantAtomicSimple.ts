import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_assertClone_ConstantAtomicSimple =
    _test_misc_assertClone("ConstantAtomicSimple")<ConstantAtomicSimple>(
        ConstantAtomicSimple,
    )((input) => typia.misc.assertClone<ConstantAtomicSimple>(input));
