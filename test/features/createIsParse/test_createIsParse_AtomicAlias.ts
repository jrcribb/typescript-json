import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_AtomicAlias = _test_isParse(
    "AtomicAlias",
    AtomicAlias.generate,
    TSON.createIsParse<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
