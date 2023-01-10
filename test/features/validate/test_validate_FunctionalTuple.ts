import typia from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_FunctionalTuple = _test_validate(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => typia.validate(input),
    FunctionalTuple.SPOILERS,
);