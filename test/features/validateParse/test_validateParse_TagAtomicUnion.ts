import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagAtomicUnion = _test_validateParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => TSON.validateParse<TagAtomicUnion>(input),
    TagAtomicUnion.SPOILERS,
);
