import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_prune_AtomicAlias = _test_prune(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.prune(input),
);
