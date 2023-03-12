import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createIs_UltimateUnion = _test_is(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createIs<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
