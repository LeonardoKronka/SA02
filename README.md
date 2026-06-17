Melhorias Realizadas: Remoção de larguras fixas (1200px e 800px) que quebravam o layout; inclusão da meta tag viewport para reconhecimento de dispositivos móveis; criação de cards interativos para as notícias.

Elementos Semânticos Utilizados: Substituição das tags genéricas <div> por <header>, <nav>, <main>, <article> e <footer>, o que melhora o SEO e a acessibilidade da página. Adição do atributo alt nas imagens.

Media Queries Implementadas: Adotada a estratégia Mobile First. O layout padrão usa 1 coluna para smartphones. Foi criada uma Media Query min-width: 768px (tablets) que altera a disposição para 2 colunas e ajusta o cabeçalho usando Flexbox. Outra Media Query min-width: 1024px (desktop) ajusta o layout para 3 colunas.

Decisões de UX e UI: As fontes estilizadas ("Jokerman" e "Chiller") foram trocadas por famílias tipográficas sem serifa padronizadas pelo sistema (Segoe UI, Roboto) para garantir a legibilidade. As imagens agora utilizam object-fit: cover para manter um padrão visual sem distorção. Foi aplicado um esquema de cores de alto contraste e efeitos de hover nas notícias e links do menu para dar feedback visual de navegação ao usuário.

Design Editorial (UI): A interface foi reestilizada com inspiração em portais de notícias de alto tráfego (alto contraste com fundo branco, cabeçalho escuro e tipografia sem serifa em negrito) para transmitir seriedade e urgência, características cruciais para o nicho de notícias.

Hierarquia de Informação (UX/CSS Grid): Utilizando a pseudo-classe :first-child combinada com as Media Queries, a primeira matéria foi promovida a "Manchete de Destaque", ocupando mais colunas em resoluções maiores. Isso orienta a leitura do usuário e cria um fluxo de navegação mais natural para plataformas digitais de notícias.

Feedback Visual (UX/UI): Adição de tags categóricas (Tecnologia, Economia, Esportes) acima das manchetes. Isso reduz a carga cognitiva do usuário, permitindo que ele identifique o assunto da matéria antes mesmo de ler o título.

Boas Práticas e Organização de Código: O comportamento interativo da página foi isolado em um arquivo externo (script.js). Essa alternativa foi escolhida para aplicar o conceito de Separação de Interesses, garantindo um HTML mais semântico e limpo, além de facilitar a manutenção futura e otimizar o carregamento do navegador através de cache.