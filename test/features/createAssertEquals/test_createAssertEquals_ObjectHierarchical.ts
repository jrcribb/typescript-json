import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssertEquals_ObjectHierarchical = _test_assertEquals(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createAssertEquals<ObjectHierarchical>(),
);
