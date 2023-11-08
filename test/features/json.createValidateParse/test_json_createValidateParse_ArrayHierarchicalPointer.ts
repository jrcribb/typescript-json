import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_createValidateParse_ArrayHierarchicalPointer =
    _test_json_validateParse(
        "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
        typia.json.createValidateParse<ArrayHierarchicalPointer>(),
    );
