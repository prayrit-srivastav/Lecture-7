const WORD_BLACK = Symbol('black');
const WORD_WHITE = Symbol('white');
const WORD_SHORT = Symbol('short');
const WORD_TALL = Symbol('tall');
const WORD_RIGHT = Symbol('right');
const WORD_LEFT = Symbol('left');
const WORD_TRUE = Symbol('true');
const WORD_FALSE = Symbol('false');

function getOpposite(word) {
  switch (word) {
    case WORD_BLACK:
      return WORD_WHITE;
    case WORD_SHORT:
      return WORD_TALL;
    case WORD_RIGHT:
      return WORD_LEFT;
    case WORD_TRUE:
      return WORD_FALSE;
    default:
      return 'Not a valid word';
  }
}
const WORD_SMALL = Symbol('short');

console.log(getOpposite(WORD_SHORT));
