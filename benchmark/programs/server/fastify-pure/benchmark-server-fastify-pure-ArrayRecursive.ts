import { createClientBenchmarkProgram } from "../createClientBenchmarkProgram";

createClientBenchmarkProgram(
    __dirname +
        "/../internal/fastify-pure/benchmark-server-fastify-pure-ArrayRecursive" +
        __filename.substr(-3),
);
