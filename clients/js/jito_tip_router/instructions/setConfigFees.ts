/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU16Decoder,
  getU16Encoder,
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
  type Option,
  type OptionOrNullable,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type TransactionSigner,
  type WritableAccount,
} from '@solana/web3.js';
import { JITO_TIP_ROUTER_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const SET_CONFIG_FEES_DISCRIMINATOR = 2;

export function getSetConfigFeesDiscriminatorBytes() {
  return getU8Encoder().encode(SET_CONFIG_FEES_DISCRIMINATOR);
}

export type SetConfigFeesInstruction<
  TProgram extends string = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
  TAccountRestakingConfig extends string | IAccountMeta<string> = string,
  TAccountConfig extends string | IAccountMeta<string> = string,
  TAccountNcn extends string | IAccountMeta<string> = string,
  TAccountNcnAdmin extends string | IAccountMeta<string> = string,
  TAccountRestakingProgram extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountRestakingConfig extends string
        ? ReadonlyAccount<TAccountRestakingConfig>
        : TAccountRestakingConfig,
      TAccountConfig extends string
        ? WritableAccount<TAccountConfig>
        : TAccountConfig,
      TAccountNcn extends string ? ReadonlyAccount<TAccountNcn> : TAccountNcn,
      TAccountNcnAdmin extends string
        ? ReadonlySignerAccount<TAccountNcnAdmin> &
            IAccountSignerMeta<TAccountNcnAdmin>
        : TAccountNcnAdmin,
      TAccountRestakingProgram extends string
        ? ReadonlyAccount<TAccountRestakingProgram>
        : TAccountRestakingProgram,
      ...TRemainingAccounts,
    ]
  >;

export type SetConfigFeesInstructionData = {
  discriminator: number;
  newBlockEngineFeeBps: Option<number>;
  baseFeeGroup: Option<number>;
  newBaseFeeWallet: Option<Address>;
  newBaseFeeBps: Option<number>;
  ncnFeeGroup: Option<number>;
  newNcnFeeBps: Option<number>;
};

export type SetConfigFeesInstructionDataArgs = {
  newBlockEngineFeeBps: OptionOrNullable<number>;
  baseFeeGroup: OptionOrNullable<number>;
  newBaseFeeWallet: OptionOrNullable<Address>;
  newBaseFeeBps: OptionOrNullable<number>;
  ncnFeeGroup: OptionOrNullable<number>;
  newNcnFeeBps: OptionOrNullable<number>;
};

export function getSetConfigFeesInstructionDataEncoder(): Encoder<SetConfigFeesInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['newBlockEngineFeeBps', getOptionEncoder(getU16Encoder())],
      ['baseFeeGroup', getOptionEncoder(getU8Encoder())],
      ['newBaseFeeWallet', getOptionEncoder(getAddressEncoder())],
      ['newBaseFeeBps', getOptionEncoder(getU16Encoder())],
      ['ncnFeeGroup', getOptionEncoder(getU8Encoder())],
      ['newNcnFeeBps', getOptionEncoder(getU16Encoder())],
    ]),
    (value) => ({ ...value, discriminator: SET_CONFIG_FEES_DISCRIMINATOR })
  );
}

export function getSetConfigFeesInstructionDataDecoder(): Decoder<SetConfigFeesInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['newBlockEngineFeeBps', getOptionDecoder(getU16Decoder())],
    ['baseFeeGroup', getOptionDecoder(getU8Decoder())],
    ['newBaseFeeWallet', getOptionDecoder(getAddressDecoder())],
    ['newBaseFeeBps', getOptionDecoder(getU16Decoder())],
    ['ncnFeeGroup', getOptionDecoder(getU8Decoder())],
    ['newNcnFeeBps', getOptionDecoder(getU16Decoder())],
  ]);
}

export function getSetConfigFeesInstructionDataCodec(): Codec<
  SetConfigFeesInstructionDataArgs,
  SetConfigFeesInstructionData
> {
  return combineCodec(
    getSetConfigFeesInstructionDataEncoder(),
    getSetConfigFeesInstructionDataDecoder()
  );
}

export type SetConfigFeesInput<
  TAccountRestakingConfig extends string = string,
  TAccountConfig extends string = string,
  TAccountNcn extends string = string,
  TAccountNcnAdmin extends string = string,
  TAccountRestakingProgram extends string = string,
> = {
  restakingConfig: Address<TAccountRestakingConfig>;
  config: Address<TAccountConfig>;
  ncn: Address<TAccountNcn>;
  ncnAdmin: TransactionSigner<TAccountNcnAdmin>;
  restakingProgram: Address<TAccountRestakingProgram>;
  newBlockEngineFeeBps: SetConfigFeesInstructionDataArgs['newBlockEngineFeeBps'];
  baseFeeGroup: SetConfigFeesInstructionDataArgs['baseFeeGroup'];
  newBaseFeeWallet: SetConfigFeesInstructionDataArgs['newBaseFeeWallet'];
  newBaseFeeBps: SetConfigFeesInstructionDataArgs['newBaseFeeBps'];
  ncnFeeGroup: SetConfigFeesInstructionDataArgs['ncnFeeGroup'];
  newNcnFeeBps: SetConfigFeesInstructionDataArgs['newNcnFeeBps'];
};

export function getSetConfigFeesInstruction<
  TAccountRestakingConfig extends string,
  TAccountConfig extends string,
  TAccountNcn extends string,
  TAccountNcnAdmin extends string,
  TAccountRestakingProgram extends string,
  TProgramAddress extends Address = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
>(
  input: SetConfigFeesInput<
    TAccountRestakingConfig,
    TAccountConfig,
    TAccountNcn,
    TAccountNcnAdmin,
    TAccountRestakingProgram
  >,
  config?: { programAddress?: TProgramAddress }
): SetConfigFeesInstruction<
  TProgramAddress,
  TAccountRestakingConfig,
  TAccountConfig,
  TAccountNcn,
  TAccountNcnAdmin,
  TAccountRestakingProgram
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? JITO_TIP_ROUTER_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    restakingConfig: {
      value: input.restakingConfig ?? null,
      isWritable: false,
    },
    config: { value: input.config ?? null, isWritable: true },
    ncn: { value: input.ncn ?? null, isWritable: false },
    ncnAdmin: { value: input.ncnAdmin ?? null, isWritable: false },
    restakingProgram: {
      value: input.restakingProgram ?? null,
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
      getAccountMeta(accounts.restakingConfig),
      getAccountMeta(accounts.config),
      getAccountMeta(accounts.ncn),
      getAccountMeta(accounts.ncnAdmin),
      getAccountMeta(accounts.restakingProgram),
    ],
    programAddress,
    data: getSetConfigFeesInstructionDataEncoder().encode(
      args as SetConfigFeesInstructionDataArgs
    ),
  } as SetConfigFeesInstruction<
    TProgramAddress,
    TAccountRestakingConfig,
    TAccountConfig,
    TAccountNcn,
    TAccountNcnAdmin,
    TAccountRestakingProgram
  >;

  return instruction;
}

export type ParsedSetConfigFeesInstruction<
  TProgram extends string = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    restakingConfig: TAccountMetas[0];
    config: TAccountMetas[1];
    ncn: TAccountMetas[2];
    ncnAdmin: TAccountMetas[3];
    restakingProgram: TAccountMetas[4];
  };
  data: SetConfigFeesInstructionData;
};

export function parseSetConfigFeesInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSetConfigFeesInstruction<TProgram, TAccountMetas> {
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
      restakingConfig: getNextAccount(),
      config: getNextAccount(),
      ncn: getNextAccount(),
      ncnAdmin: getNextAccount(),
      restakingProgram: getNextAccount(),
    },
    data: getSetConfigFeesInstructionDataDecoder().decode(instruction.data),
  };
}
