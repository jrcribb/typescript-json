import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { TagStep } from "../../../structures/TagStep";

export const test_validateClone_TagStep = _test_validateClone(
    "TagStep",
    TagStep.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<typia.Primitive<Array<TagStep.Type>>> => {
            const validate = (
                input: any,
            ): typia.IValidation<Array<TagStep.Type>> => {
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<TagStep.Type> => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.exclusiveMinimum &&
                                0 === (input.exclusiveMinimum % 5) - 3 &&
                                3 < input.exclusiveMinimum) ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "number",
                                    value: input.exclusiveMinimum,
                                }),
                            ("number" === typeof input.minimum &&
                                0 === (input.minimum % 5) - 3 &&
                                3 <= input.minimum) ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number",
                                    value: input.minimum,
                                }),
                            ("number" === typeof input.range &&
                                0 === (input.range % 5) - 0 &&
                                0 < input.range &&
                                100 > input.range) ||
                                $report(_exceptionable, {
                                    path: _path + ".range",
                                    expected: "number",
                                    value: input.range,
                                }),
                            ("number" === typeof input.multipleOf &&
                                0 === input.multipleOf % 5 &&
                                3 <= input.multipleOf &&
                                99 >= input.multipleOf) ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number",
                                    value: input.multipleOf,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<Resolve<TagStep.Type>>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "Resolve<TagStep.Type>",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "Resolve<TagStep.Type>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<Resolve<TagStep.Type>>",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (
                input: Array<TagStep.Type>,
            ): typia.Primitive<Array<TagStep.Type>> => {
                const $co0 = (input: any): any => ({
                    exclusiveMinimum: input.exclusiveMinimum as any,
                    minimum: input.minimum as any,
                    range: input.range as any,
                    multipleOf: input.multipleOf as any,
                });
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      )
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    TagStep.SPOILERS,
);
