# Typia
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/build/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Abuild)
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://github.com/samchon/typia/wiki)

```typescript
// RUNTIME VALIDATORS
export function is<T>(input: unknown): input is T; // returns boolean
export function assert<T>(input: unknown): T; // throws TypeGuardError
export function validate<T>(input: unknown): IValidation<T>; // detailed
export const customValidators: CustomValidatorMap; // can add custom validators

// JSON
export function application<T>(): IJsonApplication; // JSON schema
export function assertParse<T>(input: string): T; // type safe parser
export function assertStringify<T>(input: T): string; // safe and faster
    // +) isParse, validateParse 
    // +) stringify, isStringify, validateStringify

// MISC
export function random<T>(g?: Partial<IRandomGenerator>): Primitive<T>;
export function literals<T extends Atomic.Type>(): T[];
export function clone<T>(input: T): Primitive<T>; // deep clone
export function prune<T extends object>(input: T): void; // erase extra props
    // +) isClone, assertClone, validateClone
    // +) isPrune, assertPrune, validatePrune
```

`typia` is a transformer library of TypeScript, supporting below features:

  - Super-fast Runtime Validators
  - Safe JSON parse and fast stringify functions
  - JSON schema generator
  - Random data generator

All functions in `typia` require **only one line**. You don't need any extra dedication like JSON schema definitions or decorator function calls. Just call `typia` function with only one line like `typia.assert<T>(input)`.

Also, as `typia` performs AOT (Ahead of Time) compilation skill, its performance is much faster than other competitive libaries. For an example, when comparing validate function `is()` with other competitive libraries, `typia` is maximum **20,000x faster** than `class-validator`.

![Is Function Benchmark](https://github.com/samchon/typia/raw/master/benchmark/results/11th%20Gen%20Intel(R)%20Core(TM)%20i5-1135G7%20%40%202.40GHz/images/is.svg)

> Measured on [Intel i5-1135g7, Surface Pro 8](https://github.com/samchon/typia/tree/master/benchmark/results/11th%20Gen%20Intel(R)%20Core(TM)%20i5-1135G7%20%40%202.40GHz#is)




## Sponsors and Backers
Thanks for your support.

Your donation would encourage `typia` development.

[![Sponsers](https://opencollective.com/typia/badge.svg?avatarHeight=75&width=600)](https://opencollective.com/typia)




## Setup
### Transformation
```bash
npm install --save typia
npx typia setup
```

AOT (Ahead of Time) compilation mode.

When you write a TypeScript code calling `typia.createIs<string | null>()` function and compile it, `typia` will write optimal validation code like below, for the `string | null` type. This is the transform mode performing AOT (Ahead of Time) compilation.

```typescript
// TYPESCRIPT CODE
import typia from "typia";
export const check = typia.createIs<string | null>();

// COMPILED JAVASCRIPT CODE
export const check = (input) => "string" === typeof input || null === input;
```

![Typia Setup Wizard](https://user-images.githubusercontent.com/13158709/221402176-83b1bfe8-bc8f-4fba-9d83-6adbdfce5c8c.png)

For reference, to use this transform mode, you've install one onf them; [ttypescript](https://github.com/cevek/ttypescript) or [ts-patch](https://github.com/nonara/ts-patch).

If [ttypescript](https://github.com/cevek/ttypescript), you should compile through `ttsc` command, instead of using `tsc`.

Otherwise, you've chosen [ts-patch](https://github.com/nonara/ts-patch), you can use original `tsc` command. However, [ts-patch](https://github.com/nonara/ts-patch) hacks `node_modules/typescript` source code. Also, whenever update `typescript` version, you have to run `npm run prepare` command repeatedly.

By the way, when using [@nest/cli](https://nestjs.com), you must just choose [ts-patch](https://github.com/nonara/ts-patch).

```bash
#--------
# TTYPESCRIPT
#--------
# COMPILE THROUGH TTYPESCRIPT
npx ttsc

# RUN TS-NODE WITH TTYPESCRIPT
npx ts-node -C ttypescript src/index.ts

#--------
# TS-PATCH
#--------
# USE ORIGINAL TSC COMMAND
tsc
npx ts-node src/index.ts

# WHENVER UPDATE
npm install --save-dev typescript@latest
npm run prepare
```

### Generation
```bash
# INSTALL TYPIA
npm install --save typia
npm install --save-dev typescript

# GENERATE TRANSFORMED TYPESCRIPT CODES
npx typia generate \
    --input src/templates \
    --output src/generated \
    --project tsconfig.json
```

For frontend projects.

If you're using non-standard TypeScript compiler, you can't use [transform mode](#transformation).

  - Non-standard TypeScript compilers:
    - [swc](https://swc.rs/) in Next.JS
    - [esbuild](https://esbuild.github.io/) in Vite
    - [babel](https://babeljs.io/) in Create-React-App

Instead, you should utilize the generation mode. 

Install `typia` through `npm install` command and run `typia generate` command. Then, generator of `typia` reads your TypeScript code of `--input`, and writes transformed TypeScript code into the `--output` directory, like below.

```typescript
//--------
// src/templates/check.ts
//--------
import typia from "typia";
export const check = typia.createIs<string | null>();

//--------
// src/generated/check.ts
//--------
import typia from "typia";
export const check = 
    (input: unknown): input is string | null 
        => "string" === typeof input || null === input;
```




## Features
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://github.com/samchon/typia/wiki)

In here README documents, only summarized informations are provided. 

For more details, refer to the [Guide Documents (wiki)](https://github.com/samchon/typia/wiki).

> - **Runtime Validators**
>   - [powerful validator](https://github.com/samchon/typia/wiki/Runtime-Validators#powerful-validator)
>   - [`is()` function](https://github.com/samchon/typia/wiki/Runtime-Validators#is-function)
>   - [`assert()` function](https://github.com/samchon/typia/wiki/Runtime-Validators#assert-function)
>   - [`validate()` function](https://github.com/samchon/typia/wiki/Runtime-Validators#validate-function)
>   - [strict validators](https://github.com/samchon/typia/wiki/Runtime-Validators#strict-validators)
>   - [factory functions](https://github.com/samchon/typia/wiki/Runtime-Validators#factory-functions)
>   - [comment tags](https://github.com/samchon/typia/wiki/Runtime-Validators#comment-tags)
>   - [custom validators](https://github.com/samchon/typia/wiki/Runtime-Validators#custom-validators)
> - **Enhanced JSON**
>   - [`stringify()` functions](https://github.com/samchon/typia/wiki/Enhanced-JSON#stringify-functions)
>   - [`parse()` functions](https://github.com/samchon/typia/wiki/Enhanced-JSON#parse-functions)
>   - [JSON schema](https://github.com/samchon/typia/wiki/Enhanced-JSON#json-schema)
>   - [comment tags](https://github.com/samchon/typia/wiki/Enhanced-JSON#comment-tags)
> - **Random Generator**
>   - [`random()` function](https://github.com/samchon/typia/wiki/Random-Generator#random-function)
>   - [comment tags](https://github.com/samchon/typia/wiki/Random-Geneerator#comment-tags)
>   - [customization](https://github.com/samchon/typia/wiki/Random-Generator#customization)

### Runtime Validators
```typescript
// ALLOW SUPERFLUOUS PROPERTIES
export function is<T>(input: unknown): input is T; // returns boolean
export function assert<T>(input: unknown): T; // throws `TypeGuardError`
export function validate<T>(input: unknown): IValidation<T>; // detailed

// DO NOT ALLOW SUPERFLUOUS PROPERTIES
export function equals<T>(input: unknown): input is T;
export function assertEquals<T>(input: unknown): T;
export function validateEquals<T>(input: unknown): IValidation<T>;

// REUSABLE FACTORY FUNCTIONS
export function createIs<T>(): (input: unknown) => input is T;
export function createAssert<T>(): (input: unknown) => T;
export function createValidate<T>(): (input: unknown) => IValidation<T>;
export function createEquals<T>(): (input: unknown) => input is T;
export function createAssertEquals<T>(): (input: unknown) => T;
export function createValidateEquals<T>(): (input: unknown) => IValidation<T>;

// YOU CAN ADD CUSTOM VALIDATORS
export const customValidators: CustomValidatorMap;
```

`typia` supports three type of validator functions:

  - `is()`: returns `false` if not matched with the type `T`
  - `assert()`: throws a [`TypeGuardError`](https://github.com/samchon/typia/blob/master/src/TypeGuardError.ts) when not matched
  - `validate()`
    - when matched, returns [`IValidation.ISuccess<T>`](https://github.com/samchon/typia/blob/master/src/IValidation.ts) with `value` property
    - otherwise not matched, returns [`IValidation.IFailure`](https://github.com/samchon/typia/blob/master/src/IValidation.ts) with `errors` property

Also, if you want more strict validator functions that even do not allowing superfluous properties not written in the type `T`, you can use those functions instead; `equals()`, `assertEquals()`, `validateEquals()`. Otherwise you want to create resuable validator functions,  you can utilize factory functions like `createIs()` instead.

When you want to add special validation logics, like limiting range of numeric values, you can do it through comment tags. Furthermore, you can add your custom validator logics. If you want to know about them, visit the Guide Documents:

  - [Features > Runtime Validators > Comment Tags](https://github.com/samchon/typia/wiki/Runtime-Validators#comment-tags)
  - [Features > Runtime Validators > Custom Validators](https://github.com/samchon/typia/wiki/Runtime-Validators#custom-validators).

### Enhanced JSON
```typescript
// JSON SCHEMA GENERATOR
export function application<
    Types extends unknown[],
    Purpose extends "swagger" | "ajv" = "swagger",
    Prefix extends string = Purpose extends "swagger"
        ? "#/components/schemas"
        : "components#/schemas",
>(): IJsonApplication;

// SAFE PARSER FUNCTIONS
export function isParse<T>(input: string): T | null;
export function assertParse<T>(input: string): T;
export function validateParse<T>(input: string): IValidation<T>;

// FASTER STRINGIFY FUNCTIONS
export function stringify<T>(input: T): string; // unsafe
export function isStringify<T>(input: T): string | null; // safe
export function assertStringify<T>(input: T): string;
export function validateStringify<T>(input: T): IValidation<string>;

// FACTORY FUNCTIONS
export function createAssertParse<T>(): (input: string) => T;
export function createAssertStringify<T>(): (input: T) => string;
    // +) createIsParse, createValidateParse
    // +) createStringify, createIsStringify, createValidateStringify
```

`typia` supports enhanced JSON functions.

  - `application()`: generate JSON schema with only one line
    - you can complement JSON schema contents through [comment tags](https://github.com/samchon/typia/wiki/Enhanced-JSON#comment-tags)
  - `assertParse()`: parse JSON string safely with type validation
  - `isStringify()`: maximum 160x faster JSON stringify fuction even type safe

![JSON string conversion speed](https://raw.githubusercontent.com/samchon/typia/master/benchmark/results/AMD%20Ryzen%207%206800HS%20with%20Radeon%20Graphics/images/stringify.svg)

> Measured on [AMD R7 6800HS](https://github.com/samchon/typia/tree/master/benchmark/results/AMD%20Ryzen%207%206800HS%20with%20Radeon%20Graphics)

### Miscellaneous
```typescript
export function random<T>(g?: Partial<IRandomGenerator>): Primitive<T>;
export function literals<T extends Atomic.Type>(): T[];
export function clone<T>(input: T): Primitive<T>; // deep copy
export function prune<T>(input: T): void; // remove superfluous properties
    // +) isClone, assertClone, validateClone
    // +) isPrune, assertPrune, validatePrune
```

When you need random data, just call only `typia.random<T>()` function.

If you need specific random data generation, utilize comment tags or do customize.

  - [Features > Random Generator > comment tags](https://github.com/samchon/typia/wiki/Random-Generator#random-function)
  - [Features > Random Generator > customization](https://github.com/samchon/typia/wiki/Random-Generator#customization)



## Appendix
### Nestia
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/nestia/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@nestia/core.svg)](https://www.npmjs.com/package/@nestia/core)
[![Downloads](https://img.shields.io/npm/dm/@nestia/core.svg)](https://www.npmjs.com/package/@nestia/core)
[![Build Status](https://github.com/samchon/typia/workflows/build/badge.svg)](https://github.com/samchon/nestia/actions?query=workflow%3Abuild)
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://github.com/samchon/nestia/wiki)

[Nestia](https://github.com/samchon/nestia) is a set of helper libraries for `NestJS`, supporting below features:

  - `@nestia/core`: superfast decorators using `typia`
    - **20,000x faster** validation
    - **200x faster** JSON serialization
  - `@nestia/sdk`: evolved **SDK** and **Swagger** generators
    - SDK (Software Development Kit)
      - interaction library for client developers
      - almost same with [tRPC](https://github.com/trpc/trpc)
  - `nestia`: just CLI (command line interface) tool

![nestia-sdk-demo](https://user-images.githubusercontent.com/13158709/215004990-368c589d-7101-404e-b81b-fbc936382f05.gif)
