import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ClassClosure = _test_assert(
    "ClassClosure",
    ClassClosure.generate,
    typia.createAssert<ClassClosure>(),
    ClassClosure.SPOILERS,
);