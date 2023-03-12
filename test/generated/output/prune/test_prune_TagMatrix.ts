import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_prune_TagMatrix = _test_prune(
    "TagMatrix",
    TagMatrix.generate,
    (input) =>
        ((input: TagMatrix): void => {
            const $is_uuid = (typia.prune as any).is_uuid;
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("matrix" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        })(input),
);
