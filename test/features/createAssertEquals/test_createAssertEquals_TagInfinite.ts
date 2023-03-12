import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_createAssertEquals_TagInfinite = _test_assertEquals(
    "TagInfinite",
    TagInfinite.generate,
    typia.createAssertEquals<TagInfinite>(),
);
