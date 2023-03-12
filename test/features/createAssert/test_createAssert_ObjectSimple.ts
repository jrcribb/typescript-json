import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssert_ObjectSimple = _test_assert(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createAssert<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
