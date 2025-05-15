# System Patterns

## Arquitetura do Sistema

*   **Frontend:** Uma aplicação web Next.js com TypeScript e Tailwind CSS. 
    *   A seção da plataforma (`src/app/Platform/`) renderiza uma `VerticalNavbar` à esquerda (gerenciada pelos arquivos `page.tsx` de cada rota).
    *   **Seção `TopPools.tsx`:** Implementa uma "faixa de header" no topo de seu conteúdo com título e botão "Connect Wallet".
    *   **Seção `CopyTrading.tsx`:** Possui um layout de duas colunas internas. A coluna da esquerda contém a lista de "Copied Wallets" e, acima dela, uma "faixa de header" com o título "Copy Trading" e o botão "Connect Wallet". A coluna da direita é a `aside` de `CopyTradingSettings`. Ambas as colunas se estendem até o topo da área de conteúdo da seção.
    *   O `WalletContextProvider.tsx` (envolvendo o `RootLayout`) gerencia o estado da carteira Solana.
*   **Backend:** (A ser definido - necessário para gerenciar dados de usuários, interações complexas, etc.? Ou a plataforma será majoritariamente client-side com interações diretas com a blockchain?)
*   **Integração Blockchain:** A plataforma se comunicará diretamente com a rede Solana para funcionalidades de carteira e outras interações.

## Decisões Técnicas Chave

*   Utilização da blockchain Solana para as funcionalidades Web3.
*   Integração com a Phantom Wallet (e outras compatíveis com o Solana Wallet Adapter) como opção de carteira.
*   Uso de `@solana/wallet-adapter-react`, `@solana/wallet-adapter-react-ui` e `@solana/wallet-adapter-wallets` para a funcionalidade da carteira.
*   Gerenciamento centralizado do estado da carteira e layout da plataforma através de `WalletContextProvider.tsx` e `PlatformLayout.tsx`.

## Padrões de Design em Uso

*   **Provider Pattern:** Para o `WalletContextProvider.tsx`.
*   **Layout Components (Next.js):** Para o `PlatformLayout.tsx`.
*   **MVC, MVVM para o frontend, etc.** (A serem definidos e documentados conforme o desenvolvimento avança. Exemplos: MVC, MVVM para o frontend, etc.)

## Relacionamento entre Componentes

*   **Landing Page:** Serve como porta de entrada e apresentação do projeto.
*   **Plataforma:** Onde os usuários interagem com as funcionalidades principais, incluindo a conexão de carteira.
*   **`src/components/providers/WalletContextProvider.tsx`:** Configura e provê o contexto e os hooks do Solana Wallet Adapter para a aplicação da plataforma.
*   **`src/sections/Platform/Navbar.tsx` (`VerticalNavbar`):** Componente de navegação vertical persistente à esquerda nas telas da plataforma.
*   **Botão "Connect Wallet":** 
    *   Em `TopPools.tsx`: Integrado em uma "faixa de header" no topo da seção, ao lado do título.
    *   Em `CopyTrading.tsx`: Integrado em uma "faixa de header" no topo da coluna central (lista de carteiras), ao lado do título "Copy Trading".
    *   Utiliza `useWalletModal` para exibir o modal de seleção de carteiras. Estilizado com `bg-teal-500` e `rounded-xl`.

## Caminhos Críticos de Implementação

1.  Integração segura e funcional da Phantom Wallet.
2.  Desenvolvimento de uma interface de usuário clara para a plataforma.
3.  Completude e apelo visual da landing page. 