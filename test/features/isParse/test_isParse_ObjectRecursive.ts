import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_isParse_ObjectRecursive = _test_isParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.isParse<ObjectRecursive>(input),
    ObjectRecursive.SPOILERS,
);
