import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_createValidateEquals_TagInfinite = _test_validateEquals(
    "TagInfinite",
    TagInfinite.generate,
    typia.createValidateEquals<TagInfinite>(),
);
