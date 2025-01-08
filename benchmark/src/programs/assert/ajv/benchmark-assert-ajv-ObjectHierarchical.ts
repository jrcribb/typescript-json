import typia from "typia";

import { ObjectHierarchical } from "../../../structures/pure/ObjectHierarchical";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(
  typia.json.schemas<[ObjectHierarchical], "3.0">(),
);
