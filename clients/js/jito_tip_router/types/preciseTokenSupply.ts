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
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/web3.js';
import {
  getPreciseNumberWrapperDecoder,
  getPreciseNumberWrapperEncoder,
  type PreciseNumberWrapper,
  type PreciseNumberWrapperArgs,
} from '.';

export type PreciseTokenSupply = { number: PreciseNumberWrapper };

export type PreciseTokenSupplyArgs = { number: PreciseNumberWrapperArgs };

export function getPreciseTokenSupplyEncoder(): Encoder<PreciseTokenSupplyArgs> {
  return getStructEncoder([['number', getPreciseNumberWrapperEncoder()]]);
}

export function getPreciseTokenSupplyDecoder(): Decoder<PreciseTokenSupply> {
  return getStructDecoder([['number', getPreciseNumberWrapperDecoder()]]);
}

export function getPreciseTokenSupplyCodec(): Codec<
  PreciseTokenSupplyArgs,
  PreciseTokenSupply
> {
  return combineCodec(
    getPreciseTokenSupplyEncoder(),
    getPreciseTokenSupplyDecoder()
  );
}
