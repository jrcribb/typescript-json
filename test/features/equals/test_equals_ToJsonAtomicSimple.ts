import typia from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonAtomicSimple = _test_equals(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.equals(input),
);