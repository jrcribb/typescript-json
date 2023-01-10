import typia from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_NativeUnion = _test_isStringify(
    "NativeUnion",
    NativeUnion.generate,
    typia.createIsStringify<NativeUnion>(),
    NativeUnion.SPOILERS,
);