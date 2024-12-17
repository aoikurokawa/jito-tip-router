//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! <https://github.com/kinobi-so/kinobi>

use borsh::{BorshDeserialize, BorshSerialize};

/// Accounts.
pub struct SetTrackedMintNcnFeeGroup {
    pub restaking_config: solana_program::pubkey::Pubkey,

    pub ncn_config: solana_program::pubkey::Pubkey,

    pub ncn: solana_program::pubkey::Pubkey,

    pub weight_table: solana_program::pubkey::Pubkey,

    pub tracked_mints: solana_program::pubkey::Pubkey,

    pub admin: solana_program::pubkey::Pubkey,

    pub restaking_program: solana_program::pubkey::Pubkey,
}

impl SetTrackedMintNcnFeeGroup {
    pub fn instruction(
        &self,
        args: SetTrackedMintNcnFeeGroupInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: SetTrackedMintNcnFeeGroupInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(7 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.restaking_config,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.ncn_config,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.ncn, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.weight_table,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.tracked_mints,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.admin, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.restaking_program,
            false,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = SetTrackedMintNcnFeeGroupInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::JITO_TIP_ROUTER_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct SetTrackedMintNcnFeeGroupInstructionData {
    discriminator: u8,
}

impl SetTrackedMintNcnFeeGroupInstructionData {
    pub fn new() -> Self {
        Self { discriminator: 18 }
    }
}

impl Default for SetTrackedMintNcnFeeGroupInstructionData {
    fn default() -> Self {
        Self::new()
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct SetTrackedMintNcnFeeGroupInstructionArgs {
    pub vault_index: u64,
    pub ncn_fee_group: u8,
}

/// Instruction builder for `SetTrackedMintNcnFeeGroup`.
///
/// ### Accounts:
///
///   0. `[]` restaking_config
///   1. `[]` ncn_config
///   2. `[]` ncn
///   3. `[]` weight_table
///   4. `[writable]` tracked_mints
///   5. `[writable, signer]` admin
///   6. `[]` restaking_program
#[derive(Clone, Debug, Default)]
pub struct SetTrackedMintNcnFeeGroupBuilder {
    restaking_config: Option<solana_program::pubkey::Pubkey>,
    ncn_config: Option<solana_program::pubkey::Pubkey>,
    ncn: Option<solana_program::pubkey::Pubkey>,
    weight_table: Option<solana_program::pubkey::Pubkey>,
    tracked_mints: Option<solana_program::pubkey::Pubkey>,
    admin: Option<solana_program::pubkey::Pubkey>,
    restaking_program: Option<solana_program::pubkey::Pubkey>,
    vault_index: Option<u64>,
    ncn_fee_group: Option<u8>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl SetTrackedMintNcnFeeGroupBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[inline(always)]
    pub fn restaking_config(
        &mut self,
        restaking_config: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.restaking_config = Some(restaking_config);
        self
    }
    #[inline(always)]
    pub fn ncn_config(&mut self, ncn_config: solana_program::pubkey::Pubkey) -> &mut Self {
        self.ncn_config = Some(ncn_config);
        self
    }
    #[inline(always)]
    pub fn ncn(&mut self, ncn: solana_program::pubkey::Pubkey) -> &mut Self {
        self.ncn = Some(ncn);
        self
    }
    #[inline(always)]
    pub fn weight_table(&mut self, weight_table: solana_program::pubkey::Pubkey) -> &mut Self {
        self.weight_table = Some(weight_table);
        self
    }
    #[inline(always)]
    pub fn tracked_mints(&mut self, tracked_mints: solana_program::pubkey::Pubkey) -> &mut Self {
        self.tracked_mints = Some(tracked_mints);
        self
    }
    #[inline(always)]
    pub fn admin(&mut self, admin: solana_program::pubkey::Pubkey) -> &mut Self {
        self.admin = Some(admin);
        self
    }
    #[inline(always)]
    pub fn restaking_program(
        &mut self,
        restaking_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.restaking_program = Some(restaking_program);
        self
    }
    #[inline(always)]
    pub fn vault_index(&mut self, vault_index: u64) -> &mut Self {
        self.vault_index = Some(vault_index);
        self
    }
    #[inline(always)]
    pub fn ncn_fee_group(&mut self, ncn_fee_group: u8) -> &mut Self {
        self.ncn_fee_group = Some(ncn_fee_group);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = SetTrackedMintNcnFeeGroup {
            restaking_config: self.restaking_config.expect("restaking_config is not set"),
            ncn_config: self.ncn_config.expect("ncn_config is not set"),
            ncn: self.ncn.expect("ncn is not set"),
            weight_table: self.weight_table.expect("weight_table is not set"),
            tracked_mints: self.tracked_mints.expect("tracked_mints is not set"),
            admin: self.admin.expect("admin is not set"),
            restaking_program: self
                .restaking_program
                .expect("restaking_program is not set"),
        };
        let args = SetTrackedMintNcnFeeGroupInstructionArgs {
            vault_index: self.vault_index.clone().expect("vault_index is not set"),
            ncn_fee_group: self
                .ncn_fee_group
                .clone()
                .expect("ncn_fee_group is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `set_tracked_mint_ncn_fee_group` CPI accounts.
pub struct SetTrackedMintNcnFeeGroupCpiAccounts<'a, 'b> {
    pub restaking_config: &'b solana_program::account_info::AccountInfo<'a>,

    pub ncn_config: &'b solana_program::account_info::AccountInfo<'a>,

    pub ncn: &'b solana_program::account_info::AccountInfo<'a>,

    pub weight_table: &'b solana_program::account_info::AccountInfo<'a>,

    pub tracked_mints: &'b solana_program::account_info::AccountInfo<'a>,

    pub admin: &'b solana_program::account_info::AccountInfo<'a>,

    pub restaking_program: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `set_tracked_mint_ncn_fee_group` CPI instruction.
pub struct SetTrackedMintNcnFeeGroupCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,

    pub restaking_config: &'b solana_program::account_info::AccountInfo<'a>,

    pub ncn_config: &'b solana_program::account_info::AccountInfo<'a>,

    pub ncn: &'b solana_program::account_info::AccountInfo<'a>,

    pub weight_table: &'b solana_program::account_info::AccountInfo<'a>,

    pub tracked_mints: &'b solana_program::account_info::AccountInfo<'a>,

    pub admin: &'b solana_program::account_info::AccountInfo<'a>,

    pub restaking_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: SetTrackedMintNcnFeeGroupInstructionArgs,
}

impl<'a, 'b> SetTrackedMintNcnFeeGroupCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: SetTrackedMintNcnFeeGroupCpiAccounts<'a, 'b>,
        args: SetTrackedMintNcnFeeGroupInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            restaking_config: accounts.restaking_config,
            ncn_config: accounts.ncn_config,
            ncn: accounts.ncn,
            weight_table: accounts.weight_table,
            tracked_mints: accounts.tracked_mints,
            admin: accounts.admin,
            restaking_program: accounts.restaking_program,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(7 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.restaking_config.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.ncn_config.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.ncn.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.weight_table.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.tracked_mints.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.admin.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.restaking_program.key,
            false,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = SetTrackedMintNcnFeeGroupInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::JITO_TIP_ROUTER_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(7 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.restaking_config.clone());
        account_infos.push(self.ncn_config.clone());
        account_infos.push(self.ncn.clone());
        account_infos.push(self.weight_table.clone());
        account_infos.push(self.tracked_mints.clone());
        account_infos.push(self.admin.clone());
        account_infos.push(self.restaking_program.clone());
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `SetTrackedMintNcnFeeGroup` via CPI.
///
/// ### Accounts:
///
///   0. `[]` restaking_config
///   1. `[]` ncn_config
///   2. `[]` ncn
///   3. `[]` weight_table
///   4. `[writable]` tracked_mints
///   5. `[writable, signer]` admin
///   6. `[]` restaking_program
#[derive(Clone, Debug)]
pub struct SetTrackedMintNcnFeeGroupCpiBuilder<'a, 'b> {
    instruction: Box<SetTrackedMintNcnFeeGroupCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> SetTrackedMintNcnFeeGroupCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(SetTrackedMintNcnFeeGroupCpiBuilderInstruction {
            __program: program,
            restaking_config: None,
            ncn_config: None,
            ncn: None,
            weight_table: None,
            tracked_mints: None,
            admin: None,
            restaking_program: None,
            vault_index: None,
            ncn_fee_group: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    #[inline(always)]
    pub fn restaking_config(
        &mut self,
        restaking_config: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.restaking_config = Some(restaking_config);
        self
    }
    #[inline(always)]
    pub fn ncn_config(
        &mut self,
        ncn_config: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.ncn_config = Some(ncn_config);
        self
    }
    #[inline(always)]
    pub fn ncn(&mut self, ncn: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.ncn = Some(ncn);
        self
    }
    #[inline(always)]
    pub fn weight_table(
        &mut self,
        weight_table: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.weight_table = Some(weight_table);
        self
    }
    #[inline(always)]
    pub fn tracked_mints(
        &mut self,
        tracked_mints: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.tracked_mints = Some(tracked_mints);
        self
    }
    #[inline(always)]
    pub fn admin(&mut self, admin: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.admin = Some(admin);
        self
    }
    #[inline(always)]
    pub fn restaking_program(
        &mut self,
        restaking_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.restaking_program = Some(restaking_program);
        self
    }
    #[inline(always)]
    pub fn vault_index(&mut self, vault_index: u64) -> &mut Self {
        self.instruction.vault_index = Some(vault_index);
        self
    }
    #[inline(always)]
    pub fn ncn_fee_group(&mut self, ncn_fee_group: u8) -> &mut Self {
        self.instruction.ncn_fee_group = Some(ncn_fee_group);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = SetTrackedMintNcnFeeGroupInstructionArgs {
            vault_index: self
                .instruction
                .vault_index
                .clone()
                .expect("vault_index is not set"),
            ncn_fee_group: self
                .instruction
                .ncn_fee_group
                .clone()
                .expect("ncn_fee_group is not set"),
        };
        let instruction = SetTrackedMintNcnFeeGroupCpi {
            __program: self.instruction.__program,

            restaking_config: self
                .instruction
                .restaking_config
                .expect("restaking_config is not set"),

            ncn_config: self.instruction.ncn_config.expect("ncn_config is not set"),

            ncn: self.instruction.ncn.expect("ncn is not set"),

            weight_table: self
                .instruction
                .weight_table
                .expect("weight_table is not set"),

            tracked_mints: self
                .instruction
                .tracked_mints
                .expect("tracked_mints is not set"),

            admin: self.instruction.admin.expect("admin is not set"),

            restaking_program: self
                .instruction
                .restaking_program
                .expect("restaking_program is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

#[derive(Clone, Debug)]
struct SetTrackedMintNcnFeeGroupCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    restaking_config: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    ncn_config: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    ncn: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    weight_table: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    tracked_mints: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    admin: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    restaking_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    vault_index: Option<u64>,
    ncn_fee_group: Option<u8>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}