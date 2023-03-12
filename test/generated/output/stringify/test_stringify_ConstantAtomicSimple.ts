import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_stringify_ConstantAtomicSimple = _test_stringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) =>
        ((input: [false, true, 2, "three"]): string => {
            const $number = (typia.stringify as any).number;
            const $string = (typia.stringify as any).string;
            const $throws = (typia.stringify as any).throws;
            return `[${input[0]},${input[1]},${$number(input[2])},${(() => {
                if ("string" === typeof input[3]) return $string(input[3]);
                if ("string" === typeof input[3]) return '"' + input[3] + '"';
                $throws({
                    expected: '"three"',
                    value: input[3],
                });
            })()}]`;
        })(input),
);
