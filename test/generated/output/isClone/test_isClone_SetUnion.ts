import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { SetUnion } from "../../../structures/SetUnion";

export const test_isClone_SetUnion = _test_isClone(
    "SetUnion",
    SetUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<SetUnion.Union>> | null => {
            const is = (input: any): input is Array<SetUnion.Union> => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age);
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            elem instanceof Set &&
                            (() => {
                                if (0 === elem.size) return true;
                                const tupleList = [
                                    [
                                        (top: any) => "boolean" === typeof top,
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    "boolean" === typeof elem,
                                            ),
                                    ],
                                    [
                                        (top: any) =>
                                            "number" === typeof top &&
                                            Number.isFinite(top),
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    "number" === typeof elem &&
                                                    Number.isFinite(elem),
                                            ),
                                    ],
                                    [
                                        (top: any) => "string" === typeof top,
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    "string" === typeof elem,
                                            ),
                                    ],
                                    [
                                        (top: any) =>
                                            Array.isArray(top) &&
                                            top.every(
                                                (elem: any) =>
                                                    "number" === typeof elem &&
                                                    Number.isFinite(elem),
                                            ),
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    Array.isArray(elem) &&
                                                    elem.every(
                                                        (elem: any) =>
                                                            "number" ===
                                                                typeof elem &&
                                                            Number.isFinite(
                                                                elem,
                                                            ),
                                                    ),
                                            ),
                                    ],
                                    [
                                        (top: any) =>
                                            "object" === typeof top &&
                                            null !== top &&
                                            $io0(top),
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    "object" === typeof elem &&
                                                    null !== elem &&
                                                    $io0(elem),
                                            ),
                                    ],
                                ];
                                const front = elem.values().next().value;
                                const filtered = tupleList.filter(
                                    (tuple) => true === tuple[0](front),
                                );
                                if (1 === filtered.length)
                                    return filtered[0][1]([...elem]);
                                const array = [...elem];
                                if (1 < filtered.length)
                                    for (const tuple of filtered)
                                        if (
                                            array.every(
                                                (value: any) =>
                                                    true === tuple[0](value),
                                            )
                                        )
                                            return tuple[1](array);
                                return false;
                            })(),
                    )
                );
            };
            const clone = (
                input: Array<SetUnion.Union>,
            ): typia.Primitive<Array<SetUnion.Union>> => {
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          elem instanceof Set ? {} : (elem as any),
                      )
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    SetUnion.SPOILERS,
);
