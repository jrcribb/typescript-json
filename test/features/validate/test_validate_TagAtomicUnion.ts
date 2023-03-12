import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_validate_TagAtomicUnion = _test_validate(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.validate(input),
    TagAtomicUnion.SPOILERS,
);
