import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectUndefined = _test_is(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createIs<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);