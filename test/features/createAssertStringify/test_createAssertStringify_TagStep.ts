import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagStep } from "../../structures/TagStep";

export const test_createAssertStringify_TagStep = _test_assertStringify(
    "TagStep",
    TagStep.generate,
    typia.createAssertStringify<TagStep>(),
    TagStep.SPOILERS,
);
