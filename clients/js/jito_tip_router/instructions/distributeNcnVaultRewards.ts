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

export const DISTRIBUTE_NCN_VAULT_REWARDS_DISCRIMINATOR = 25;

export function getDistributeNcnVaultRewardsDiscriminatorBytes() {
  return getU8Encoder().encode(DISTRIBUTE_NCN_VAULT_REWARDS_DISCRIMINATOR);
}

export type DistributeNcnVaultRewardsInstruction<
  TProgram extends string = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
  TAccountEpochState extends string | IAccountMeta<string> = string,
  TAccountConfig extends string | IAccountMeta<string> = string,
  TAccountNcn extends string | IAccountMeta<string> = string,
  TAccountOperator extends string | IAccountMeta<string> = string,
  TAccountVault extends string | IAccountMeta<string> = string,
  TAccountVaultAta extends string | IAccountMeta<string> = string,
  TAccountOperatorSnapshot extends string | IAccountMeta<string> = string,
  TAccountNcnRewardRouter extends string | IAccountMeta<string> = string,
  TAccountNcnRewardReceiver extends string | IAccountMeta<string> = string,
  TAccountStakePoolProgram extends string | IAccountMeta<string> = string,
  TAccountStakePool extends string | IAccountMeta<string> = string,
  TAccountStakePoolWithdrawAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountReserveStake extends string | IAccountMeta<string> = string,
  TAccountManagerFeeAccount extends string | IAccountMeta<string> = string,
  TAccountReferrerPoolTokensAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountPoolMint extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountEpochState extends string
        ? WritableAccount<TAccountEpochState>
        : TAccountEpochState,
      TAccountConfig extends string
        ? ReadonlyAccount<TAccountConfig>
        : TAccountConfig,
      TAccountNcn extends string ? ReadonlyAccount<TAccountNcn> : TAccountNcn,
      TAccountOperator extends string
        ? ReadonlyAccount<TAccountOperator>
        : TAccountOperator,
      TAccountVault extends string
        ? ReadonlyAccount<TAccountVault>
        : TAccountVault,
      TAccountVaultAta extends string
        ? WritableAccount<TAccountVaultAta>
        : TAccountVaultAta,
      TAccountOperatorSnapshot extends string
        ? WritableAccount<TAccountOperatorSnapshot>
        : TAccountOperatorSnapshot,
      TAccountNcnRewardRouter extends string
        ? WritableAccount<TAccountNcnRewardRouter>
        : TAccountNcnRewardRouter,
      TAccountNcnRewardReceiver extends string
        ? WritableAccount<TAccountNcnRewardReceiver>
        : TAccountNcnRewardReceiver,
      TAccountStakePoolProgram extends string
        ? ReadonlyAccount<TAccountStakePoolProgram>
        : TAccountStakePoolProgram,
      TAccountStakePool extends string
        ? WritableAccount<TAccountStakePool>
        : TAccountStakePool,
      TAccountStakePoolWithdrawAuthority extends string
        ? ReadonlyAccount<TAccountStakePoolWithdrawAuthority>
        : TAccountStakePoolWithdrawAuthority,
      TAccountReserveStake extends string
        ? WritableAccount<TAccountReserveStake>
        : TAccountReserveStake,
      TAccountManagerFeeAccount extends string
        ? WritableAccount<TAccountManagerFeeAccount>
        : TAccountManagerFeeAccount,
      TAccountReferrerPoolTokensAccount extends string
        ? WritableAccount<TAccountReferrerPoolTokensAccount>
        : TAccountReferrerPoolTokensAccount,
      TAccountPoolMint extends string
        ? WritableAccount<TAccountPoolMint>
        : TAccountPoolMint,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type DistributeNcnVaultRewardsInstructionData = {
  discriminator: number;
  ncnFeeGroup: number;
  epoch: bigint;
};

export type DistributeNcnVaultRewardsInstructionDataArgs = {
  ncnFeeGroup: number;
  epoch: number | bigint;
};

export function getDistributeNcnVaultRewardsInstructionDataEncoder(): Encoder<DistributeNcnVaultRewardsInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['ncnFeeGroup', getU8Encoder()],
      ['epoch', getU64Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: DISTRIBUTE_NCN_VAULT_REWARDS_DISCRIMINATOR,
    })
  );
}

export function getDistributeNcnVaultRewardsInstructionDataDecoder(): Decoder<DistributeNcnVaultRewardsInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['ncnFeeGroup', getU8Decoder()],
    ['epoch', getU64Decoder()],
  ]);
}

export function getDistributeNcnVaultRewardsInstructionDataCodec(): Codec<
  DistributeNcnVaultRewardsInstructionDataArgs,
  DistributeNcnVaultRewardsInstructionData
> {
  return combineCodec(
    getDistributeNcnVaultRewardsInstructionDataEncoder(),
    getDistributeNcnVaultRewardsInstructionDataDecoder()
  );
}

export type DistributeNcnVaultRewardsInput<
  TAccountEpochState extends string = string,
  TAccountConfig extends string = string,
  TAccountNcn extends string = string,
  TAccountOperator extends string = string,
  TAccountVault extends string = string,
  TAccountVaultAta extends string = string,
  TAccountOperatorSnapshot extends string = string,
  TAccountNcnRewardRouter extends string = string,
  TAccountNcnRewardReceiver extends string = string,
  TAccountStakePoolProgram extends string = string,
  TAccountStakePool extends string = string,
  TAccountStakePoolWithdrawAuthority extends string = string,
  TAccountReserveStake extends string = string,
  TAccountManagerFeeAccount extends string = string,
  TAccountReferrerPoolTokensAccount extends string = string,
  TAccountPoolMint extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  epochState: Address<TAccountEpochState>;
  config: Address<TAccountConfig>;
  ncn: Address<TAccountNcn>;
  operator: Address<TAccountOperator>;
  vault: Address<TAccountVault>;
  vaultAta: Address<TAccountVaultAta>;
  operatorSnapshot: Address<TAccountOperatorSnapshot>;
  ncnRewardRouter: Address<TAccountNcnRewardRouter>;
  ncnRewardReceiver: Address<TAccountNcnRewardReceiver>;
  stakePoolProgram: Address<TAccountStakePoolProgram>;
  stakePool: Address<TAccountStakePool>;
  stakePoolWithdrawAuthority: Address<TAccountStakePoolWithdrawAuthority>;
  reserveStake: Address<TAccountReserveStake>;
  managerFeeAccount: Address<TAccountManagerFeeAccount>;
  referrerPoolTokensAccount: Address<TAccountReferrerPoolTokensAccount>;
  poolMint: Address<TAccountPoolMint>;
  tokenProgram?: Address<TAccountTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  ncnFeeGroup: DistributeNcnVaultRewardsInstructionDataArgs['ncnFeeGroup'];
  epoch: DistributeNcnVaultRewardsInstructionDataArgs['epoch'];
};

export function getDistributeNcnVaultRewardsInstruction<
  TAccountEpochState extends string,
  TAccountConfig extends string,
  TAccountNcn extends string,
  TAccountOperator extends string,
  TAccountVault extends string,
  TAccountVaultAta extends string,
  TAccountOperatorSnapshot extends string,
  TAccountNcnRewardRouter extends string,
  TAccountNcnRewardReceiver extends string,
  TAccountStakePoolProgram extends string,
  TAccountStakePool extends string,
  TAccountStakePoolWithdrawAuthority extends string,
  TAccountReserveStake extends string,
  TAccountManagerFeeAccount extends string,
  TAccountReferrerPoolTokensAccount extends string,
  TAccountPoolMint extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TProgramAddress extends Address = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
>(
  input: DistributeNcnVaultRewardsInput<
    TAccountEpochState,
    TAccountConfig,
    TAccountNcn,
    TAccountOperator,
    TAccountVault,
    TAccountVaultAta,
    TAccountOperatorSnapshot,
    TAccountNcnRewardRouter,
    TAccountNcnRewardReceiver,
    TAccountStakePoolProgram,
    TAccountStakePool,
    TAccountStakePoolWithdrawAuthority,
    TAccountReserveStake,
    TAccountManagerFeeAccount,
    TAccountReferrerPoolTokensAccount,
    TAccountPoolMint,
    TAccountTokenProgram,
    TAccountSystemProgram
  >,
  config?: { programAddress?: TProgramAddress }
): DistributeNcnVaultRewardsInstruction<
  TProgramAddress,
  TAccountEpochState,
  TAccountConfig,
  TAccountNcn,
  TAccountOperator,
  TAccountVault,
  TAccountVaultAta,
  TAccountOperatorSnapshot,
  TAccountNcnRewardRouter,
  TAccountNcnRewardReceiver,
  TAccountStakePoolProgram,
  TAccountStakePool,
  TAccountStakePoolWithdrawAuthority,
  TAccountReserveStake,
  TAccountManagerFeeAccount,
  TAccountReferrerPoolTokensAccount,
  TAccountPoolMint,
  TAccountTokenProgram,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? JITO_TIP_ROUTER_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    epochState: { value: input.epochState ?? null, isWritable: true },
    config: { value: input.config ?? null, isWritable: false },
    ncn: { value: input.ncn ?? null, isWritable: false },
    operator: { value: input.operator ?? null, isWritable: false },
    vault: { value: input.vault ?? null, isWritable: false },
    vaultAta: { value: input.vaultAta ?? null, isWritable: true },
    operatorSnapshot: {
      value: input.operatorSnapshot ?? null,
      isWritable: true,
    },
    ncnRewardRouter: { value: input.ncnRewardRouter ?? null, isWritable: true },
    ncnRewardReceiver: {
      value: input.ncnRewardReceiver ?? null,
      isWritable: true,
    },
    stakePoolProgram: {
      value: input.stakePoolProgram ?? null,
      isWritable: false,
    },
    stakePool: { value: input.stakePool ?? null, isWritable: true },
    stakePoolWithdrawAuthority: {
      value: input.stakePoolWithdrawAuthority ?? null,
      isWritable: false,
    },
    reserveStake: { value: input.reserveStake ?? null, isWritable: true },
    managerFeeAccount: {
      value: input.managerFeeAccount ?? null,
      isWritable: true,
    },
    referrerPoolTokensAccount: {
      value: input.referrerPoolTokensAccount ?? null,
      isWritable: true,
    },
    poolMint: { value: input.poolMint ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.epochState),
      getAccountMeta(accounts.config),
      getAccountMeta(accounts.ncn),
      getAccountMeta(accounts.operator),
      getAccountMeta(accounts.vault),
      getAccountMeta(accounts.vaultAta),
      getAccountMeta(accounts.operatorSnapshot),
      getAccountMeta(accounts.ncnRewardRouter),
      getAccountMeta(accounts.ncnRewardReceiver),
      getAccountMeta(accounts.stakePoolProgram),
      getAccountMeta(accounts.stakePool),
      getAccountMeta(accounts.stakePoolWithdrawAuthority),
      getAccountMeta(accounts.reserveStake),
      getAccountMeta(accounts.managerFeeAccount),
      getAccountMeta(accounts.referrerPoolTokensAccount),
      getAccountMeta(accounts.poolMint),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getDistributeNcnVaultRewardsInstructionDataEncoder().encode(
      args as DistributeNcnVaultRewardsInstructionDataArgs
    ),
  } as DistributeNcnVaultRewardsInstruction<
    TProgramAddress,
    TAccountEpochState,
    TAccountConfig,
    TAccountNcn,
    TAccountOperator,
    TAccountVault,
    TAccountVaultAta,
    TAccountOperatorSnapshot,
    TAccountNcnRewardRouter,
    TAccountNcnRewardReceiver,
    TAccountStakePoolProgram,
    TAccountStakePool,
    TAccountStakePoolWithdrawAuthority,
    TAccountReserveStake,
    TAccountManagerFeeAccount,
    TAccountReferrerPoolTokensAccount,
    TAccountPoolMint,
    TAccountTokenProgram,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedDistributeNcnVaultRewardsInstruction<
  TProgram extends string = typeof JITO_TIP_ROUTER_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    epochState: TAccountMetas[0];
    config: TAccountMetas[1];
    ncn: TAccountMetas[2];
    operator: TAccountMetas[3];
    vault: TAccountMetas[4];
    vaultAta: TAccountMetas[5];
    operatorSnapshot: TAccountMetas[6];
    ncnRewardRouter: TAccountMetas[7];
    ncnRewardReceiver: TAccountMetas[8];
    stakePoolProgram: TAccountMetas[9];
    stakePool: TAccountMetas[10];
    stakePoolWithdrawAuthority: TAccountMetas[11];
    reserveStake: TAccountMetas[12];
    managerFeeAccount: TAccountMetas[13];
    referrerPoolTokensAccount: TAccountMetas[14];
    poolMint: TAccountMetas[15];
    tokenProgram: TAccountMetas[16];
    systemProgram: TAccountMetas[17];
  };
  data: DistributeNcnVaultRewardsInstructionData;
};

export function parseDistributeNcnVaultRewardsInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedDistributeNcnVaultRewardsInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 18) {
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
      config: getNextAccount(),
      ncn: getNextAccount(),
      operator: getNextAccount(),
      vault: getNextAccount(),
      vaultAta: getNextAccount(),
      operatorSnapshot: getNextAccount(),
      ncnRewardRouter: getNextAccount(),
      ncnRewardReceiver: getNextAccount(),
      stakePoolProgram: getNextAccount(),
      stakePool: getNextAccount(),
      stakePoolWithdrawAuthority: getNextAccount(),
      reserveStake: getNextAccount(),
      managerFeeAccount: getNextAccount(),
      referrerPoolTokensAccount: getNextAccount(),
      poolMint: getNextAccount(),
      tokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getDistributeNcnVaultRewardsInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
