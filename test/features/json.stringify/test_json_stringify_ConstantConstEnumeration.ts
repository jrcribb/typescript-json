import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_stringify_ConstantConstEnumeration =
    _test_json_stringify("ConstantConstEnumeration")<ConstantConstEnumeration>(
        ConstantConstEnumeration,
    )((input) => typia.json.stringify<ConstantConstEnumeration>(input));
