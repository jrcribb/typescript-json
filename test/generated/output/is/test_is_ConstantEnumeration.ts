import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_is_ConstantEnumeration = _test_is(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((input: any): input is Array<ConstantEnumeration.Enumeration> => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        0 === elem ||
                        1 === elem ||
                        2 === elem ||
                        "Three" === elem ||
                        "Four" === elem,
                )
            );
        })(input),
    ConstantEnumeration.SPOILERS,
);
