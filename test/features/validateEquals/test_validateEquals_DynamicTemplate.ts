import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_validateEquals_DynamicTemplate = _test_validateEquals(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.validateEquals(input),
);
