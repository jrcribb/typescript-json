import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_createAssertPrune_DynamicUnion = _test_misc_assertPrune(
    "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.misc.createAssertPrune<DynamicUnion>());
