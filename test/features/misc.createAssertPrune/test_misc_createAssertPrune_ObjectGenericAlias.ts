import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_createAssertPrune_ObjectGenericAlias =
    _test_misc_assertPrune("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )(typia.misc.createAssertPrune<ObjectGenericAlias>());
