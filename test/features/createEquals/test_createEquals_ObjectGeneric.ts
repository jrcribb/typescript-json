import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createEquals_ObjectGeneric = _test_equals(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createEquals<ObjectGeneric>(),
);
