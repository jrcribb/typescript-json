import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssertStringify_AtomicAlias = _test_assertStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createAssertStringify<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
