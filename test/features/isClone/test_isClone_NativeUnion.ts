import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_isClone_NativeUnion = _test_isClone(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.isClone(input),
    NativeUnion.SPOILERS,
);
