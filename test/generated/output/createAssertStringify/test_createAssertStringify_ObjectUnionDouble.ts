import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createAssertStringify_ObjectUnionDouble =
    _test_assertStringify(
        "ObjectUnionDouble",
        ObjectUnionDouble.generate,
        (input: any): string => {
            const assert = (input: any): ObjectUnionDouble => {
                const $guard = (typia.createAssertStringify as any).guard;
                const __is = (input: any): input is ObjectUnionDouble => {
                    const $io0 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "number" === typeof input.value.x &&
                        Number.isFinite(input.value.x) &&
                        "object" === typeof input.child &&
                        null !== input.child &&
                        $iu0(input.child);
                    const $io2 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "boolean" === typeof input.value.y;
                    const $io4 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "number" === typeof input.value.y &&
                        Number.isFinite(input.value.y);
                    const $io6 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "string" === typeof input.value.x &&
                        "object" === typeof input.child &&
                        null !== input.child &&
                        $iu1(input.child);
                    const $io8 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "string" === typeof input.value.y;
                    const $io10 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io11(input.value);
                    const $io11 = (input: any): boolean =>
                        Array.isArray(input.y) &&
                        input.y.every(
                            (elem: any) =>
                                "number" === typeof elem &&
                                Number.isFinite(elem),
                        );
                    const $iu0 = (input: any): any =>
                        (() => {
                            if ($io2(input)) return $io2(input);
                            if ($io4(input)) return $io4(input);
                            return false;
                        })();
                    const $iu1 = (input: any): any =>
                        (() => {
                            if ($io8(input)) return $io8(input);
                            if ($io10(input)) return $io10(input);
                            return false;
                        })();
                    const $iu2 = (input: any): any =>
                        (() => {
                            if ($io0(input)) return $io0(input);
                            if ($io6(input)) return $io6(input);
                            return false;
                        })();
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu2(elem),
                        )
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectUnionDouble => {
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type>",
                                    value: input.value,
                                })) &&
                            $ao1(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.child &&
                                null !== input.child) ||
                                $guard(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "(Resolve<ObjectUnionDouble.IAA> | Resolve<ObjectUnionDouble.IAB>)",
                                    value: input.child,
                                })) &&
                            $au0(
                                input.child,
                                _path + ".child",
                                true && _exceptionable,
                            );
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("number" === typeof input.x &&
                                Number.isFinite(input.x)) ||
                            $guard(_exceptionable, {
                                path: _path + ".x",
                                expected: "number",
                                value: input.x,
                            });
                        const $ao2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type.o1>",
                                    value: input.value,
                                })) &&
                            $ao3(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            );
                        const $ao3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "boolean" === typeof input.y ||
                            $guard(_exceptionable, {
                                path: _path + ".y",
                                expected: "boolean",
                                value: input.y,
                            });
                        const $ao4 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type.o2>",
                                    value: input.value,
                                })) &&
                            $ao5(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            );
                        const $ao5 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("number" === typeof input.y &&
                                Number.isFinite(input.y)) ||
                            $guard(_exceptionable, {
                                path: _path + ".y",
                                expected: "number",
                                value: input.y,
                            });
                        const $ao6 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type.o3>",
                                    value: input.value,
                                })) &&
                            $ao7(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.child &&
                                null !== input.child) ||
                                $guard(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "(Resolve<ObjectUnionDouble.IBA> | Resolve<ObjectUnionDouble.IBB>)",
                                    value: input.child,
                                })) &&
                            $au1(
                                input.child,
                                _path + ".child",
                                true && _exceptionable,
                            );
                        const $ao7 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "string" === typeof input.x ||
                            $guard(_exceptionable, {
                                path: _path + ".x",
                                expected: "string",
                                value: input.x,
                            });
                        const $ao8 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type.o4>",
                                    value: input.value,
                                })) &&
                            $ao9(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            );
                        const $ao9 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "string" === typeof input.y ||
                            $guard(_exceptionable, {
                                path: _path + ".y",
                                expected: "string",
                                value: input.y,
                            });
                        const $ao10 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type.o5>",
                                    value: input.value,
                                })) &&
                            $ao11(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            );
                        const $ao11 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (Array.isArray(input.y) ||
                                $guard(_exceptionable, {
                                    path: _path + ".y",
                                    expected: "Array<number>",
                                    value: input.y,
                                })) &&
                            input.y.every(
                                (elem: any, _index2: number) =>
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".y[" + _index2 + "]",
                                        expected: "number",
                                        value: elem,
                                    }),
                            );
                        const $au0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            $ao2(input, _path, false && _exceptionable) ||
                            $ao4(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                                value: input,
                            });
                        const $au1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            $ao8(input, _path, false && _exceptionable) ||
                            $ao10(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                                value: input,
                            });
                        const $au2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            $ao0(input, _path, false && _exceptionable) ||
                            $ao6(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                value: input,
                            });
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "Array<(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)>",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)",
                                            value: elem,
                                        })) &&
                                    $au2(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: ObjectUnionDouble): string => {
                const $number = (typia.createAssertStringify as any).number;
                const $string = (typia.createAssertStringify as any).string;
                const $throws = (typia.createAssertStringify as any).throws;
                const $io0 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io1(input.value) &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $iu0(input.child);
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.x;
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io3(input.value);
                const $io3 = (input: any): boolean =>
                    "boolean" === typeof input.y;
                const $io4 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io5(input.value);
                const $io5 = (input: any): boolean =>
                    "number" === typeof input.y;
                const $io6 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io7(input.value) &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $iu1(input.child);
                const $io7 = (input: any): boolean =>
                    "string" === typeof input.x;
                const $io8 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io9(input.value);
                const $io9 = (input: any): boolean =>
                    "string" === typeof input.y;
                const $io10 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io11(input.value);
                const $io11 = (input: any): boolean =>
                    Array.isArray(input.y) &&
                    input.y.every((elem: any) => "number" === typeof elem);
                const $iu0 = (input: any): any => $io2(input) || $io4(input);
                const $iu1 = (input: any): any => $io8(input) || $io10(input);
                const $iu2 = (input: any): any => $io0(input) || $io6(input);
                const $so0 = (input: any): any =>
                    `{"value":${`{"x":${$number(
                        input.value.x,
                    )}}`},"child":${$su0(input.child)}}`;
                const $so2 = (input: any): any =>
                    `{"value":${`{"y":${input.value.y}}`}}`;
                const $so4 = (input: any): any =>
                    `{"value":${`{"y":${$number(input.value.y)}}`}}`;
                const $so6 = (input: any): any =>
                    `{"value":${`{"x":${$string(
                        input.value.x,
                    )}}`},"child":${$su1(input.child)}}`;
                const $so8 = (input: any): any =>
                    `{"value":${`{"y":${$string(input.value.y)}}`}}`;
                const $so10 = (input: any): any =>
                    `{"value":${$so11(input.value)}}`;
                const $so11 = (input: any): any =>
                    `{"y":${`[${input.y
                        .map((elem: any) => $number(elem))
                        .join(",")}]`}}`;
                const $su0 = (input: any): any =>
                    (() => {
                        if ($io2(input)) return $so2(input);
                        if ($io4(input)) return $so4(input);
                        $throws({
                            expected:
                                "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                            value: input,
                        });
                    })();
                const $su1 = (input: any): any =>
                    (() => {
                        if ($io8(input)) return $so8(input);
                        if ($io10(input)) return $so10(input);
                        $throws({
                            expected:
                                "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                            value: input,
                        });
                    })();
                const $su2 = (input: any): any =>
                    (() => {
                        if ($io0(input)) return $so0(input);
                        if ($io6(input)) return $so6(input);
                        $throws({
                            expected:
                                "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                            value: input,
                        });
                    })();
                return `[${input.map((elem: any) => $su2(elem)).join(",")}]`;
            };
            return stringify(assert(input));
        },
        ObjectUnionDouble.SPOILERS,
    );
