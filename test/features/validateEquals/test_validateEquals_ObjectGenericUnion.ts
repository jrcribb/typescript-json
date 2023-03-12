import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_validateEquals_ObjectGenericUnion = _test_validateEquals(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.validateEquals(input),
);
