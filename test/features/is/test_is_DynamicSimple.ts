import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_DynamicSimple = _test_is(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.is(input),
    DynamicSimple.SPOILERS,
);