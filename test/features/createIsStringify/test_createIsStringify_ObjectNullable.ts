import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectNullable = _test_isStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    TSON.createIsStringify<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);