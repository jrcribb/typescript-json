import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectRecursive = _test_validateStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => TSON.validateStringify(input),
    ObjectRecursive.SPOILERS,
);
