import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_AtomicAlias = _test_assertStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createAssertStringify<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);