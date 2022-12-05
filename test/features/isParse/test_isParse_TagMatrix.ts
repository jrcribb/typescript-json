import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TagMatrix = _test_isParse(
    "TagMatrix",
    TagMatrix.generate,
    (input) => TSON.isParse<TagMatrix>(input),
    TagMatrix.SPOILERS,
);
