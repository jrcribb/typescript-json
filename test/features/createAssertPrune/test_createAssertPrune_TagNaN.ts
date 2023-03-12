import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagNaN } from "../../structures/TagNaN";

export const test_createAssertPrune_TagNaN = _test_assertPrune(
    "TagNaN",
    TagNaN.generate,
    typia.createAssertPrune<TagNaN>(),
    TagNaN.SPOILERS,
);
