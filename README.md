# simple-maybe

Simple helper functions (`map`, `filter`, `flatMap`, `getOrElse`, etc.) for transforming `T | undefined` types (`Maybe<T>`).

## Example

``` ts
import { mapMaybe, Maybe, safeHead } from './index';

const maybeHead = safeHead([1,2,3])
const mappedMaybe = mapMaybe(maybeHead, x => x + 1) // Maybe<2>
console.log(mappedMaybe) // 2
```

## TODO

- [ ] Provide curried forms for better composition
