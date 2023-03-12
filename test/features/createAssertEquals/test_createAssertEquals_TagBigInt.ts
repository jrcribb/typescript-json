import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_createAssertEquals_TagBigInt = _test_assertEquals(
    "TagBigInt",
    TagBigInt.generate,
    typia.createAssertEquals<TagBigInt>(),
);
