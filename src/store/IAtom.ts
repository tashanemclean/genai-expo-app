import { RESET } from 'jotai/utils';
import { WritableAtom } from 'jotai/vanilla';

export type SetStateActionWIthReset<Value> = Value | typeof RESET | ((prev: Value) => Value | typeof RESET);

export type AtomKeyMap = {
  key: string;
  props?: string[];
};

export type IAtom<Value> = {
  atom: WritableAtom<Value, [SetStateActionWIthReset<Value>], void>;
  init: Value;
  keys?: AtomKeyMap[];
  storage?: 'plainText' | 'secure';
};
