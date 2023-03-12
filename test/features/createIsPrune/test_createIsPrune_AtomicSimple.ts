import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createIsPrune_AtomicSimple = _test_isPrune(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createIsPrune<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
