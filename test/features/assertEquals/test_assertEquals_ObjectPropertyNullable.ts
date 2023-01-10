import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectPropertyNullable = _test_assertEquals(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.assertEquals(input),
);