import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_FunctionalProperty =
    _test_validateStringify(
        "FunctionalProperty",
        FunctionalProperty.generate,
        (input) => TSON.validateStringify(input),
        FunctionalProperty.SPOILERS,
    );
