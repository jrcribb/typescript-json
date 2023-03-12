import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssert_AtomicAlias = _test_assert(
    "AtomicAlias",
    AtomicAlias.generate,
    typia.createAssert<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
