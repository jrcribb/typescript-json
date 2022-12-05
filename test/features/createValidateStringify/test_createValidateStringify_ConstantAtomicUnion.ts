import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ConstantAtomicUnion =
    _test_validateStringify(
        "ConstantAtomicUnion",
        ConstantAtomicUnion.generate,
        TSON.createValidateStringify<ConstantAtomicUnion>(),
        ConstantAtomicUnion.SPOILERS,
    );
