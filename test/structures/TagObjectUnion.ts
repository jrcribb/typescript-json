import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type TagObjectUnion = TagObjectUnion.Type[];
export namespace TagObjectUnion {
    export type Type = Numeric | Literal;
    export interface Numeric {
        /**
         * @minimum 3
         */
        value: number;
    }
    export interface Literal {
        /**
         * @minLength 3
         * @maxLength 7
         */
        value: string;
    }

    export function generate(): TagObjectUnion {
        const output: TagObjectUnion = [];
        for (const value of [3, 7])
            output.push({ value: TestRandomGenerator.string(value) });
        output.push({ value: 3 });
        return output;
    }

    export const SPOILERS: Spoiler<TagObjectUnion>[] = [
        (input) => {
            input[0].value = "12";
            return ["$input[0].value"];
        },
        (input) => {
            input[1].value = "12345678";
            return ["$input[1].value"];
        },
        (input) => {
            input[2].value = 2;
            return ["$input[2].value"];
        },
    ];
}
