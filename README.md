# TraceFi: DeFi Platform on the Solana Network

TraceFi is a project under development aiming to offer an intuitive and powerful decentralized finance (DeFi) platform built on the Solana blockchain. The project includes a landing page for presentation and a platform with features focused on liquidity pools and, in the future, copy trading.

## Problem the Project Solves

*(This section should be detailed as the TraceFi product vision solidifies. Currently, the project aims to facilitate access and interaction with liquidity opportunities on the Solana network, simplifying processes that can be complex for new users.)*

TraceFi seeks to simplify user interaction with the Solana DeFi ecosystem by providing tools to identify and participate in liquidity pools, and eventually, to replicate trading strategies efficiently.

## Main Features

Currently, the project is focused on platform development and includes:

*   **Landing Page:** A presentation page for the TraceFi project (initial development).
*   **Wallet Connection:** Integration with Solana network wallets (Phantom Wallet as the main focus) using the Solana Wallet Adapter.
*   **Liquidity Pool Visualization:**
    *   Display of "Top Pools" with relevant information (Volume, TVL, APY, etc.).
    *   Filters for different platforms (e.g., Meteora, Orca).
    *   Pool search.
*   **Liquidity Management (for Top Pools):**
    *   Interactive modal to add liquidity to selected pools.
    *   Fetching and displaying the connected user's SOL balance.
    *   Calculation of deposit amounts based on SOL balance percentages (25%, 50%, 75%, MAX).
    *   Selection of liquidity type (Double Sided, Single Sided - SOL or Token).
    *   Configuration of strategy (Spot), price range, and slippage (mocked/UI ready).
*   **Copy Trading Section:** Initial structure of the section and UI for future copy trading functionalities.
*   **Consistent Design:** User interface with a dark theme, using reusable components and Tailwind CSS for styling.

## Technologies Used

*   **Frontend:** Next.js (v14+)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Blockchain:** Solana
*   **Blockchain Interaction:**
    *   `@solana/web3.js`
    *   `@solana/wallet-adapter-react`
    *   `@solana/wallet-adapter-react-ui`
    *   `@solana/wallet-adapter-base`
    *   `@solana/wallet-adapter-wallets` (with a focus on `PhantomWalletAdapter`)
*   **Icons:** Lucide Icons
*   **UI Components:** Radix UI (for components like Dialog)
*   **RPC Endpoint:** It is recommended to use a dedicated RPC provider (e.g., Helius, QuickNode, Alchemy) for better performance and reliability in communication with the Solana network.

## Initial Setup and How to Run the Project

1.  **Clone the Repository:**
    ```bash
    git clone <YOUR_REPOSITORY_URL_HERE>
    cd tracefi 
    ```

2.  **Install Dependencies:**
    It is recommended to use `yarn` or `npm`.
    ```bash
    yarn install
    ```
    or
    ```bash
    npm install
    ```

3.  **Configure Environment Variables (Optional, but Recommended):**
    For a better experience, especially with blockchain communication, create a `.env.local` file in the project root and add your Solana RPC endpoint:
    ```env
    NEXT_PUBLIC_SOLANA_RPC_HOST=YOUR_RPC_URL_HERE
    ```
    You can get an RPC URL from providers like [Helius](https://www.helius.dev/), [QuickNode](https://www.quicknode.com/), or [Alchemy](https://www.alchemy.com/solana).
    *Note: Currently, the RPC endpoint is configured directly in the code at `src/components/providers/WalletContextProvider.tsx`. This step is a suggestion for future improvements and configuration centralization.*

4.  **Run the Development Server:**
    ```bash
    yarn dev
    ```
    or
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) (or the port your project is configured to use, usually 3000 or 3001) in your browser to see the application.

5.  **Connect a Solana Wallet:**
    *   Make sure you have a Solana wallet extension installed in your browser (e.g., Phantom Wallet).
    *   On the TraceFi platform, click "Connect Wallet" to interact with blockchain functionalities.

---

This `README.md` serves as an overview of the TraceFi project in its current state of development. It will be updated as new features are added and the project evolves.
