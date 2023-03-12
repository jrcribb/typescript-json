import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_isParse_ObjectHierarchical = _test_isParse(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.isParse<ObjectHierarchical>(input),
    ObjectHierarchical.SPOILERS,
);
