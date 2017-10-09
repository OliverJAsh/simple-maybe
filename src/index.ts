declare global {
    // Overload for Array that allows user defined type guards. This will be
    // added to core in a future release.
    // https://github.com/Microsoft/TypeScript/issues/7657#issuecomment-200447063
    interface Array<T> {
        filter<U extends T>(pred: (a: T) => a is U): U[];
    }
}

export const isNotUndefined = <T>(maybeT: Maybe<T>): maybeT is T => maybeT !== undefined

export type Maybe<T> = undefined | T;

export const flatMapMaybe = <T, B>(maybeT: Maybe<T>, f: (t: T) => B): Maybe<B> => (
    isNotUndefined(maybeT) ? f(maybeT) : maybeT
)
// extend {} to ensure we're mapping to a non-null type
export const mapMaybe = <T, B extends {}>(maybeT: Maybe<T>, f: (t: T) => B): Maybe<B> => (
    isNotUndefined(maybeT) ? f(maybeT) : maybeT
)
export const filterMaybe = <T, B extends T>(maybeT: Maybe<T>, f: (t: T) => t is B): Maybe<B> => (
    isNotUndefined(maybeT) && f(maybeT) ? maybeT : undefined
)
export const forEachMaybe = <T>(maybeT: Maybe<T>, f: (t: T) => void): void => {
    if (isNotUndefined(maybeT)) f(maybeT)
}
export const getOrElseMaybe = <T>(maybeT: Maybe<T>, fallback: () => T): T => (
    isNotUndefined(maybeT) ? maybeT : fallback()
)
export const flattenMaybes = <T>(maybeTs: Maybe<T>[]): T[] => (
    maybeTs.filter((maybeT): maybeT is T => isNotUndefined(maybeT))
)

// Standard dictionary lookups in TS return the wrong type, `T`, given
// `StringDictionary<T>`. This helper returns the correct return type, `T |
// undefined`.
export type StringDictionary<T> = { [k: string]: T };
export const safeProp = <T>(dict: StringDictionary<T>, prop: string): Maybe<T> => dict[prop]
export const safeIndex = <T>(array: T[], prop: number): Maybe<T> => array[prop]
export const safeHead = <T>(array: T[]): Maybe<T> => safeIndex(array, 0)

export const normalizeMaybe = <T>(nullMaybe: T | null) =>
  nullMaybe === null ? undefined : nullMaybe;
