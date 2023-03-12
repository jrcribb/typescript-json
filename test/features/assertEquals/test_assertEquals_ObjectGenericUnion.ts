import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertEquals_ObjectGenericUnion = _test_assertEquals(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.assertEquals(input),
);
