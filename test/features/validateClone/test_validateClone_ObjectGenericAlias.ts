import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectGenericAlias = _test_validateClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => TSON.validateClone(input),
    ObjectGenericAlias.SPOILERS,
);
