import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_MapSimple = _test_validateStringify(
    "MapSimple",
    MapSimple.generate,
    (input) => TSON.validateStringify(input),
    MapSimple.SPOILERS,
);
