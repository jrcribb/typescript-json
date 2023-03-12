import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagTuple } from "../../structures/TagTuple";

export const test_createEquals_TagTuple = _test_equals(
    "TagTuple",
    TagTuple.generate,
    typia.createEquals<TagTuple>(),
);
