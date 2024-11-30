document.addEventListener('DOMContentLoaded', function() {
    fetch('https://randomuser.me/api/?results=3') // Buscando 3 depoimentos
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('testemunho-container');
            const depoimentos = [
                "O Reset VIP foi o empurrão que eu precisava para transformar minha saúde. Os resultados são incríveis!",
                "Achei o programa fácil de seguir e muito motivador. A gamificação fez toda a diferença para mim.",
                "Perdi 5 kg em 21 dias e nunca me senti tão bem! O programa é prático e motivador.",
                "Participar do Reset VIP mudou minha relação com a comida e com a saúde. Recomendo muito!",
                "As aulas são incríveis e as metas diárias realmente me ajudaram a manter o foco."
            ];
            data.results.forEach((user, index) => {
                const testemunhoDiv = document.createElement('div');
                testemunhoDiv.classList.add('testemunho');
                const depoimentoAleatorio = depoimentos[Math.floor(Math.random() * depoimentos.length)];
                testemunhoDiv.setAttribute('data-aos', 'fade-right');
                testemunhoDiv.setAttribute('data-aos-delay', `${index * 200}`);
                testemunhoDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="${user.name.first}" />
                    <div>
                        <h3>${user.name.first} ${user.name.last}</h3>
                        <p>"${depoimentoAleatorio}"</p>
                        <p> - ${user.location.city}, ${user.location.country}</p>
                    </div>
                `;
                container.appendChild(testemunhoDiv);
            });
            AOS.refresh();
        })
        .catch(error => console.error('Erro ao buscar os dados:', error));
});