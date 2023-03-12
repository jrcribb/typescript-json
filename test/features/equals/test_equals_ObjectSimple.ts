import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_equals_ObjectSimple = _test_equals(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.equals(input),
);
