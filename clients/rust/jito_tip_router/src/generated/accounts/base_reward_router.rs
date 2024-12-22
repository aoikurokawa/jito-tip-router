//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! <https://github.com/kinobi-so/kinobi>

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::pubkey::Pubkey;

use crate::generated::types::{BaseRewardRouterRewards, NcnRewardRoute};

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct BaseRewardRouter {
    pub discriminator: u64,
    #[cfg_attr(
        feature = "serde",
        serde(with = "serde_with::As::<serde_with::DisplayFromStr>")
    )]
    pub ncn: Pubkey,
    pub ncn_epoch: u64,
    pub bump: u8,
    pub slot_created: u64,
    pub total_rewards: u64,
    pub reward_pool: u64,
    pub rewards_processed: u64,
    #[cfg_attr(feature = "serde", serde(with = "serde_big_array::BigArray"))]
    pub reserved: [u8; 128],
    pub last_ncn_group_index: u8,
    pub last_vote_index: u16,
    pub base_fee_group_rewards: [BaseRewardRouterRewards; 8],
    pub ncn_fee_group_rewards: [BaseRewardRouterRewards; 8],
    #[cfg_attr(feature = "serde", serde(with = "serde_big_array::BigArray"))]
    pub ncn_fee_group_reward_routes: [NcnRewardRoute; 256],
}

impl BaseRewardRouter {
    #[inline(always)]
    pub fn from_bytes(data: &[u8]) -> Result<Self, std::io::Error> {
        let mut data = data;
        Self::deserialize(&mut data)
    }
}

impl<'a> TryFrom<&solana_program::account_info::AccountInfo<'a>> for BaseRewardRouter {
    type Error = std::io::Error;

    fn try_from(
        account_info: &solana_program::account_info::AccountInfo<'a>,
    ) -> Result<Self, Self::Error> {
        let mut data: &[u8] = &(*account_info.data).borrow();
        Self::deserialize(&mut data)
    }
}

#[cfg(feature = "anchor")]
impl anchor_lang::AccountDeserialize for BaseRewardRouter {
    fn try_deserialize_unchecked(buf: &mut &[u8]) -> anchor_lang::Result<Self> {
        Ok(Self::deserialize(buf)?)
    }
}

#[cfg(feature = "anchor")]
impl anchor_lang::AccountSerialize for BaseRewardRouter {}

#[cfg(feature = "anchor")]
impl anchor_lang::Owner for BaseRewardRouter {
    fn owner() -> Pubkey {
        crate::JITO_TIP_ROUTER_ID
    }
}

#[cfg(feature = "anchor-idl-build")]
impl anchor_lang::IdlBuild for BaseRewardRouter {}

#[cfg(feature = "anchor-idl-build")]
impl anchor_lang::Discriminator for BaseRewardRouter {
    const DISCRIMINATOR: [u8; 8] = [0; 8];
}
