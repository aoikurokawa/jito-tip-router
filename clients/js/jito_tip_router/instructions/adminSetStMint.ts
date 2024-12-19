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
  type Option,
  type OptionOrNullable,
  type ReadonlyAccount,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/web3.js';
import { JITO_TIP_ROUTER_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const ADMIN_SET_ST_MINT_DISCRIMINATOR = 20;

export function getAdminSetStMintDiscriminatorBytes() {
  return getU8Encoder().encode(ADMIN_SET_ST_MINT_DISCRIMINATOR);
}

export type AdminSetStMintInstruction<
  TProgram extends string = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
  TAccountRestakingConfig extends string | IAccountMeta<string> = string,
  TAccountConfig extends string | IAccountMeta<string> = string,
  TAccountNcn extends string | IAccountMeta<string> = string,
  TAccountVaultRegistry extends string | IAccountMeta<string> = string,
  TAccountAdmin extends string | IAccountMeta<string> = string,
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
        ? ReadonlyAccount<TAccountConfig>
        : TAccountConfig,
      TAccountNcn extends string ? ReadonlyAccount<TAccountNcn> : TAccountNcn,
      TAccountVaultRegistry extends string
        ? WritableAccount<TAccountVaultRegistry>
        : TAccountVaultRegistry,
      TAccountAdmin extends string
        ? WritableSignerAccount<TAccountAdmin> &
            IAccountSignerMeta<TAccountAdmin>
        : TAccountAdmin,
      TAccountRestakingProgram extends string
        ? ReadonlyAccount<TAccountRestakingProgram>
        : TAccountRestakingProgram,
      ...TRemainingAccounts,
    ]
  >;

export type AdminSetStMintInstructionData = {
  discriminator: number;
  stMint: Address;
  ncnFeeGroup: Option<number>;
  rewardMultiplierBps: Option<bigint>;
  switchboardFeed: Option<Address>;
  noFeedWeight: Option<bigint>;
};

export type AdminSetStMintInstructionDataArgs = {
  stMint: Address;
  ncnFeeGroup: OptionOrNullable<number>;
  rewardMultiplierBps: OptionOrNullable<number | bigint>;
  switchboardFeed: OptionOrNullable<Address>;
  noFeedWeight: OptionOrNullable<number | bigint>;
};

export function getAdminSetStMintInstructionDataEncoder(): Encoder<AdminSetStMintInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['stMint', getAddressEncoder()],
      ['ncnFeeGroup', getOptionEncoder(getU8Encoder())],
      ['rewardMultiplierBps', getOptionEncoder(getU64Encoder())],
      ['switchboardFeed', getOptionEncoder(getAddressEncoder())],
      ['noFeedWeight', getOptionEncoder(getU128Encoder())],
    ]),
    (value) => ({ ...value, discriminator: ADMIN_SET_ST_MINT_DISCRIMINATOR })
  );
}

export function getAdminSetStMintInstructionDataDecoder(): Decoder<AdminSetStMintInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['stMint', getAddressDecoder()],
    ['ncnFeeGroup', getOptionDecoder(getU8Decoder())],
    ['rewardMultiplierBps', getOptionDecoder(getU64Decoder())],
    ['switchboardFeed', getOptionDecoder(getAddressDecoder())],
    ['noFeedWeight', getOptionDecoder(getU128Decoder())],
  ]);
}

export function getAdminSetStMintInstructionDataCodec(): Codec<
  AdminSetStMintInstructionDataArgs,
  AdminSetStMintInstructionData
> {
  return combineCodec(
    getAdminSetStMintInstructionDataEncoder(),
    getAdminSetStMintInstructionDataDecoder()
  );
}

export type AdminSetStMintInput<
  TAccountRestakingConfig extends string = string,
  TAccountConfig extends string = string,
  TAccountNcn extends string = string,
  TAccountVaultRegistry extends string = string,
  TAccountAdmin extends string = string,
  TAccountRestakingProgram extends string = string,
> = {
  restakingConfig: Address<TAccountRestakingConfig>;
  config: Address<TAccountConfig>;
  ncn: Address<TAccountNcn>;
  vaultRegistry: Address<TAccountVaultRegistry>;
  admin: TransactionSigner<TAccountAdmin>;
  restakingProgram: Address<TAccountRestakingProgram>;
  stMint: AdminSetStMintInstructionDataArgs['stMint'];
  ncnFeeGroup: AdminSetStMintInstructionDataArgs['ncnFeeGroup'];
  rewardMultiplierBps: AdminSetStMintInstructionDataArgs['rewardMultiplierBps'];
  switchboardFeed: AdminSetStMintInstructionDataArgs['switchboardFeed'];
  noFeedWeight: AdminSetStMintInstructionDataArgs['noFeedWeight'];
};

export function getAdminSetStMintInstruction<
  TAccountRestakingConfig extends string,
  TAccountConfig extends string,
  TAccountNcn extends string,
  TAccountVaultRegistry extends string,
  TAccountAdmin extends string,
  TAccountRestakingProgram extends string,
  TProgramAddress extends Address = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
>(
  input: AdminSetStMintInput<
    TAccountRestakingConfig,
    TAccountConfig,
    TAccountNcn,
    TAccountVaultRegistry,
    TAccountAdmin,
    TAccountRestakingProgram
  >,
  config?: { programAddress?: TProgramAddress }
): AdminSetStMintInstruction<
  TProgramAddress,
  TAccountRestakingConfig,
  TAccountConfig,
  TAccountNcn,
  TAccountVaultRegistry,
  TAccountAdmin,
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
    config: { value: input.config ?? null, isWritable: false },
    ncn: { value: input.ncn ?? null, isWritable: false },
    vaultRegistry: { value: input.vaultRegistry ?? null, isWritable: true },
    admin: { value: input.admin ?? null, isWritable: true },
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
      getAccountMeta(accounts.vaultRegistry),
      getAccountMeta(accounts.admin),
      getAccountMeta(accounts.restakingProgram),
    ],
    programAddress,
    data: getAdminSetStMintInstructionDataEncoder().encode(
      args as AdminSetStMintInstructionDataArgs
    ),
  } as AdminSetStMintInstruction<
    TProgramAddress,
    TAccountRestakingConfig,
    TAccountConfig,
    TAccountNcn,
    TAccountVaultRegistry,
    TAccountAdmin,
    TAccountRestakingProgram
  >;

  return instruction;
}

export type ParsedAdminSetStMintInstruction<
  TProgram extends string = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    restakingConfig: TAccountMetas[0];
    config: TAccountMetas[1];
    ncn: TAccountMetas[2];
    vaultRegistry: TAccountMetas[3];
    admin: TAccountMetas[4];
    restakingProgram: TAccountMetas[5];
  };
  data: AdminSetStMintInstructionData;
};

export function parseAdminSetStMintInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAdminSetStMintInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 6) {
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
      vaultRegistry: getNextAccount(),
      admin: getNextAccount(),
      restakingProgram: getNextAccount(),
    },
    data: getAdminSetStMintInstructionDataDecoder().decode(instruction.data),
  };
}
