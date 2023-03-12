import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_createStringify_AtomicAlias = _test_stringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input: AtomicAlias): string => {
        const $number = (typia.createStringify as any).number;
        const $string = (typia.createStringify as any).string;
        return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
    },
);
