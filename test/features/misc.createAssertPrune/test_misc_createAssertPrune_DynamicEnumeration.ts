import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createAssertPrune_DynamicEnumeration =
    _test_misc_assertPrune("DynamicEnumeration")<DynamicEnumeration>(
        DynamicEnumeration,
    )(typia.misc.createAssertPrune<DynamicEnumeration>());
