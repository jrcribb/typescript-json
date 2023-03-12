import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_is_ObjectHierarchical = _test_is(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.is(input),
    ObjectHierarchical.SPOILERS,
);
