import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_createIsStringify_ArrayAny = _test_isStringify(
    "ArrayAny",
    ArrayAny.generate,
    (input: ArrayAny): string | null => {
        const is = (input: any): input is ArrayAny => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.anys) &&
                (undefined === input.undefindable1 ||
                    Array.isArray(input.undefindable1)) &&
                (undefined === input.undefindable2 ||
                    Array.isArray(input.undefindable2)) &&
                (null === input.nullables1 ||
                    Array.isArray(input.nullables1)) &&
                (null === input.nullables2 ||
                    Array.isArray(input.nullables2)) &&
                (null === input.both1 ||
                    undefined === input.both1 ||
                    Array.isArray(input.both1)) &&
                (null === input.both2 ||
                    undefined === input.both2 ||
                    Array.isArray(input.both2)) &&
                (null === input.both3 ||
                    undefined === input.both3 ||
                    Array.isArray(input.both3)) &&
                Array.isArray(input.union);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: ArrayAny): string => {
            const $so0 = (input: any): any =>
                `{${
                    undefined === input.undefindable1
                        ? ""
                        : `"undefindable1":${
                              undefined !== input.undefindable1
                                  ? JSON.stringify(input.undefindable1)
                                  : undefined
                          },`
                }${
                    undefined === input.undefindable2
                        ? ""
                        : `"undefindable2":${
                              undefined !== input.undefindable2
                                  ? JSON.stringify(input.undefindable2)
                                  : undefined
                          },`
                }${
                    undefined === input.both1
                        ? ""
                        : `"both1":${
                              undefined !== input.both1
                                  ? null !== input.both1
                                      ? JSON.stringify(input.both1)
                                      : "null"
                                  : undefined
                          },`
                }${
                    undefined === input.both2
                        ? ""
                        : `"both2":${
                              undefined !== input.both2
                                  ? null !== input.both2
                                      ? JSON.stringify(input.both2)
                                      : "null"
                                  : undefined
                          },`
                }${
                    undefined === input.both3
                        ? ""
                        : `"both3":${
                              undefined !== input.both3
                                  ? null !== input.both3
                                      ? JSON.stringify(input.both3)
                                      : "null"
                                  : undefined
                          },`
                }"anys":${JSON.stringify(input.anys)},"nullables1":${
                    null !== input.nullables1
                        ? JSON.stringify(input.nullables1)
                        : "null"
                },"nullables2":${
                    null !== input.nullables2
                        ? JSON.stringify(input.nullables2)
                        : "null"
                },"union":${JSON.stringify(input.union)}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    },
    ArrayAny.SPOILERS,
);
