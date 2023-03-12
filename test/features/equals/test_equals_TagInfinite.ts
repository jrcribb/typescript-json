import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_equals_TagInfinite = _test_equals(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.equals(input),
);
