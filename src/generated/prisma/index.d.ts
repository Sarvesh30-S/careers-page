
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Job
 * A single job posting created by an employer.
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Application
 * An application submitted by a candidate for a given job.
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model AtsCriterion
 * A single, admin-configurable scoring dimension. The engine reads these at
 * run time so weights/toggles change scoring without a code deploy.
 */
export type AtsCriterion = $Result.DefaultSelection<Prisma.$AtsCriterionPayload>
/**
 * Model AtsSkill
 * Admin-managed skill/keyword dictionary used for skills-coverage scoring.
 */
export type AtsSkill = $Result.DefaultSelection<Prisma.$AtsSkillPayload>
/**
 * Model AtsCheck
 * A stored ATS check result. Admins can browse every candidate's report.
 */
export type AtsCheck = $Result.DefaultSelection<Prisma.$AtsCheckPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JobType: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  CONTRACT: 'CONTRACT',
  INTERNSHIP: 'INTERNSHIP',
  TEMPORARY: 'TEMPORARY'
};

export type JobType = (typeof JobType)[keyof typeof JobType]


export const ExperienceLevel: {
  INTERN: 'INTERN',
  ENTRY: 'ENTRY',
  MID: 'MID',
  SENIOR: 'SENIOR',
  LEAD: 'LEAD'
};

export type ExperienceLevel = (typeof ExperienceLevel)[keyof typeof ExperienceLevel]


export const JobStatus: {
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT',
  CLOSED: 'CLOSED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]

}

export type JobType = $Enums.JobType

export const JobType: typeof $Enums.JobType

export type ExperienceLevel = $Enums.ExperienceLevel

export const ExperienceLevel: typeof $Enums.ExperienceLevel

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Jobs
 * const jobs = await prisma.job.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atsCriterion`: Exposes CRUD operations for the **AtsCriterion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtsCriteria
    * const atsCriteria = await prisma.atsCriterion.findMany()
    * ```
    */
  get atsCriterion(): Prisma.AtsCriterionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atsSkill`: Exposes CRUD operations for the **AtsSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtsSkills
    * const atsSkills = await prisma.atsSkill.findMany()
    * ```
    */
  get atsSkill(): Prisma.AtsSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atsCheck`: Exposes CRUD operations for the **AtsCheck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtsChecks
    * const atsChecks = await prisma.atsCheck.findMany()
    * ```
    */
  get atsCheck(): Prisma.AtsCheckDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Job: 'Job',
    Application: 'Application',
    AtsCriterion: 'AtsCriterion',
    AtsSkill: 'AtsSkill',
    AtsCheck: 'AtsCheck'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "job" | "application" | "atsCriterion" | "atsSkill" | "atsCheck"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      AtsCriterion: {
        payload: Prisma.$AtsCriterionPayload<ExtArgs>
        fields: Prisma.AtsCriterionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtsCriterionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtsCriterionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload>
          }
          findFirst: {
            args: Prisma.AtsCriterionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtsCriterionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload>
          }
          findMany: {
            args: Prisma.AtsCriterionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload>[]
          }
          create: {
            args: Prisma.AtsCriterionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload>
          }
          createMany: {
            args: Prisma.AtsCriterionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtsCriterionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload>[]
          }
          delete: {
            args: Prisma.AtsCriterionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload>
          }
          update: {
            args: Prisma.AtsCriterionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload>
          }
          deleteMany: {
            args: Prisma.AtsCriterionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtsCriterionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtsCriterionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload>[]
          }
          upsert: {
            args: Prisma.AtsCriterionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCriterionPayload>
          }
          aggregate: {
            args: Prisma.AtsCriterionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtsCriterion>
          }
          groupBy: {
            args: Prisma.AtsCriterionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtsCriterionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtsCriterionCountArgs<ExtArgs>
            result: $Utils.Optional<AtsCriterionCountAggregateOutputType> | number
          }
        }
      }
      AtsSkill: {
        payload: Prisma.$AtsSkillPayload<ExtArgs>
        fields: Prisma.AtsSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtsSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtsSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload>
          }
          findFirst: {
            args: Prisma.AtsSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtsSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload>
          }
          findMany: {
            args: Prisma.AtsSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload>[]
          }
          create: {
            args: Prisma.AtsSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload>
          }
          createMany: {
            args: Prisma.AtsSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtsSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload>[]
          }
          delete: {
            args: Prisma.AtsSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload>
          }
          update: {
            args: Prisma.AtsSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload>
          }
          deleteMany: {
            args: Prisma.AtsSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtsSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtsSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload>[]
          }
          upsert: {
            args: Prisma.AtsSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsSkillPayload>
          }
          aggregate: {
            args: Prisma.AtsSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtsSkill>
          }
          groupBy: {
            args: Prisma.AtsSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtsSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtsSkillCountArgs<ExtArgs>
            result: $Utils.Optional<AtsSkillCountAggregateOutputType> | number
          }
        }
      }
      AtsCheck: {
        payload: Prisma.$AtsCheckPayload<ExtArgs>
        fields: Prisma.AtsCheckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtsCheckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtsCheckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload>
          }
          findFirst: {
            args: Prisma.AtsCheckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtsCheckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload>
          }
          findMany: {
            args: Prisma.AtsCheckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload>[]
          }
          create: {
            args: Prisma.AtsCheckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload>
          }
          createMany: {
            args: Prisma.AtsCheckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtsCheckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload>[]
          }
          delete: {
            args: Prisma.AtsCheckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload>
          }
          update: {
            args: Prisma.AtsCheckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload>
          }
          deleteMany: {
            args: Prisma.AtsCheckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtsCheckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtsCheckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload>[]
          }
          upsert: {
            args: Prisma.AtsCheckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtsCheckPayload>
          }
          aggregate: {
            args: Prisma.AtsCheckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtsCheck>
          }
          groupBy: {
            args: Prisma.AtsCheckGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtsCheckGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtsCheckCountArgs<ExtArgs>
            result: $Utils.Optional<AtsCheckCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    job?: JobOmit
    application?: ApplicationOmit
    atsCriterion?: AtsCriterionOmit
    atsSkill?: AtsSkillOmit
    atsCheck?: AtsCheckOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    applications: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    companyLogo: string | null
    companyWebsite: string | null
    location: string | null
    type: $Enums.JobType | null
    category: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    remote: boolean | null
    salaryMin: number | null
    salaryMax: number | null
    currency: string | null
    description: string | null
    applyEmail: string | null
    featured: boolean | null
    status: $Enums.JobStatus | null
    postedAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    companyLogo: string | null
    companyWebsite: string | null
    location: string | null
    type: $Enums.JobType | null
    category: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    remote: boolean | null
    salaryMin: number | null
    salaryMax: number | null
    currency: string | null
    description: string | null
    applyEmail: string | null
    featured: boolean | null
    status: $Enums.JobStatus | null
    postedAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    company: number
    companyLogo: number
    companyWebsite: number
    location: number
    type: number
    category: number
    experienceLevel: number
    remote: number
    salaryMin: number
    salaryMax: number
    currency: number
    description: number
    requirements: number
    benefits: number
    tags: number
    applyEmail: number
    featured: number
    status: number
    postedAt: number
    updatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    companyLogo?: true
    companyWebsite?: true
    location?: true
    type?: true
    category?: true
    experienceLevel?: true
    remote?: true
    salaryMin?: true
    salaryMax?: true
    currency?: true
    description?: true
    applyEmail?: true
    featured?: true
    status?: true
    postedAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    companyLogo?: true
    companyWebsite?: true
    location?: true
    type?: true
    category?: true
    experienceLevel?: true
    remote?: true
    salaryMin?: true
    salaryMax?: true
    currency?: true
    description?: true
    applyEmail?: true
    featured?: true
    status?: true
    postedAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    companyLogo?: true
    companyWebsite?: true
    location?: true
    type?: true
    category?: true
    experienceLevel?: true
    remote?: true
    salaryMin?: true
    salaryMax?: true
    currency?: true
    description?: true
    requirements?: true
    benefits?: true
    tags?: true
    applyEmail?: true
    featured?: true
    status?: true
    postedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    title: string
    company: string
    companyLogo: string | null
    companyWebsite: string | null
    location: string
    type: $Enums.JobType
    category: string
    experienceLevel: $Enums.ExperienceLevel
    remote: boolean
    salaryMin: number | null
    salaryMax: number | null
    currency: string
    description: string
    requirements: string[]
    benefits: string[]
    tags: string[]
    applyEmail: string | null
    featured: boolean
    status: $Enums.JobStatus
    postedAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    companyLogo?: boolean
    companyWebsite?: boolean
    location?: boolean
    type?: boolean
    category?: boolean
    experienceLevel?: boolean
    remote?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    description?: boolean
    requirements?: boolean
    benefits?: boolean
    tags?: boolean
    applyEmail?: boolean
    featured?: boolean
    status?: boolean
    postedAt?: boolean
    updatedAt?: boolean
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    companyLogo?: boolean
    companyWebsite?: boolean
    location?: boolean
    type?: boolean
    category?: boolean
    experienceLevel?: boolean
    remote?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    description?: boolean
    requirements?: boolean
    benefits?: boolean
    tags?: boolean
    applyEmail?: boolean
    featured?: boolean
    status?: boolean
    postedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    companyLogo?: boolean
    companyWebsite?: boolean
    location?: boolean
    type?: boolean
    category?: boolean
    experienceLevel?: boolean
    remote?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    description?: boolean
    requirements?: boolean
    benefits?: boolean
    tags?: boolean
    applyEmail?: boolean
    featured?: boolean
    status?: boolean
    postedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    companyLogo?: boolean
    companyWebsite?: boolean
    location?: boolean
    type?: boolean
    category?: boolean
    experienceLevel?: boolean
    remote?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    currency?: boolean
    description?: boolean
    requirements?: boolean
    benefits?: boolean
    tags?: boolean
    applyEmail?: boolean
    featured?: boolean
    status?: boolean
    postedAt?: boolean
    updatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "company" | "companyLogo" | "companyWebsite" | "location" | "type" | "category" | "experienceLevel" | "remote" | "salaryMin" | "salaryMax" | "currency" | "description" | "requirements" | "benefits" | "tags" | "applyEmail" | "featured" | "status" | "postedAt" | "updatedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      company: string
      companyLogo: string | null
      companyWebsite: string | null
      location: string
      type: $Enums.JobType
      category: string
      experienceLevel: $Enums.ExperienceLevel
      remote: boolean
      salaryMin: number | null
      salaryMax: number | null
      currency: string
      description: string
      requirements: string[]
      benefits: string[]
      tags: string[]
      applyEmail: string | null
      featured: boolean
      status: $Enums.JobStatus
      postedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly title: FieldRef<"Job", 'String'>
    readonly company: FieldRef<"Job", 'String'>
    readonly companyLogo: FieldRef<"Job", 'String'>
    readonly companyWebsite: FieldRef<"Job", 'String'>
    readonly location: FieldRef<"Job", 'String'>
    readonly type: FieldRef<"Job", 'JobType'>
    readonly category: FieldRef<"Job", 'String'>
    readonly experienceLevel: FieldRef<"Job", 'ExperienceLevel'>
    readonly remote: FieldRef<"Job", 'Boolean'>
    readonly salaryMin: FieldRef<"Job", 'Int'>
    readonly salaryMax: FieldRef<"Job", 'Int'>
    readonly currency: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly requirements: FieldRef<"Job", 'String[]'>
    readonly benefits: FieldRef<"Job", 'String[]'>
    readonly tags: FieldRef<"Job", 'String[]'>
    readonly applyEmail: FieldRef<"Job", 'String'>
    readonly featured: FieldRef<"Job", 'Boolean'>
    readonly status: FieldRef<"Job", 'JobStatus'>
    readonly postedAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.applications
   */
  export type Job$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    name: string | null
    email: string | null
    phone: string | null
    experience: string | null
    source: string | null
    resumeUrl: string | null
    linkedinUrl: string | null
    coverLetter: string | null
    createdAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    name: string | null
    email: string | null
    phone: string | null
    experience: string | null
    source: string | null
    resumeUrl: string | null
    linkedinUrl: string | null
    coverLetter: string | null
    createdAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    jobId: number
    name: number
    email: number
    phone: number
    experience: number
    source: number
    resumeUrl: number
    linkedinUrl: number
    coverLetter: number
    createdAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    jobId?: true
    name?: true
    email?: true
    phone?: true
    experience?: true
    source?: true
    resumeUrl?: true
    linkedinUrl?: true
    coverLetter?: true
    createdAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    jobId?: true
    name?: true
    email?: true
    phone?: true
    experience?: true
    source?: true
    resumeUrl?: true
    linkedinUrl?: true
    coverLetter?: true
    createdAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    jobId?: true
    name?: true
    email?: true
    phone?: true
    experience?: true
    source?: true
    resumeUrl?: true
    linkedinUrl?: true
    coverLetter?: true
    createdAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    jobId: string
    name: string
    email: string
    phone: string | null
    experience: string | null
    source: string | null
    resumeUrl: string | null
    linkedinUrl: string | null
    coverLetter: string | null
    createdAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    experience?: boolean
    source?: boolean
    resumeUrl?: boolean
    linkedinUrl?: boolean
    coverLetter?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    experience?: boolean
    source?: boolean
    resumeUrl?: boolean
    linkedinUrl?: boolean
    coverLetter?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    experience?: boolean
    source?: boolean
    resumeUrl?: boolean
    linkedinUrl?: boolean
    coverLetter?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    jobId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    experience?: boolean
    source?: boolean
    resumeUrl?: boolean
    linkedinUrl?: boolean
    coverLetter?: boolean
    createdAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "name" | "email" | "phone" | "experience" | "source" | "resumeUrl" | "linkedinUrl" | "coverLetter" | "createdAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      name: string
      email: string
      phone: string | null
      experience: string | null
      source: string | null
      resumeUrl: string | null
      linkedinUrl: string | null
      coverLetter: string | null
      createdAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly jobId: FieldRef<"Application", 'String'>
    readonly name: FieldRef<"Application", 'String'>
    readonly email: FieldRef<"Application", 'String'>
    readonly phone: FieldRef<"Application", 'String'>
    readonly experience: FieldRef<"Application", 'String'>
    readonly source: FieldRef<"Application", 'String'>
    readonly resumeUrl: FieldRef<"Application", 'String'>
    readonly linkedinUrl: FieldRef<"Application", 'String'>
    readonly coverLetter: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model AtsCriterion
   */

  export type AggregateAtsCriterion = {
    _count: AtsCriterionCountAggregateOutputType | null
    _avg: AtsCriterionAvgAggregateOutputType | null
    _sum: AtsCriterionSumAggregateOutputType | null
    _min: AtsCriterionMinAggregateOutputType | null
    _max: AtsCriterionMaxAggregateOutputType | null
  }

  export type AtsCriterionAvgAggregateOutputType = {
    weight: number | null
    order: number | null
  }

  export type AtsCriterionSumAggregateOutputType = {
    weight: number | null
    order: number | null
  }

  export type AtsCriterionMinAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    description: string | null
    weight: number | null
    enabled: boolean | null
    order: number | null
    updatedAt: Date | null
  }

  export type AtsCriterionMaxAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    description: string | null
    weight: number | null
    enabled: boolean | null
    order: number | null
    updatedAt: Date | null
  }

  export type AtsCriterionCountAggregateOutputType = {
    id: number
    key: number
    label: number
    description: number
    weight: number
    enabled: number
    order: number
    updatedAt: number
    _all: number
  }


  export type AtsCriterionAvgAggregateInputType = {
    weight?: true
    order?: true
  }

  export type AtsCriterionSumAggregateInputType = {
    weight?: true
    order?: true
  }

  export type AtsCriterionMinAggregateInputType = {
    id?: true
    key?: true
    label?: true
    description?: true
    weight?: true
    enabled?: true
    order?: true
    updatedAt?: true
  }

  export type AtsCriterionMaxAggregateInputType = {
    id?: true
    key?: true
    label?: true
    description?: true
    weight?: true
    enabled?: true
    order?: true
    updatedAt?: true
  }

  export type AtsCriterionCountAggregateInputType = {
    id?: true
    key?: true
    label?: true
    description?: true
    weight?: true
    enabled?: true
    order?: true
    updatedAt?: true
    _all?: true
  }

  export type AtsCriterionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtsCriterion to aggregate.
     */
    where?: AtsCriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsCriteria to fetch.
     */
    orderBy?: AtsCriterionOrderByWithRelationInput | AtsCriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtsCriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtsCriteria
    **/
    _count?: true | AtsCriterionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtsCriterionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtsCriterionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtsCriterionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtsCriterionMaxAggregateInputType
  }

  export type GetAtsCriterionAggregateType<T extends AtsCriterionAggregateArgs> = {
        [P in keyof T & keyof AggregateAtsCriterion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtsCriterion[P]>
      : GetScalarType<T[P], AggregateAtsCriterion[P]>
  }




  export type AtsCriterionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtsCriterionWhereInput
    orderBy?: AtsCriterionOrderByWithAggregationInput | AtsCriterionOrderByWithAggregationInput[]
    by: AtsCriterionScalarFieldEnum[] | AtsCriterionScalarFieldEnum
    having?: AtsCriterionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtsCriterionCountAggregateInputType | true
    _avg?: AtsCriterionAvgAggregateInputType
    _sum?: AtsCriterionSumAggregateInputType
    _min?: AtsCriterionMinAggregateInputType
    _max?: AtsCriterionMaxAggregateInputType
  }

  export type AtsCriterionGroupByOutputType = {
    id: string
    key: string
    label: string
    description: string
    weight: number
    enabled: boolean
    order: number
    updatedAt: Date
    _count: AtsCriterionCountAggregateOutputType | null
    _avg: AtsCriterionAvgAggregateOutputType | null
    _sum: AtsCriterionSumAggregateOutputType | null
    _min: AtsCriterionMinAggregateOutputType | null
    _max: AtsCriterionMaxAggregateOutputType | null
  }

  type GetAtsCriterionGroupByPayload<T extends AtsCriterionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtsCriterionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtsCriterionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtsCriterionGroupByOutputType[P]>
            : GetScalarType<T[P], AtsCriterionGroupByOutputType[P]>
        }
      >
    >


  export type AtsCriterionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    description?: boolean
    weight?: boolean
    enabled?: boolean
    order?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["atsCriterion"]>

  export type AtsCriterionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    description?: boolean
    weight?: boolean
    enabled?: boolean
    order?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["atsCriterion"]>

  export type AtsCriterionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    description?: boolean
    weight?: boolean
    enabled?: boolean
    order?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["atsCriterion"]>

  export type AtsCriterionSelectScalar = {
    id?: boolean
    key?: boolean
    label?: boolean
    description?: boolean
    weight?: boolean
    enabled?: boolean
    order?: boolean
    updatedAt?: boolean
  }

  export type AtsCriterionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "label" | "description" | "weight" | "enabled" | "order" | "updatedAt", ExtArgs["result"]["atsCriterion"]>

  export type $AtsCriterionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtsCriterion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      label: string
      description: string
      weight: number
      enabled: boolean
      order: number
      updatedAt: Date
    }, ExtArgs["result"]["atsCriterion"]>
    composites: {}
  }

  type AtsCriterionGetPayload<S extends boolean | null | undefined | AtsCriterionDefaultArgs> = $Result.GetResult<Prisma.$AtsCriterionPayload, S>

  type AtsCriterionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtsCriterionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtsCriterionCountAggregateInputType | true
    }

  export interface AtsCriterionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtsCriterion'], meta: { name: 'AtsCriterion' } }
    /**
     * Find zero or one AtsCriterion that matches the filter.
     * @param {AtsCriterionFindUniqueArgs} args - Arguments to find a AtsCriterion
     * @example
     * // Get one AtsCriterion
     * const atsCriterion = await prisma.atsCriterion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtsCriterionFindUniqueArgs>(args: SelectSubset<T, AtsCriterionFindUniqueArgs<ExtArgs>>): Prisma__AtsCriterionClient<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AtsCriterion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtsCriterionFindUniqueOrThrowArgs} args - Arguments to find a AtsCriterion
     * @example
     * // Get one AtsCriterion
     * const atsCriterion = await prisma.atsCriterion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtsCriterionFindUniqueOrThrowArgs>(args: SelectSubset<T, AtsCriterionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtsCriterionClient<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtsCriterion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCriterionFindFirstArgs} args - Arguments to find a AtsCriterion
     * @example
     * // Get one AtsCriterion
     * const atsCriterion = await prisma.atsCriterion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtsCriterionFindFirstArgs>(args?: SelectSubset<T, AtsCriterionFindFirstArgs<ExtArgs>>): Prisma__AtsCriterionClient<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtsCriterion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCriterionFindFirstOrThrowArgs} args - Arguments to find a AtsCriterion
     * @example
     * // Get one AtsCriterion
     * const atsCriterion = await prisma.atsCriterion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtsCriterionFindFirstOrThrowArgs>(args?: SelectSubset<T, AtsCriterionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtsCriterionClient<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AtsCriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCriterionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtsCriteria
     * const atsCriteria = await prisma.atsCriterion.findMany()
     * 
     * // Get first 10 AtsCriteria
     * const atsCriteria = await prisma.atsCriterion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atsCriterionWithIdOnly = await prisma.atsCriterion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtsCriterionFindManyArgs>(args?: SelectSubset<T, AtsCriterionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AtsCriterion.
     * @param {AtsCriterionCreateArgs} args - Arguments to create a AtsCriterion.
     * @example
     * // Create one AtsCriterion
     * const AtsCriterion = await prisma.atsCriterion.create({
     *   data: {
     *     // ... data to create a AtsCriterion
     *   }
     * })
     * 
     */
    create<T extends AtsCriterionCreateArgs>(args: SelectSubset<T, AtsCriterionCreateArgs<ExtArgs>>): Prisma__AtsCriterionClient<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AtsCriteria.
     * @param {AtsCriterionCreateManyArgs} args - Arguments to create many AtsCriteria.
     * @example
     * // Create many AtsCriteria
     * const atsCriterion = await prisma.atsCriterion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtsCriterionCreateManyArgs>(args?: SelectSubset<T, AtsCriterionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AtsCriteria and returns the data saved in the database.
     * @param {AtsCriterionCreateManyAndReturnArgs} args - Arguments to create many AtsCriteria.
     * @example
     * // Create many AtsCriteria
     * const atsCriterion = await prisma.atsCriterion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AtsCriteria and only return the `id`
     * const atsCriterionWithIdOnly = await prisma.atsCriterion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtsCriterionCreateManyAndReturnArgs>(args?: SelectSubset<T, AtsCriterionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AtsCriterion.
     * @param {AtsCriterionDeleteArgs} args - Arguments to delete one AtsCriterion.
     * @example
     * // Delete one AtsCriterion
     * const AtsCriterion = await prisma.atsCriterion.delete({
     *   where: {
     *     // ... filter to delete one AtsCriterion
     *   }
     * })
     * 
     */
    delete<T extends AtsCriterionDeleteArgs>(args: SelectSubset<T, AtsCriterionDeleteArgs<ExtArgs>>): Prisma__AtsCriterionClient<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AtsCriterion.
     * @param {AtsCriterionUpdateArgs} args - Arguments to update one AtsCriterion.
     * @example
     * // Update one AtsCriterion
     * const atsCriterion = await prisma.atsCriterion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtsCriterionUpdateArgs>(args: SelectSubset<T, AtsCriterionUpdateArgs<ExtArgs>>): Prisma__AtsCriterionClient<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AtsCriteria.
     * @param {AtsCriterionDeleteManyArgs} args - Arguments to filter AtsCriteria to delete.
     * @example
     * // Delete a few AtsCriteria
     * const { count } = await prisma.atsCriterion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtsCriterionDeleteManyArgs>(args?: SelectSubset<T, AtsCriterionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtsCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCriterionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtsCriteria
     * const atsCriterion = await prisma.atsCriterion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtsCriterionUpdateManyArgs>(args: SelectSubset<T, AtsCriterionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtsCriteria and returns the data updated in the database.
     * @param {AtsCriterionUpdateManyAndReturnArgs} args - Arguments to update many AtsCriteria.
     * @example
     * // Update many AtsCriteria
     * const atsCriterion = await prisma.atsCriterion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AtsCriteria and only return the `id`
     * const atsCriterionWithIdOnly = await prisma.atsCriterion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtsCriterionUpdateManyAndReturnArgs>(args: SelectSubset<T, AtsCriterionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AtsCriterion.
     * @param {AtsCriterionUpsertArgs} args - Arguments to update or create a AtsCriterion.
     * @example
     * // Update or create a AtsCriterion
     * const atsCriterion = await prisma.atsCriterion.upsert({
     *   create: {
     *     // ... data to create a AtsCriterion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtsCriterion we want to update
     *   }
     * })
     */
    upsert<T extends AtsCriterionUpsertArgs>(args: SelectSubset<T, AtsCriterionUpsertArgs<ExtArgs>>): Prisma__AtsCriterionClient<$Result.GetResult<Prisma.$AtsCriterionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AtsCriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCriterionCountArgs} args - Arguments to filter AtsCriteria to count.
     * @example
     * // Count the number of AtsCriteria
     * const count = await prisma.atsCriterion.count({
     *   where: {
     *     // ... the filter for the AtsCriteria we want to count
     *   }
     * })
    **/
    count<T extends AtsCriterionCountArgs>(
      args?: Subset<T, AtsCriterionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtsCriterionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtsCriterion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCriterionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtsCriterionAggregateArgs>(args: Subset<T, AtsCriterionAggregateArgs>): Prisma.PrismaPromise<GetAtsCriterionAggregateType<T>>

    /**
     * Group by AtsCriterion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCriterionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtsCriterionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtsCriterionGroupByArgs['orderBy'] }
        : { orderBy?: AtsCriterionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtsCriterionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtsCriterionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtsCriterion model
   */
  readonly fields: AtsCriterionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtsCriterion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtsCriterionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AtsCriterion model
   */
  interface AtsCriterionFieldRefs {
    readonly id: FieldRef<"AtsCriterion", 'String'>
    readonly key: FieldRef<"AtsCriterion", 'String'>
    readonly label: FieldRef<"AtsCriterion", 'String'>
    readonly description: FieldRef<"AtsCriterion", 'String'>
    readonly weight: FieldRef<"AtsCriterion", 'Int'>
    readonly enabled: FieldRef<"AtsCriterion", 'Boolean'>
    readonly order: FieldRef<"AtsCriterion", 'Int'>
    readonly updatedAt: FieldRef<"AtsCriterion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AtsCriterion findUnique
   */
  export type AtsCriterionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * Filter, which AtsCriterion to fetch.
     */
    where: AtsCriterionWhereUniqueInput
  }

  /**
   * AtsCriterion findUniqueOrThrow
   */
  export type AtsCriterionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * Filter, which AtsCriterion to fetch.
     */
    where: AtsCriterionWhereUniqueInput
  }

  /**
   * AtsCriterion findFirst
   */
  export type AtsCriterionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * Filter, which AtsCriterion to fetch.
     */
    where?: AtsCriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsCriteria to fetch.
     */
    orderBy?: AtsCriterionOrderByWithRelationInput | AtsCriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtsCriteria.
     */
    cursor?: AtsCriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtsCriteria.
     */
    distinct?: AtsCriterionScalarFieldEnum | AtsCriterionScalarFieldEnum[]
  }

  /**
   * AtsCriterion findFirstOrThrow
   */
  export type AtsCriterionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * Filter, which AtsCriterion to fetch.
     */
    where?: AtsCriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsCriteria to fetch.
     */
    orderBy?: AtsCriterionOrderByWithRelationInput | AtsCriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtsCriteria.
     */
    cursor?: AtsCriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtsCriteria.
     */
    distinct?: AtsCriterionScalarFieldEnum | AtsCriterionScalarFieldEnum[]
  }

  /**
   * AtsCriterion findMany
   */
  export type AtsCriterionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * Filter, which AtsCriteria to fetch.
     */
    where?: AtsCriterionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsCriteria to fetch.
     */
    orderBy?: AtsCriterionOrderByWithRelationInput | AtsCriterionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtsCriteria.
     */
    cursor?: AtsCriterionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsCriteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsCriteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtsCriteria.
     */
    distinct?: AtsCriterionScalarFieldEnum | AtsCriterionScalarFieldEnum[]
  }

  /**
   * AtsCriterion create
   */
  export type AtsCriterionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * The data needed to create a AtsCriterion.
     */
    data: XOR<AtsCriterionCreateInput, AtsCriterionUncheckedCreateInput>
  }

  /**
   * AtsCriterion createMany
   */
  export type AtsCriterionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtsCriteria.
     */
    data: AtsCriterionCreateManyInput | AtsCriterionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtsCriterion createManyAndReturn
   */
  export type AtsCriterionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * The data used to create many AtsCriteria.
     */
    data: AtsCriterionCreateManyInput | AtsCriterionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtsCriterion update
   */
  export type AtsCriterionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * The data needed to update a AtsCriterion.
     */
    data: XOR<AtsCriterionUpdateInput, AtsCriterionUncheckedUpdateInput>
    /**
     * Choose, which AtsCriterion to update.
     */
    where: AtsCriterionWhereUniqueInput
  }

  /**
   * AtsCriterion updateMany
   */
  export type AtsCriterionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtsCriteria.
     */
    data: XOR<AtsCriterionUpdateManyMutationInput, AtsCriterionUncheckedUpdateManyInput>
    /**
     * Filter which AtsCriteria to update
     */
    where?: AtsCriterionWhereInput
    /**
     * Limit how many AtsCriteria to update.
     */
    limit?: number
  }

  /**
   * AtsCriterion updateManyAndReturn
   */
  export type AtsCriterionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * The data used to update AtsCriteria.
     */
    data: XOR<AtsCriterionUpdateManyMutationInput, AtsCriterionUncheckedUpdateManyInput>
    /**
     * Filter which AtsCriteria to update
     */
    where?: AtsCriterionWhereInput
    /**
     * Limit how many AtsCriteria to update.
     */
    limit?: number
  }

  /**
   * AtsCriterion upsert
   */
  export type AtsCriterionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * The filter to search for the AtsCriterion to update in case it exists.
     */
    where: AtsCriterionWhereUniqueInput
    /**
     * In case the AtsCriterion found by the `where` argument doesn't exist, create a new AtsCriterion with this data.
     */
    create: XOR<AtsCriterionCreateInput, AtsCriterionUncheckedCreateInput>
    /**
     * In case the AtsCriterion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtsCriterionUpdateInput, AtsCriterionUncheckedUpdateInput>
  }

  /**
   * AtsCriterion delete
   */
  export type AtsCriterionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
    /**
     * Filter which AtsCriterion to delete.
     */
    where: AtsCriterionWhereUniqueInput
  }

  /**
   * AtsCriterion deleteMany
   */
  export type AtsCriterionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtsCriteria to delete
     */
    where?: AtsCriterionWhereInput
    /**
     * Limit how many AtsCriteria to delete.
     */
    limit?: number
  }

  /**
   * AtsCriterion without action
   */
  export type AtsCriterionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCriterion
     */
    select?: AtsCriterionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCriterion
     */
    omit?: AtsCriterionOmit<ExtArgs> | null
  }


  /**
   * Model AtsSkill
   */

  export type AggregateAtsSkill = {
    _count: AtsSkillCountAggregateOutputType | null
    _avg: AtsSkillAvgAggregateOutputType | null
    _sum: AtsSkillSumAggregateOutputType | null
    _min: AtsSkillMinAggregateOutputType | null
    _max: AtsSkillMaxAggregateOutputType | null
  }

  export type AtsSkillAvgAggregateOutputType = {
    weight: number | null
  }

  export type AtsSkillSumAggregateOutputType = {
    weight: number | null
  }

  export type AtsSkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    weight: number | null
    createdAt: Date | null
  }

  export type AtsSkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    weight: number | null
    createdAt: Date | null
  }

  export type AtsSkillCountAggregateOutputType = {
    id: number
    name: number
    category: number
    aliases: number
    weight: number
    createdAt: number
    _all: number
  }


  export type AtsSkillAvgAggregateInputType = {
    weight?: true
  }

  export type AtsSkillSumAggregateInputType = {
    weight?: true
  }

  export type AtsSkillMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    weight?: true
    createdAt?: true
  }

  export type AtsSkillMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    weight?: true
    createdAt?: true
  }

  export type AtsSkillCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    aliases?: true
    weight?: true
    createdAt?: true
    _all?: true
  }

  export type AtsSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtsSkill to aggregate.
     */
    where?: AtsSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsSkills to fetch.
     */
    orderBy?: AtsSkillOrderByWithRelationInput | AtsSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtsSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtsSkills
    **/
    _count?: true | AtsSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtsSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtsSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtsSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtsSkillMaxAggregateInputType
  }

  export type GetAtsSkillAggregateType<T extends AtsSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateAtsSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtsSkill[P]>
      : GetScalarType<T[P], AggregateAtsSkill[P]>
  }




  export type AtsSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtsSkillWhereInput
    orderBy?: AtsSkillOrderByWithAggregationInput | AtsSkillOrderByWithAggregationInput[]
    by: AtsSkillScalarFieldEnum[] | AtsSkillScalarFieldEnum
    having?: AtsSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtsSkillCountAggregateInputType | true
    _avg?: AtsSkillAvgAggregateInputType
    _sum?: AtsSkillSumAggregateInputType
    _min?: AtsSkillMinAggregateInputType
    _max?: AtsSkillMaxAggregateInputType
  }

  export type AtsSkillGroupByOutputType = {
    id: string
    name: string
    category: string
    aliases: string[]
    weight: number
    createdAt: Date
    _count: AtsSkillCountAggregateOutputType | null
    _avg: AtsSkillAvgAggregateOutputType | null
    _sum: AtsSkillSumAggregateOutputType | null
    _min: AtsSkillMinAggregateOutputType | null
    _max: AtsSkillMaxAggregateOutputType | null
  }

  type GetAtsSkillGroupByPayload<T extends AtsSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtsSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtsSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtsSkillGroupByOutputType[P]>
            : GetScalarType<T[P], AtsSkillGroupByOutputType[P]>
        }
      >
    >


  export type AtsSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    aliases?: boolean
    weight?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["atsSkill"]>

  export type AtsSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    aliases?: boolean
    weight?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["atsSkill"]>

  export type AtsSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    aliases?: boolean
    weight?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["atsSkill"]>

  export type AtsSkillSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    aliases?: boolean
    weight?: boolean
    createdAt?: boolean
  }

  export type AtsSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "aliases" | "weight" | "createdAt", ExtArgs["result"]["atsSkill"]>

  export type $AtsSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtsSkill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      aliases: string[]
      weight: number
      createdAt: Date
    }, ExtArgs["result"]["atsSkill"]>
    composites: {}
  }

  type AtsSkillGetPayload<S extends boolean | null | undefined | AtsSkillDefaultArgs> = $Result.GetResult<Prisma.$AtsSkillPayload, S>

  type AtsSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtsSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtsSkillCountAggregateInputType | true
    }

  export interface AtsSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtsSkill'], meta: { name: 'AtsSkill' } }
    /**
     * Find zero or one AtsSkill that matches the filter.
     * @param {AtsSkillFindUniqueArgs} args - Arguments to find a AtsSkill
     * @example
     * // Get one AtsSkill
     * const atsSkill = await prisma.atsSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtsSkillFindUniqueArgs>(args: SelectSubset<T, AtsSkillFindUniqueArgs<ExtArgs>>): Prisma__AtsSkillClient<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AtsSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtsSkillFindUniqueOrThrowArgs} args - Arguments to find a AtsSkill
     * @example
     * // Get one AtsSkill
     * const atsSkill = await prisma.atsSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtsSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, AtsSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtsSkillClient<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtsSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsSkillFindFirstArgs} args - Arguments to find a AtsSkill
     * @example
     * // Get one AtsSkill
     * const atsSkill = await prisma.atsSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtsSkillFindFirstArgs>(args?: SelectSubset<T, AtsSkillFindFirstArgs<ExtArgs>>): Prisma__AtsSkillClient<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtsSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsSkillFindFirstOrThrowArgs} args - Arguments to find a AtsSkill
     * @example
     * // Get one AtsSkill
     * const atsSkill = await prisma.atsSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtsSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, AtsSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtsSkillClient<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AtsSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtsSkills
     * const atsSkills = await prisma.atsSkill.findMany()
     * 
     * // Get first 10 AtsSkills
     * const atsSkills = await prisma.atsSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atsSkillWithIdOnly = await prisma.atsSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtsSkillFindManyArgs>(args?: SelectSubset<T, AtsSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AtsSkill.
     * @param {AtsSkillCreateArgs} args - Arguments to create a AtsSkill.
     * @example
     * // Create one AtsSkill
     * const AtsSkill = await prisma.atsSkill.create({
     *   data: {
     *     // ... data to create a AtsSkill
     *   }
     * })
     * 
     */
    create<T extends AtsSkillCreateArgs>(args: SelectSubset<T, AtsSkillCreateArgs<ExtArgs>>): Prisma__AtsSkillClient<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AtsSkills.
     * @param {AtsSkillCreateManyArgs} args - Arguments to create many AtsSkills.
     * @example
     * // Create many AtsSkills
     * const atsSkill = await prisma.atsSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtsSkillCreateManyArgs>(args?: SelectSubset<T, AtsSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AtsSkills and returns the data saved in the database.
     * @param {AtsSkillCreateManyAndReturnArgs} args - Arguments to create many AtsSkills.
     * @example
     * // Create many AtsSkills
     * const atsSkill = await prisma.atsSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AtsSkills and only return the `id`
     * const atsSkillWithIdOnly = await prisma.atsSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtsSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, AtsSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AtsSkill.
     * @param {AtsSkillDeleteArgs} args - Arguments to delete one AtsSkill.
     * @example
     * // Delete one AtsSkill
     * const AtsSkill = await prisma.atsSkill.delete({
     *   where: {
     *     // ... filter to delete one AtsSkill
     *   }
     * })
     * 
     */
    delete<T extends AtsSkillDeleteArgs>(args: SelectSubset<T, AtsSkillDeleteArgs<ExtArgs>>): Prisma__AtsSkillClient<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AtsSkill.
     * @param {AtsSkillUpdateArgs} args - Arguments to update one AtsSkill.
     * @example
     * // Update one AtsSkill
     * const atsSkill = await prisma.atsSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtsSkillUpdateArgs>(args: SelectSubset<T, AtsSkillUpdateArgs<ExtArgs>>): Prisma__AtsSkillClient<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AtsSkills.
     * @param {AtsSkillDeleteManyArgs} args - Arguments to filter AtsSkills to delete.
     * @example
     * // Delete a few AtsSkills
     * const { count } = await prisma.atsSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtsSkillDeleteManyArgs>(args?: SelectSubset<T, AtsSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtsSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtsSkills
     * const atsSkill = await prisma.atsSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtsSkillUpdateManyArgs>(args: SelectSubset<T, AtsSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtsSkills and returns the data updated in the database.
     * @param {AtsSkillUpdateManyAndReturnArgs} args - Arguments to update many AtsSkills.
     * @example
     * // Update many AtsSkills
     * const atsSkill = await prisma.atsSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AtsSkills and only return the `id`
     * const atsSkillWithIdOnly = await prisma.atsSkill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtsSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, AtsSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AtsSkill.
     * @param {AtsSkillUpsertArgs} args - Arguments to update or create a AtsSkill.
     * @example
     * // Update or create a AtsSkill
     * const atsSkill = await prisma.atsSkill.upsert({
     *   create: {
     *     // ... data to create a AtsSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtsSkill we want to update
     *   }
     * })
     */
    upsert<T extends AtsSkillUpsertArgs>(args: SelectSubset<T, AtsSkillUpsertArgs<ExtArgs>>): Prisma__AtsSkillClient<$Result.GetResult<Prisma.$AtsSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AtsSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsSkillCountArgs} args - Arguments to filter AtsSkills to count.
     * @example
     * // Count the number of AtsSkills
     * const count = await prisma.atsSkill.count({
     *   where: {
     *     // ... the filter for the AtsSkills we want to count
     *   }
     * })
    **/
    count<T extends AtsSkillCountArgs>(
      args?: Subset<T, AtsSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtsSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtsSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtsSkillAggregateArgs>(args: Subset<T, AtsSkillAggregateArgs>): Prisma.PrismaPromise<GetAtsSkillAggregateType<T>>

    /**
     * Group by AtsSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtsSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtsSkillGroupByArgs['orderBy'] }
        : { orderBy?: AtsSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtsSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtsSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtsSkill model
   */
  readonly fields: AtsSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtsSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtsSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AtsSkill model
   */
  interface AtsSkillFieldRefs {
    readonly id: FieldRef<"AtsSkill", 'String'>
    readonly name: FieldRef<"AtsSkill", 'String'>
    readonly category: FieldRef<"AtsSkill", 'String'>
    readonly aliases: FieldRef<"AtsSkill", 'String[]'>
    readonly weight: FieldRef<"AtsSkill", 'Int'>
    readonly createdAt: FieldRef<"AtsSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AtsSkill findUnique
   */
  export type AtsSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * Filter, which AtsSkill to fetch.
     */
    where: AtsSkillWhereUniqueInput
  }

  /**
   * AtsSkill findUniqueOrThrow
   */
  export type AtsSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * Filter, which AtsSkill to fetch.
     */
    where: AtsSkillWhereUniqueInput
  }

  /**
   * AtsSkill findFirst
   */
  export type AtsSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * Filter, which AtsSkill to fetch.
     */
    where?: AtsSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsSkills to fetch.
     */
    orderBy?: AtsSkillOrderByWithRelationInput | AtsSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtsSkills.
     */
    cursor?: AtsSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtsSkills.
     */
    distinct?: AtsSkillScalarFieldEnum | AtsSkillScalarFieldEnum[]
  }

  /**
   * AtsSkill findFirstOrThrow
   */
  export type AtsSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * Filter, which AtsSkill to fetch.
     */
    where?: AtsSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsSkills to fetch.
     */
    orderBy?: AtsSkillOrderByWithRelationInput | AtsSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtsSkills.
     */
    cursor?: AtsSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtsSkills.
     */
    distinct?: AtsSkillScalarFieldEnum | AtsSkillScalarFieldEnum[]
  }

  /**
   * AtsSkill findMany
   */
  export type AtsSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * Filter, which AtsSkills to fetch.
     */
    where?: AtsSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsSkills to fetch.
     */
    orderBy?: AtsSkillOrderByWithRelationInput | AtsSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtsSkills.
     */
    cursor?: AtsSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtsSkills.
     */
    distinct?: AtsSkillScalarFieldEnum | AtsSkillScalarFieldEnum[]
  }

  /**
   * AtsSkill create
   */
  export type AtsSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * The data needed to create a AtsSkill.
     */
    data: XOR<AtsSkillCreateInput, AtsSkillUncheckedCreateInput>
  }

  /**
   * AtsSkill createMany
   */
  export type AtsSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtsSkills.
     */
    data: AtsSkillCreateManyInput | AtsSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtsSkill createManyAndReturn
   */
  export type AtsSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * The data used to create many AtsSkills.
     */
    data: AtsSkillCreateManyInput | AtsSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtsSkill update
   */
  export type AtsSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * The data needed to update a AtsSkill.
     */
    data: XOR<AtsSkillUpdateInput, AtsSkillUncheckedUpdateInput>
    /**
     * Choose, which AtsSkill to update.
     */
    where: AtsSkillWhereUniqueInput
  }

  /**
   * AtsSkill updateMany
   */
  export type AtsSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtsSkills.
     */
    data: XOR<AtsSkillUpdateManyMutationInput, AtsSkillUncheckedUpdateManyInput>
    /**
     * Filter which AtsSkills to update
     */
    where?: AtsSkillWhereInput
    /**
     * Limit how many AtsSkills to update.
     */
    limit?: number
  }

  /**
   * AtsSkill updateManyAndReturn
   */
  export type AtsSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * The data used to update AtsSkills.
     */
    data: XOR<AtsSkillUpdateManyMutationInput, AtsSkillUncheckedUpdateManyInput>
    /**
     * Filter which AtsSkills to update
     */
    where?: AtsSkillWhereInput
    /**
     * Limit how many AtsSkills to update.
     */
    limit?: number
  }

  /**
   * AtsSkill upsert
   */
  export type AtsSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * The filter to search for the AtsSkill to update in case it exists.
     */
    where: AtsSkillWhereUniqueInput
    /**
     * In case the AtsSkill found by the `where` argument doesn't exist, create a new AtsSkill with this data.
     */
    create: XOR<AtsSkillCreateInput, AtsSkillUncheckedCreateInput>
    /**
     * In case the AtsSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtsSkillUpdateInput, AtsSkillUncheckedUpdateInput>
  }

  /**
   * AtsSkill delete
   */
  export type AtsSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
    /**
     * Filter which AtsSkill to delete.
     */
    where: AtsSkillWhereUniqueInput
  }

  /**
   * AtsSkill deleteMany
   */
  export type AtsSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtsSkills to delete
     */
    where?: AtsSkillWhereInput
    /**
     * Limit how many AtsSkills to delete.
     */
    limit?: number
  }

  /**
   * AtsSkill without action
   */
  export type AtsSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsSkill
     */
    select?: AtsSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsSkill
     */
    omit?: AtsSkillOmit<ExtArgs> | null
  }


  /**
   * Model AtsCheck
   */

  export type AggregateAtsCheck = {
    _count: AtsCheckCountAggregateOutputType | null
    _avg: AtsCheckAvgAggregateOutputType | null
    _sum: AtsCheckSumAggregateOutputType | null
    _min: AtsCheckMinAggregateOutputType | null
    _max: AtsCheckMaxAggregateOutputType | null
  }

  export type AtsCheckAvgAggregateOutputType = {
    overallScore: number | null
    wordCount: number | null
  }

  export type AtsCheckSumAggregateOutputType = {
    overallScore: number | null
    wordCount: number | null
  }

  export type AtsCheckMinAggregateOutputType = {
    id: string | null
    candidateName: string | null
    candidateEmail: string | null
    resumeFileName: string | null
    jobId: string | null
    jobTitle: string | null
    hasJobDescription: boolean | null
    overallScore: number | null
    rating: string | null
    wordCount: number | null
    textPreview: string | null
    createdAt: Date | null
  }

  export type AtsCheckMaxAggregateOutputType = {
    id: string | null
    candidateName: string | null
    candidateEmail: string | null
    resumeFileName: string | null
    jobId: string | null
    jobTitle: string | null
    hasJobDescription: boolean | null
    overallScore: number | null
    rating: string | null
    wordCount: number | null
    textPreview: string | null
    createdAt: Date | null
  }

  export type AtsCheckCountAggregateOutputType = {
    id: number
    candidateName: number
    candidateEmail: number
    resumeFileName: number
    jobId: number
    jobTitle: number
    hasJobDescription: number
    overallScore: number
    rating: number
    breakdown: number
    matchedKeywords: number
    missingKeywords: number
    wordCount: number
    textPreview: number
    createdAt: number
    _all: number
  }


  export type AtsCheckAvgAggregateInputType = {
    overallScore?: true
    wordCount?: true
  }

  export type AtsCheckSumAggregateInputType = {
    overallScore?: true
    wordCount?: true
  }

  export type AtsCheckMinAggregateInputType = {
    id?: true
    candidateName?: true
    candidateEmail?: true
    resumeFileName?: true
    jobId?: true
    jobTitle?: true
    hasJobDescription?: true
    overallScore?: true
    rating?: true
    wordCount?: true
    textPreview?: true
    createdAt?: true
  }

  export type AtsCheckMaxAggregateInputType = {
    id?: true
    candidateName?: true
    candidateEmail?: true
    resumeFileName?: true
    jobId?: true
    jobTitle?: true
    hasJobDescription?: true
    overallScore?: true
    rating?: true
    wordCount?: true
    textPreview?: true
    createdAt?: true
  }

  export type AtsCheckCountAggregateInputType = {
    id?: true
    candidateName?: true
    candidateEmail?: true
    resumeFileName?: true
    jobId?: true
    jobTitle?: true
    hasJobDescription?: true
    overallScore?: true
    rating?: true
    breakdown?: true
    matchedKeywords?: true
    missingKeywords?: true
    wordCount?: true
    textPreview?: true
    createdAt?: true
    _all?: true
  }

  export type AtsCheckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtsCheck to aggregate.
     */
    where?: AtsCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsChecks to fetch.
     */
    orderBy?: AtsCheckOrderByWithRelationInput | AtsCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtsCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtsChecks
    **/
    _count?: true | AtsCheckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtsCheckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtsCheckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtsCheckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtsCheckMaxAggregateInputType
  }

  export type GetAtsCheckAggregateType<T extends AtsCheckAggregateArgs> = {
        [P in keyof T & keyof AggregateAtsCheck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtsCheck[P]>
      : GetScalarType<T[P], AggregateAtsCheck[P]>
  }




  export type AtsCheckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtsCheckWhereInput
    orderBy?: AtsCheckOrderByWithAggregationInput | AtsCheckOrderByWithAggregationInput[]
    by: AtsCheckScalarFieldEnum[] | AtsCheckScalarFieldEnum
    having?: AtsCheckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtsCheckCountAggregateInputType | true
    _avg?: AtsCheckAvgAggregateInputType
    _sum?: AtsCheckSumAggregateInputType
    _min?: AtsCheckMinAggregateInputType
    _max?: AtsCheckMaxAggregateInputType
  }

  export type AtsCheckGroupByOutputType = {
    id: string
    candidateName: string | null
    candidateEmail: string | null
    resumeFileName: string
    jobId: string | null
    jobTitle: string | null
    hasJobDescription: boolean
    overallScore: number
    rating: string
    breakdown: JsonValue
    matchedKeywords: string[]
    missingKeywords: string[]
    wordCount: number
    textPreview: string | null
    createdAt: Date
    _count: AtsCheckCountAggregateOutputType | null
    _avg: AtsCheckAvgAggregateOutputType | null
    _sum: AtsCheckSumAggregateOutputType | null
    _min: AtsCheckMinAggregateOutputType | null
    _max: AtsCheckMaxAggregateOutputType | null
  }

  type GetAtsCheckGroupByPayload<T extends AtsCheckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtsCheckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtsCheckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtsCheckGroupByOutputType[P]>
            : GetScalarType<T[P], AtsCheckGroupByOutputType[P]>
        }
      >
    >


  export type AtsCheckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    resumeFileName?: boolean
    jobId?: boolean
    jobTitle?: boolean
    hasJobDescription?: boolean
    overallScore?: boolean
    rating?: boolean
    breakdown?: boolean
    matchedKeywords?: boolean
    missingKeywords?: boolean
    wordCount?: boolean
    textPreview?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["atsCheck"]>

  export type AtsCheckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    resumeFileName?: boolean
    jobId?: boolean
    jobTitle?: boolean
    hasJobDescription?: boolean
    overallScore?: boolean
    rating?: boolean
    breakdown?: boolean
    matchedKeywords?: boolean
    missingKeywords?: boolean
    wordCount?: boolean
    textPreview?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["atsCheck"]>

  export type AtsCheckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    resumeFileName?: boolean
    jobId?: boolean
    jobTitle?: boolean
    hasJobDescription?: boolean
    overallScore?: boolean
    rating?: boolean
    breakdown?: boolean
    matchedKeywords?: boolean
    missingKeywords?: boolean
    wordCount?: boolean
    textPreview?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["atsCheck"]>

  export type AtsCheckSelectScalar = {
    id?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    resumeFileName?: boolean
    jobId?: boolean
    jobTitle?: boolean
    hasJobDescription?: boolean
    overallScore?: boolean
    rating?: boolean
    breakdown?: boolean
    matchedKeywords?: boolean
    missingKeywords?: boolean
    wordCount?: boolean
    textPreview?: boolean
    createdAt?: boolean
  }

  export type AtsCheckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateName" | "candidateEmail" | "resumeFileName" | "jobId" | "jobTitle" | "hasJobDescription" | "overallScore" | "rating" | "breakdown" | "matchedKeywords" | "missingKeywords" | "wordCount" | "textPreview" | "createdAt", ExtArgs["result"]["atsCheck"]>

  export type $AtsCheckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtsCheck"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      candidateName: string | null
      candidateEmail: string | null
      resumeFileName: string
      jobId: string | null
      jobTitle: string | null
      hasJobDescription: boolean
      overallScore: number
      rating: string
      breakdown: Prisma.JsonValue
      matchedKeywords: string[]
      missingKeywords: string[]
      wordCount: number
      textPreview: string | null
      createdAt: Date
    }, ExtArgs["result"]["atsCheck"]>
    composites: {}
  }

  type AtsCheckGetPayload<S extends boolean | null | undefined | AtsCheckDefaultArgs> = $Result.GetResult<Prisma.$AtsCheckPayload, S>

  type AtsCheckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtsCheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtsCheckCountAggregateInputType | true
    }

  export interface AtsCheckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtsCheck'], meta: { name: 'AtsCheck' } }
    /**
     * Find zero or one AtsCheck that matches the filter.
     * @param {AtsCheckFindUniqueArgs} args - Arguments to find a AtsCheck
     * @example
     * // Get one AtsCheck
     * const atsCheck = await prisma.atsCheck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtsCheckFindUniqueArgs>(args: SelectSubset<T, AtsCheckFindUniqueArgs<ExtArgs>>): Prisma__AtsCheckClient<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AtsCheck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtsCheckFindUniqueOrThrowArgs} args - Arguments to find a AtsCheck
     * @example
     * // Get one AtsCheck
     * const atsCheck = await prisma.atsCheck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtsCheckFindUniqueOrThrowArgs>(args: SelectSubset<T, AtsCheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtsCheckClient<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtsCheck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCheckFindFirstArgs} args - Arguments to find a AtsCheck
     * @example
     * // Get one AtsCheck
     * const atsCheck = await prisma.atsCheck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtsCheckFindFirstArgs>(args?: SelectSubset<T, AtsCheckFindFirstArgs<ExtArgs>>): Prisma__AtsCheckClient<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtsCheck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCheckFindFirstOrThrowArgs} args - Arguments to find a AtsCheck
     * @example
     * // Get one AtsCheck
     * const atsCheck = await prisma.atsCheck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtsCheckFindFirstOrThrowArgs>(args?: SelectSubset<T, AtsCheckFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtsCheckClient<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AtsChecks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCheckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtsChecks
     * const atsChecks = await prisma.atsCheck.findMany()
     * 
     * // Get first 10 AtsChecks
     * const atsChecks = await prisma.atsCheck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atsCheckWithIdOnly = await prisma.atsCheck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtsCheckFindManyArgs>(args?: SelectSubset<T, AtsCheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AtsCheck.
     * @param {AtsCheckCreateArgs} args - Arguments to create a AtsCheck.
     * @example
     * // Create one AtsCheck
     * const AtsCheck = await prisma.atsCheck.create({
     *   data: {
     *     // ... data to create a AtsCheck
     *   }
     * })
     * 
     */
    create<T extends AtsCheckCreateArgs>(args: SelectSubset<T, AtsCheckCreateArgs<ExtArgs>>): Prisma__AtsCheckClient<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AtsChecks.
     * @param {AtsCheckCreateManyArgs} args - Arguments to create many AtsChecks.
     * @example
     * // Create many AtsChecks
     * const atsCheck = await prisma.atsCheck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtsCheckCreateManyArgs>(args?: SelectSubset<T, AtsCheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AtsChecks and returns the data saved in the database.
     * @param {AtsCheckCreateManyAndReturnArgs} args - Arguments to create many AtsChecks.
     * @example
     * // Create many AtsChecks
     * const atsCheck = await prisma.atsCheck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AtsChecks and only return the `id`
     * const atsCheckWithIdOnly = await prisma.atsCheck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtsCheckCreateManyAndReturnArgs>(args?: SelectSubset<T, AtsCheckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AtsCheck.
     * @param {AtsCheckDeleteArgs} args - Arguments to delete one AtsCheck.
     * @example
     * // Delete one AtsCheck
     * const AtsCheck = await prisma.atsCheck.delete({
     *   where: {
     *     // ... filter to delete one AtsCheck
     *   }
     * })
     * 
     */
    delete<T extends AtsCheckDeleteArgs>(args: SelectSubset<T, AtsCheckDeleteArgs<ExtArgs>>): Prisma__AtsCheckClient<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AtsCheck.
     * @param {AtsCheckUpdateArgs} args - Arguments to update one AtsCheck.
     * @example
     * // Update one AtsCheck
     * const atsCheck = await prisma.atsCheck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtsCheckUpdateArgs>(args: SelectSubset<T, AtsCheckUpdateArgs<ExtArgs>>): Prisma__AtsCheckClient<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AtsChecks.
     * @param {AtsCheckDeleteManyArgs} args - Arguments to filter AtsChecks to delete.
     * @example
     * // Delete a few AtsChecks
     * const { count } = await prisma.atsCheck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtsCheckDeleteManyArgs>(args?: SelectSubset<T, AtsCheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtsChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCheckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtsChecks
     * const atsCheck = await prisma.atsCheck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtsCheckUpdateManyArgs>(args: SelectSubset<T, AtsCheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtsChecks and returns the data updated in the database.
     * @param {AtsCheckUpdateManyAndReturnArgs} args - Arguments to update many AtsChecks.
     * @example
     * // Update many AtsChecks
     * const atsCheck = await prisma.atsCheck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AtsChecks and only return the `id`
     * const atsCheckWithIdOnly = await prisma.atsCheck.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtsCheckUpdateManyAndReturnArgs>(args: SelectSubset<T, AtsCheckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AtsCheck.
     * @param {AtsCheckUpsertArgs} args - Arguments to update or create a AtsCheck.
     * @example
     * // Update or create a AtsCheck
     * const atsCheck = await prisma.atsCheck.upsert({
     *   create: {
     *     // ... data to create a AtsCheck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtsCheck we want to update
     *   }
     * })
     */
    upsert<T extends AtsCheckUpsertArgs>(args: SelectSubset<T, AtsCheckUpsertArgs<ExtArgs>>): Prisma__AtsCheckClient<$Result.GetResult<Prisma.$AtsCheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AtsChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCheckCountArgs} args - Arguments to filter AtsChecks to count.
     * @example
     * // Count the number of AtsChecks
     * const count = await prisma.atsCheck.count({
     *   where: {
     *     // ... the filter for the AtsChecks we want to count
     *   }
     * })
    **/
    count<T extends AtsCheckCountArgs>(
      args?: Subset<T, AtsCheckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtsCheckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtsCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCheckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtsCheckAggregateArgs>(args: Subset<T, AtsCheckAggregateArgs>): Prisma.PrismaPromise<GetAtsCheckAggregateType<T>>

    /**
     * Group by AtsCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtsCheckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtsCheckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtsCheckGroupByArgs['orderBy'] }
        : { orderBy?: AtsCheckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtsCheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtsCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtsCheck model
   */
  readonly fields: AtsCheckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtsCheck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtsCheckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AtsCheck model
   */
  interface AtsCheckFieldRefs {
    readonly id: FieldRef<"AtsCheck", 'String'>
    readonly candidateName: FieldRef<"AtsCheck", 'String'>
    readonly candidateEmail: FieldRef<"AtsCheck", 'String'>
    readonly resumeFileName: FieldRef<"AtsCheck", 'String'>
    readonly jobId: FieldRef<"AtsCheck", 'String'>
    readonly jobTitle: FieldRef<"AtsCheck", 'String'>
    readonly hasJobDescription: FieldRef<"AtsCheck", 'Boolean'>
    readonly overallScore: FieldRef<"AtsCheck", 'Int'>
    readonly rating: FieldRef<"AtsCheck", 'String'>
    readonly breakdown: FieldRef<"AtsCheck", 'Json'>
    readonly matchedKeywords: FieldRef<"AtsCheck", 'String[]'>
    readonly missingKeywords: FieldRef<"AtsCheck", 'String[]'>
    readonly wordCount: FieldRef<"AtsCheck", 'Int'>
    readonly textPreview: FieldRef<"AtsCheck", 'String'>
    readonly createdAt: FieldRef<"AtsCheck", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AtsCheck findUnique
   */
  export type AtsCheckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * Filter, which AtsCheck to fetch.
     */
    where: AtsCheckWhereUniqueInput
  }

  /**
   * AtsCheck findUniqueOrThrow
   */
  export type AtsCheckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * Filter, which AtsCheck to fetch.
     */
    where: AtsCheckWhereUniqueInput
  }

  /**
   * AtsCheck findFirst
   */
  export type AtsCheckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * Filter, which AtsCheck to fetch.
     */
    where?: AtsCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsChecks to fetch.
     */
    orderBy?: AtsCheckOrderByWithRelationInput | AtsCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtsChecks.
     */
    cursor?: AtsCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtsChecks.
     */
    distinct?: AtsCheckScalarFieldEnum | AtsCheckScalarFieldEnum[]
  }

  /**
   * AtsCheck findFirstOrThrow
   */
  export type AtsCheckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * Filter, which AtsCheck to fetch.
     */
    where?: AtsCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsChecks to fetch.
     */
    orderBy?: AtsCheckOrderByWithRelationInput | AtsCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtsChecks.
     */
    cursor?: AtsCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtsChecks.
     */
    distinct?: AtsCheckScalarFieldEnum | AtsCheckScalarFieldEnum[]
  }

  /**
   * AtsCheck findMany
   */
  export type AtsCheckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * Filter, which AtsChecks to fetch.
     */
    where?: AtsCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtsChecks to fetch.
     */
    orderBy?: AtsCheckOrderByWithRelationInput | AtsCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtsChecks.
     */
    cursor?: AtsCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtsChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtsChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtsChecks.
     */
    distinct?: AtsCheckScalarFieldEnum | AtsCheckScalarFieldEnum[]
  }

  /**
   * AtsCheck create
   */
  export type AtsCheckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * The data needed to create a AtsCheck.
     */
    data: XOR<AtsCheckCreateInput, AtsCheckUncheckedCreateInput>
  }

  /**
   * AtsCheck createMany
   */
  export type AtsCheckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtsChecks.
     */
    data: AtsCheckCreateManyInput | AtsCheckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtsCheck createManyAndReturn
   */
  export type AtsCheckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * The data used to create many AtsChecks.
     */
    data: AtsCheckCreateManyInput | AtsCheckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtsCheck update
   */
  export type AtsCheckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * The data needed to update a AtsCheck.
     */
    data: XOR<AtsCheckUpdateInput, AtsCheckUncheckedUpdateInput>
    /**
     * Choose, which AtsCheck to update.
     */
    where: AtsCheckWhereUniqueInput
  }

  /**
   * AtsCheck updateMany
   */
  export type AtsCheckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtsChecks.
     */
    data: XOR<AtsCheckUpdateManyMutationInput, AtsCheckUncheckedUpdateManyInput>
    /**
     * Filter which AtsChecks to update
     */
    where?: AtsCheckWhereInput
    /**
     * Limit how many AtsChecks to update.
     */
    limit?: number
  }

  /**
   * AtsCheck updateManyAndReturn
   */
  export type AtsCheckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * The data used to update AtsChecks.
     */
    data: XOR<AtsCheckUpdateManyMutationInput, AtsCheckUncheckedUpdateManyInput>
    /**
     * Filter which AtsChecks to update
     */
    where?: AtsCheckWhereInput
    /**
     * Limit how many AtsChecks to update.
     */
    limit?: number
  }

  /**
   * AtsCheck upsert
   */
  export type AtsCheckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * The filter to search for the AtsCheck to update in case it exists.
     */
    where: AtsCheckWhereUniqueInput
    /**
     * In case the AtsCheck found by the `where` argument doesn't exist, create a new AtsCheck with this data.
     */
    create: XOR<AtsCheckCreateInput, AtsCheckUncheckedCreateInput>
    /**
     * In case the AtsCheck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtsCheckUpdateInput, AtsCheckUncheckedUpdateInput>
  }

  /**
   * AtsCheck delete
   */
  export type AtsCheckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
    /**
     * Filter which AtsCheck to delete.
     */
    where: AtsCheckWhereUniqueInput
  }

  /**
   * AtsCheck deleteMany
   */
  export type AtsCheckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtsChecks to delete
     */
    where?: AtsCheckWhereInput
    /**
     * Limit how many AtsChecks to delete.
     */
    limit?: number
  }

  /**
   * AtsCheck without action
   */
  export type AtsCheckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtsCheck
     */
    select?: AtsCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtsCheck
     */
    omit?: AtsCheckOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    companyLogo: 'companyLogo',
    companyWebsite: 'companyWebsite',
    location: 'location',
    type: 'type',
    category: 'category',
    experienceLevel: 'experienceLevel',
    remote: 'remote',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    currency: 'currency',
    description: 'description',
    requirements: 'requirements',
    benefits: 'benefits',
    tags: 'tags',
    applyEmail: 'applyEmail',
    featured: 'featured',
    status: 'status',
    postedAt: 'postedAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    experience: 'experience',
    source: 'source',
    resumeUrl: 'resumeUrl',
    linkedinUrl: 'linkedinUrl',
    coverLetter: 'coverLetter',
    createdAt: 'createdAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const AtsCriterionScalarFieldEnum: {
    id: 'id',
    key: 'key',
    label: 'label',
    description: 'description',
    weight: 'weight',
    enabled: 'enabled',
    order: 'order',
    updatedAt: 'updatedAt'
  };

  export type AtsCriterionScalarFieldEnum = (typeof AtsCriterionScalarFieldEnum)[keyof typeof AtsCriterionScalarFieldEnum]


  export const AtsSkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    aliases: 'aliases',
    weight: 'weight',
    createdAt: 'createdAt'
  };

  export type AtsSkillScalarFieldEnum = (typeof AtsSkillScalarFieldEnum)[keyof typeof AtsSkillScalarFieldEnum]


  export const AtsCheckScalarFieldEnum: {
    id: 'id',
    candidateName: 'candidateName',
    candidateEmail: 'candidateEmail',
    resumeFileName: 'resumeFileName',
    jobId: 'jobId',
    jobTitle: 'jobTitle',
    hasJobDescription: 'hasJobDescription',
    overallScore: 'overallScore',
    rating: 'rating',
    breakdown: 'breakdown',
    matchedKeywords: 'matchedKeywords',
    missingKeywords: 'missingKeywords',
    wordCount: 'wordCount',
    textPreview: 'textPreview',
    createdAt: 'createdAt'
  };

  export type AtsCheckScalarFieldEnum = (typeof AtsCheckScalarFieldEnum)[keyof typeof AtsCheckScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'JobType'
   */
  export type EnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType'>
    


  /**
   * Reference to a field of type 'JobType[]'
   */
  export type ListEnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType[]'>
    


  /**
   * Reference to a field of type 'ExperienceLevel'
   */
  export type EnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel'>
    


  /**
   * Reference to a field of type 'ExperienceLevel[]'
   */
  export type ListEnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    company?: StringFilter<"Job"> | string
    companyLogo?: StringNullableFilter<"Job"> | string | null
    companyWebsite?: StringNullableFilter<"Job"> | string | null
    location?: StringFilter<"Job"> | string
    type?: EnumJobTypeFilter<"Job"> | $Enums.JobType
    category?: StringFilter<"Job"> | string
    experienceLevel?: EnumExperienceLevelFilter<"Job"> | $Enums.ExperienceLevel
    remote?: BoolFilter<"Job"> | boolean
    salaryMin?: IntNullableFilter<"Job"> | number | null
    salaryMax?: IntNullableFilter<"Job"> | number | null
    currency?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    requirements?: StringNullableListFilter<"Job">
    benefits?: StringNullableListFilter<"Job">
    tags?: StringNullableListFilter<"Job">
    applyEmail?: StringNullableFilter<"Job"> | string | null
    featured?: BoolFilter<"Job"> | boolean
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    postedAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    applications?: ApplicationListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    companyLogo?: SortOrderInput | SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    location?: SortOrder
    type?: SortOrder
    category?: SortOrder
    experienceLevel?: SortOrder
    remote?: SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    currency?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    tags?: SortOrder
    applyEmail?: SortOrderInput | SortOrder
    featured?: SortOrder
    status?: SortOrder
    postedAt?: SortOrder
    updatedAt?: SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    company?: StringFilter<"Job"> | string
    companyLogo?: StringNullableFilter<"Job"> | string | null
    companyWebsite?: StringNullableFilter<"Job"> | string | null
    location?: StringFilter<"Job"> | string
    type?: EnumJobTypeFilter<"Job"> | $Enums.JobType
    category?: StringFilter<"Job"> | string
    experienceLevel?: EnumExperienceLevelFilter<"Job"> | $Enums.ExperienceLevel
    remote?: BoolFilter<"Job"> | boolean
    salaryMin?: IntNullableFilter<"Job"> | number | null
    salaryMax?: IntNullableFilter<"Job"> | number | null
    currency?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    requirements?: StringNullableListFilter<"Job">
    benefits?: StringNullableListFilter<"Job">
    tags?: StringNullableListFilter<"Job">
    applyEmail?: StringNullableFilter<"Job"> | string | null
    featured?: BoolFilter<"Job"> | boolean
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    postedAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    applications?: ApplicationListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    companyLogo?: SortOrderInput | SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    location?: SortOrder
    type?: SortOrder
    category?: SortOrder
    experienceLevel?: SortOrder
    remote?: SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    currency?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    tags?: SortOrder
    applyEmail?: SortOrderInput | SortOrder
    featured?: SortOrder
    status?: SortOrder
    postedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    title?: StringWithAggregatesFilter<"Job"> | string
    company?: StringWithAggregatesFilter<"Job"> | string
    companyLogo?: StringNullableWithAggregatesFilter<"Job"> | string | null
    companyWebsite?: StringNullableWithAggregatesFilter<"Job"> | string | null
    location?: StringWithAggregatesFilter<"Job"> | string
    type?: EnumJobTypeWithAggregatesFilter<"Job"> | $Enums.JobType
    category?: StringWithAggregatesFilter<"Job"> | string
    experienceLevel?: EnumExperienceLevelWithAggregatesFilter<"Job"> | $Enums.ExperienceLevel
    remote?: BoolWithAggregatesFilter<"Job"> | boolean
    salaryMin?: IntNullableWithAggregatesFilter<"Job"> | number | null
    salaryMax?: IntNullableWithAggregatesFilter<"Job"> | number | null
    currency?: StringWithAggregatesFilter<"Job"> | string
    description?: StringWithAggregatesFilter<"Job"> | string
    requirements?: StringNullableListFilter<"Job">
    benefits?: StringNullableListFilter<"Job">
    tags?: StringNullableListFilter<"Job">
    applyEmail?: StringNullableWithAggregatesFilter<"Job"> | string | null
    featured?: BoolWithAggregatesFilter<"Job"> | boolean
    status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus
    postedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    jobId?: StringFilter<"Application"> | string
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phone?: StringNullableFilter<"Application"> | string | null
    experience?: StringNullableFilter<"Application"> | string | null
    source?: StringNullableFilter<"Application"> | string | null
    resumeUrl?: StringNullableFilter<"Application"> | string | null
    linkedinUrl?: StringNullableFilter<"Application"> | string | null
    coverLetter?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    coverLetter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    job?: JobOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    jobId?: StringFilter<"Application"> | string
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phone?: StringNullableFilter<"Application"> | string | null
    experience?: StringNullableFilter<"Application"> | string | null
    source?: StringNullableFilter<"Application"> | string | null
    resumeUrl?: StringNullableFilter<"Application"> | string | null
    linkedinUrl?: StringNullableFilter<"Application"> | string | null
    coverLetter?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    coverLetter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    jobId?: StringWithAggregatesFilter<"Application"> | string
    name?: StringWithAggregatesFilter<"Application"> | string
    email?: StringWithAggregatesFilter<"Application"> | string
    phone?: StringNullableWithAggregatesFilter<"Application"> | string | null
    experience?: StringNullableWithAggregatesFilter<"Application"> | string | null
    source?: StringNullableWithAggregatesFilter<"Application"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"Application"> | string | null
    linkedinUrl?: StringNullableWithAggregatesFilter<"Application"> | string | null
    coverLetter?: StringNullableWithAggregatesFilter<"Application"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type AtsCriterionWhereInput = {
    AND?: AtsCriterionWhereInput | AtsCriterionWhereInput[]
    OR?: AtsCriterionWhereInput[]
    NOT?: AtsCriterionWhereInput | AtsCriterionWhereInput[]
    id?: StringFilter<"AtsCriterion"> | string
    key?: StringFilter<"AtsCriterion"> | string
    label?: StringFilter<"AtsCriterion"> | string
    description?: StringFilter<"AtsCriterion"> | string
    weight?: IntFilter<"AtsCriterion"> | number
    enabled?: BoolFilter<"AtsCriterion"> | boolean
    order?: IntFilter<"AtsCriterion"> | number
    updatedAt?: DateTimeFilter<"AtsCriterion"> | Date | string
  }

  export type AtsCriterionOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    enabled?: SortOrder
    order?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtsCriterionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: AtsCriterionWhereInput | AtsCriterionWhereInput[]
    OR?: AtsCriterionWhereInput[]
    NOT?: AtsCriterionWhereInput | AtsCriterionWhereInput[]
    label?: StringFilter<"AtsCriterion"> | string
    description?: StringFilter<"AtsCriterion"> | string
    weight?: IntFilter<"AtsCriterion"> | number
    enabled?: BoolFilter<"AtsCriterion"> | boolean
    order?: IntFilter<"AtsCriterion"> | number
    updatedAt?: DateTimeFilter<"AtsCriterion"> | Date | string
  }, "id" | "key">

  export type AtsCriterionOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    enabled?: SortOrder
    order?: SortOrder
    updatedAt?: SortOrder
    _count?: AtsCriterionCountOrderByAggregateInput
    _avg?: AtsCriterionAvgOrderByAggregateInput
    _max?: AtsCriterionMaxOrderByAggregateInput
    _min?: AtsCriterionMinOrderByAggregateInput
    _sum?: AtsCriterionSumOrderByAggregateInput
  }

  export type AtsCriterionScalarWhereWithAggregatesInput = {
    AND?: AtsCriterionScalarWhereWithAggregatesInput | AtsCriterionScalarWhereWithAggregatesInput[]
    OR?: AtsCriterionScalarWhereWithAggregatesInput[]
    NOT?: AtsCriterionScalarWhereWithAggregatesInput | AtsCriterionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AtsCriterion"> | string
    key?: StringWithAggregatesFilter<"AtsCriterion"> | string
    label?: StringWithAggregatesFilter<"AtsCriterion"> | string
    description?: StringWithAggregatesFilter<"AtsCriterion"> | string
    weight?: IntWithAggregatesFilter<"AtsCriterion"> | number
    enabled?: BoolWithAggregatesFilter<"AtsCriterion"> | boolean
    order?: IntWithAggregatesFilter<"AtsCriterion"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"AtsCriterion"> | Date | string
  }

  export type AtsSkillWhereInput = {
    AND?: AtsSkillWhereInput | AtsSkillWhereInput[]
    OR?: AtsSkillWhereInput[]
    NOT?: AtsSkillWhereInput | AtsSkillWhereInput[]
    id?: StringFilter<"AtsSkill"> | string
    name?: StringFilter<"AtsSkill"> | string
    category?: StringFilter<"AtsSkill"> | string
    aliases?: StringNullableListFilter<"AtsSkill">
    weight?: IntFilter<"AtsSkill"> | number
    createdAt?: DateTimeFilter<"AtsSkill"> | Date | string
  }

  export type AtsSkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    aliases?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
  }

  export type AtsSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_category?: AtsSkillNameCategoryCompoundUniqueInput
    AND?: AtsSkillWhereInput | AtsSkillWhereInput[]
    OR?: AtsSkillWhereInput[]
    NOT?: AtsSkillWhereInput | AtsSkillWhereInput[]
    name?: StringFilter<"AtsSkill"> | string
    category?: StringFilter<"AtsSkill"> | string
    aliases?: StringNullableListFilter<"AtsSkill">
    weight?: IntFilter<"AtsSkill"> | number
    createdAt?: DateTimeFilter<"AtsSkill"> | Date | string
  }, "id" | "name_category">

  export type AtsSkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    aliases?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    _count?: AtsSkillCountOrderByAggregateInput
    _avg?: AtsSkillAvgOrderByAggregateInput
    _max?: AtsSkillMaxOrderByAggregateInput
    _min?: AtsSkillMinOrderByAggregateInput
    _sum?: AtsSkillSumOrderByAggregateInput
  }

  export type AtsSkillScalarWhereWithAggregatesInput = {
    AND?: AtsSkillScalarWhereWithAggregatesInput | AtsSkillScalarWhereWithAggregatesInput[]
    OR?: AtsSkillScalarWhereWithAggregatesInput[]
    NOT?: AtsSkillScalarWhereWithAggregatesInput | AtsSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AtsSkill"> | string
    name?: StringWithAggregatesFilter<"AtsSkill"> | string
    category?: StringWithAggregatesFilter<"AtsSkill"> | string
    aliases?: StringNullableListFilter<"AtsSkill">
    weight?: IntWithAggregatesFilter<"AtsSkill"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AtsSkill"> | Date | string
  }

  export type AtsCheckWhereInput = {
    AND?: AtsCheckWhereInput | AtsCheckWhereInput[]
    OR?: AtsCheckWhereInput[]
    NOT?: AtsCheckWhereInput | AtsCheckWhereInput[]
    id?: StringFilter<"AtsCheck"> | string
    candidateName?: StringNullableFilter<"AtsCheck"> | string | null
    candidateEmail?: StringNullableFilter<"AtsCheck"> | string | null
    resumeFileName?: StringFilter<"AtsCheck"> | string
    jobId?: StringNullableFilter<"AtsCheck"> | string | null
    jobTitle?: StringNullableFilter<"AtsCheck"> | string | null
    hasJobDescription?: BoolFilter<"AtsCheck"> | boolean
    overallScore?: IntFilter<"AtsCheck"> | number
    rating?: StringFilter<"AtsCheck"> | string
    breakdown?: JsonFilter<"AtsCheck">
    matchedKeywords?: StringNullableListFilter<"AtsCheck">
    missingKeywords?: StringNullableListFilter<"AtsCheck">
    wordCount?: IntFilter<"AtsCheck"> | number
    textPreview?: StringNullableFilter<"AtsCheck"> | string | null
    createdAt?: DateTimeFilter<"AtsCheck"> | Date | string
  }

  export type AtsCheckOrderByWithRelationInput = {
    id?: SortOrder
    candidateName?: SortOrderInput | SortOrder
    candidateEmail?: SortOrderInput | SortOrder
    resumeFileName?: SortOrder
    jobId?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    hasJobDescription?: SortOrder
    overallScore?: SortOrder
    rating?: SortOrder
    breakdown?: SortOrder
    matchedKeywords?: SortOrder
    missingKeywords?: SortOrder
    wordCount?: SortOrder
    textPreview?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AtsCheckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtsCheckWhereInput | AtsCheckWhereInput[]
    OR?: AtsCheckWhereInput[]
    NOT?: AtsCheckWhereInput | AtsCheckWhereInput[]
    candidateName?: StringNullableFilter<"AtsCheck"> | string | null
    candidateEmail?: StringNullableFilter<"AtsCheck"> | string | null
    resumeFileName?: StringFilter<"AtsCheck"> | string
    jobId?: StringNullableFilter<"AtsCheck"> | string | null
    jobTitle?: StringNullableFilter<"AtsCheck"> | string | null
    hasJobDescription?: BoolFilter<"AtsCheck"> | boolean
    overallScore?: IntFilter<"AtsCheck"> | number
    rating?: StringFilter<"AtsCheck"> | string
    breakdown?: JsonFilter<"AtsCheck">
    matchedKeywords?: StringNullableListFilter<"AtsCheck">
    missingKeywords?: StringNullableListFilter<"AtsCheck">
    wordCount?: IntFilter<"AtsCheck"> | number
    textPreview?: StringNullableFilter<"AtsCheck"> | string | null
    createdAt?: DateTimeFilter<"AtsCheck"> | Date | string
  }, "id">

  export type AtsCheckOrderByWithAggregationInput = {
    id?: SortOrder
    candidateName?: SortOrderInput | SortOrder
    candidateEmail?: SortOrderInput | SortOrder
    resumeFileName?: SortOrder
    jobId?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    hasJobDescription?: SortOrder
    overallScore?: SortOrder
    rating?: SortOrder
    breakdown?: SortOrder
    matchedKeywords?: SortOrder
    missingKeywords?: SortOrder
    wordCount?: SortOrder
    textPreview?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AtsCheckCountOrderByAggregateInput
    _avg?: AtsCheckAvgOrderByAggregateInput
    _max?: AtsCheckMaxOrderByAggregateInput
    _min?: AtsCheckMinOrderByAggregateInput
    _sum?: AtsCheckSumOrderByAggregateInput
  }

  export type AtsCheckScalarWhereWithAggregatesInput = {
    AND?: AtsCheckScalarWhereWithAggregatesInput | AtsCheckScalarWhereWithAggregatesInput[]
    OR?: AtsCheckScalarWhereWithAggregatesInput[]
    NOT?: AtsCheckScalarWhereWithAggregatesInput | AtsCheckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AtsCheck"> | string
    candidateName?: StringNullableWithAggregatesFilter<"AtsCheck"> | string | null
    candidateEmail?: StringNullableWithAggregatesFilter<"AtsCheck"> | string | null
    resumeFileName?: StringWithAggregatesFilter<"AtsCheck"> | string
    jobId?: StringNullableWithAggregatesFilter<"AtsCheck"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"AtsCheck"> | string | null
    hasJobDescription?: BoolWithAggregatesFilter<"AtsCheck"> | boolean
    overallScore?: IntWithAggregatesFilter<"AtsCheck"> | number
    rating?: StringWithAggregatesFilter<"AtsCheck"> | string
    breakdown?: JsonWithAggregatesFilter<"AtsCheck">
    matchedKeywords?: StringNullableListFilter<"AtsCheck">
    missingKeywords?: StringNullableListFilter<"AtsCheck">
    wordCount?: IntWithAggregatesFilter<"AtsCheck"> | number
    textPreview?: StringNullableWithAggregatesFilter<"AtsCheck"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AtsCheck"> | Date | string
  }

  export type JobCreateInput = {
    id?: string
    title: string
    company: string
    companyLogo?: string | null
    companyWebsite?: string | null
    location: string
    type: $Enums.JobType
    category: string
    experienceLevel: $Enums.ExperienceLevel
    remote?: boolean
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string
    description: string
    requirements?: JobCreaterequirementsInput | string[]
    benefits?: JobCreatebenefitsInput | string[]
    tags?: JobCreatetagsInput | string[]
    applyEmail?: string | null
    featured?: boolean
    status?: $Enums.JobStatus
    postedAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    title: string
    company: string
    companyLogo?: string | null
    companyWebsite?: string | null
    location: string
    type: $Enums.JobType
    category: string
    experienceLevel: $Enums.ExperienceLevel
    remote?: boolean
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string
    description: string
    requirements?: JobCreaterequirementsInput | string[]
    benefits?: JobCreatebenefitsInput | string[]
    tags?: JobCreatetagsInput | string[]
    applyEmail?: string | null
    featured?: boolean
    status?: $Enums.JobStatus
    postedAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    category?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    remote?: BoolFieldUpdateOperationsInput | boolean
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobUpdaterequirementsInput | string[]
    benefits?: JobUpdatebenefitsInput | string[]
    tags?: JobUpdatetagsInput | string[]
    applyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    category?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    remote?: BoolFieldUpdateOperationsInput | boolean
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobUpdaterequirementsInput | string[]
    benefits?: JobUpdatebenefitsInput | string[]
    tags?: JobUpdatetagsInput | string[]
    applyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    title: string
    company: string
    companyLogo?: string | null
    companyWebsite?: string | null
    location: string
    type: $Enums.JobType
    category: string
    experienceLevel: $Enums.ExperienceLevel
    remote?: boolean
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string
    description: string
    requirements?: JobCreaterequirementsInput | string[]
    benefits?: JobCreatebenefitsInput | string[]
    tags?: JobCreatetagsInput | string[]
    applyEmail?: string | null
    featured?: boolean
    status?: $Enums.JobStatus
    postedAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    category?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    remote?: BoolFieldUpdateOperationsInput | boolean
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobUpdaterequirementsInput | string[]
    benefits?: JobUpdatebenefitsInput | string[]
    tags?: JobUpdatetagsInput | string[]
    applyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    category?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    remote?: BoolFieldUpdateOperationsInput | boolean
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobUpdaterequirementsInput | string[]
    benefits?: JobUpdatebenefitsInput | string[]
    tags?: JobUpdatetagsInput | string[]
    applyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    experience?: string | null
    source?: string | null
    resumeUrl?: string | null
    linkedinUrl?: string | null
    coverLetter?: string | null
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    jobId: string
    name: string
    email: string
    phone?: string | null
    experience?: string | null
    source?: string | null
    resumeUrl?: string | null
    linkedinUrl?: string | null
    coverLetter?: string | null
    createdAt?: Date | string
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: string
    jobId: string
    name: string
    email: string
    phone?: string | null
    experience?: string | null
    source?: string | null
    resumeUrl?: string | null
    linkedinUrl?: string | null
    coverLetter?: string | null
    createdAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsCriterionCreateInput = {
    id?: string
    key: string
    label: string
    description: string
    weight?: number
    enabled?: boolean
    order?: number
    updatedAt?: Date | string
  }

  export type AtsCriterionUncheckedCreateInput = {
    id?: string
    key: string
    label: string
    description: string
    weight?: number
    enabled?: boolean
    order?: number
    updatedAt?: Date | string
  }

  export type AtsCriterionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsCriterionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsCriterionCreateManyInput = {
    id?: string
    key: string
    label: string
    description: string
    weight?: number
    enabled?: boolean
    order?: number
    updatedAt?: Date | string
  }

  export type AtsCriterionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsCriterionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsSkillCreateInput = {
    id?: string
    name: string
    category?: string
    aliases?: AtsSkillCreatealiasesInput | string[]
    weight?: number
    createdAt?: Date | string
  }

  export type AtsSkillUncheckedCreateInput = {
    id?: string
    name: string
    category?: string
    aliases?: AtsSkillCreatealiasesInput | string[]
    weight?: number
    createdAt?: Date | string
  }

  export type AtsSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    aliases?: AtsSkillUpdatealiasesInput | string[]
    weight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    aliases?: AtsSkillUpdatealiasesInput | string[]
    weight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsSkillCreateManyInput = {
    id?: string
    name: string
    category?: string
    aliases?: AtsSkillCreatealiasesInput | string[]
    weight?: number
    createdAt?: Date | string
  }

  export type AtsSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    aliases?: AtsSkillUpdatealiasesInput | string[]
    weight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    aliases?: AtsSkillUpdatealiasesInput | string[]
    weight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsCheckCreateInput = {
    id?: string
    candidateName?: string | null
    candidateEmail?: string | null
    resumeFileName: string
    jobId?: string | null
    jobTitle?: string | null
    hasJobDescription?: boolean
    overallScore: number
    rating: string
    breakdown: JsonNullValueInput | InputJsonValue
    matchedKeywords?: AtsCheckCreatematchedKeywordsInput | string[]
    missingKeywords?: AtsCheckCreatemissingKeywordsInput | string[]
    wordCount?: number
    textPreview?: string | null
    createdAt?: Date | string
  }

  export type AtsCheckUncheckedCreateInput = {
    id?: string
    candidateName?: string | null
    candidateEmail?: string | null
    resumeFileName: string
    jobId?: string | null
    jobTitle?: string | null
    hasJobDescription?: boolean
    overallScore: number
    rating: string
    breakdown: JsonNullValueInput | InputJsonValue
    matchedKeywords?: AtsCheckCreatematchedKeywordsInput | string[]
    missingKeywords?: AtsCheckCreatemissingKeywordsInput | string[]
    wordCount?: number
    textPreview?: string | null
    createdAt?: Date | string
  }

  export type AtsCheckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateName?: NullableStringFieldUpdateOperationsInput | string | null
    candidateEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resumeFileName?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    hasJobDescription?: BoolFieldUpdateOperationsInput | boolean
    overallScore?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    breakdown?: JsonNullValueInput | InputJsonValue
    matchedKeywords?: AtsCheckUpdatematchedKeywordsInput | string[]
    missingKeywords?: AtsCheckUpdatemissingKeywordsInput | string[]
    wordCount?: IntFieldUpdateOperationsInput | number
    textPreview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsCheckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateName?: NullableStringFieldUpdateOperationsInput | string | null
    candidateEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resumeFileName?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    hasJobDescription?: BoolFieldUpdateOperationsInput | boolean
    overallScore?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    breakdown?: JsonNullValueInput | InputJsonValue
    matchedKeywords?: AtsCheckUpdatematchedKeywordsInput | string[]
    missingKeywords?: AtsCheckUpdatemissingKeywordsInput | string[]
    wordCount?: IntFieldUpdateOperationsInput | number
    textPreview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsCheckCreateManyInput = {
    id?: string
    candidateName?: string | null
    candidateEmail?: string | null
    resumeFileName: string
    jobId?: string | null
    jobTitle?: string | null
    hasJobDescription?: boolean
    overallScore: number
    rating: string
    breakdown: JsonNullValueInput | InputJsonValue
    matchedKeywords?: AtsCheckCreatematchedKeywordsInput | string[]
    missingKeywords?: AtsCheckCreatemissingKeywordsInput | string[]
    wordCount?: number
    textPreview?: string | null
    createdAt?: Date | string
  }

  export type AtsCheckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateName?: NullableStringFieldUpdateOperationsInput | string | null
    candidateEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resumeFileName?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    hasJobDescription?: BoolFieldUpdateOperationsInput | boolean
    overallScore?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    breakdown?: JsonNullValueInput | InputJsonValue
    matchedKeywords?: AtsCheckUpdatematchedKeywordsInput | string[]
    missingKeywords?: AtsCheckUpdatemissingKeywordsInput | string[]
    wordCount?: IntFieldUpdateOperationsInput | number
    textPreview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtsCheckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateName?: NullableStringFieldUpdateOperationsInput | string | null
    candidateEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resumeFileName?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    hasJobDescription?: BoolFieldUpdateOperationsInput | boolean
    overallScore?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    breakdown?: JsonNullValueInput | InputJsonValue
    matchedKeywords?: AtsCheckUpdatematchedKeywordsInput | string[]
    missingKeywords?: AtsCheckUpdatemissingKeywordsInput | string[]
    wordCount?: IntFieldUpdateOperationsInput | number
    textPreview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type EnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    companyLogo?: SortOrder
    companyWebsite?: SortOrder
    location?: SortOrder
    type?: SortOrder
    category?: SortOrder
    experienceLevel?: SortOrder
    remote?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    tags?: SortOrder
    applyEmail?: SortOrder
    featured?: SortOrder
    status?: SortOrder
    postedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    companyLogo?: SortOrder
    companyWebsite?: SortOrder
    location?: SortOrder
    type?: SortOrder
    category?: SortOrder
    experienceLevel?: SortOrder
    remote?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    applyEmail?: SortOrder
    featured?: SortOrder
    status?: SortOrder
    postedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    companyLogo?: SortOrder
    companyWebsite?: SortOrder
    location?: SortOrder
    type?: SortOrder
    category?: SortOrder
    experienceLevel?: SortOrder
    remote?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    applyEmail?: SortOrder
    featured?: SortOrder
    status?: SortOrder
    postedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type EnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    experience?: SortOrder
    source?: SortOrder
    resumeUrl?: SortOrder
    linkedinUrl?: SortOrder
    coverLetter?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    experience?: SortOrder
    source?: SortOrder
    resumeUrl?: SortOrder
    linkedinUrl?: SortOrder
    coverLetter?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    experience?: SortOrder
    source?: SortOrder
    resumeUrl?: SortOrder
    linkedinUrl?: SortOrder
    coverLetter?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AtsCriterionCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    enabled?: SortOrder
    order?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtsCriterionAvgOrderByAggregateInput = {
    weight?: SortOrder
    order?: SortOrder
  }

  export type AtsCriterionMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    enabled?: SortOrder
    order?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtsCriterionMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    enabled?: SortOrder
    order?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtsCriterionSumOrderByAggregateInput = {
    weight?: SortOrder
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AtsSkillNameCategoryCompoundUniqueInput = {
    name: string
    category: string
  }

  export type AtsSkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    aliases?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
  }

  export type AtsSkillAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type AtsSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
  }

  export type AtsSkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
  }

  export type AtsSkillSumOrderByAggregateInput = {
    weight?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AtsCheckCountOrderByAggregateInput = {
    id?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    resumeFileName?: SortOrder
    jobId?: SortOrder
    jobTitle?: SortOrder
    hasJobDescription?: SortOrder
    overallScore?: SortOrder
    rating?: SortOrder
    breakdown?: SortOrder
    matchedKeywords?: SortOrder
    missingKeywords?: SortOrder
    wordCount?: SortOrder
    textPreview?: SortOrder
    createdAt?: SortOrder
  }

  export type AtsCheckAvgOrderByAggregateInput = {
    overallScore?: SortOrder
    wordCount?: SortOrder
  }

  export type AtsCheckMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    resumeFileName?: SortOrder
    jobId?: SortOrder
    jobTitle?: SortOrder
    hasJobDescription?: SortOrder
    overallScore?: SortOrder
    rating?: SortOrder
    wordCount?: SortOrder
    textPreview?: SortOrder
    createdAt?: SortOrder
  }

  export type AtsCheckMinOrderByAggregateInput = {
    id?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    resumeFileName?: SortOrder
    jobId?: SortOrder
    jobTitle?: SortOrder
    hasJobDescription?: SortOrder
    overallScore?: SortOrder
    rating?: SortOrder
    wordCount?: SortOrder
    textPreview?: SortOrder
    createdAt?: SortOrder
  }

  export type AtsCheckSumOrderByAggregateInput = {
    overallScore?: SortOrder
    wordCount?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type JobCreaterequirementsInput = {
    set: string[]
  }

  export type JobCreatebenefitsInput = {
    set: string[]
  }

  export type JobCreatetagsInput = {
    set: string[]
  }

  export type ApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobType
  }

  export type EnumExperienceLevelFieldUpdateOperationsInput = {
    set?: $Enums.ExperienceLevel
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobUpdaterequirementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JobUpdatebenefitsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JobUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput | ApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobInput | ApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobInput | ApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput | ApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobInput | ApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobInput | ApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    connect?: JobWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    upsert?: JobUpsertWithoutApplicationsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutApplicationsInput, JobUpdateWithoutApplicationsInput>, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AtsSkillCreatealiasesInput = {
    set: string[]
  }

  export type AtsSkillUpdatealiasesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AtsCheckCreatematchedKeywordsInput = {
    set: string[]
  }

  export type AtsCheckCreatemissingKeywordsInput = {
    set: string[]
  }

  export type AtsCheckUpdatematchedKeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AtsCheckUpdatemissingKeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type NestedEnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ApplicationCreateWithoutJobInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    experience?: string | null
    source?: string | null
    resumeUrl?: string | null
    linkedinUrl?: string | null
    coverLetter?: string | null
    createdAt?: Date | string
  }

  export type ApplicationUncheckedCreateWithoutJobInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    experience?: string | null
    source?: string | null
    resumeUrl?: string | null
    linkedinUrl?: string | null
    coverLetter?: string | null
    createdAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationCreateManyJobInputEnvelope = {
    data: ApplicationCreateManyJobInput | ApplicationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutJobInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    jobId?: StringFilter<"Application"> | string
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phone?: StringNullableFilter<"Application"> | string | null
    experience?: StringNullableFilter<"Application"> | string | null
    source?: StringNullableFilter<"Application"> | string | null
    resumeUrl?: StringNullableFilter<"Application"> | string | null
    linkedinUrl?: StringNullableFilter<"Application"> | string | null
    coverLetter?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type JobCreateWithoutApplicationsInput = {
    id?: string
    title: string
    company: string
    companyLogo?: string | null
    companyWebsite?: string | null
    location: string
    type: $Enums.JobType
    category: string
    experienceLevel: $Enums.ExperienceLevel
    remote?: boolean
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string
    description: string
    requirements?: JobCreaterequirementsInput | string[]
    benefits?: JobCreatebenefitsInput | string[]
    tags?: JobCreatetagsInput | string[]
    applyEmail?: string | null
    featured?: boolean
    status?: $Enums.JobStatus
    postedAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: string
    title: string
    company: string
    companyLogo?: string | null
    companyWebsite?: string | null
    location: string
    type: $Enums.JobType
    category: string
    experienceLevel: $Enums.ExperienceLevel
    remote?: boolean
    salaryMin?: number | null
    salaryMax?: number | null
    currency?: string
    description: string
    requirements?: JobCreaterequirementsInput | string[]
    benefits?: JobCreatebenefitsInput | string[]
    tags?: JobCreatetagsInput | string[]
    applyEmail?: string | null
    featured?: boolean
    status?: $Enums.JobStatus
    postedAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
  }

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    category?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    remote?: BoolFieldUpdateOperationsInput | boolean
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobUpdaterequirementsInput | string[]
    benefits?: JobUpdatebenefitsInput | string[]
    tags?: JobUpdatetagsInput | string[]
    applyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    category?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    remote?: BoolFieldUpdateOperationsInput | boolean
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: JobUpdaterequirementsInput | string[]
    benefits?: JobUpdatebenefitsInput | string[]
    tags?: JobUpdatetagsInput | string[]
    applyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyJobInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    experience?: string | null
    source?: string | null
    resumeUrl?: string | null
    linkedinUrl?: string | null
    coverLetter?: string | null
    createdAt?: Date | string
  }

  export type ApplicationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}