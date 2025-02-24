/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/web3.js';

export type BaseFeeGroup = { group: number };

export type BaseFeeGroupArgs = BaseFeeGroup;

export function getBaseFeeGroupEncoder(): Encoder<BaseFeeGroupArgs> {
  return getStructEncoder([['group', getU8Encoder()]]);
}

export function getBaseFeeGroupDecoder(): Decoder<BaseFeeGroup> {
  return getStructDecoder([['group', getU8Decoder()]]);
}

export function getBaseFeeGroupCodec(): Codec<BaseFeeGroupArgs, BaseFeeGroup> {
  return combineCodec(getBaseFeeGroupEncoder(), getBaseFeeGroupDecoder());
}
