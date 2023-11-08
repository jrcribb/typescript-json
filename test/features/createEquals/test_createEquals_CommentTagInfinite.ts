import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createEquals_CommentTagInfinite = _test_equals(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)(
    typia.createEquals<CommentTagInfinite>(),
);
