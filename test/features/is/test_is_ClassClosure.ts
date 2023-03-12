import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_is_ClassClosure = _test_is(
    "ClassClosure",
    ClassClosure.generate,
    (input) => typia.is(input),
    ClassClosure.SPOILERS,
);
