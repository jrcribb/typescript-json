import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createValidateEquals_ObjectGeneric = _test_validateEquals(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createValidateEquals<ObjectGeneric>(),
);
