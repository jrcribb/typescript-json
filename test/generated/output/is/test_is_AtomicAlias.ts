import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_is_AtomicAlias = _test_is(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) =>
        ((input: any): input is [boolean, number, string] => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                "string" === typeof input[2]
            );
        })(input),
    AtomicAlias.SPOILERS,
);
