# Active Context

## Foco Atual

*   Ajustes de layout e design para o botão "Connect Wallet" e estrutura das seções `TopPools` e `CopyTrading`.
    *   Removida borda inferior da "faixa de header" em `TopPools.tsx`.
    *   `CopyTrading.tsx` reestruturado para ter `VerticalNavbar` à esquerda, `CopyTradingSettings` (aside) à direita (ambos altura total), e uma área central para os cards com seu próprio header (título + botão "Connect Wallet").

## Próximos Passos

1.  **Testar os novos layouts e a funcionalidade de conexão da carteira:**
    *   Verificar o layout de `TopPools.tsx` (sem borda, título e botão alinhados).
    *   Verificar o novo layout de `CopyTrading.tsx` (navbar e aside altura total, área central com seu header e botão).
    *   Testar o fluxo de conexão com a Phantom Wallet em ambas as seções.
    *   Verificar se o modal de seleção de carteira está funcional e estilizado.
2.  Implementar a exibição do estado da carteira conectada (substituir o botão "Connect Wallet" ou adicionar display do endereço) usando o hook `useWallet()`.
3.  Finalizar o desenvolvimento da landing page.
4.  Detalhar as próximas funcionalidades da plataforma após a conexão da carteira.

## Decisões Ativas e Considerações

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

## Padrões e Preferências Importantes

(A serem definidos conforme o projeto evolui)

## Aprendizados e Insights do Projeto

(A serem documentados conforme o projeto evolui) 