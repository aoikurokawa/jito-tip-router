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
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type WritableAccount,
} from '@solana/web3.js';
import { JITO_TIP_ROUTER_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const SWITCHBOARD_SET_WEIGHT_DISCRIMINATOR = 8;

export function getSwitchboardSetWeightDiscriminatorBytes() {
  return getU8Encoder().encode(SWITCHBOARD_SET_WEIGHT_DISCRIMINATOR);
}

export type SwitchboardSetWeightInstruction<
  TProgram extends string = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
  TAccountEpochState extends string | IAccountMeta<string> = string,
  TAccountNcn extends string | IAccountMeta<string> = string,
  TAccountWeightTable extends string | IAccountMeta<string> = string,
  TAccountSwitchboardFeed extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountEpochState extends string
        ? WritableAccount<TAccountEpochState>
        : TAccountEpochState,
      TAccountNcn extends string ? ReadonlyAccount<TAccountNcn> : TAccountNcn,
      TAccountWeightTable extends string
        ? WritableAccount<TAccountWeightTable>
        : TAccountWeightTable,
      TAccountSwitchboardFeed extends string
        ? ReadonlyAccount<TAccountSwitchboardFeed>
        : TAccountSwitchboardFeed,
      ...TRemainingAccounts,
    ]
  >;

export type SwitchboardSetWeightInstructionData = {
  discriminator: number;
  stMint: Address;
  epoch: bigint;
};

export type SwitchboardSetWeightInstructionDataArgs = {
  stMint: Address;
  epoch: number | bigint;
};

export function getSwitchboardSetWeightInstructionDataEncoder(): Encoder<SwitchboardSetWeightInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['stMint', getAddressEncoder()],
      ['epoch', getU64Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: SWITCHBOARD_SET_WEIGHT_DISCRIMINATOR,
    })
  );
}

export function getSwitchboardSetWeightInstructionDataDecoder(): Decoder<SwitchboardSetWeightInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['stMint', getAddressDecoder()],
    ['epoch', getU64Decoder()],
  ]);
}

export function getSwitchboardSetWeightInstructionDataCodec(): Codec<
  SwitchboardSetWeightInstructionDataArgs,
  SwitchboardSetWeightInstructionData
> {
  return combineCodec(
    getSwitchboardSetWeightInstructionDataEncoder(),
    getSwitchboardSetWeightInstructionDataDecoder()
  );
}

export type SwitchboardSetWeightInput<
  TAccountEpochState extends string = string,
  TAccountNcn extends string = string,
  TAccountWeightTable extends string = string,
  TAccountSwitchboardFeed extends string = string,
> = {
  epochState: Address<TAccountEpochState>;
  ncn: Address<TAccountNcn>;
  weightTable: Address<TAccountWeightTable>;
  switchboardFeed: Address<TAccountSwitchboardFeed>;
  stMint: SwitchboardSetWeightInstructionDataArgs['stMint'];
  epoch: SwitchboardSetWeightInstructionDataArgs['epoch'];
};

export function getSwitchboardSetWeightInstruction<
  TAccountEpochState extends string,
  TAccountNcn extends string,
  TAccountWeightTable extends string,
  TAccountSwitchboardFeed extends string,
  TProgramAddress extends Address = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
>(
  input: SwitchboardSetWeightInput<
    TAccountEpochState,
    TAccountNcn,
    TAccountWeightTable,
    TAccountSwitchboardFeed
  >,
  config?: { programAddress?: TProgramAddress }
): SwitchboardSetWeightInstruction<
  TProgramAddress,
  TAccountEpochState,
  TAccountNcn,
  TAccountWeightTable,
  TAccountSwitchboardFeed
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? JITO_TIP_ROUTER_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    epochState: { value: input.epochState ?? null, isWritable: true },
    ncn: { value: input.ncn ?? null, isWritable: false },
    weightTable: { value: input.weightTable ?? null, isWritable: true },
    switchboardFeed: {
      value: input.switchboardFeed ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.epochState),
      getAccountMeta(accounts.ncn),
      getAccountMeta(accounts.weightTable),
      getAccountMeta(accounts.switchboardFeed),
    ],
    programAddress,
    data: getSwitchboardSetWeightInstructionDataEncoder().encode(
      args as SwitchboardSetWeightInstructionDataArgs
    ),
  } as SwitchboardSetWeightInstruction<
    TProgramAddress,
    TAccountEpochState,
    TAccountNcn,
    TAccountWeightTable,
    TAccountSwitchboardFeed
  >;

  return instruction;
}

export type ParsedSwitchboardSetWeightInstruction<
  TProgram extends string = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    epochState: TAccountMetas[0];
    ncn: TAccountMetas[1];
    weightTable: TAccountMetas[2];
    switchboardFeed: TAccountMetas[3];
  };
  data: SwitchboardSetWeightInstructionData;
};

export function parseSwitchboardSetWeightInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSwitchboardSetWeightInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      epochState: getNextAccount(),
      ncn: getNextAccount(),
      weightTable: getNextAccount(),
      switchboardFeed: getNextAccount(),
    },
    data: getSwitchboardSetWeightInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
