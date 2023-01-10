import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectDynamic = _test_is(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.is(input),
    ObjectDynamic.SPOILERS,
);