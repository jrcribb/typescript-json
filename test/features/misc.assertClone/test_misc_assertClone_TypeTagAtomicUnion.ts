import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_misc_assertClone_TypeTagAtomicUnion = _test_misc_assertClone(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
    typia.misc.assertClone<TypeTagAtomicUnion>(input),
);
