// script.js

// Função para filtrar notícias por categoria ou mostrar a página inicial
function filtrarNoticias(categoria) {
    event.preventDefault();
    
    // Controla a exibição das telas
    document.getElementById('grid-noticias').style.display = 'grid';
    document.getElementById('secao-contato').style.display = 'none';
    document.getElementById('secao-detalhe').style.display = 'none';

    const todasNoticias = document.querySelectorAll('.noticia');
    todasNoticias.forEach(noticia => {
        const categoriaDaNoticia = noticia.getAttribute('data-categoria');

        if (categoria === 'todas' || categoria === categoriaDaNoticia) {
            // Garante que o layout volte ao correto dependendo da resolução
            noticia.style.display = 'flex'; 
        } else {
            noticia.style.display = 'none';
        }
    });
}

// Função para exibir a página de contato
function mostrarContato() {
    event.preventDefault();
    document.getElementById('grid-noticias').style.display = 'none';
    document.getElementById('secao-detalhe').style.display = 'none';
    document.getElementById('secao-contato').style.display = 'block';
}

// Função executada ao clicar em qualquer notícia para ver os detalhes
function verDetalhes(elementoClicado) {
    // Transiciona as telas
    document.getElementById('grid-noticias').style.display = 'none';
    document.getElementById('secao-contato').style.display = 'none';
    document.getElementById('secao-detalhe').style.display = 'block';

    // Captura as informações da notícia clicada
    const imgSrc = elementoClicado.querySelector('img').src;
    const imgAlt = elementoClicado.querySelector('img').alt;
    const tag = elementoClicado.querySelector('.tag-categoria').innerText;
    const titulo = elementoClicado.querySelector('h2').innerText;
    const textoResumo = elementoClicado.querySelector('p').innerText;

    // Alimenta o painel principal da esquerda com os detalhes expandidos
    const focoContainer = document.getElementById('foco-noticia-principal');
    focoContainer.innerHTML = `
        <span class="tag-categoria">${tag}</span>
        <h1 class="titulo-detalhe-grande">${titulo}</h1>
        <img src="${imgSrc}" alt="${imgAlt}" class="imagem-detalhe-full">
        <p class="paragrafo-resumo"><strong>${textoResumo}</strong></p>
        <p class="paragrafo-corpo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae tellus non nibh hendrerit feugiat ac quis nisl. Mauris scelerisque vestibulum hendrerit.</p>
        <p class="paragrafo-corpo">In hac habitasse platea dictumst. Proin tincidunt tortor id sodales varius. Aliquam elementum tristique massa, id interdum diam luctus sit amet. Curabitur sed nisl vitae est accumsan tincidunt ac at lacus. Vivamus eleifend sapien massa, sed finibus augue imperdiet eu.</p>
    `;

    // Limpa a barra lateral antes de reconstruí-la
    const listaLaterais = document.getElementById('lista-noticias-laterais');
    listaLaterais.innerHTML = '';

    // Seleciona todas as notícias e adiciona as "não-clicadas" na barra lateral
    const todasNoticias = document.querySelectorAll('.noticia');
    todasNoticias.forEach(noticia => {
        if (noticia !== elementoClicado) {
            const latImgSrc = noticia.querySelector('img').src;
            const latTitulo = noticia.querySelector('h2').innerText;
            const latTag = noticia.querySelector('.tag-categoria').innerText;

            // Cria o elemento da caixinha pequena da barra lateral
            const itemLateral = document.createElement('div');
            itemLateral.className = 'card-lateral-pequeno';
            itemLateral.innerHTML = `
                <img src="${latImgSrc}">
                <div class="card-lateral-info">
                    <span class="tag-lateral-mini">${latTag}</span>
                    <h4>${latTitulo}</h4>
                </div>
            `;
            
            // UX Premium: Se o usuário clicar na notícia pequena da lateral, ela vira a principal!
            itemLateral.onclick = () => verDetalhes(noticia);
            
            listaLaterais.appendChild(itemLateral);
        }
    });

    // Desloca a página de volta para o topo para melhor leitura
    window.scrollTo({ top: 0, behavior: 'smooth' });
}