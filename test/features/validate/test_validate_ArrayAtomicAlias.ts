import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_validate_ArrayAtomicAlias = _test_validate(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.validate(input),
    ArrayAtomicAlias.SPOILERS,
);
