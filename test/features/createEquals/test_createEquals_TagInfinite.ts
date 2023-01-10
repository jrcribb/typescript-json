import typia from "../../../src";
import { TagInfinite } from "../../structures/TagInfinite";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagInfinite = _test_equals(
    "TagInfinite",
    TagInfinite.generate,
    typia.createEquals<TagInfinite>(),
);