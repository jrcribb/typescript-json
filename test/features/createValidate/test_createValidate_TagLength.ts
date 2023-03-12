import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagLength } from "../../structures/TagLength";

export const test_createValidate_TagLength = _test_validate(
    "TagLength",
    TagLength.generate,
    typia.createValidate<TagLength>(),
    TagLength.SPOILERS,
);
