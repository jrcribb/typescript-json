import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type ObjectUnionComposite = Array<
    | ObjectUnionComposite.IPoint
    | ObjectUnionComposite.ILine
    | ObjectUnionComposite.ITriangle
    | ObjectUnionComposite.IRectangle
    | ObjectUnionComposite.IPolyline
    | ObjectUnionComposite.IPolygon
    | ObjectUnionComposite.IPointedShape
    | ObjectUnionComposite.ICircle
>;
export namespace ObjectUnionComposite {
    export interface IPoint {
        x: number;
        y: number;
    }
    export interface ILine {
        p1: IPoint;
        p2: IPoint;
    }
    export interface ITriangle {
        p1: IPoint;
        p2: IPoint;
        p3: IPoint;
    }
    export interface IRectangle {
        p1: IPoint;
        p2: IPoint;
        p3: IPoint;
        p4: IPoint;
    }
    export interface IPolyline {
        points: IPoint[];
    }
    export interface IPolygon {
        outer: IPolyline;
        inner: IPolyline[];
    }
    export interface IPointedShape {
        outer: IPoint[];
        inner: IPoint;
    }
    export interface ICircle {
        centroid: IPoint;
        radius: number;
    }

    export function generate(): ObjectUnionComposite {
        return [
            {
                ...point(),
            },
            {
                p1: point(),
                p2: point(),
            },
            {
                p1: point(),
                p2: point(),
                p3: point(),
            },
            {
                p1: point(),
                p2: point(),
                p3: point(),
                p4: point(),
            },
            {
                points: RandomGenerator.array(() => point(), 10),
            },
            {
                outer: {
                    points: RandomGenerator.array(() => point(), 10),
                },
                inner: [
                    {
                        points: RandomGenerator.array(() => point(), 10),
                    },
                    {
                        points: RandomGenerator.array(() => point(), 10),
                    },
                ],
            },
            {
                outer: RandomGenerator.array(() => point()),
                inner: point(),
            },
            {
                centroid: point(),
                radius: RandomGenerator.integer(),
            },
        ];
    }
    function point(): IPoint {
        return {
            x: RandomGenerator.integer(),
            y: RandomGenerator.integer(),
        };
    }

    export const SPOILERS: Spoiler<ObjectUnionComposite>[] = [
        (input) => {
            (input[0] as ObjectUnionComposite.IPoint).x = {} as any;
            return ["$input[0].x"];
        },
        (input) => {
            (input[1] as ObjectUnionComposite.ILine).p2 = [] as any;
            return ["$input[1].p2"];
        },
        (input) => {
            (input[2] as ObjectUnionComposite.ITriangle).p3 = null!;
            return ["$input[2].p3"];
        },
        (input) => {
            (input[3] as ObjectUnionComposite.IRectangle).p4 = null!;
            return ["$input[3].p4"];
        },
        (input) => {
            (input[4] as ObjectUnionComposite.IPolyline).points = 3 as any;
            return ["$input[4].points"];
        },
        (input) => {
            (input[5] as ObjectUnionComposite.IPolygon).outer = {} as any;
            return ["$input[5].outer"];
        },
        (input) => {
            (input[6] as ObjectUnionComposite.IPointedShape).outer = {
                length: 0,
            } as any;
            return ["$input[6].outer"];
        },
        (input) => {
            (input[7] as ObjectUnionComposite.ICircle).radius = "string" as any;
            return ["$input[7].radius"];
        },
    ];
}
