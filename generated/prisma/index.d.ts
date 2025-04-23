
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model skill
 * 
 */
export type skill = $Result.DefaultSelection<Prisma.$skillPayload>
/**
 * Model experience
 * 
 */
export type experience = $Result.DefaultSelection<Prisma.$experiencePayload>
/**
 * Model subscribers
 * 
 */
export type subscribers = $Result.DefaultSelection<Prisma.$subscribersPayload>
/**
 * Model userAdmin
 * 
 */
export type userAdmin = $Result.DefaultSelection<Prisma.$userAdminPayload>
/**
 * Model likeSubscribers
 * 
 */
export type likeSubscribers = $Result.DefaultSelection<Prisma.$likeSubscribersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Skills
 * const skills = await prisma.skill.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Skills
   * const skills = await prisma.skill.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.skill`: Exposes CRUD operations for the **skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.skillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.experienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscribers`: Exposes CRUD operations for the **subscribers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscribers
    * const subscribers = await prisma.subscribers.findMany()
    * ```
    */
  get subscribers(): Prisma.subscribersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAdmin`: Exposes CRUD operations for the **userAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAdmins
    * const userAdmins = await prisma.userAdmin.findMany()
    * ```
    */
  get userAdmin(): Prisma.userAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likeSubscribers`: Exposes CRUD operations for the **likeSubscribers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikeSubscribers
    * const likeSubscribers = await prisma.likeSubscribers.findMany()
    * ```
    */
  get likeSubscribers(): Prisma.likeSubscribersDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    skill: 'skill',
    experience: 'experience',
    subscribers: 'subscribers',
    userAdmin: 'userAdmin',
    likeSubscribers: 'likeSubscribers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "skill" | "experience" | "subscribers" | "userAdmin" | "likeSubscribers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      skill: {
        payload: Prisma.$skillPayload<ExtArgs>
        fields: Prisma.skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findFirst: {
            args: Prisma.skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findMany: {
            args: Prisma.skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          create: {
            args: Prisma.skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          createMany: {
            args: Prisma.skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          delete: {
            args: Prisma.skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          update: {
            args: Prisma.skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          deleteMany: {
            args: Prisma.skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          upsert: {
            args: Prisma.skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      experience: {
        payload: Prisma.$experiencePayload<ExtArgs>
        fields: Prisma.experienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.experienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.experienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          findFirst: {
            args: Prisma.experienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.experienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          findMany: {
            args: Prisma.experienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          create: {
            args: Prisma.experienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          createMany: {
            args: Prisma.experienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.experienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          delete: {
            args: Prisma.experienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          update: {
            args: Prisma.experienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          deleteMany: {
            args: Prisma.experienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.experienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.experienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          upsert: {
            args: Prisma.experienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.experienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.experienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      subscribers: {
        payload: Prisma.$subscribersPayload<ExtArgs>
        fields: Prisma.subscribersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subscribersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subscribersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload>
          }
          findFirst: {
            args: Prisma.subscribersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subscribersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload>
          }
          findMany: {
            args: Prisma.subscribersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload>[]
          }
          create: {
            args: Prisma.subscribersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload>
          }
          createMany: {
            args: Prisma.subscribersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subscribersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload>[]
          }
          delete: {
            args: Prisma.subscribersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload>
          }
          update: {
            args: Prisma.subscribersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload>
          }
          deleteMany: {
            args: Prisma.subscribersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subscribersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subscribersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload>[]
          }
          upsert: {
            args: Prisma.subscribersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscribersPayload>
          }
          aggregate: {
            args: Prisma.SubscribersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscribers>
          }
          groupBy: {
            args: Prisma.subscribersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscribersGroupByOutputType>[]
          }
          count: {
            args: Prisma.subscribersCountArgs<ExtArgs>
            result: $Utils.Optional<SubscribersCountAggregateOutputType> | number
          }
        }
      }
      userAdmin: {
        payload: Prisma.$userAdminPayload<ExtArgs>
        fields: Prisma.userAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload>
          }
          findFirst: {
            args: Prisma.userAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload>
          }
          findMany: {
            args: Prisma.userAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload>[]
          }
          create: {
            args: Prisma.userAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload>
          }
          createMany: {
            args: Prisma.userAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload>[]
          }
          delete: {
            args: Prisma.userAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload>
          }
          update: {
            args: Prisma.userAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload>
          }
          deleteMany: {
            args: Prisma.userAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userAdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload>[]
          }
          upsert: {
            args: Prisma.userAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAdminPayload>
          }
          aggregate: {
            args: Prisma.UserAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAdmin>
          }
          groupBy: {
            args: Prisma.userAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.userAdminCountArgs<ExtArgs>
            result: $Utils.Optional<UserAdminCountAggregateOutputType> | number
          }
        }
      }
      likeSubscribers: {
        payload: Prisma.$likeSubscribersPayload<ExtArgs>
        fields: Prisma.likeSubscribersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likeSubscribersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likeSubscribersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload>
          }
          findFirst: {
            args: Prisma.likeSubscribersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likeSubscribersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload>
          }
          findMany: {
            args: Prisma.likeSubscribersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload>[]
          }
          create: {
            args: Prisma.likeSubscribersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload>
          }
          createMany: {
            args: Prisma.likeSubscribersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.likeSubscribersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload>[]
          }
          delete: {
            args: Prisma.likeSubscribersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload>
          }
          update: {
            args: Prisma.likeSubscribersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload>
          }
          deleteMany: {
            args: Prisma.likeSubscribersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.likeSubscribersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.likeSubscribersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload>[]
          }
          upsert: {
            args: Prisma.likeSubscribersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likeSubscribersPayload>
          }
          aggregate: {
            args: Prisma.LikeSubscribersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikeSubscribers>
          }
          groupBy: {
            args: Prisma.likeSubscribersGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeSubscribersGroupByOutputType>[]
          }
          count: {
            args: Prisma.likeSubscribersCountArgs<ExtArgs>
            result: $Utils.Optional<LikeSubscribersCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    skill?: skillOmit
    experience?: experienceOmit
    subscribers?: subscribersOmit
    userAdmin?: userAdminOmit
    likeSubscribers?: likeSubscribersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type SubscribersCountOutputType
   */

  export type SubscribersCountOutputType = {
    likeSubscribers: number
  }

  export type SubscribersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likeSubscribers?: boolean | SubscribersCountOutputTypeCountLikeSubscribersArgs
  }

  // Custom InputTypes
  /**
   * SubscribersCountOutputType without action
   */
  export type SubscribersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribersCountOutputType
     */
    select?: SubscribersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscribersCountOutputType without action
   */
  export type SubscribersCountOutputTypeCountLikeSubscribersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeSubscribersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
    workedTime: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
    workedTime: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    workedTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    workedTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    title: number
    description: number
    workedTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
    workedTime?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
    workedTime?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    workedTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    workedTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    workedTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill to aggregate.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
    orderBy?: skillOrderByWithAggregationInput | skillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    title: string
    description: string
    workedTime: number
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    workedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type skillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    workedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type skillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    workedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type skillSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    workedTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "workedTime" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>

  export type $skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      workedTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type skillGetPayload<S extends boolean | null | undefined | skillDefaultArgs> = $Result.GetResult<Prisma.$skillPayload, S>

  type skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill'], meta: { name: 'skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {skillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillFindUniqueArgs>(args: SelectSubset<T, skillFindUniqueArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillFindUniqueOrThrowArgs>(args: SelectSubset<T, skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillFindFirstArgs>(args?: SelectSubset<T, skillFindFirstArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillFindFirstOrThrowArgs>(args?: SelectSubset<T, skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skillFindManyArgs>(args?: SelectSubset<T, skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {skillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends skillCreateArgs>(args: SelectSubset<T, skillCreateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {skillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillCreateManyArgs>(args?: SelectSubset<T, skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {skillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skillCreateManyAndReturnArgs>(args?: SelectSubset<T, skillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {skillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends skillDeleteArgs>(args: SelectSubset<T, skillDeleteArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {skillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillUpdateArgs>(args: SelectSubset<T, skillUpdateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {skillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillDeleteManyArgs>(args?: SelectSubset<T, skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillUpdateManyArgs>(args: SelectSubset<T, skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {skillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends skillUpdateManyAndReturnArgs>(args: SelectSubset<T, skillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {skillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends skillUpsertArgs>(args: SelectSubset<T, skillUpsertArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillCountArgs>(
      args?: Subset<T, skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillGroupByArgs} args - Group by arguments.
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
      T extends skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillGroupByArgs['orderBy'] }
        : { orderBy?: skillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill model
   */
  readonly fields: skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the skill model
   */
  interface skillFieldRefs {
    readonly id: FieldRef<"skill", 'Int'>
    readonly title: FieldRef<"skill", 'String'>
    readonly description: FieldRef<"skill", 'String'>
    readonly workedTime: FieldRef<"skill", 'Int'>
    readonly createdAt: FieldRef<"skill", 'DateTime'>
    readonly updatedAt: FieldRef<"skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skill findUnique
   */
  export type skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findUniqueOrThrow
   */
  export type skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findFirst
   */
  export type skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findFirstOrThrow
   */
  export type skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findMany
   */
  export type skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill create
   */
  export type skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data needed to create a skill.
     */
    data: XOR<skillCreateInput, skillUncheckedCreateInput>
  }

  /**
   * skill createMany
   */
  export type skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill createManyAndReturn
   */
  export type skillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill update
   */
  export type skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data needed to update a skill.
     */
    data: XOR<skillUpdateInput, skillUncheckedUpdateInput>
    /**
     * Choose, which skill to update.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill updateMany
   */
  export type skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skill updateManyAndReturn
   */
  export type skillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skill upsert
   */
  export type skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The filter to search for the skill to update in case it exists.
     */
    where: skillWhereUniqueInput
    /**
     * In case the skill found by the `where` argument doesn't exist, create a new skill with this data.
     */
    create: XOR<skillCreateInput, skillUncheckedCreateInput>
    /**
     * In case the skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillUpdateInput, skillUncheckedUpdateInput>
  }

  /**
   * skill delete
   */
  export type skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter which skill to delete.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill deleteMany
   */
  export type skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to delete.
     */
    limit?: number
  }

  /**
   * skill without action
   */
  export type skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
  }


  /**
   * Model experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    company: string | null
    position: string | null
    description: string | null
    yearStart: string | null
    yearEnd: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    company: string | null
    position: string | null
    description: string | null
    yearStart: string | null
    yearEnd: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    company: number
    position: number
    description: number
    yearStart: number
    yearEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true
  }

  export type ExperienceSumAggregateInputType = {
    id?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    company?: true
    position?: true
    description?: true
    yearStart?: true
    yearEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    company?: true
    position?: true
    description?: true
    yearStart?: true
    yearEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    company?: true
    position?: true
    description?: true
    yearStart?: true
    yearEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experience to aggregate.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type experienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: experienceWhereInput
    orderBy?: experienceOrderByWithAggregationInput | experienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: experienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: number
    company: string
    position: string
    description: string
    yearStart: string
    yearEnd: string
    createdAt: Date
    updatedAt: Date
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends experienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type experienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    position?: boolean
    description?: boolean
    yearStart?: boolean
    yearEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type experienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    position?: boolean
    description?: boolean
    yearStart?: boolean
    yearEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type experienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    position?: boolean
    description?: boolean
    yearStart?: boolean
    yearEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type experienceSelectScalar = {
    id?: boolean
    company?: boolean
    position?: boolean
    description?: boolean
    yearStart?: boolean
    yearEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type experienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "position" | "description" | "yearStart" | "yearEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["experience"]>

  export type $experiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "experience"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company: string
      position: string
      description: string
      yearStart: string
      yearEnd: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type experienceGetPayload<S extends boolean | null | undefined | experienceDefaultArgs> = $Result.GetResult<Prisma.$experiencePayload, S>

  type experienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<experienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface experienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['experience'], meta: { name: 'experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {experienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends experienceFindUniqueArgs>(args: SelectSubset<T, experienceFindUniqueArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {experienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends experienceFindUniqueOrThrowArgs>(args: SelectSubset<T, experienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends experienceFindFirstArgs>(args?: SelectSubset<T, experienceFindFirstArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends experienceFindFirstOrThrowArgs>(args?: SelectSubset<T, experienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends experienceFindManyArgs>(args?: SelectSubset<T, experienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {experienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends experienceCreateArgs>(args: SelectSubset<T, experienceCreateArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {experienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends experienceCreateManyArgs>(args?: SelectSubset<T, experienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {experienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends experienceCreateManyAndReturnArgs>(args?: SelectSubset<T, experienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {experienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends experienceDeleteArgs>(args: SelectSubset<T, experienceDeleteArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {experienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends experienceUpdateArgs>(args: SelectSubset<T, experienceUpdateArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {experienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends experienceDeleteManyArgs>(args?: SelectSubset<T, experienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends experienceUpdateManyArgs>(args: SelectSubset<T, experienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {experienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
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
    updateManyAndReturn<T extends experienceUpdateManyAndReturnArgs>(args: SelectSubset<T, experienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {experienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends experienceUpsertArgs>(args: SelectSubset<T, experienceUpsertArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends experienceCountArgs>(
      args?: Subset<T, experienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceGroupByArgs} args - Group by arguments.
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
      T extends experienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: experienceGroupByArgs['orderBy'] }
        : { orderBy?: experienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, experienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the experience model
   */
  readonly fields: experienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__experienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the experience model
   */
  interface experienceFieldRefs {
    readonly id: FieldRef<"experience", 'Int'>
    readonly company: FieldRef<"experience", 'String'>
    readonly position: FieldRef<"experience", 'String'>
    readonly description: FieldRef<"experience", 'String'>
    readonly yearStart: FieldRef<"experience", 'String'>
    readonly yearEnd: FieldRef<"experience", 'String'>
    readonly createdAt: FieldRef<"experience", 'DateTime'>
    readonly updatedAt: FieldRef<"experience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * experience findUnique
   */
  export type experienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience findUniqueOrThrow
   */
  export type experienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience findFirst
   */
  export type experienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience findFirstOrThrow
   */
  export type experienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience findMany
   */
  export type experienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Filter, which experiences to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience create
   */
  export type experienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * The data needed to create a experience.
     */
    data: XOR<experienceCreateInput, experienceUncheckedCreateInput>
  }

  /**
   * experience createMany
   */
  export type experienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many experiences.
     */
    data: experienceCreateManyInput | experienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * experience createManyAndReturn
   */
  export type experienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * The data used to create many experiences.
     */
    data: experienceCreateManyInput | experienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * experience update
   */
  export type experienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * The data needed to update a experience.
     */
    data: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>
    /**
     * Choose, which experience to update.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience updateMany
   */
  export type experienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update experiences.
     */
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyInput>
    /**
     * Filter which experiences to update
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to update.
     */
    limit?: number
  }

  /**
   * experience updateManyAndReturn
   */
  export type experienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * The data used to update experiences.
     */
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyInput>
    /**
     * Filter which experiences to update
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to update.
     */
    limit?: number
  }

  /**
   * experience upsert
   */
  export type experienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * The filter to search for the experience to update in case it exists.
     */
    where: experienceWhereUniqueInput
    /**
     * In case the experience found by the `where` argument doesn't exist, create a new experience with this data.
     */
    create: XOR<experienceCreateInput, experienceUncheckedCreateInput>
    /**
     * In case the experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>
  }

  /**
   * experience delete
   */
  export type experienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Filter which experience to delete.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience deleteMany
   */
  export type experienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experiences to delete
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to delete.
     */
    limit?: number
  }

  /**
   * experience without action
   */
  export type experienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
  }


  /**
   * Model subscribers
   */

  export type AggregateSubscribers = {
    _count: SubscribersCountAggregateOutputType | null
    _avg: SubscribersAvgAggregateOutputType | null
    _sum: SubscribersSumAggregateOutputType | null
    _min: SubscribersMinAggregateOutputType | null
    _max: SubscribersMaxAggregateOutputType | null
  }

  export type SubscribersAvgAggregateOutputType = {
    isConfirmed: number | null
  }

  export type SubscribersSumAggregateOutputType = {
    isConfirmed: number | null
  }

  export type SubscribersMinAggregateOutputType = {
    id: string | null
    email: string | null
    names: string | null
    lastNames: string | null
    phone: string | null
    isConfirmed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscribersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    names: string | null
    lastNames: string | null
    phone: string | null
    isConfirmed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscribersCountAggregateOutputType = {
    id: number
    email: number
    names: number
    lastNames: number
    phone: number
    isConfirmed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscribersAvgAggregateInputType = {
    isConfirmed?: true
  }

  export type SubscribersSumAggregateInputType = {
    isConfirmed?: true
  }

  export type SubscribersMinAggregateInputType = {
    id?: true
    email?: true
    names?: true
    lastNames?: true
    phone?: true
    isConfirmed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscribersMaxAggregateInputType = {
    id?: true
    email?: true
    names?: true
    lastNames?: true
    phone?: true
    isConfirmed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscribersCountAggregateInputType = {
    id?: true
    email?: true
    names?: true
    lastNames?: true
    phone?: true
    isConfirmed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscribersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscribers to aggregate.
     */
    where?: subscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscribers to fetch.
     */
    orderBy?: subscribersOrderByWithRelationInput | subscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subscribers
    **/
    _count?: true | SubscribersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscribersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscribersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscribersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscribersMaxAggregateInputType
  }

  export type GetSubscribersAggregateType<T extends SubscribersAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscribers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscribers[P]>
      : GetScalarType<T[P], AggregateSubscribers[P]>
  }




  export type subscribersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscribersWhereInput
    orderBy?: subscribersOrderByWithAggregationInput | subscribersOrderByWithAggregationInput[]
    by: SubscribersScalarFieldEnum[] | SubscribersScalarFieldEnum
    having?: subscribersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscribersCountAggregateInputType | true
    _avg?: SubscribersAvgAggregateInputType
    _sum?: SubscribersSumAggregateInputType
    _min?: SubscribersMinAggregateInputType
    _max?: SubscribersMaxAggregateInputType
  }

  export type SubscribersGroupByOutputType = {
    id: string
    email: string
    names: string | null
    lastNames: string | null
    phone: string | null
    isConfirmed: number | null
    createdAt: Date
    updatedAt: Date
    _count: SubscribersCountAggregateOutputType | null
    _avg: SubscribersAvgAggregateOutputType | null
    _sum: SubscribersSumAggregateOutputType | null
    _min: SubscribersMinAggregateOutputType | null
    _max: SubscribersMaxAggregateOutputType | null
  }

  type GetSubscribersGroupByPayload<T extends subscribersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscribersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscribersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscribersGroupByOutputType[P]>
            : GetScalarType<T[P], SubscribersGroupByOutputType[P]>
        }
      >
    >


  export type subscribersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    names?: boolean
    lastNames?: boolean
    phone?: boolean
    isConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    likeSubscribers?: boolean | subscribers$likeSubscribersArgs<ExtArgs>
    _count?: boolean | SubscribersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscribers"]>

  export type subscribersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    names?: boolean
    lastNames?: boolean
    phone?: boolean
    isConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscribers"]>

  export type subscribersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    names?: boolean
    lastNames?: boolean
    phone?: boolean
    isConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscribers"]>

  export type subscribersSelectScalar = {
    id?: boolean
    email?: boolean
    names?: boolean
    lastNames?: boolean
    phone?: boolean
    isConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type subscribersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "names" | "lastNames" | "phone" | "isConfirmed" | "createdAt" | "updatedAt", ExtArgs["result"]["subscribers"]>
  export type subscribersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likeSubscribers?: boolean | subscribers$likeSubscribersArgs<ExtArgs>
    _count?: boolean | SubscribersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subscribersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type subscribersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $subscribersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subscribers"
    objects: {
      likeSubscribers: Prisma.$likeSubscribersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      names: string | null
      lastNames: string | null
      phone: string | null
      isConfirmed: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscribers"]>
    composites: {}
  }

  type subscribersGetPayload<S extends boolean | null | undefined | subscribersDefaultArgs> = $Result.GetResult<Prisma.$subscribersPayload, S>

  type subscribersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subscribersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscribersCountAggregateInputType | true
    }

  export interface subscribersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subscribers'], meta: { name: 'subscribers' } }
    /**
     * Find zero or one Subscribers that matches the filter.
     * @param {subscribersFindUniqueArgs} args - Arguments to find a Subscribers
     * @example
     * // Get one Subscribers
     * const subscribers = await prisma.subscribers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subscribersFindUniqueArgs>(args: SelectSubset<T, subscribersFindUniqueArgs<ExtArgs>>): Prisma__subscribersClient<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscribers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subscribersFindUniqueOrThrowArgs} args - Arguments to find a Subscribers
     * @example
     * // Get one Subscribers
     * const subscribers = await prisma.subscribers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subscribersFindUniqueOrThrowArgs>(args: SelectSubset<T, subscribersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subscribersClient<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscribersFindFirstArgs} args - Arguments to find a Subscribers
     * @example
     * // Get one Subscribers
     * const subscribers = await prisma.subscribers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subscribersFindFirstArgs>(args?: SelectSubset<T, subscribersFindFirstArgs<ExtArgs>>): Prisma__subscribersClient<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscribers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscribersFindFirstOrThrowArgs} args - Arguments to find a Subscribers
     * @example
     * // Get one Subscribers
     * const subscribers = await prisma.subscribers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subscribersFindFirstOrThrowArgs>(args?: SelectSubset<T, subscribersFindFirstOrThrowArgs<ExtArgs>>): Prisma__subscribersClient<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscribersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscribers
     * const subscribers = await prisma.subscribers.findMany()
     * 
     * // Get first 10 Subscribers
     * const subscribers = await prisma.subscribers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscribersWithIdOnly = await prisma.subscribers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subscribersFindManyArgs>(args?: SelectSubset<T, subscribersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscribers.
     * @param {subscribersCreateArgs} args - Arguments to create a Subscribers.
     * @example
     * // Create one Subscribers
     * const Subscribers = await prisma.subscribers.create({
     *   data: {
     *     // ... data to create a Subscribers
     *   }
     * })
     * 
     */
    create<T extends subscribersCreateArgs>(args: SelectSubset<T, subscribersCreateArgs<ExtArgs>>): Prisma__subscribersClient<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscribers.
     * @param {subscribersCreateManyArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscribers = await prisma.subscribers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subscribersCreateManyArgs>(args?: SelectSubset<T, subscribersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscribers and returns the data saved in the database.
     * @param {subscribersCreateManyAndReturnArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscribers = await prisma.subscribers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscribers and only return the `id`
     * const subscribersWithIdOnly = await prisma.subscribers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subscribersCreateManyAndReturnArgs>(args?: SelectSubset<T, subscribersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscribers.
     * @param {subscribersDeleteArgs} args - Arguments to delete one Subscribers.
     * @example
     * // Delete one Subscribers
     * const Subscribers = await prisma.subscribers.delete({
     *   where: {
     *     // ... filter to delete one Subscribers
     *   }
     * })
     * 
     */
    delete<T extends subscribersDeleteArgs>(args: SelectSubset<T, subscribersDeleteArgs<ExtArgs>>): Prisma__subscribersClient<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscribers.
     * @param {subscribersUpdateArgs} args - Arguments to update one Subscribers.
     * @example
     * // Update one Subscribers
     * const subscribers = await prisma.subscribers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subscribersUpdateArgs>(args: SelectSubset<T, subscribersUpdateArgs<ExtArgs>>): Prisma__subscribersClient<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscribers.
     * @param {subscribersDeleteManyArgs} args - Arguments to filter Subscribers to delete.
     * @example
     * // Delete a few Subscribers
     * const { count } = await prisma.subscribers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subscribersDeleteManyArgs>(args?: SelectSubset<T, subscribersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscribersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscribers
     * const subscribers = await prisma.subscribers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subscribersUpdateManyArgs>(args: SelectSubset<T, subscribersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribers and returns the data updated in the database.
     * @param {subscribersUpdateManyAndReturnArgs} args - Arguments to update many Subscribers.
     * @example
     * // Update many Subscribers
     * const subscribers = await prisma.subscribers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscribers and only return the `id`
     * const subscribersWithIdOnly = await prisma.subscribers.updateManyAndReturn({
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
    updateManyAndReturn<T extends subscribersUpdateManyAndReturnArgs>(args: SelectSubset<T, subscribersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscribers.
     * @param {subscribersUpsertArgs} args - Arguments to update or create a Subscribers.
     * @example
     * // Update or create a Subscribers
     * const subscribers = await prisma.subscribers.upsert({
     *   create: {
     *     // ... data to create a Subscribers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscribers we want to update
     *   }
     * })
     */
    upsert<T extends subscribersUpsertArgs>(args: SelectSubset<T, subscribersUpsertArgs<ExtArgs>>): Prisma__subscribersClient<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscribersCountArgs} args - Arguments to filter Subscribers to count.
     * @example
     * // Count the number of Subscribers
     * const count = await prisma.subscribers.count({
     *   where: {
     *     // ... the filter for the Subscribers we want to count
     *   }
     * })
    **/
    count<T extends subscribersCountArgs>(
      args?: Subset<T, subscribersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscribersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscribersAggregateArgs>(args: Subset<T, SubscribersAggregateArgs>): Prisma.PrismaPromise<GetSubscribersAggregateType<T>>

    /**
     * Group by Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscribersGroupByArgs} args - Group by arguments.
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
      T extends subscribersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscribersGroupByArgs['orderBy'] }
        : { orderBy?: subscribersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subscribersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscribersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subscribers model
   */
  readonly fields: subscribersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscribers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscribersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likeSubscribers<T extends subscribers$likeSubscribersArgs<ExtArgs> = {}>(args?: Subset<T, subscribers$likeSubscribersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the subscribers model
   */
  interface subscribersFieldRefs {
    readonly id: FieldRef<"subscribers", 'String'>
    readonly email: FieldRef<"subscribers", 'String'>
    readonly names: FieldRef<"subscribers", 'String'>
    readonly lastNames: FieldRef<"subscribers", 'String'>
    readonly phone: FieldRef<"subscribers", 'String'>
    readonly isConfirmed: FieldRef<"subscribers", 'Int'>
    readonly createdAt: FieldRef<"subscribers", 'DateTime'>
    readonly updatedAt: FieldRef<"subscribers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subscribers findUnique
   */
  export type subscribersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscribersInclude<ExtArgs> | null
    /**
     * Filter, which subscribers to fetch.
     */
    where: subscribersWhereUniqueInput
  }

  /**
   * subscribers findUniqueOrThrow
   */
  export type subscribersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscribersInclude<ExtArgs> | null
    /**
     * Filter, which subscribers to fetch.
     */
    where: subscribersWhereUniqueInput
  }

  /**
   * subscribers findFirst
   */
  export type subscribersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscribersInclude<ExtArgs> | null
    /**
     * Filter, which subscribers to fetch.
     */
    where?: subscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscribers to fetch.
     */
    orderBy?: subscribersOrderByWithRelationInput | subscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscribers.
     */
    cursor?: subscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscribers.
     */
    distinct?: SubscribersScalarFieldEnum | SubscribersScalarFieldEnum[]
  }

  /**
   * subscribers findFirstOrThrow
   */
  export type subscribersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscribersInclude<ExtArgs> | null
    /**
     * Filter, which subscribers to fetch.
     */
    where?: subscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscribers to fetch.
     */
    orderBy?: subscribersOrderByWithRelationInput | subscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscribers.
     */
    cursor?: subscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscribers.
     */
    distinct?: SubscribersScalarFieldEnum | SubscribersScalarFieldEnum[]
  }

  /**
   * subscribers findMany
   */
  export type subscribersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscribersInclude<ExtArgs> | null
    /**
     * Filter, which subscribers to fetch.
     */
    where?: subscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscribers to fetch.
     */
    orderBy?: subscribersOrderByWithRelationInput | subscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subscribers.
     */
    cursor?: subscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscribers.
     */
    skip?: number
    distinct?: SubscribersScalarFieldEnum | SubscribersScalarFieldEnum[]
  }

  /**
   * subscribers create
   */
  export type subscribersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscribersInclude<ExtArgs> | null
    /**
     * The data needed to create a subscribers.
     */
    data: XOR<subscribersCreateInput, subscribersUncheckedCreateInput>
  }

  /**
   * subscribers createMany
   */
  export type subscribersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscribers.
     */
    data: subscribersCreateManyInput | subscribersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subscribers createManyAndReturn
   */
  export type subscribersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * The data used to create many subscribers.
     */
    data: subscribersCreateManyInput | subscribersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subscribers update
   */
  export type subscribersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscribersInclude<ExtArgs> | null
    /**
     * The data needed to update a subscribers.
     */
    data: XOR<subscribersUpdateInput, subscribersUncheckedUpdateInput>
    /**
     * Choose, which subscribers to update.
     */
    where: subscribersWhereUniqueInput
  }

  /**
   * subscribers updateMany
   */
  export type subscribersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscribers.
     */
    data: XOR<subscribersUpdateManyMutationInput, subscribersUncheckedUpdateManyInput>
    /**
     * Filter which subscribers to update
     */
    where?: subscribersWhereInput
    /**
     * Limit how many subscribers to update.
     */
    limit?: number
  }

  /**
   * subscribers updateManyAndReturn
   */
  export type subscribersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * The data used to update subscribers.
     */
    data: XOR<subscribersUpdateManyMutationInput, subscribersUncheckedUpdateManyInput>
    /**
     * Filter which subscribers to update
     */
    where?: subscribersWhereInput
    /**
     * Limit how many subscribers to update.
     */
    limit?: number
  }

  /**
   * subscribers upsert
   */
  export type subscribersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscribersInclude<ExtArgs> | null
    /**
     * The filter to search for the subscribers to update in case it exists.
     */
    where: subscribersWhereUniqueInput
    /**
     * In case the subscribers found by the `where` argument doesn't exist, create a new subscribers with this data.
     */
    create: XOR<subscribersCreateInput, subscribersUncheckedCreateInput>
    /**
     * In case the subscribers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscribersUpdateInput, subscribersUncheckedUpdateInput>
  }

  /**
   * subscribers delete
   */
  export type subscribersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscribersInclude<ExtArgs> | null
    /**
     * Filter which subscribers to delete.
     */
    where: subscribersWhereUniqueInput
  }

  /**
   * subscribers deleteMany
   */
  export type subscribersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscribers to delete
     */
    where?: subscribersWhereInput
    /**
     * Limit how many subscribers to delete.
     */
    limit?: number
  }

  /**
   * subscribers.likeSubscribers
   */
  export type subscribers$likeSubscribersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
    where?: likeSubscribersWhereInput
    orderBy?: likeSubscribersOrderByWithRelationInput | likeSubscribersOrderByWithRelationInput[]
    cursor?: likeSubscribersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeSubscribersScalarFieldEnum | LikeSubscribersScalarFieldEnum[]
  }

  /**
   * subscribers without action
   */
  export type subscribersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscribers
     */
    select?: subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscribers
     */
    omit?: subscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscribersInclude<ExtArgs> | null
  }


  /**
   * Model userAdmin
   */

  export type AggregateUserAdmin = {
    _count: UserAdminCountAggregateOutputType | null
    _avg: UserAdminAvgAggregateOutputType | null
    _sum: UserAdminSumAggregateOutputType | null
    _min: UserAdminMinAggregateOutputType | null
    _max: UserAdminMaxAggregateOutputType | null
  }

  export type UserAdminAvgAggregateOutputType = {
    isConfirmed: number | null
  }

  export type UserAdminSumAggregateOutputType = {
    isConfirmed: number | null
  }

  export type UserAdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    names: string | null
    lastNames: string | null
    phone: string | null
    password: string | null
    isConfirmed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    names: string | null
    lastNames: string | null
    phone: string | null
    password: string | null
    isConfirmed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAdminCountAggregateOutputType = {
    id: number
    email: number
    names: number
    lastNames: number
    phone: number
    password: number
    isConfirmed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAdminAvgAggregateInputType = {
    isConfirmed?: true
  }

  export type UserAdminSumAggregateInputType = {
    isConfirmed?: true
  }

  export type UserAdminMinAggregateInputType = {
    id?: true
    email?: true
    names?: true
    lastNames?: true
    phone?: true
    password?: true
    isConfirmed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAdminMaxAggregateInputType = {
    id?: true
    email?: true
    names?: true
    lastNames?: true
    phone?: true
    password?: true
    isConfirmed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAdminCountAggregateInputType = {
    id?: true
    email?: true
    names?: true
    lastNames?: true
    phone?: true
    password?: true
    isConfirmed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userAdmin to aggregate.
     */
    where?: userAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAdmins to fetch.
     */
    orderBy?: userAdminOrderByWithRelationInput | userAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userAdmins
    **/
    _count?: true | UserAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAdminMaxAggregateInputType
  }

  export type GetUserAdminAggregateType<T extends UserAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAdmin[P]>
      : GetScalarType<T[P], AggregateUserAdmin[P]>
  }




  export type userAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userAdminWhereInput
    orderBy?: userAdminOrderByWithAggregationInput | userAdminOrderByWithAggregationInput[]
    by: UserAdminScalarFieldEnum[] | UserAdminScalarFieldEnum
    having?: userAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAdminCountAggregateInputType | true
    _avg?: UserAdminAvgAggregateInputType
    _sum?: UserAdminSumAggregateInputType
    _min?: UserAdminMinAggregateInputType
    _max?: UserAdminMaxAggregateInputType
  }

  export type UserAdminGroupByOutputType = {
    id: string
    email: string
    names: string | null
    lastNames: string | null
    phone: string | null
    password: string
    isConfirmed: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserAdminCountAggregateOutputType | null
    _avg: UserAdminAvgAggregateOutputType | null
    _sum: UserAdminSumAggregateOutputType | null
    _min: UserAdminMinAggregateOutputType | null
    _max: UserAdminMaxAggregateOutputType | null
  }

  type GetUserAdminGroupByPayload<T extends userAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAdminGroupByOutputType[P]>
            : GetScalarType<T[P], UserAdminGroupByOutputType[P]>
        }
      >
    >


  export type userAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    names?: boolean
    lastNames?: boolean
    phone?: boolean
    password?: boolean
    isConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userAdmin"]>

  export type userAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    names?: boolean
    lastNames?: boolean
    phone?: boolean
    password?: boolean
    isConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userAdmin"]>

  export type userAdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    names?: boolean
    lastNames?: boolean
    phone?: boolean
    password?: boolean
    isConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userAdmin"]>

  export type userAdminSelectScalar = {
    id?: boolean
    email?: boolean
    names?: boolean
    lastNames?: boolean
    phone?: boolean
    password?: boolean
    isConfirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "names" | "lastNames" | "phone" | "password" | "isConfirmed" | "createdAt" | "updatedAt", ExtArgs["result"]["userAdmin"]>

  export type $userAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      names: string | null
      lastNames: string | null
      phone: string | null
      password: string
      isConfirmed: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAdmin"]>
    composites: {}
  }

  type userAdminGetPayload<S extends boolean | null | undefined | userAdminDefaultArgs> = $Result.GetResult<Prisma.$userAdminPayload, S>

  type userAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAdminCountAggregateInputType | true
    }

  export interface userAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userAdmin'], meta: { name: 'userAdmin' } }
    /**
     * Find zero or one UserAdmin that matches the filter.
     * @param {userAdminFindUniqueArgs} args - Arguments to find a UserAdmin
     * @example
     * // Get one UserAdmin
     * const userAdmin = await prisma.userAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userAdminFindUniqueArgs>(args: SelectSubset<T, userAdminFindUniqueArgs<ExtArgs>>): Prisma__userAdminClient<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userAdminFindUniqueOrThrowArgs} args - Arguments to find a UserAdmin
     * @example
     * // Get one UserAdmin
     * const userAdmin = await prisma.userAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, userAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userAdminClient<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAdminFindFirstArgs} args - Arguments to find a UserAdmin
     * @example
     * // Get one UserAdmin
     * const userAdmin = await prisma.userAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userAdminFindFirstArgs>(args?: SelectSubset<T, userAdminFindFirstArgs<ExtArgs>>): Prisma__userAdminClient<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAdminFindFirstOrThrowArgs} args - Arguments to find a UserAdmin
     * @example
     * // Get one UserAdmin
     * const userAdmin = await prisma.userAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, userAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__userAdminClient<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAdmins
     * const userAdmins = await prisma.userAdmin.findMany()
     * 
     * // Get first 10 UserAdmins
     * const userAdmins = await prisma.userAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAdminWithIdOnly = await prisma.userAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userAdminFindManyArgs>(args?: SelectSubset<T, userAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAdmin.
     * @param {userAdminCreateArgs} args - Arguments to create a UserAdmin.
     * @example
     * // Create one UserAdmin
     * const UserAdmin = await prisma.userAdmin.create({
     *   data: {
     *     // ... data to create a UserAdmin
     *   }
     * })
     * 
     */
    create<T extends userAdminCreateArgs>(args: SelectSubset<T, userAdminCreateArgs<ExtArgs>>): Prisma__userAdminClient<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAdmins.
     * @param {userAdminCreateManyArgs} args - Arguments to create many UserAdmins.
     * @example
     * // Create many UserAdmins
     * const userAdmin = await prisma.userAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userAdminCreateManyArgs>(args?: SelectSubset<T, userAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAdmins and returns the data saved in the database.
     * @param {userAdminCreateManyAndReturnArgs} args - Arguments to create many UserAdmins.
     * @example
     * // Create many UserAdmins
     * const userAdmin = await prisma.userAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAdmins and only return the `id`
     * const userAdminWithIdOnly = await prisma.userAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, userAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAdmin.
     * @param {userAdminDeleteArgs} args - Arguments to delete one UserAdmin.
     * @example
     * // Delete one UserAdmin
     * const UserAdmin = await prisma.userAdmin.delete({
     *   where: {
     *     // ... filter to delete one UserAdmin
     *   }
     * })
     * 
     */
    delete<T extends userAdminDeleteArgs>(args: SelectSubset<T, userAdminDeleteArgs<ExtArgs>>): Prisma__userAdminClient<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAdmin.
     * @param {userAdminUpdateArgs} args - Arguments to update one UserAdmin.
     * @example
     * // Update one UserAdmin
     * const userAdmin = await prisma.userAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userAdminUpdateArgs>(args: SelectSubset<T, userAdminUpdateArgs<ExtArgs>>): Prisma__userAdminClient<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAdmins.
     * @param {userAdminDeleteManyArgs} args - Arguments to filter UserAdmins to delete.
     * @example
     * // Delete a few UserAdmins
     * const { count } = await prisma.userAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userAdminDeleteManyArgs>(args?: SelectSubset<T, userAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAdmins
     * const userAdmin = await prisma.userAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userAdminUpdateManyArgs>(args: SelectSubset<T, userAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAdmins and returns the data updated in the database.
     * @param {userAdminUpdateManyAndReturnArgs} args - Arguments to update many UserAdmins.
     * @example
     * // Update many UserAdmins
     * const userAdmin = await prisma.userAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAdmins and only return the `id`
     * const userAdminWithIdOnly = await prisma.userAdmin.updateManyAndReturn({
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
    updateManyAndReturn<T extends userAdminUpdateManyAndReturnArgs>(args: SelectSubset<T, userAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAdmin.
     * @param {userAdminUpsertArgs} args - Arguments to update or create a UserAdmin.
     * @example
     * // Update or create a UserAdmin
     * const userAdmin = await prisma.userAdmin.upsert({
     *   create: {
     *     // ... data to create a UserAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAdmin we want to update
     *   }
     * })
     */
    upsert<T extends userAdminUpsertArgs>(args: SelectSubset<T, userAdminUpsertArgs<ExtArgs>>): Prisma__userAdminClient<$Result.GetResult<Prisma.$userAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAdminCountArgs} args - Arguments to filter UserAdmins to count.
     * @example
     * // Count the number of UserAdmins
     * const count = await prisma.userAdmin.count({
     *   where: {
     *     // ... the filter for the UserAdmins we want to count
     *   }
     * })
    **/
    count<T extends userAdminCountArgs>(
      args?: Subset<T, userAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAdminAggregateArgs>(args: Subset<T, UserAdminAggregateArgs>): Prisma.PrismaPromise<GetUserAdminAggregateType<T>>

    /**
     * Group by UserAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAdminGroupByArgs} args - Group by arguments.
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
      T extends userAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userAdminGroupByArgs['orderBy'] }
        : { orderBy?: userAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userAdmin model
   */
  readonly fields: userAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the userAdmin model
   */
  interface userAdminFieldRefs {
    readonly id: FieldRef<"userAdmin", 'String'>
    readonly email: FieldRef<"userAdmin", 'String'>
    readonly names: FieldRef<"userAdmin", 'String'>
    readonly lastNames: FieldRef<"userAdmin", 'String'>
    readonly phone: FieldRef<"userAdmin", 'String'>
    readonly password: FieldRef<"userAdmin", 'String'>
    readonly isConfirmed: FieldRef<"userAdmin", 'Int'>
    readonly createdAt: FieldRef<"userAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"userAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * userAdmin findUnique
   */
  export type userAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * Filter, which userAdmin to fetch.
     */
    where: userAdminWhereUniqueInput
  }

  /**
   * userAdmin findUniqueOrThrow
   */
  export type userAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * Filter, which userAdmin to fetch.
     */
    where: userAdminWhereUniqueInput
  }

  /**
   * userAdmin findFirst
   */
  export type userAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * Filter, which userAdmin to fetch.
     */
    where?: userAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAdmins to fetch.
     */
    orderBy?: userAdminOrderByWithRelationInput | userAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userAdmins.
     */
    cursor?: userAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userAdmins.
     */
    distinct?: UserAdminScalarFieldEnum | UserAdminScalarFieldEnum[]
  }

  /**
   * userAdmin findFirstOrThrow
   */
  export type userAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * Filter, which userAdmin to fetch.
     */
    where?: userAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAdmins to fetch.
     */
    orderBy?: userAdminOrderByWithRelationInput | userAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userAdmins.
     */
    cursor?: userAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userAdmins.
     */
    distinct?: UserAdminScalarFieldEnum | UserAdminScalarFieldEnum[]
  }

  /**
   * userAdmin findMany
   */
  export type userAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * Filter, which userAdmins to fetch.
     */
    where?: userAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAdmins to fetch.
     */
    orderBy?: userAdminOrderByWithRelationInput | userAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userAdmins.
     */
    cursor?: userAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAdmins.
     */
    skip?: number
    distinct?: UserAdminScalarFieldEnum | UserAdminScalarFieldEnum[]
  }

  /**
   * userAdmin create
   */
  export type userAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * The data needed to create a userAdmin.
     */
    data: XOR<userAdminCreateInput, userAdminUncheckedCreateInput>
  }

  /**
   * userAdmin createMany
   */
  export type userAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userAdmins.
     */
    data: userAdminCreateManyInput | userAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userAdmin createManyAndReturn
   */
  export type userAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * The data used to create many userAdmins.
     */
    data: userAdminCreateManyInput | userAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userAdmin update
   */
  export type userAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * The data needed to update a userAdmin.
     */
    data: XOR<userAdminUpdateInput, userAdminUncheckedUpdateInput>
    /**
     * Choose, which userAdmin to update.
     */
    where: userAdminWhereUniqueInput
  }

  /**
   * userAdmin updateMany
   */
  export type userAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userAdmins.
     */
    data: XOR<userAdminUpdateManyMutationInput, userAdminUncheckedUpdateManyInput>
    /**
     * Filter which userAdmins to update
     */
    where?: userAdminWhereInput
    /**
     * Limit how many userAdmins to update.
     */
    limit?: number
  }

  /**
   * userAdmin updateManyAndReturn
   */
  export type userAdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * The data used to update userAdmins.
     */
    data: XOR<userAdminUpdateManyMutationInput, userAdminUncheckedUpdateManyInput>
    /**
     * Filter which userAdmins to update
     */
    where?: userAdminWhereInput
    /**
     * Limit how many userAdmins to update.
     */
    limit?: number
  }

  /**
   * userAdmin upsert
   */
  export type userAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * The filter to search for the userAdmin to update in case it exists.
     */
    where: userAdminWhereUniqueInput
    /**
     * In case the userAdmin found by the `where` argument doesn't exist, create a new userAdmin with this data.
     */
    create: XOR<userAdminCreateInput, userAdminUncheckedCreateInput>
    /**
     * In case the userAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userAdminUpdateInput, userAdminUncheckedUpdateInput>
  }

  /**
   * userAdmin delete
   */
  export type userAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
    /**
     * Filter which userAdmin to delete.
     */
    where: userAdminWhereUniqueInput
  }

  /**
   * userAdmin deleteMany
   */
  export type userAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userAdmins to delete
     */
    where?: userAdminWhereInput
    /**
     * Limit how many userAdmins to delete.
     */
    limit?: number
  }

  /**
   * userAdmin without action
   */
  export type userAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAdmin
     */
    select?: userAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAdmin
     */
    omit?: userAdminOmit<ExtArgs> | null
  }


  /**
   * Model likeSubscribers
   */

  export type AggregateLikeSubscribers = {
    _count: LikeSubscribersCountAggregateOutputType | null
    _avg: LikeSubscribersAvgAggregateOutputType | null
    _sum: LikeSubscribersSumAggregateOutputType | null
    _min: LikeSubscribersMinAggregateOutputType | null
    _max: LikeSubscribersMaxAggregateOutputType | null
  }

  export type LikeSubscribersAvgAggregateOutputType = {
    id: number | null
  }

  export type LikeSubscribersSumAggregateOutputType = {
    id: number | null
  }

  export type LikeSubscribersMinAggregateOutputType = {
    id: number | null
    subscriberId: string | null
    urlSection: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikeSubscribersMaxAggregateOutputType = {
    id: number | null
    subscriberId: string | null
    urlSection: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikeSubscribersCountAggregateOutputType = {
    id: number
    subscriberId: number
    urlSection: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LikeSubscribersAvgAggregateInputType = {
    id?: true
  }

  export type LikeSubscribersSumAggregateInputType = {
    id?: true
  }

  export type LikeSubscribersMinAggregateInputType = {
    id?: true
    subscriberId?: true
    urlSection?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikeSubscribersMaxAggregateInputType = {
    id?: true
    subscriberId?: true
    urlSection?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikeSubscribersCountAggregateInputType = {
    id?: true
    subscriberId?: true
    urlSection?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikeSubscribersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likeSubscribers to aggregate.
     */
    where?: likeSubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likeSubscribers to fetch.
     */
    orderBy?: likeSubscribersOrderByWithRelationInput | likeSubscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likeSubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likeSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likeSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likeSubscribers
    **/
    _count?: true | LikeSubscribersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeSubscribersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSubscribersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeSubscribersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeSubscribersMaxAggregateInputType
  }

  export type GetLikeSubscribersAggregateType<T extends LikeSubscribersAggregateArgs> = {
        [P in keyof T & keyof AggregateLikeSubscribers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikeSubscribers[P]>
      : GetScalarType<T[P], AggregateLikeSubscribers[P]>
  }




  export type likeSubscribersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likeSubscribersWhereInput
    orderBy?: likeSubscribersOrderByWithAggregationInput | likeSubscribersOrderByWithAggregationInput[]
    by: LikeSubscribersScalarFieldEnum[] | LikeSubscribersScalarFieldEnum
    having?: likeSubscribersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeSubscribersCountAggregateInputType | true
    _avg?: LikeSubscribersAvgAggregateInputType
    _sum?: LikeSubscribersSumAggregateInputType
    _min?: LikeSubscribersMinAggregateInputType
    _max?: LikeSubscribersMaxAggregateInputType
  }

  export type LikeSubscribersGroupByOutputType = {
    id: number
    subscriberId: string
    urlSection: string
    createdAt: Date
    updatedAt: Date
    _count: LikeSubscribersCountAggregateOutputType | null
    _avg: LikeSubscribersAvgAggregateOutputType | null
    _sum: LikeSubscribersSumAggregateOutputType | null
    _min: LikeSubscribersMinAggregateOutputType | null
    _max: LikeSubscribersMaxAggregateOutputType | null
  }

  type GetLikeSubscribersGroupByPayload<T extends likeSubscribersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeSubscribersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeSubscribersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeSubscribersGroupByOutputType[P]>
            : GetScalarType<T[P], LikeSubscribersGroupByOutputType[P]>
        }
      >
    >


  export type likeSubscribersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriberId?: boolean
    urlSection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriber?: boolean | subscribersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeSubscribers"]>

  export type likeSubscribersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriberId?: boolean
    urlSection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriber?: boolean | subscribersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeSubscribers"]>

  export type likeSubscribersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriberId?: boolean
    urlSection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriber?: boolean | subscribersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeSubscribers"]>

  export type likeSubscribersSelectScalar = {
    id?: boolean
    subscriberId?: boolean
    urlSection?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type likeSubscribersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriberId" | "urlSection" | "createdAt" | "updatedAt", ExtArgs["result"]["likeSubscribers"]>
  export type likeSubscribersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriber?: boolean | subscribersDefaultArgs<ExtArgs>
  }
  export type likeSubscribersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriber?: boolean | subscribersDefaultArgs<ExtArgs>
  }
  export type likeSubscribersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriber?: boolean | subscribersDefaultArgs<ExtArgs>
  }

  export type $likeSubscribersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "likeSubscribers"
    objects: {
      subscriber: Prisma.$subscribersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subscriberId: string
      urlSection: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["likeSubscribers"]>
    composites: {}
  }

  type likeSubscribersGetPayload<S extends boolean | null | undefined | likeSubscribersDefaultArgs> = $Result.GetResult<Prisma.$likeSubscribersPayload, S>

  type likeSubscribersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<likeSubscribersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeSubscribersCountAggregateInputType | true
    }

  export interface likeSubscribersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['likeSubscribers'], meta: { name: 'likeSubscribers' } }
    /**
     * Find zero or one LikeSubscribers that matches the filter.
     * @param {likeSubscribersFindUniqueArgs} args - Arguments to find a LikeSubscribers
     * @example
     * // Get one LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends likeSubscribersFindUniqueArgs>(args: SelectSubset<T, likeSubscribersFindUniqueArgs<ExtArgs>>): Prisma__likeSubscribersClient<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikeSubscribers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {likeSubscribersFindUniqueOrThrowArgs} args - Arguments to find a LikeSubscribers
     * @example
     * // Get one LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends likeSubscribersFindUniqueOrThrowArgs>(args: SelectSubset<T, likeSubscribersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__likeSubscribersClient<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikeSubscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeSubscribersFindFirstArgs} args - Arguments to find a LikeSubscribers
     * @example
     * // Get one LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends likeSubscribersFindFirstArgs>(args?: SelectSubset<T, likeSubscribersFindFirstArgs<ExtArgs>>): Prisma__likeSubscribersClient<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikeSubscribers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeSubscribersFindFirstOrThrowArgs} args - Arguments to find a LikeSubscribers
     * @example
     * // Get one LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends likeSubscribersFindFirstOrThrowArgs>(args?: SelectSubset<T, likeSubscribersFindFirstOrThrowArgs<ExtArgs>>): Prisma__likeSubscribersClient<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikeSubscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeSubscribersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.findMany()
     * 
     * // Get first 10 LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeSubscribersWithIdOnly = await prisma.likeSubscribers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends likeSubscribersFindManyArgs>(args?: SelectSubset<T, likeSubscribersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikeSubscribers.
     * @param {likeSubscribersCreateArgs} args - Arguments to create a LikeSubscribers.
     * @example
     * // Create one LikeSubscribers
     * const LikeSubscribers = await prisma.likeSubscribers.create({
     *   data: {
     *     // ... data to create a LikeSubscribers
     *   }
     * })
     * 
     */
    create<T extends likeSubscribersCreateArgs>(args: SelectSubset<T, likeSubscribersCreateArgs<ExtArgs>>): Prisma__likeSubscribersClient<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikeSubscribers.
     * @param {likeSubscribersCreateManyArgs} args - Arguments to create many LikeSubscribers.
     * @example
     * // Create many LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends likeSubscribersCreateManyArgs>(args?: SelectSubset<T, likeSubscribersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikeSubscribers and returns the data saved in the database.
     * @param {likeSubscribersCreateManyAndReturnArgs} args - Arguments to create many LikeSubscribers.
     * @example
     * // Create many LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikeSubscribers and only return the `id`
     * const likeSubscribersWithIdOnly = await prisma.likeSubscribers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends likeSubscribersCreateManyAndReturnArgs>(args?: SelectSubset<T, likeSubscribersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LikeSubscribers.
     * @param {likeSubscribersDeleteArgs} args - Arguments to delete one LikeSubscribers.
     * @example
     * // Delete one LikeSubscribers
     * const LikeSubscribers = await prisma.likeSubscribers.delete({
     *   where: {
     *     // ... filter to delete one LikeSubscribers
     *   }
     * })
     * 
     */
    delete<T extends likeSubscribersDeleteArgs>(args: SelectSubset<T, likeSubscribersDeleteArgs<ExtArgs>>): Prisma__likeSubscribersClient<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikeSubscribers.
     * @param {likeSubscribersUpdateArgs} args - Arguments to update one LikeSubscribers.
     * @example
     * // Update one LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends likeSubscribersUpdateArgs>(args: SelectSubset<T, likeSubscribersUpdateArgs<ExtArgs>>): Prisma__likeSubscribersClient<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikeSubscribers.
     * @param {likeSubscribersDeleteManyArgs} args - Arguments to filter LikeSubscribers to delete.
     * @example
     * // Delete a few LikeSubscribers
     * const { count } = await prisma.likeSubscribers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends likeSubscribersDeleteManyArgs>(args?: SelectSubset<T, likeSubscribersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikeSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeSubscribersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends likeSubscribersUpdateManyArgs>(args: SelectSubset<T, likeSubscribersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikeSubscribers and returns the data updated in the database.
     * @param {likeSubscribersUpdateManyAndReturnArgs} args - Arguments to update many LikeSubscribers.
     * @example
     * // Update many LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikeSubscribers and only return the `id`
     * const likeSubscribersWithIdOnly = await prisma.likeSubscribers.updateManyAndReturn({
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
    updateManyAndReturn<T extends likeSubscribersUpdateManyAndReturnArgs>(args: SelectSubset<T, likeSubscribersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LikeSubscribers.
     * @param {likeSubscribersUpsertArgs} args - Arguments to update or create a LikeSubscribers.
     * @example
     * // Update or create a LikeSubscribers
     * const likeSubscribers = await prisma.likeSubscribers.upsert({
     *   create: {
     *     // ... data to create a LikeSubscribers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikeSubscribers we want to update
     *   }
     * })
     */
    upsert<T extends likeSubscribersUpsertArgs>(args: SelectSubset<T, likeSubscribersUpsertArgs<ExtArgs>>): Prisma__likeSubscribersClient<$Result.GetResult<Prisma.$likeSubscribersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LikeSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeSubscribersCountArgs} args - Arguments to filter LikeSubscribers to count.
     * @example
     * // Count the number of LikeSubscribers
     * const count = await prisma.likeSubscribers.count({
     *   where: {
     *     // ... the filter for the LikeSubscribers we want to count
     *   }
     * })
    **/
    count<T extends likeSubscribersCountArgs>(
      args?: Subset<T, likeSubscribersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeSubscribersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikeSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeSubscribersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeSubscribersAggregateArgs>(args: Subset<T, LikeSubscribersAggregateArgs>): Prisma.PrismaPromise<GetLikeSubscribersAggregateType<T>>

    /**
     * Group by LikeSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeSubscribersGroupByArgs} args - Group by arguments.
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
      T extends likeSubscribersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likeSubscribersGroupByArgs['orderBy'] }
        : { orderBy?: likeSubscribersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, likeSubscribersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeSubscribersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the likeSubscribers model
   */
  readonly fields: likeSubscribersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for likeSubscribers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likeSubscribersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriber<T extends subscribersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subscribersDefaultArgs<ExtArgs>>): Prisma__subscribersClient<$Result.GetResult<Prisma.$subscribersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the likeSubscribers model
   */
  interface likeSubscribersFieldRefs {
    readonly id: FieldRef<"likeSubscribers", 'Int'>
    readonly subscriberId: FieldRef<"likeSubscribers", 'String'>
    readonly urlSection: FieldRef<"likeSubscribers", 'String'>
    readonly createdAt: FieldRef<"likeSubscribers", 'DateTime'>
    readonly updatedAt: FieldRef<"likeSubscribers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * likeSubscribers findUnique
   */
  export type likeSubscribersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
    /**
     * Filter, which likeSubscribers to fetch.
     */
    where: likeSubscribersWhereUniqueInput
  }

  /**
   * likeSubscribers findUniqueOrThrow
   */
  export type likeSubscribersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
    /**
     * Filter, which likeSubscribers to fetch.
     */
    where: likeSubscribersWhereUniqueInput
  }

  /**
   * likeSubscribers findFirst
   */
  export type likeSubscribersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
    /**
     * Filter, which likeSubscribers to fetch.
     */
    where?: likeSubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likeSubscribers to fetch.
     */
    orderBy?: likeSubscribersOrderByWithRelationInput | likeSubscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likeSubscribers.
     */
    cursor?: likeSubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likeSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likeSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likeSubscribers.
     */
    distinct?: LikeSubscribersScalarFieldEnum | LikeSubscribersScalarFieldEnum[]
  }

  /**
   * likeSubscribers findFirstOrThrow
   */
  export type likeSubscribersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
    /**
     * Filter, which likeSubscribers to fetch.
     */
    where?: likeSubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likeSubscribers to fetch.
     */
    orderBy?: likeSubscribersOrderByWithRelationInput | likeSubscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likeSubscribers.
     */
    cursor?: likeSubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likeSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likeSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likeSubscribers.
     */
    distinct?: LikeSubscribersScalarFieldEnum | LikeSubscribersScalarFieldEnum[]
  }

  /**
   * likeSubscribers findMany
   */
  export type likeSubscribersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
    /**
     * Filter, which likeSubscribers to fetch.
     */
    where?: likeSubscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likeSubscribers to fetch.
     */
    orderBy?: likeSubscribersOrderByWithRelationInput | likeSubscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likeSubscribers.
     */
    cursor?: likeSubscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likeSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likeSubscribers.
     */
    skip?: number
    distinct?: LikeSubscribersScalarFieldEnum | LikeSubscribersScalarFieldEnum[]
  }

  /**
   * likeSubscribers create
   */
  export type likeSubscribersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
    /**
     * The data needed to create a likeSubscribers.
     */
    data: XOR<likeSubscribersCreateInput, likeSubscribersUncheckedCreateInput>
  }

  /**
   * likeSubscribers createMany
   */
  export type likeSubscribersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likeSubscribers.
     */
    data: likeSubscribersCreateManyInput | likeSubscribersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * likeSubscribers createManyAndReturn
   */
  export type likeSubscribersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * The data used to create many likeSubscribers.
     */
    data: likeSubscribersCreateManyInput | likeSubscribersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * likeSubscribers update
   */
  export type likeSubscribersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
    /**
     * The data needed to update a likeSubscribers.
     */
    data: XOR<likeSubscribersUpdateInput, likeSubscribersUncheckedUpdateInput>
    /**
     * Choose, which likeSubscribers to update.
     */
    where: likeSubscribersWhereUniqueInput
  }

  /**
   * likeSubscribers updateMany
   */
  export type likeSubscribersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likeSubscribers.
     */
    data: XOR<likeSubscribersUpdateManyMutationInput, likeSubscribersUncheckedUpdateManyInput>
    /**
     * Filter which likeSubscribers to update
     */
    where?: likeSubscribersWhereInput
    /**
     * Limit how many likeSubscribers to update.
     */
    limit?: number
  }

  /**
   * likeSubscribers updateManyAndReturn
   */
  export type likeSubscribersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * The data used to update likeSubscribers.
     */
    data: XOR<likeSubscribersUpdateManyMutationInput, likeSubscribersUncheckedUpdateManyInput>
    /**
     * Filter which likeSubscribers to update
     */
    where?: likeSubscribersWhereInput
    /**
     * Limit how many likeSubscribers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * likeSubscribers upsert
   */
  export type likeSubscribersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
    /**
     * The filter to search for the likeSubscribers to update in case it exists.
     */
    where: likeSubscribersWhereUniqueInput
    /**
     * In case the likeSubscribers found by the `where` argument doesn't exist, create a new likeSubscribers with this data.
     */
    create: XOR<likeSubscribersCreateInput, likeSubscribersUncheckedCreateInput>
    /**
     * In case the likeSubscribers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likeSubscribersUpdateInput, likeSubscribersUncheckedUpdateInput>
  }

  /**
   * likeSubscribers delete
   */
  export type likeSubscribersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
    /**
     * Filter which likeSubscribers to delete.
     */
    where: likeSubscribersWhereUniqueInput
  }

  /**
   * likeSubscribers deleteMany
   */
  export type likeSubscribersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likeSubscribers to delete
     */
    where?: likeSubscribersWhereInput
    /**
     * Limit how many likeSubscribers to delete.
     */
    limit?: number
  }

  /**
   * likeSubscribers without action
   */
  export type likeSubscribersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likeSubscribers
     */
    select?: likeSubscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likeSubscribers
     */
    omit?: likeSubscribersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeSubscribersInclude<ExtArgs> | null
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


  export const SkillScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    workedTime: 'workedTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    company: 'company',
    position: 'position',
    description: 'description',
    yearStart: 'yearStart',
    yearEnd: 'yearEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const SubscribersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    names: 'names',
    lastNames: 'lastNames',
    phone: 'phone',
    isConfirmed: 'isConfirmed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscribersScalarFieldEnum = (typeof SubscribersScalarFieldEnum)[keyof typeof SubscribersScalarFieldEnum]


  export const UserAdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    names: 'names',
    lastNames: 'lastNames',
    phone: 'phone',
    password: 'password',
    isConfirmed: 'isConfirmed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAdminScalarFieldEnum = (typeof UserAdminScalarFieldEnum)[keyof typeof UserAdminScalarFieldEnum]


  export const LikeSubscribersScalarFieldEnum: {
    id: 'id',
    subscriberId: 'subscriberId',
    urlSection: 'urlSection',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LikeSubscribersScalarFieldEnum = (typeof LikeSubscribersScalarFieldEnum)[keyof typeof LikeSubscribersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type skillWhereInput = {
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    id?: IntFilter<"skill"> | number
    title?: StringFilter<"skill"> | string
    description?: StringFilter<"skill"> | string
    workedTime?: IntFilter<"skill"> | number
    createdAt?: DateTimeFilter<"skill"> | Date | string
    updatedAt?: DateTimeFilter<"skill"> | Date | string
  }

  export type skillOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    workedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    title?: StringFilter<"skill"> | string
    description?: StringFilter<"skill"> | string
    workedTime?: IntFilter<"skill"> | number
    createdAt?: DateTimeFilter<"skill"> | Date | string
    updatedAt?: DateTimeFilter<"skill"> | Date | string
  }, "id">

  export type skillOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    workedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: skillCountOrderByAggregateInput
    _avg?: skillAvgOrderByAggregateInput
    _max?: skillMaxOrderByAggregateInput
    _min?: skillMinOrderByAggregateInput
    _sum?: skillSumOrderByAggregateInput
  }

  export type skillScalarWhereWithAggregatesInput = {
    AND?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    OR?: skillScalarWhereWithAggregatesInput[]
    NOT?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"skill"> | number
    title?: StringWithAggregatesFilter<"skill"> | string
    description?: StringWithAggregatesFilter<"skill"> | string
    workedTime?: IntWithAggregatesFilter<"skill"> | number
    createdAt?: DateTimeWithAggregatesFilter<"skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"skill"> | Date | string
  }

  export type experienceWhereInput = {
    AND?: experienceWhereInput | experienceWhereInput[]
    OR?: experienceWhereInput[]
    NOT?: experienceWhereInput | experienceWhereInput[]
    id?: IntFilter<"experience"> | number
    company?: StringFilter<"experience"> | string
    position?: StringFilter<"experience"> | string
    description?: StringFilter<"experience"> | string
    yearStart?: StringFilter<"experience"> | string
    yearEnd?: StringFilter<"experience"> | string
    createdAt?: DateTimeFilter<"experience"> | Date | string
    updatedAt?: DateTimeFilter<"experience"> | Date | string
  }

  export type experienceOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    description?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: experienceWhereInput | experienceWhereInput[]
    OR?: experienceWhereInput[]
    NOT?: experienceWhereInput | experienceWhereInput[]
    company?: StringFilter<"experience"> | string
    position?: StringFilter<"experience"> | string
    description?: StringFilter<"experience"> | string
    yearStart?: StringFilter<"experience"> | string
    yearEnd?: StringFilter<"experience"> | string
    createdAt?: DateTimeFilter<"experience"> | Date | string
    updatedAt?: DateTimeFilter<"experience"> | Date | string
  }, "id">

  export type experienceOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    description?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: experienceCountOrderByAggregateInput
    _avg?: experienceAvgOrderByAggregateInput
    _max?: experienceMaxOrderByAggregateInput
    _min?: experienceMinOrderByAggregateInput
    _sum?: experienceSumOrderByAggregateInput
  }

  export type experienceScalarWhereWithAggregatesInput = {
    AND?: experienceScalarWhereWithAggregatesInput | experienceScalarWhereWithAggregatesInput[]
    OR?: experienceScalarWhereWithAggregatesInput[]
    NOT?: experienceScalarWhereWithAggregatesInput | experienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"experience"> | number
    company?: StringWithAggregatesFilter<"experience"> | string
    position?: StringWithAggregatesFilter<"experience"> | string
    description?: StringWithAggregatesFilter<"experience"> | string
    yearStart?: StringWithAggregatesFilter<"experience"> | string
    yearEnd?: StringWithAggregatesFilter<"experience"> | string
    createdAt?: DateTimeWithAggregatesFilter<"experience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"experience"> | Date | string
  }

  export type subscribersWhereInput = {
    AND?: subscribersWhereInput | subscribersWhereInput[]
    OR?: subscribersWhereInput[]
    NOT?: subscribersWhereInput | subscribersWhereInput[]
    id?: UuidFilter<"subscribers"> | string
    email?: StringFilter<"subscribers"> | string
    names?: StringNullableFilter<"subscribers"> | string | null
    lastNames?: StringNullableFilter<"subscribers"> | string | null
    phone?: StringNullableFilter<"subscribers"> | string | null
    isConfirmed?: IntNullableFilter<"subscribers"> | number | null
    createdAt?: DateTimeFilter<"subscribers"> | Date | string
    updatedAt?: DateTimeFilter<"subscribers"> | Date | string
    likeSubscribers?: LikeSubscribersListRelationFilter
  }

  export type subscribersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    names?: SortOrderInput | SortOrder
    lastNames?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isConfirmed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likeSubscribers?: likeSubscribersOrderByRelationAggregateInput
  }

  export type subscribersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: subscribersWhereInput | subscribersWhereInput[]
    OR?: subscribersWhereInput[]
    NOT?: subscribersWhereInput | subscribersWhereInput[]
    names?: StringNullableFilter<"subscribers"> | string | null
    lastNames?: StringNullableFilter<"subscribers"> | string | null
    phone?: StringNullableFilter<"subscribers"> | string | null
    isConfirmed?: IntNullableFilter<"subscribers"> | number | null
    createdAt?: DateTimeFilter<"subscribers"> | Date | string
    updatedAt?: DateTimeFilter<"subscribers"> | Date | string
    likeSubscribers?: LikeSubscribersListRelationFilter
  }, "id" | "email">

  export type subscribersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    names?: SortOrderInput | SortOrder
    lastNames?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isConfirmed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: subscribersCountOrderByAggregateInput
    _avg?: subscribersAvgOrderByAggregateInput
    _max?: subscribersMaxOrderByAggregateInput
    _min?: subscribersMinOrderByAggregateInput
    _sum?: subscribersSumOrderByAggregateInput
  }

  export type subscribersScalarWhereWithAggregatesInput = {
    AND?: subscribersScalarWhereWithAggregatesInput | subscribersScalarWhereWithAggregatesInput[]
    OR?: subscribersScalarWhereWithAggregatesInput[]
    NOT?: subscribersScalarWhereWithAggregatesInput | subscribersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"subscribers"> | string
    email?: StringWithAggregatesFilter<"subscribers"> | string
    names?: StringNullableWithAggregatesFilter<"subscribers"> | string | null
    lastNames?: StringNullableWithAggregatesFilter<"subscribers"> | string | null
    phone?: StringNullableWithAggregatesFilter<"subscribers"> | string | null
    isConfirmed?: IntNullableWithAggregatesFilter<"subscribers"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"subscribers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"subscribers"> | Date | string
  }

  export type userAdminWhereInput = {
    AND?: userAdminWhereInput | userAdminWhereInput[]
    OR?: userAdminWhereInput[]
    NOT?: userAdminWhereInput | userAdminWhereInput[]
    id?: UuidFilter<"userAdmin"> | string
    email?: StringFilter<"userAdmin"> | string
    names?: StringNullableFilter<"userAdmin"> | string | null
    lastNames?: StringNullableFilter<"userAdmin"> | string | null
    phone?: StringNullableFilter<"userAdmin"> | string | null
    password?: StringFilter<"userAdmin"> | string
    isConfirmed?: IntNullableFilter<"userAdmin"> | number | null
    createdAt?: DateTimeFilter<"userAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"userAdmin"> | Date | string
  }

  export type userAdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    names?: SortOrderInput | SortOrder
    lastNames?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    isConfirmed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userAdminWhereInput | userAdminWhereInput[]
    OR?: userAdminWhereInput[]
    NOT?: userAdminWhereInput | userAdminWhereInput[]
    names?: StringNullableFilter<"userAdmin"> | string | null
    lastNames?: StringNullableFilter<"userAdmin"> | string | null
    phone?: StringNullableFilter<"userAdmin"> | string | null
    password?: StringFilter<"userAdmin"> | string
    isConfirmed?: IntNullableFilter<"userAdmin"> | number | null
    createdAt?: DateTimeFilter<"userAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"userAdmin"> | Date | string
  }, "id" | "email">

  export type userAdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    names?: SortOrderInput | SortOrder
    lastNames?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    isConfirmed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userAdminCountOrderByAggregateInput
    _avg?: userAdminAvgOrderByAggregateInput
    _max?: userAdminMaxOrderByAggregateInput
    _min?: userAdminMinOrderByAggregateInput
    _sum?: userAdminSumOrderByAggregateInput
  }

  export type userAdminScalarWhereWithAggregatesInput = {
    AND?: userAdminScalarWhereWithAggregatesInput | userAdminScalarWhereWithAggregatesInput[]
    OR?: userAdminScalarWhereWithAggregatesInput[]
    NOT?: userAdminScalarWhereWithAggregatesInput | userAdminScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"userAdmin"> | string
    email?: StringWithAggregatesFilter<"userAdmin"> | string
    names?: StringNullableWithAggregatesFilter<"userAdmin"> | string | null
    lastNames?: StringNullableWithAggregatesFilter<"userAdmin"> | string | null
    phone?: StringNullableWithAggregatesFilter<"userAdmin"> | string | null
    password?: StringWithAggregatesFilter<"userAdmin"> | string
    isConfirmed?: IntNullableWithAggregatesFilter<"userAdmin"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"userAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"userAdmin"> | Date | string
  }

  export type likeSubscribersWhereInput = {
    AND?: likeSubscribersWhereInput | likeSubscribersWhereInput[]
    OR?: likeSubscribersWhereInput[]
    NOT?: likeSubscribersWhereInput | likeSubscribersWhereInput[]
    id?: IntFilter<"likeSubscribers"> | number
    subscriberId?: StringFilter<"likeSubscribers"> | string
    urlSection?: StringFilter<"likeSubscribers"> | string
    createdAt?: DateTimeFilter<"likeSubscribers"> | Date | string
    updatedAt?: DateTimeFilter<"likeSubscribers"> | Date | string
    subscriber?: XOR<SubscribersScalarRelationFilter, subscribersWhereInput>
  }

  export type likeSubscribersOrderByWithRelationInput = {
    id?: SortOrder
    subscriberId?: SortOrder
    urlSection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriber?: subscribersOrderByWithRelationInput
  }

  export type likeSubscribersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: likeSubscribersWhereInput | likeSubscribersWhereInput[]
    OR?: likeSubscribersWhereInput[]
    NOT?: likeSubscribersWhereInput | likeSubscribersWhereInput[]
    subscriberId?: StringFilter<"likeSubscribers"> | string
    urlSection?: StringFilter<"likeSubscribers"> | string
    createdAt?: DateTimeFilter<"likeSubscribers"> | Date | string
    updatedAt?: DateTimeFilter<"likeSubscribers"> | Date | string
    subscriber?: XOR<SubscribersScalarRelationFilter, subscribersWhereInput>
  }, "id">

  export type likeSubscribersOrderByWithAggregationInput = {
    id?: SortOrder
    subscriberId?: SortOrder
    urlSection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: likeSubscribersCountOrderByAggregateInput
    _avg?: likeSubscribersAvgOrderByAggregateInput
    _max?: likeSubscribersMaxOrderByAggregateInput
    _min?: likeSubscribersMinOrderByAggregateInput
    _sum?: likeSubscribersSumOrderByAggregateInput
  }

  export type likeSubscribersScalarWhereWithAggregatesInput = {
    AND?: likeSubscribersScalarWhereWithAggregatesInput | likeSubscribersScalarWhereWithAggregatesInput[]
    OR?: likeSubscribersScalarWhereWithAggregatesInput[]
    NOT?: likeSubscribersScalarWhereWithAggregatesInput | likeSubscribersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"likeSubscribers"> | number
    subscriberId?: StringWithAggregatesFilter<"likeSubscribers"> | string
    urlSection?: StringWithAggregatesFilter<"likeSubscribers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"likeSubscribers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"likeSubscribers"> | Date | string
  }

  export type skillCreateInput = {
    title: string
    description: string
    workedTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type skillUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    workedTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type skillUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workedTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workedTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillCreateManyInput = {
    id?: number
    title: string
    description: string
    workedTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type skillUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workedTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workedTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experienceCreateInput = {
    company: string
    position: string
    description: string
    yearStart: string
    yearEnd: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experienceUncheckedCreateInput = {
    id?: number
    company: string
    position: string
    description: string
    yearStart: string
    yearEnd: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experienceUpdateInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    yearStart?: StringFieldUpdateOperationsInput | string
    yearEnd?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    yearStart?: StringFieldUpdateOperationsInput | string
    yearEnd?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experienceCreateManyInput = {
    id?: number
    company: string
    position: string
    description: string
    yearStart: string
    yearEnd: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experienceUpdateManyMutationInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    yearStart?: StringFieldUpdateOperationsInput | string
    yearEnd?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    yearStart?: StringFieldUpdateOperationsInput | string
    yearEnd?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscribersCreateInput = {
    id?: string
    email: string
    names?: string | null
    lastNames?: string | null
    phone?: string | null
    isConfirmed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likeSubscribers?: likeSubscribersCreateNestedManyWithoutSubscriberInput
  }

  export type subscribersUncheckedCreateInput = {
    id?: string
    email: string
    names?: string | null
    lastNames?: string | null
    phone?: string | null
    isConfirmed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likeSubscribers?: likeSubscribersUncheckedCreateNestedManyWithoutSubscriberInput
  }

  export type subscribersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    names?: NullableStringFieldUpdateOperationsInput | string | null
    lastNames?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isConfirmed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeSubscribers?: likeSubscribersUpdateManyWithoutSubscriberNestedInput
  }

  export type subscribersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    names?: NullableStringFieldUpdateOperationsInput | string | null
    lastNames?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isConfirmed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeSubscribers?: likeSubscribersUncheckedUpdateManyWithoutSubscriberNestedInput
  }

  export type subscribersCreateManyInput = {
    id?: string
    email: string
    names?: string | null
    lastNames?: string | null
    phone?: string | null
    isConfirmed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type subscribersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    names?: NullableStringFieldUpdateOperationsInput | string | null
    lastNames?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isConfirmed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscribersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    names?: NullableStringFieldUpdateOperationsInput | string | null
    lastNames?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isConfirmed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userAdminCreateInput = {
    id?: string
    email: string
    names?: string | null
    lastNames?: string | null
    phone?: string | null
    password: string
    isConfirmed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userAdminUncheckedCreateInput = {
    id?: string
    email: string
    names?: string | null
    lastNames?: string | null
    phone?: string | null
    password: string
    isConfirmed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    names?: NullableStringFieldUpdateOperationsInput | string | null
    lastNames?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isConfirmed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    names?: NullableStringFieldUpdateOperationsInput | string | null
    lastNames?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isConfirmed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userAdminCreateManyInput = {
    id?: string
    email: string
    names?: string | null
    lastNames?: string | null
    phone?: string | null
    password: string
    isConfirmed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    names?: NullableStringFieldUpdateOperationsInput | string | null
    lastNames?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isConfirmed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    names?: NullableStringFieldUpdateOperationsInput | string | null
    lastNames?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isConfirmed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeSubscribersCreateInput = {
    urlSection: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriber: subscribersCreateNestedOneWithoutLikeSubscribersInput
  }

  export type likeSubscribersUncheckedCreateInput = {
    id?: number
    subscriberId: string
    urlSection: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type likeSubscribersUpdateInput = {
    urlSection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriber?: subscribersUpdateOneRequiredWithoutLikeSubscribersNestedInput
  }

  export type likeSubscribersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriberId?: StringFieldUpdateOperationsInput | string
    urlSection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeSubscribersCreateManyInput = {
    id?: number
    subscriberId: string
    urlSection: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type likeSubscribersUpdateManyMutationInput = {
    urlSection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeSubscribersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriberId?: StringFieldUpdateOperationsInput | string
    urlSection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type skillCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    workedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillAvgOrderByAggregateInput = {
    id?: SortOrder
    workedTime?: SortOrder
  }

  export type skillMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    workedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    workedTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillSumOrderByAggregateInput = {
    id?: SortOrder
    workedTime?: SortOrder
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

  export type experienceCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    description?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experienceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type experienceMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    description?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experienceMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    description?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experienceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type LikeSubscribersListRelationFilter = {
    every?: likeSubscribersWhereInput
    some?: likeSubscribersWhereInput
    none?: likeSubscribersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type likeSubscribersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subscribersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    names?: SortOrder
    lastNames?: SortOrder
    phone?: SortOrder
    isConfirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subscribersAvgOrderByAggregateInput = {
    isConfirmed?: SortOrder
  }

  export type subscribersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    names?: SortOrder
    lastNames?: SortOrder
    phone?: SortOrder
    isConfirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subscribersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    names?: SortOrder
    lastNames?: SortOrder
    phone?: SortOrder
    isConfirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subscribersSumOrderByAggregateInput = {
    isConfirmed?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type userAdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    names?: SortOrder
    lastNames?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isConfirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAdminAvgOrderByAggregateInput = {
    isConfirmed?: SortOrder
  }

  export type userAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    names?: SortOrder
    lastNames?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isConfirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    names?: SortOrder
    lastNames?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isConfirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAdminSumOrderByAggregateInput = {
    isConfirmed?: SortOrder
  }

  export type SubscribersScalarRelationFilter = {
    is?: subscribersWhereInput
    isNot?: subscribersWhereInput
  }

  export type likeSubscribersCountOrderByAggregateInput = {
    id?: SortOrder
    subscriberId?: SortOrder
    urlSection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type likeSubscribersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type likeSubscribersMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriberId?: SortOrder
    urlSection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type likeSubscribersMinOrderByAggregateInput = {
    id?: SortOrder
    subscriberId?: SortOrder
    urlSection?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type likeSubscribersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type likeSubscribersCreateNestedManyWithoutSubscriberInput = {
    create?: XOR<likeSubscribersCreateWithoutSubscriberInput, likeSubscribersUncheckedCreateWithoutSubscriberInput> | likeSubscribersCreateWithoutSubscriberInput[] | likeSubscribersUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: likeSubscribersCreateOrConnectWithoutSubscriberInput | likeSubscribersCreateOrConnectWithoutSubscriberInput[]
    createMany?: likeSubscribersCreateManySubscriberInputEnvelope
    connect?: likeSubscribersWhereUniqueInput | likeSubscribersWhereUniqueInput[]
  }

  export type likeSubscribersUncheckedCreateNestedManyWithoutSubscriberInput = {
    create?: XOR<likeSubscribersCreateWithoutSubscriberInput, likeSubscribersUncheckedCreateWithoutSubscriberInput> | likeSubscribersCreateWithoutSubscriberInput[] | likeSubscribersUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: likeSubscribersCreateOrConnectWithoutSubscriberInput | likeSubscribersCreateOrConnectWithoutSubscriberInput[]
    createMany?: likeSubscribersCreateManySubscriberInputEnvelope
    connect?: likeSubscribersWhereUniqueInput | likeSubscribersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type likeSubscribersUpdateManyWithoutSubscriberNestedInput = {
    create?: XOR<likeSubscribersCreateWithoutSubscriberInput, likeSubscribersUncheckedCreateWithoutSubscriberInput> | likeSubscribersCreateWithoutSubscriberInput[] | likeSubscribersUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: likeSubscribersCreateOrConnectWithoutSubscriberInput | likeSubscribersCreateOrConnectWithoutSubscriberInput[]
    upsert?: likeSubscribersUpsertWithWhereUniqueWithoutSubscriberInput | likeSubscribersUpsertWithWhereUniqueWithoutSubscriberInput[]
    createMany?: likeSubscribersCreateManySubscriberInputEnvelope
    set?: likeSubscribersWhereUniqueInput | likeSubscribersWhereUniqueInput[]
    disconnect?: likeSubscribersWhereUniqueInput | likeSubscribersWhereUniqueInput[]
    delete?: likeSubscribersWhereUniqueInput | likeSubscribersWhereUniqueInput[]
    connect?: likeSubscribersWhereUniqueInput | likeSubscribersWhereUniqueInput[]
    update?: likeSubscribersUpdateWithWhereUniqueWithoutSubscriberInput | likeSubscribersUpdateWithWhereUniqueWithoutSubscriberInput[]
    updateMany?: likeSubscribersUpdateManyWithWhereWithoutSubscriberInput | likeSubscribersUpdateManyWithWhereWithoutSubscriberInput[]
    deleteMany?: likeSubscribersScalarWhereInput | likeSubscribersScalarWhereInput[]
  }

  export type likeSubscribersUncheckedUpdateManyWithoutSubscriberNestedInput = {
    create?: XOR<likeSubscribersCreateWithoutSubscriberInput, likeSubscribersUncheckedCreateWithoutSubscriberInput> | likeSubscribersCreateWithoutSubscriberInput[] | likeSubscribersUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: likeSubscribersCreateOrConnectWithoutSubscriberInput | likeSubscribersCreateOrConnectWithoutSubscriberInput[]
    upsert?: likeSubscribersUpsertWithWhereUniqueWithoutSubscriberInput | likeSubscribersUpsertWithWhereUniqueWithoutSubscriberInput[]
    createMany?: likeSubscribersCreateManySubscriberInputEnvelope
    set?: likeSubscribersWhereUniqueInput | likeSubscribersWhereUniqueInput[]
    disconnect?: likeSubscribersWhereUniqueInput | likeSubscribersWhereUniqueInput[]
    delete?: likeSubscribersWhereUniqueInput | likeSubscribersWhereUniqueInput[]
    connect?: likeSubscribersWhereUniqueInput | likeSubscribersWhereUniqueInput[]
    update?: likeSubscribersUpdateWithWhereUniqueWithoutSubscriberInput | likeSubscribersUpdateWithWhereUniqueWithoutSubscriberInput[]
    updateMany?: likeSubscribersUpdateManyWithWhereWithoutSubscriberInput | likeSubscribersUpdateManyWithWhereWithoutSubscriberInput[]
    deleteMany?: likeSubscribersScalarWhereInput | likeSubscribersScalarWhereInput[]
  }

  export type subscribersCreateNestedOneWithoutLikeSubscribersInput = {
    create?: XOR<subscribersCreateWithoutLikeSubscribersInput, subscribersUncheckedCreateWithoutLikeSubscribersInput>
    connectOrCreate?: subscribersCreateOrConnectWithoutLikeSubscribersInput
    connect?: subscribersWhereUniqueInput
  }

  export type subscribersUpdateOneRequiredWithoutLikeSubscribersNestedInput = {
    create?: XOR<subscribersCreateWithoutLikeSubscribersInput, subscribersUncheckedCreateWithoutLikeSubscribersInput>
    connectOrCreate?: subscribersCreateOrConnectWithoutLikeSubscribersInput
    upsert?: subscribersUpsertWithoutLikeSubscribersInput
    connect?: subscribersWhereUniqueInput
    update?: XOR<XOR<subscribersUpdateToOneWithWhereWithoutLikeSubscribersInput, subscribersUpdateWithoutLikeSubscribersInput>, subscribersUncheckedUpdateWithoutLikeSubscribersInput>
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type likeSubscribersCreateWithoutSubscriberInput = {
    urlSection: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type likeSubscribersUncheckedCreateWithoutSubscriberInput = {
    id?: number
    urlSection: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type likeSubscribersCreateOrConnectWithoutSubscriberInput = {
    where: likeSubscribersWhereUniqueInput
    create: XOR<likeSubscribersCreateWithoutSubscriberInput, likeSubscribersUncheckedCreateWithoutSubscriberInput>
  }

  export type likeSubscribersCreateManySubscriberInputEnvelope = {
    data: likeSubscribersCreateManySubscriberInput | likeSubscribersCreateManySubscriberInput[]
    skipDuplicates?: boolean
  }

  export type likeSubscribersUpsertWithWhereUniqueWithoutSubscriberInput = {
    where: likeSubscribersWhereUniqueInput
    update: XOR<likeSubscribersUpdateWithoutSubscriberInput, likeSubscribersUncheckedUpdateWithoutSubscriberInput>
    create: XOR<likeSubscribersCreateWithoutSubscriberInput, likeSubscribersUncheckedCreateWithoutSubscriberInput>
  }

  export type likeSubscribersUpdateWithWhereUniqueWithoutSubscriberInput = {
    where: likeSubscribersWhereUniqueInput
    data: XOR<likeSubscribersUpdateWithoutSubscriberInput, likeSubscribersUncheckedUpdateWithoutSubscriberInput>
  }

  export type likeSubscribersUpdateManyWithWhereWithoutSubscriberInput = {
    where: likeSubscribersScalarWhereInput
    data: XOR<likeSubscribersUpdateManyMutationInput, likeSubscribersUncheckedUpdateManyWithoutSubscriberInput>
  }

  export type likeSubscribersScalarWhereInput = {
    AND?: likeSubscribersScalarWhereInput | likeSubscribersScalarWhereInput[]
    OR?: likeSubscribersScalarWhereInput[]
    NOT?: likeSubscribersScalarWhereInput | likeSubscribersScalarWhereInput[]
    id?: IntFilter<"likeSubscribers"> | number
    subscriberId?: StringFilter<"likeSubscribers"> | string
    urlSection?: StringFilter<"likeSubscribers"> | string
    createdAt?: DateTimeFilter<"likeSubscribers"> | Date | string
    updatedAt?: DateTimeFilter<"likeSubscribers"> | Date | string
  }

  export type subscribersCreateWithoutLikeSubscribersInput = {
    id?: string
    email: string
    names?: string | null
    lastNames?: string | null
    phone?: string | null
    isConfirmed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type subscribersUncheckedCreateWithoutLikeSubscribersInput = {
    id?: string
    email: string
    names?: string | null
    lastNames?: string | null
    phone?: string | null
    isConfirmed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type subscribersCreateOrConnectWithoutLikeSubscribersInput = {
    where: subscribersWhereUniqueInput
    create: XOR<subscribersCreateWithoutLikeSubscribersInput, subscribersUncheckedCreateWithoutLikeSubscribersInput>
  }

  export type subscribersUpsertWithoutLikeSubscribersInput = {
    update: XOR<subscribersUpdateWithoutLikeSubscribersInput, subscribersUncheckedUpdateWithoutLikeSubscribersInput>
    create: XOR<subscribersCreateWithoutLikeSubscribersInput, subscribersUncheckedCreateWithoutLikeSubscribersInput>
    where?: subscribersWhereInput
  }

  export type subscribersUpdateToOneWithWhereWithoutLikeSubscribersInput = {
    where?: subscribersWhereInput
    data: XOR<subscribersUpdateWithoutLikeSubscribersInput, subscribersUncheckedUpdateWithoutLikeSubscribersInput>
  }

  export type subscribersUpdateWithoutLikeSubscribersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    names?: NullableStringFieldUpdateOperationsInput | string | null
    lastNames?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isConfirmed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscribersUncheckedUpdateWithoutLikeSubscribersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    names?: NullableStringFieldUpdateOperationsInput | string | null
    lastNames?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isConfirmed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeSubscribersCreateManySubscriberInput = {
    id?: number
    urlSection: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type likeSubscribersUpdateWithoutSubscriberInput = {
    urlSection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeSubscribersUncheckedUpdateWithoutSubscriberInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlSection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likeSubscribersUncheckedUpdateManyWithoutSubscriberInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlSection?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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