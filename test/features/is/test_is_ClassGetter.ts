import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_is_ClassGetter = _test_is(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.is(input),
    ClassGetter.SPOILERS,
);
