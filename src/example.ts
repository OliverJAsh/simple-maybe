import { mapMaybe, Maybe, safeHead } from './index';

const maybeHead = safeHead([1,2,3])
const mappedMaybe = mapMaybe((x: number) => x + 1)(maybeHead) // Maybe<2>
console.log(mappedMaybe) // 2
