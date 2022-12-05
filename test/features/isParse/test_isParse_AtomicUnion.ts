import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_AtomicUnion = _test_isParse(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => TSON.isParse<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);
