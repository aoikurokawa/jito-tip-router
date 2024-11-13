use jito_bytemuck::{AccountDeserialize, Discriminator};
use jito_jsm_core::loader::load_signer;
use jito_restaking_core::ncn::Ncn;
use jito_tip_router_core::{
    error::TipRouterError, instruction::ConfigAdminRole, ncn_config::NcnConfig,
};
use solana_program::{
    account_info::AccountInfo, entrypoint::ProgramResult, msg, program_error::ProgramError,
    pubkey::Pubkey,
};

pub fn process_set_new_admin(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    role: ConfigAdminRole,
) -> ProgramResult {
    let [config, ncn_account, ncn_admin, new_admin, restaking_program_id] = accounts else {
        return Err(ProgramError::NotEnoughAccountKeys);
    };

    load_signer(ncn_admin, true)?;

    NcnConfig::load(program_id, ncn_account.key, config, true)?;
    Ncn::load(restaking_program_id.key, ncn_account, false)?;

    let mut config_data = config.try_borrow_mut_data()?;
    if config_data[0] != NcnConfig::DISCRIMINATOR {
        return Err(ProgramError::InvalidAccountData);
    }
    let config = NcnConfig::try_from_slice_unchecked_mut(&mut config_data)?;

    // Verify NCN and Admin
    if config.ncn != *ncn_account.key {
        return Err(TipRouterError::IncorrectNcn.into());
    }

    let ncn_data = ncn_account.data.borrow();
    let ncn = Ncn::try_from_slice_unchecked(&ncn_data)?;

    if ncn.admin != *ncn_admin.key {
        return Err(TipRouterError::IncorrectNcnAdmin.into());
    }

    match role {
        ConfigAdminRole::FeeAdmin => {
            config.fee_admin = *new_admin.key;
            msg!("Fee admin set to {:?}", new_admin.key);
        }
        ConfigAdminRole::TieBreakerAdmin => {
            config.tie_breaker_admin = *new_admin.key;
            msg!("Tie breaker admin set to {:?}", new_admin.key);
        }
    }

    Ok(())
}