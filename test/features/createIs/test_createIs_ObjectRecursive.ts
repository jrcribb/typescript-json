import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createIs_ObjectRecursive = _test_is(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createIs<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
