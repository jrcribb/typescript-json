import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_FunctionalObjectUnion =
    _test_validateStringify(
        "FunctionalObjectUnion",
        FunctionalObjectUnion.generate,
        (input) => TSON.validateStringify(input),
        FunctionalObjectUnion.SPOILERS,
    );
