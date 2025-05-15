# Tech Context

## Tecnologias Principais

*   **Blockchain:** Solana
*   **Carteira (Wallet):** Phantom Wallet
*   **Frontend (Landing Page & Plataforma):** Next.js com TypeScript, Tailwind CSS

## Ambiente de Desenvolvimento

(A ser definido - como configurar o ambiente de desenvolvimento)

## Dependências Chave

*   Bibliotecas de interação com a blockchain Solana (ex: `@solana/web3.js`).
*   SDK ou biblioteca para integração com a Phantom Wallet:
    *   `@solana/wallet-adapter-react`
    *   `@solana/wallet-adapter-react-ui` (para componentes de UI pré-construídos, opcional mas recomendado)
    *   `@solana/wallet-adapter-base`
    *   `@solana/wallet-adapter-wallets` (para suportar múltiplas carteiras, incluindo Phantom - `@solana/wallet-adapter-phantom`)
*   `@tailwindcss/typography` (se já não estiver em uso, para estilização de conteúdo) - verificar `tailwind.config.ts` ou `package.json`
*   `lucide-react` (se já não estiver em uso, para ícones) - verificar `package.json`

## Constraints Técnicas

*   A integração com a Phantom Wallet deve ser segura e seguir as melhores práticas. 