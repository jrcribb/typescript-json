import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { MapSimple } from "../../structures/MapSimple";

export const test_createValidateClone_MapSimple = _test_validateClone(
    "MapSimple",
    MapSimple.generate,
    typia.createValidateClone<MapSimple>(),
    MapSimple.SPOILERS,
);
