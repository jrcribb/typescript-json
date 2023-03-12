import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createValidateEquals_FunctionalValueUnion =
    _test_validateEquals(
        "FunctionalValueUnion",
        FunctionalValueUnion.generate,
        typia.createValidateEquals<FunctionalValueUnion>(),
    );
