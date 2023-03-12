import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_validateEquals_AtomicClass = _test_validateEquals(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.validateEquals(input),
);
