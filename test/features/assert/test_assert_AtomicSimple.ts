import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_assert_AtomicSimple = _test_assert(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.assert(input),
    AtomicSimple.SPOILERS,
);
