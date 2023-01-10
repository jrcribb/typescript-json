import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_AtomicUnion = _test_isStringify(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.isStringify(input),
    AtomicUnion.SPOILERS,
);