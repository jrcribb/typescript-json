import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagStep } from "../../structures/TagStep";

export const test_createAssert_TagStep = _test_assert(
    "TagStep",
    TagStep.generate,
    typia.createAssert<TagStep>(),
    TagStep.SPOILERS,
);
