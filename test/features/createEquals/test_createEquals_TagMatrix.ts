import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createEquals_TagMatrix = _test_equals(
    "TagMatrix",
    TagMatrix.generate,
    typia.createEquals<TagMatrix>(),
);
