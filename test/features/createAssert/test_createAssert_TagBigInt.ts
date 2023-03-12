import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_createAssert_TagBigInt = _test_assert(
    "TagBigInt",
    TagBigInt.generate,
    typia.createAssert<TagBigInt>(),
    TagBigInt.SPOILERS,
);
