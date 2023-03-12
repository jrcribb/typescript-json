import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_is_TupleRestArray = _test_is(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) =>
        ((input: any): input is [boolean, number, ...Array<string>[]] => {
            return (
                Array.isArray(input) &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                Array.isArray(input.slice(2)) &&
                input
                    .slice(2)
                    .every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            elem.every((elem: any) => "string" === typeof elem),
                    )
            );
        })(input),
    TupleRestArray.SPOILERS,
);
