import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ToJsonUnion = _test_validateStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => TSON.validateStringify(input),
);
