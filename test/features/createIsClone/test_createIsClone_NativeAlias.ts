import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_createIsClone_NativeAlias = _test_isClone(
    "NativeAlias",
    NativeAlias.generate,
    typia.createIsClone<NativeAlias>(),
    NativeAlias.SPOILERS,
);
