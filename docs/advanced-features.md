---
sidebar_position: 8
title: "Advanced Features"
---

# Advanced Features

Ospex includes several advanced features that allow users to personalize their experience and streamline their interactions with the platform.

## Personalized Profile Names

Ospex supports the resolution of both [**Ethereum Name Service (ENS)**](https://ens.domains/) and [**Unstoppable Domain**](https://unstoppabledomains.com/) names to wallet addresses. This means that in addition to each wallet address having its own profile page, you can customize your profile's name and URL by linking an ENS or Unstoppable Domain to your wallet.

Here are examples of how different addresses can resolve to the same profile, as they are all linked to the same wallet; note, this is not required, and in order to maintain anonymity, simply using your crypto wallet without an associated name is advised.

- [**https://ospex.org/u/0xA8eb19F9B7c2b2611C1279423A0CB2aee3735320**](https://ospex.org/u/0xA8eb19F9B7c2b2611C1279423A0CB2aee3735320)
- [**https://ospex.org/u/vincelaird.eth**](https://ospex.org/u/vincelaird.eth)
- [**https://ospex.org/u/ospex.crypto**](https://ospex.org/u/ospex.crypto)

## Pre-approve USDC

To bypass the step of granting Ospex permission to use USDC on your behalf each time your desired position amount exceeds your approved amount, consider pre-approving a larger amount of USDC. This action can be performed within your crypto wallet by setting a higher allowance for the contract.

### Understanding the Risks

Pre-approving USDC does introduce potential risks:

- **Smart Contract Risk:** If there's a bug in the contract, it could potentially lead to the loss of any pre-approved USDC.
- **Approval to Malicious Contracts:** Inadvertently granting a high allowance to a malicious contract could result in unauthorized access to your funds.
- **Limited Control:** By pre-approving large amounts, you may not notice smaller unauthorized withdrawals from your wallet, as they won’t require further permissions.

While pre-approval adds convenience, it's important to balance this with the understanding of these risks and to only grant allowances to contracts that you trust completely.