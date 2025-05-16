# Active Context

## Foco Atual

*   **Integração do saldo SOL nos modais de `TopPools.tsx`:**
    *   `LiquidityStepOne.tsx` modificado para buscar e exibir o saldo SOL do usuário conectado.
    *   Botões de porcentagem (25%, 50%, 75%, MAX) agora usam o saldo SOL para calcular e preencher o campo `solAmount`.
    *   Inputs numéricos agora forçam `.` como separador decimal.
*   Ajustes de layout e design para o botão "Connect Wallet" e estrutura das seções `TopPools` e `CopyTrading`.
    *   Removida borda inferior da "faixa de header" em `TopPools.tsx`.
    *   `CopyTrading.tsx` reestruturado para ter `VerticalNavbar` à esquerda, `CopyTradingSettings` (aside) à direita (ambos altura total), e uma área central para os cards com seu próprio header (título + botão "Connect Wallet").
*   Implementar a funcionalidade de conexão com a Phantom Wallet (Solana) na plataforma.
    *   Botões da `VerticalNavbar` inativos foram estilizados e desabilitados funcionalmente.
    *   Botão "Connect Wallet" nas seções agora reflete o estado da conexão:
        *   Exibe "Connect Wallet" se desconectado.
        *   Exibe nome da carteira, chave pública formatada e um botão "Disconnect" se conectado.
    *   Funcionalidade de desconexão implementada.

## Próximos Passos

1.  **Testar exaustivamente a funcionalidade completa da carteira e a nova integração do saldo SOL no modal `LiquidityStepOne`:**
    *   Verificar o novo estado do botão (conectado/desconectado) em `TopPools` e `CopyTrading`.
    *   Testar os fluxos de conexão e desconexão.
    *   Confirmar que o modal de seleção de carteira ainda funciona e está estilizado.
    *   **NOVO:** Validar a exibição do saldo SOL e a funcionalidade dos botões de porcentagem em `LiquidityStepOne.tsx`.
2.  **Integração com a API da Meteora:**
    *   Discutir e planejar os próximos passos para construir e enviar as transações para criar pools de liquidez via API/SDK da Meteora, utilizando a carteira conectada e os valores dos modais.
3.  Finalizar o desenvolvimento da landing page.
4.  Detalhar as próximas funcionalidades da plataforma após a conexão da carteira.

## Decisões Ativas e Considerações

*   **NOVO:** `LiquidityStepOne.tsx` agora usa `useConnection` e `useWallet` diretamente para buscar saldo.
*   Layout de `CopyTrading.tsx` modificado para melhor aproveitamento de espaço e alinhamento do botão.
*   Remoção da borda inferior da "faixa de header" em `TopPools.tsx` (e por padrão, na nova de `CopyTrading.tsx`).
*   Layout da seção inclui uma "faixa de header" com título e botão "Connect Wallet".
*   Cor do botão padronizada para `bg-teal-500`.
*   Uso do `useWalletModal` para acionar o modal de conexão.
*   Necessidade de testar a estilização do modal e, possivelmente, reativar o CSS de `@solana/wallet-adapter-react-ui` no `WalletContextProvider`.
*   Utilizar `@solana/wallet-adapter-react` e suas bibliotecas associadas.
*   Centralizar a lógica da carteira e o layout da plataforma com `WalletContextProvider` e `PlatformLayout`.
*   Usar o `WalletMultiButton` para uma UI de conexão de carteira rápida e padronizada.
*   Priorizar a funcionalidade de conexão de carteira antes de continuar com a landing page, conforme solicitado.
*   Botão de conexão da carteira agora é dinâmico, mostrando estado e permitindo desconexão.
*   Links inativos da Navbar desabilitados.

## Padrões e Preferências Importantes

(A serem definidos conforme o projeto evolui)

## Aprendizados e Insights do Projeto

*   **NOVO:** A busca de saldo da carteira é uma operação assíncrona e deve ser tratada com `useEffect` e estados de carregamento/erro, se necessário, para uma melhor UX. 