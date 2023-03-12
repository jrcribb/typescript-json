import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_createClone_ClassGetter = _test_clone(
    "ClassGetter",
    ClassGetter.generate,
    (input: ClassGetter): typia.Primitive<ClassGetter> => {
        const $co0 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            dead: input.dead as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
