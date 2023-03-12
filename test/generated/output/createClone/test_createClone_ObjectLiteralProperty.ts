import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_createClone_ObjectLiteralProperty = _test_clone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input: ObjectLiteralProperty): typia.Primitive<ObjectLiteralProperty> => {
        const $co0 = (input: any): any => ({
            "something-interesting-do-you-want?": input[
                "something-interesting-do-you-want?"
            ] as any,
            "or-something-crazy-do-you-want?": input[
                "or-something-crazy-do-you-want?"
            ] as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
