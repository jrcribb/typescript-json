import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectSimple = _test_validateClone(
    "ObjectSimple",
    ObjectSimple.generate,
    TSON.createValidateClone<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
