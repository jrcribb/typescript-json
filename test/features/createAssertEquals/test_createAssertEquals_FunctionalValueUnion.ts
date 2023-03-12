import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createAssertEquals_FunctionalValueUnion = _test_assertEquals(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    typia.createAssertEquals<FunctionalValueUnion>(),
);
