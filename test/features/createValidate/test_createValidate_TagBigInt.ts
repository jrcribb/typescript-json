import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_createValidate_TagBigInt = _test_validate(
    "TagBigInt",
    TagBigInt.generate,
    typia.createValidate<TagBigInt>(),
    TagBigInt.SPOILERS,
);
