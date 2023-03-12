import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createStringify_ObjectUnionExplicit = _test_stringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createStringify<ObjectUnionExplicit>(),
);
