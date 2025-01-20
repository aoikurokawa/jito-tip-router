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
  getU128Decoder,
  getU128Encoder,
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
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type TransactionSigner,
  type WritableAccount,
} from '@solana/web3.js';
import { JITO_TIP_ROUTER_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const ADMIN_SET_WEIGHT_DISCRIMINATOR = 31;

export function getAdminSetWeightDiscriminatorBytes() {
  return getU8Encoder().encode(ADMIN_SET_WEIGHT_DISCRIMINATOR);
}

export type AdminSetWeightInstruction<
  TProgram extends string = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
  TAccountEpochState extends string | IAccountMeta<string> = string,
  TAccountNcn extends string | IAccountMeta<string> = string,
  TAccountWeightTable extends string | IAccountMeta<string> = string,
  TAccountWeightTableAdmin extends string | IAccountMeta<string> = string,
  TAccountStMint extends string | IAccountMeta<string> = string,
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
      TAccountWeightTableAdmin extends string
        ? ReadonlySignerAccount<TAccountWeightTableAdmin> &
            IAccountSignerMeta<TAccountWeightTableAdmin>
        : TAccountWeightTableAdmin,
      TAccountStMint extends string
        ? ReadonlyAccount<TAccountStMint>
        : TAccountStMint,
      ...TRemainingAccounts,
    ]
  >;

export type AdminSetWeightInstructionData = {
  discriminator: number;
  weight: bigint;
  epoch: bigint;
};

export type AdminSetWeightInstructionDataArgs = {
  weight: number | bigint;
  epoch: number | bigint;
};

export function getAdminSetWeightInstructionDataEncoder(): Encoder<AdminSetWeightInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['weight', getU128Encoder()],
      ['epoch', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: ADMIN_SET_WEIGHT_DISCRIMINATOR })
  );
}

export function getAdminSetWeightInstructionDataDecoder(): Decoder<AdminSetWeightInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['weight', getU128Decoder()],
    ['epoch', getU64Decoder()],
  ]);
}

export function getAdminSetWeightInstructionDataCodec(): Codec<
  AdminSetWeightInstructionDataArgs,
  AdminSetWeightInstructionData
> {
  return combineCodec(
    getAdminSetWeightInstructionDataEncoder(),
    getAdminSetWeightInstructionDataDecoder()
  );
}

export type AdminSetWeightInput<
  TAccountEpochState extends string = string,
  TAccountNcn extends string = string,
  TAccountWeightTable extends string = string,
  TAccountWeightTableAdmin extends string = string,
  TAccountStMint extends string = string,
> = {
  epochState: Address<TAccountEpochState>;
  ncn: Address<TAccountNcn>;
  weightTable: Address<TAccountWeightTable>;
  weightTableAdmin: TransactionSigner<TAccountWeightTableAdmin>;
  stMint: Address<TAccountStMint>;
  weight: AdminSetWeightInstructionDataArgs['weight'];
  epoch: AdminSetWeightInstructionDataArgs['epoch'];
};

export function getAdminSetWeightInstruction<
  TAccountEpochState extends string,
  TAccountNcn extends string,
  TAccountWeightTable extends string,
  TAccountWeightTableAdmin extends string,
  TAccountStMint extends string,
  TProgramAddress extends Address = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
>(
  input: AdminSetWeightInput<
    TAccountEpochState,
    TAccountNcn,
    TAccountWeightTable,
    TAccountWeightTableAdmin,
    TAccountStMint
  >,
  config?: { programAddress?: TProgramAddress }
): AdminSetWeightInstruction<
  TProgramAddress,
  TAccountEpochState,
  TAccountNcn,
  TAccountWeightTable,
  TAccountWeightTableAdmin,
  TAccountStMint
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? JITO_TIP_ROUTER_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    epochState: { value: input.epochState ?? null, isWritable: true },
    ncn: { value: input.ncn ?? null, isWritable: false },
    weightTable: { value: input.weightTable ?? null, isWritable: true },
    weightTableAdmin: {
      value: input.weightTableAdmin ?? null,
      isWritable: false,
    },
    stMint: { value: input.stMint ?? null, isWritable: false },
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
      getAccountMeta(accounts.weightTableAdmin),
      getAccountMeta(accounts.stMint),
    ],
    programAddress,
    data: getAdminSetWeightInstructionDataEncoder().encode(
      args as AdminSetWeightInstructionDataArgs
    ),
  } as AdminSetWeightInstruction<
    TProgramAddress,
    TAccountEpochState,
    TAccountNcn,
    TAccountWeightTable,
    TAccountWeightTableAdmin,
    TAccountStMint
  >;

  return instruction;
}

export type ParsedAdminSetWeightInstruction<
  TProgram extends string = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    epochState: TAccountMetas[0];
    ncn: TAccountMetas[1];
    weightTable: TAccountMetas[2];
    weightTableAdmin: TAccountMetas[3];
    stMint: TAccountMetas[4];
  };
  data: AdminSetWeightInstructionData;
};

export function parseAdminSetWeightInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAdminSetWeightInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 5) {
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
      weightTableAdmin: getNextAccount(),
      stMint: getNextAccount(),
    },
    data: getAdminSetWeightInstructionDataDecoder().decode(instruction.data),
  };
}
