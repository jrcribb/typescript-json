import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createAssert_FunctionalTuple = _test_assert(
    "FunctionalTuple",
    FunctionalTuple.generate,
    typia.createAssert<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);
