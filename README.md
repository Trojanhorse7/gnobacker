# Gnobackers - Crowdfunding DApp on Gnosis Blockchain

Welcome to the Gnobackers project! Gnobackers is a decentralized crowdfunding platform built on the Gnosis Blockchain, leveraging technologies such as React, Solidity, Gateway RPC, and Banana Wallet. This README file will guide you through the project and provide an overview of its key components and how they were utilized.

## SITE LINK
https://gnobackers.netlify.app/

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Key Features](#key-features)
- [Architecture](#architecture)

## Introduction
Gnobackers aims to revolutionize crowdfunding by leveraging the power of blockchain technology. It provides a decentralized and transparent platform for individuals and organizations to raise funds for their projects, causes, or initiatives. By utilizing the Gnosis Blockchain, Gnobackers ensures the security and immutability of transactions while empowering users with control over their funds.

## Technologies Used
The following technologies were utilized in the development of Gnobackers:

- **React**: The frontend of Gnobackers is built using React, a popular JavaScript library for building user interfaces. React enables us to create dynamic and interactive components, providing a seamless user experience.

- **Solidity**: Gnobackers smart contracts, responsible for handling the logic and storage of funds, are written in Solidity. Solidity is a programming language specifically designed for creating smart contracts on the Ethereum Virtual Machine (EVM).

- **Gateway RPC**: Gnobackers interacts with the Gnosis Blockchain through the Gateway RPC (Remote Procedure Call) interface. This interface allows us to communicate with the blockchain, send transactions, and retrieve data.

- **Banana Wallet**: Banana wallet is a pluggable SDK for applications; our vision is to provide applications with an infrastructure that enables them to create a secure and seamless experience for their users.
Banana wallet enables application users to create an easy-to-use, non-custodial, and secure wallet inside the application. This wallet leverages ERC-4337(account abstraction) and Zero Knowledge Proofs(ZKPs). Gnobackers integrates with Banana Wallet to enable users to securely store and manage their funds, interact with smart contracts, and make transactions on the Gnosis Blockchain.

## Key Features
Gnobackers provides the following key features:

- **Crowdfunding Campaigns**: Users can create crowdfunding campaigns to raise funds for their projects. They can set a funding goal, duration, and provide details about their initiatives.

- **Contributions**: Users can contribute funds to campaigns they are interested in supporting. Contributions are securely processed through the Gnosis Blockchain, ensuring transparency and accountability.

- **Smart Contracts**: Gnobackers utilizes smart contracts written in Solidity to handle the transfer and storage of funds. Smart contracts enable secure and trustless transactions, eliminating the need for intermediaries.

- **Decentralization**: Gnobackers operates on the Gnosis Blockchain, a decentralized network that provides transparency, security, and immutability. Users have full control over their funds and can trust the integrity of the platform.

## Architecture
Gnobackers follows a client-server architecture. The frontend is built with React, providing a responsive and interactive user interface. It communicates with the backend through the Gateway RPC, which interacts with the Gnosis Blockchain.

The backend consists of smart contracts written in Solidity. These contracts handle the crowdfunding logic, including campaign creation, contribution processing, and fund distribution. The smart contracts are deployed on the Gnosis Blockchain, ensuring secure and decentralized execution.

It also leverages the Power of Banana wallet to provide two modes of transaction authentication which is OTP based two-factor authentication and touchID-based signing.

- **Touch Id based signing**:
Our SDK exposes a hardware-based signer which leverages the hardware security infrastructure secure enclave (for apple devices) to sign user transactions via biometric authentication. Once a signed transaction is propagated through the bundler, it gets verified on-chain at the smart contract wallet, and once the verification passes transaction executes successfully; else reverted.

- **2FA-based transaction authentication**:
In 2FA-based transaction authentication, a user sends his transaction with the OTP generated at the user's end via google authenticator. The OTP is used to generate a Merkle Inclusion Proof using zero-knowledge proofs. Once the proof verification passes on-chain, the transaction executes or else reverted.