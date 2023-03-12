import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagNaN } from "../../structures/TagNaN";

export const test_createValidateEquals_TagNaN = _test_validateEquals(
    "TagNaN",
    TagNaN.generate,
    typia.createValidateEquals<TagNaN>(),
);
