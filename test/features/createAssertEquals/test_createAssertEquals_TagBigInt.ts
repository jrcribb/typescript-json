import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagBigInt = _test_assertEquals(
    "TagBigInt",
    TagBigInt.generate,
    typia.createAssertEquals<TagBigInt>(),
);