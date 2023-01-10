import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ConstantAtomicUnion = _test_assertStringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.assertStringify(input),
    ConstantAtomicUnion.SPOILERS,
);