import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_createValidate_TagMatrix = _test_validate(
    "TagMatrix",
    TagMatrix.generate,
    (input: any): typia.IValidation<TagMatrix> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        const $is_uuid = (typia.createValidate as any).is_uuid;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagMatrix => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    (((Array.isArray(input.matrix) &&
                        3 === input.matrix.length) ||
                        $report(_exceptionable, {
                            path: _path + ".matrix",
                            expected: "Array<Array<string>>",
                            value: input.matrix,
                        })) &&
                        input.matrix
                            .map(
                                (elem: any, _index1: number) =>
                                    (((Array.isArray(elem) &&
                                        3 === elem.length) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".matrix[" +
                                                _index1 +
                                                "]",
                                            expected: "Array<string>",
                                            value: elem,
                                        })) &&
                                        elem
                                            .map(
                                                (elem: any, _index2: number) =>
                                                    ("string" === typeof elem &&
                                                        true ===
                                                            $is_uuid(elem)) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".matrix[" +
                                                            _index1 +
                                                            "][" +
                                                            _index2 +
                                                            "]",
                                                        expected: "string",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path + ".matrix[" + _index1 + "]",
                                        expected: "Array<string>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(_exceptionable, {
                            path: _path + ".matrix",
                            expected: "Array<Array<string>>",
                            value: input.matrix,
                        }),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input && null !== input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<TagMatrix>",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Resolve<TagMatrix>",
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
    },
    TagMatrix.SPOILERS,
);
