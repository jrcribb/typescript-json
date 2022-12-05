import TSON from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ConstantConstEnumeration =
    _test_validateStringify(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        (input) => TSON.validateStringify(input),
        ConstantConstEnumeration.SPOILERS,
    );
