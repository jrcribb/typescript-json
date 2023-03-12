import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagStep } from "../../structures/TagStep";

export const test_createClone_TagStep = _test_clone(
    "TagStep",
    TagStep.generate,
    typia.createClone<TagStep>(),
);
