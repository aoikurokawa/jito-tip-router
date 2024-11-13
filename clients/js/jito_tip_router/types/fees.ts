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
import { getFeeDecoder, getFeeEncoder, type Fee, type FeeArgs } from '.';

export type Fees = { fee1: Fee; fee2: Fee };

export type FeesArgs = { fee1: FeeArgs; fee2: FeeArgs };

export function getFeesEncoder(): Encoder<FeesArgs> {
  return getStructEncoder([
    ['fee1', getFeeEncoder()],
    ['fee2', getFeeEncoder()],
  ]);
}

export function getFeesDecoder(): Decoder<Fees> {
  return getStructDecoder([
    ['fee1', getFeeDecoder()],
    ['fee2', getFeeDecoder()],
  ]);
}

export function getFeesCodec(): Codec<FeesArgs, Fees> {
  return combineCodec(getFeesEncoder(), getFeesDecoder());
}