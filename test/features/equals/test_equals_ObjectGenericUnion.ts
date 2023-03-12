import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_equals_ObjectGenericUnion = _test_equals(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.equals(input),
);
