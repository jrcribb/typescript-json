import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectSimple = _test_validateClone(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => TSON.validateClone(input),
    ObjectSimple.SPOILERS,
);
