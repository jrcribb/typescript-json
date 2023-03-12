import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagArray } from "../../structures/TagArray";

export const test_createValidate_TagArray = _test_validate(
    "TagArray",
    TagArray.generate,
    typia.createValidate<TagArray>(),
    TagArray.SPOILERS,
);
