import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectClosure = _test_assert(
    "ObjectClosure",
    ObjectClosure.generate,
    typia.createAssert<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);