import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_createIs_TagBigInt = _test_is(
    "TagBigInt",
    TagBigInt.generate,
    typia.createIs<TagBigInt>(),
    TagBigInt.SPOILERS,
);
