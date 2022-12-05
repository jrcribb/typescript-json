import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectAlias = _test_validateClone(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => TSON.validateClone(input),
    ObjectAlias.SPOILERS,
);
