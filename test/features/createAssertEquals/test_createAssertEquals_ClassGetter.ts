import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssertEquals_ClassGetter = _test_assertEquals(
    "ClassGetter",
    ClassGetter.generate,
    typia.createAssertEquals<ClassGetter>(),
);
