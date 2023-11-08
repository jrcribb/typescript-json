import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createIsParse_TypeTagArray = _test_json_isParse(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)(typia.json.createIsParse<TypeTagArray>());
