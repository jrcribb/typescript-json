import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_FunctionalArray = _test_equals(
    "FunctionalArray",
    FunctionalArray.generate,
    typia.createEquals<FunctionalArray>(),
);