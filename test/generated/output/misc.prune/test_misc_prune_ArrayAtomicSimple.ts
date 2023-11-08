import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_misc_prune_ArrayAtomicSimple = _test_misc_prune(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
    ((input: ArrayAtomicSimple): void => {})(input),
);
