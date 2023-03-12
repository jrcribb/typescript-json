import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface TagMatrix {
    /**
     * Doubled array.
     *
     * @items 3
     * @format uuid
     */
    matrix: string[][];
}
export namespace TagMatrix {
    export function generate(): TagMatrix {
        return {
            matrix: TestRandomGenerator.array(
                () => TestRandomGenerator.array(() => v4(), 3),
                3,
            ),
        };
    }
    export const SPOILERS: Spoiler<TagMatrix>[] = [
        (input) => {
            input.matrix[0] = TestRandomGenerator.array(() => v4(), 2);
            return ["$input.matrix[0]"];
        },
        (input) => {
            input.matrix.splice(0, 1);
            return ["$input.matrix"];
        },
        (input) => {
            input.matrix[0][0] = "invalid uuid";
            return ["$input.matrix[0][0]"];
        },
    ];
}
