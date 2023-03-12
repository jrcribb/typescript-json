import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_createAssertPrune_TagBigInt = _test_assertPrune(
    "TagBigInt",
    TagBigInt.generate,
    typia.createAssertPrune<TagBigInt>(),
    TagBigInt.SPOILERS,
);
