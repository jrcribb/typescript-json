import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assertParse_AtomicClass = _test_assertParse(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.assertParse<AtomicClass>(input),
    AtomicClass.SPOILERS,
);
