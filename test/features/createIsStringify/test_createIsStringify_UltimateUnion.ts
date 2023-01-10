import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_UltimateUnion = _test_isStringify(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createIsStringify<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);