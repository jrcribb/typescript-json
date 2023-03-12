import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_createRandom_DynamicSimple = _test_random(
    "DynamicSimple",
    (
        generator: Partial<typia.IRandomGenerator> = (typia.createRandom as any)
            .generator,
    ): typia.Primitive<DynamicSimple> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => {
            const output = {} as any;
            (generator.array ?? $generator.array)(
                () =>
                    (output[(generator.string ?? $generator.string)()] = (
                        generator.number ?? $generator.number
                    )(0, 100)),
                (generator.integer ?? $generator.integer)(0, 3),
            );
            return output;
        };
        return $ro0();
    },
    (input: any): DynamicSimple => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicSimple => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            ("number" === typeof value &&
                                Number.isFinite(value)) ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "number",
                                value: value,
                            })
                        );
                    return true;
                });
            return (
                (("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<DynamicSimple>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
