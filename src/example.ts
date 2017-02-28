import { mapMaybe, Maybe, safeHead } from './index';

const maybeHead = safeHead([1,2,3])
const mappedMaybe = mapMaybe(maybeHead, x => x + 1) // Maybe<2>
console.log(mappedMaybe) // 2
