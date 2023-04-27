import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createRandom_UltimateUnion = _test_random(
    "UltimateUnion",
    typia.createRandom<UltimateUnion>(),
    typia.createAssert<typia.Primitive<UltimateUnion>>(),
);
