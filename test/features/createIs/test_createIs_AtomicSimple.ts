import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createIs_AtomicSimple = _test_is(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createIs<AtomicSimple>(),
    AtomicSimple.SPOILERS,
);
