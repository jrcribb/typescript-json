import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectInternal = _test_is(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createIs<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);