import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_is_TemplateUnion = _test_is(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.is(input),
    TemplateUnion.SPOILERS,
);
