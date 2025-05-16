# Progress

## O Que Funciona

*   Estrutura inicial do Memory Bank criada.
*   **Plataforma - Conexão de Carteira:**
    *   Funcionalidade de conexão e desconexão implementada.
    *   UI do botão "Connect Wallet" reflete o estado da conexão (chave pública, botão de desconectar).
    *   Links inativos na `VerticalNavbar` desabilitados.
    *   Layouts das seções `TopPools` e `CopyTrading` ajustados.
    *   `WalletContextProvider` configurado (Mainnet) e integrado no `RootLayout`.
*   **Plataforma - Modal de Liquidez (`TopPools.tsx`):**
    *   `LiquidityStepOne.tsx` agora busca e exibe o saldo SOL do usuário conectado.
    *   Botões de porcentagem (25%, 50%, 75%, MAX) no `LiquidityStepOne.tsx` usam o saldo SOL para preencher o campo `solAmount`.
    *   Inputs numéricos no modal foram padronizados para usar `.` como separador decimal.

## O Que Falta Construir

*   **Landing Page:**
    *   Design e conteúdo dos 4/5 restantes.
    *   Responsividade.
*   **Plataforma:**
    *   Botão e lógica de conexão com a Phantom Wallet (Solana):
        *   **A FAZER:** Testar exaustivamente toda a funcionalidade da carteira (conexão, desconexão, UI do botão, modal) e a nova integração do saldo SOL.
        *   **A FAZER:** Iniciar planejamento e implementação da interação com a API da Meteora (construção e envio de transações).
    *   Outras funcionalidades da plataforma.

## Status Atual

*   **Landing Page:** 1/5 desenvolvida.
*   **Plataforma - Conexão de Carteira & Modal de Liquidez:** Funcionalidades de conexão, desconexão, e integração básica do saldo SOL no modal `LiquidityStepOne` implementadas. Testes finais e integração com Meteora pendentes.

## Problemas Conhecidos

(Nenhum problema conhecido no momento)

## Evolução das Decisões do Projeto

*   **[Data Atual]** - Decisão inicial de priorizar a implementação da conexão de carteira na plataforma antes de finalizar a landing page.
*   **[Data Atual]** - `LiquidityStepOne.tsx` modificado para buscar saldo SOL dinamicamente e interagir com botões de porcentagem. 