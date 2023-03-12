import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_createClone_ArrayUnion = _test_clone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input: ArrayUnion): typia.Primitive<ArrayUnion> => {
        const $throws = (typia.createClone as any).throws;
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  Array.isArray(elem)
                      ? (() => {
                            if (0 === elem.length) return;
                            const tupleList = [
                                [
                                    (top: any) => "string" === typeof top,
                                    (top: any) =>
                                        top.map((elem: any) => elem as any),
                                ],
                                [
                                    (top: any) => "boolean" === typeof top,
                                    (top: any) =>
                                        top.map((elem: any) => elem as any),
                                ],
                                [
                                    (top: any) => "number" === typeof top,
                                    (top: any) =>
                                        top.map((elem: any) => elem as any),
                                ],
                            ];
                            const front = elem[0];
                            const filtered = tupleList.filter(
                                (tuple) => true === tuple[0](front),
                            );
                            if (1 === filtered.length)
                                return filtered[0][1](elem);
                            const array = elem;
                            if (1 < filtered.length)
                                for (const tuple of filtered)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === tuple[0](value),
                                        )
                                    )
                                        return tuple[1](array);
                            $throws({
                                expected:
                                    "(Array<string> | Array<boolean> | Array<number>)",
                                value: elem,
                            });
                        })()
                      : (elem as any),
              )
            : (input as any);
    },
);
