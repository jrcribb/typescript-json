import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_FunctionalPropertyUnion =
    _test_validateStringify(
        "FunctionalPropertyUnion",
        FunctionalPropertyUnion.generate,
        (input) => TSON.validateStringify(input),
        FunctionalPropertyUnion.SPOILERS,
    );
