/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  getU128Decoder,
  getU128Encoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/web3.js';
import {
  getNcnFeeGroupDecoder,
  getNcnFeeGroupEncoder,
  type NcnFeeGroup,
  type NcnFeeGroupArgs,
} from '.';

export type StMintEntry = {
  stMint: Address;
  ncnFeeGroup: NcnFeeGroup;
  rewardMultiplierBps: bigint;
  switchboardFeed: Address;
  noFeedWeight: bigint;
  reserved: Array<number>;
};

export type StMintEntryArgs = {
  stMint: Address;
  ncnFeeGroup: NcnFeeGroupArgs;
  rewardMultiplierBps: number | bigint;
  switchboardFeed: Address;
  noFeedWeight: number | bigint;
  reserved: Array<number>;
};

export function getStMintEntryEncoder(): Encoder<StMintEntryArgs> {
  return getStructEncoder([
    ['stMint', getAddressEncoder()],
    ['ncnFeeGroup', getNcnFeeGroupEncoder()],
    ['rewardMultiplierBps', getU64Encoder()],
    ['switchboardFeed', getAddressEncoder()],
    ['noFeedWeight', getU128Encoder()],
    ['reserved', getArrayEncoder(getU8Encoder(), { size: 128 })],
  ]);
}

export function getStMintEntryDecoder(): Decoder<StMintEntry> {
  return getStructDecoder([
    ['stMint', getAddressDecoder()],
    ['ncnFeeGroup', getNcnFeeGroupDecoder()],
    ['rewardMultiplierBps', getU64Decoder()],
    ['switchboardFeed', getAddressDecoder()],
    ['noFeedWeight', getU128Decoder()],
    ['reserved', getArrayDecoder(getU8Decoder(), { size: 128 })],
  ]);
}

export function getStMintEntryCodec(): Codec<StMintEntryArgs, StMintEntry> {
  return combineCodec(getStMintEntryEncoder(), getStMintEntryDecoder());
}
