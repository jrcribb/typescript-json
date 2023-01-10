import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagFormat = _test_assertEquals(
    "TagFormat",
    TagFormat.generate,
    typia.createAssertEquals<TagFormat>(),
);