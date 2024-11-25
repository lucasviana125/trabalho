document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        { title: "Capitão América - O Primeiro Vingador", year: 2011, actors: "Chris Evans, Hugo Weaving", synopsis: "História do Capitão América durante a Segunda Guerra Mundial.", criticsScore: 80, audienceScore: 75 },
        { title: "Capitã Marvel", year: 2019, actors: "Brie Larson, Samuel L. Jackson", synopsis: "A história da super-heroína Capitã Marvel em seu combate aos Skrulls.", criticsScore: 79, audienceScore: 65 },
        { title: "O Incrível Hulk", year: 2008, actors: "Edward Norton, Liv Tyler", synopsis: "Bruce Banner se torna o Hulk após exposição a raios gama.", criticsScore: 67, audienceScore: 70 },
        { title: "Homem De Ferro", year: 2008, actors: "Robert Downey Jr., Gwyneth Paltrow", synopsis: "Tony Stark cria uma armadura para salvar sua vida e se tornar um herói.", criticsScore: 94, audienceScore: 91 },
        { title: "Homem De Ferro 2", year: 2010, actors: "Robert Downey Jr., Mickey Rourke", synopsis: "Tony Stark enfrenta novos inimigos e desafios como o Homem de Ferro.", criticsScore: 73, audienceScore: 71 },
        { title: "Thor", year: 2011, actors: "Chris Hemsworth, Natalie Portman", synopsis: "Thor é banido para a Terra e aprende a ser digno de seu martelo Mjolnir.", criticsScore: 77, audienceScore: 76 },
        { title: "Os Vingadores", year: 2012, actors: "Robert Downey Jr., Chris Evans", synopsis: "Os heróis da Marvel se unem para salvar o mundo de uma invasão alienígena.", criticsScore: 91, audienceScore: 91 },
        { title: "Homem De Ferro 3", year: 2013, actors: "Robert Downey Jr., Guy Pearce", synopsis: "Tony Stark enfrenta o terrorista Mandarim.", criticsScore: 79, audienceScore: 78 },
        { title: "Thor - O Mundo Sombrio", year: 2013, actors: "Chris Hemsworth, Natalie Portman", synopsis: "Thor luta para salvar o universo de um novo inimigo, Malekith.", criticsScore: 66, audienceScore: 76 },
        { title: "Capitão América - O Soldado Invernal", year: 2014, actors: "Chris Evans, Scarlett Johansson", synopsis: "Capitão América enfrenta uma conspiração e o misterioso Soldado Invernal.", criticsScore: 90, audienceScore: 92, cover: "capa10.jpg" },
        { title: "Guardiões Da Galáxia", year: 2014, actors: "Chris Pratt, Zoe Saldana", synopsis: "Um grupo de desajustados se une para salvar a galáxia.", criticsScore: 92, audienceScore: 92, cover: "capa11.jpg" },
        { title: "Eu Sou Groot", year: 2022, actors: "Vin Diesel (voz)", synopsis: "Curtas-metragens sobre as aventuras de Groot.", criticsScore: 75, audienceScore: 80, cover: "capa12.jpg" },
        { title: "Guardiões Da Galáxia 2", year: 2017, actors: "Chris Pratt, Zoe Saldana", synopsis: "A equipe luta para manter sua nova família unida.", criticsScore: 85, audienceScore: 87, cover: "capa13.jpg" },
        { title: "Vingadores - Era De Ultron", year: 2015, actors: "Robert Downey Jr., Chris Evans", synopsis: "Os Vingadores enfrentam a inteligência artificial Ultron.", criticsScore: 76, audienceScore: 83, cover: "capa14.jpg" },
        { title: "Homem-Formiga", year: 2015, actors: "Paul Rudd, Michael Douglas", synopsis: "Um ladrão recebe um traje que permite encolher e aumentar de tamanho.", criticsScore: 82, audienceScore: 86, cover: "capa15.jpg" },
        { title: "Capitão América - Guerra Cívil", year: 2016, actors: "Chris Evans, Robert Downey Jr.", synopsis: "Divisão entre os Vingadores após um conflito político.", criticsScore: 91, audienceScore: 89, cover: "capa16.jpg" },
        { title: "Viúva Negra", year: 2021, actors: "Scarlett Johansson, Florence Pugh", synopsis: "Natasha enfrenta seu passado em uma nova missão.", criticsScore: 79, audienceScore: 83, cover: "capa17.jpg" },
        { title: "Pantera Negra", year: 2018, actors: "Chadwick Boseman, Michael B. Jordan", synopsis: "T'Challa luta para defender Wakanda e seu legado.", criticsScore: 96, audienceScore: 79, cover: "capa18.jpg" },
        { title: "Homem Aranha - De Volta Ao Lar", year: 2017, actors: "Tom Holland, Michael Keaton", synopsis: "Peter Parker enfrenta o vilão Abutre.", criticsScore: 92, audienceScore: 88, cover: "capa19.jpg" },
        { title: "Doutor Estranho", year: 2016, actors: "Benedict Cumberbatch, Chiwetel Ejiofor", synopsis: "Um cirurgião se torna o Mago Supremo após um acidente.", criticsScore: 89, audienceScore: 86, cover: "capa20.jpg" },
        { title: "Thor: Ragnarok", year: 2017, actors: "Chris Hemsworth, Tom Hiddleston", synopsis: "Thor enfrenta Hela e tenta impedir o Ragnarok.", criticsScore: 93, audienceScore: 87, cover: "capa21.jpg" },
        { title: "Homem-Formiga e a Vespa", year: 2018, actors: "Paul Rudd, Evangeline Lilly", synopsis: "Scott Lang retorna para uma nova missão ao lado da Vespa.", criticsScore: 88, audienceScore: 80, cover: "capa23.jpg" },
        { title: "Vingadores: Ultimato", year: 2019, actors: "Robert Downey Jr., Chris Evans", synopsis: "Os Vingadores tentam reverter os danos causados por Thanos.", criticsScore: 94, audienceScore: 90, cover: "capa24.jpg" },
        { title: "Loki", year: 2021, actors: "Tom Hiddleston, Owen Wilson", synopsis: "O deus da trapaça, Loki, explora a linha do tempo em várias realidades.", criticsScore: 92, audienceScore: 90, cover: "capa29.jpg" },
        { title: "Deadpool e Wolverine", year: 2024, actors: "Ryan Reynolds, Hugh Jackman", synopsis: "Deadpool e Wolverine enfrentam uma nova ameaça juntos.", criticsScore: null, audienceScore: null, cover: "capa30.jpg" },
        { title: "What If...?", year: 2021, actors: "Jeffrey Wright (voz), Hayley Atwell (voz)", synopsis: "Histórias alternativas no multiverso da Marvel.", criticsScore: 94, audienceScore: 80, cover: "capa1.jpg" },
        { title: "Wandavision", year: 2021, actors: "Elizabeth Olsen, Paul Bettany", synopsis: "Wanda e Visão vivem uma realidade alternativa em forma de sitcom.", criticsScore: 91, audienceScore: 88, cover: "capa2.jpg" },
        { title: "Agatha Desde Sempre", year: 2024, actors: "Kathryn Hahn", synopsis: "Spin-off de Wandavision focado em Agatha Harkness.", criticsScore: null, audienceScore: null, cover: "capa3.jpg" },
        { title: "Falcão e o Soldado Invernal", year: 2021, actors: "Anthony Mackie, Sebastian Stan", synopsis: "Sam Wilson e Bucky Barnes enfrentam novos desafios após o Blip.", criticsScore: 85, audienceScore: 78, cover: "capa4.jpg" },
        { title: "Homem Aranha - Longe De Casa", year: 2019, actors: "Tom Holland, Jake Gyllenhaal", synopsis: "Peter Parker enfrenta o vilão Mysterio em uma viagem pela Europa.", criticsScore: 90, audienceScore: 95, cover: "capa5.jpg" },
        { title: "Homem Aranha - Sem Volta Para Casa", year: 2021, actors: "Tom Holland, Zendaya", synopsis: "Peter Parker lida com as consequências de sua identidade revelada.", criticsScore: 93, audienceScore: 98, cover: "capa6.jpg" },
        { title: "Shang Chi e a Lenda Dos Dez Anéis", year: 2021, actors: "Simu Liu, Awkwafina", synopsis: "Shang-Chi enfrenta seu pai e a organização dos Dez Anéis.", criticsScore: 91, audienceScore: 92, cover: "capa7.jpg" },
        { title: "Eternos", year: 2021, actors: "Gemma Chan, Richard Madden", synopsis: "Seres imortais precisam proteger a Terra de uma ameaça antiga.", criticsScore: 47, audienceScore: 78, cover: "capa8.jpg" },
        { title: "Doutor Estranho - No Multiverso Da Loucura", year: 2022, actors: "Benedict Cumberbatch, Elizabeth Olsen", synopsis: "Doutor Estranho explora o multiverso para salvar o mundo.", criticsScore: 74, audienceScore: 85, cover: "capa9.jpg" },
        { title: "Gavião Arqueiro", year: 2021, actors: "Jeremy Renner, Hailee Steinfeld", synopsis: "Clint Barton e Kate Bishop enfrentam inimigos na época natalina.", criticsScore: 92, audienceScore: 90, cover: "capa10.jpg" },
        { title: "Echo", year: 2024, actors: "Alaqua Cox", synopsis: "Spin-off de Gavião Arqueiro focado em Maya Lopez, também conhecida como Echo.", criticsScore: null, audienceScore: null, cover: "capa11.jpg" },
        { title: "Cavaleiro Da Lua", year: 2022, actors: "Oscar Isaac, Ethan Hawke", synopsis: "Um vigilante com múltiplas personalidades enfrenta inimigos sobrenaturais.", criticsScore: 87, audienceScore: 93, cover: "capa12.jpg" },
        { title: "Pantera Negra - Wakanda Para Sempre", year: 2022, actors: "Letitia Wright, Angela Bassett", synopsis: "Wakanda lida com a perda de seu rei e novas ameaças.", criticsScore: 84, audienceScore: 94, cover: "capa13.jpg" },
        { title: "Invasão Secreta", year: 2023, actors: "Samuel L. Jackson, Ben Mendelsohn", synopsis: "Nick Fury enfrenta uma invasão Skrull na Terra.", criticsScore: 66, audienceScore: 74, cover: "capa14.jpg" },
        { title: "Mulher Hulk - Defensora De Heróis", year: 2022, actors: "Tatiana Maslany, Mark Ruffalo", synopsis: "Jennifer Walters, uma advogada que também é Hulk, equilibra sua vida profissional e heróica.", criticsScore: 85, audienceScore: 55, cover: "capa15.jpg" },
        { title: "Thor - Amor e Trovão", year: 2022, actors: "Chris Hemsworth, Natalie Portman", synopsis: "Thor enfrenta Gorr, o Carniceiro dos Deuses.", criticsScore: 64, audienceScore: 77, cover: "capa16.jpg" },
        { title: "Lobisomem Na Noite", year: 2022, actors: "Gael García Bernal, Laura Donnelly", synopsis: "História de horror especial com o Lobisomem da Marvel.", criticsScore: 91, audienceScore: 89, cover: "capa17.jpg" },
        { title: "Ms. Marvel", year: 2022, actors: "Iman Vellani, Matt Lintz", synopsis: "Kamala Khan, uma adolescente muçulmana, descobre seus poderes e se torna Ms. Marvel.", criticsScore: 97, audienceScore: 80, cover: "capa18.jpg" },
        { title: "As Marvels", year: 2023, actors: "Brie Larson, Iman Vellani", synopsis: "Capitã Marvel, Ms. Marvel e Monica Rambeau enfrentam uma nova ameaça juntas.", criticsScore: null, audienceScore: null, cover: "capa19.jpg" },
        { title: "Homem-Formiga e a Vespa - Quantumania", year: 2023, actors: "Paul Rudd, Evangeline Lilly", synopsis: "Homem-Formiga e Vespa exploram o Reino Quântico.", criticsScore: 48, audienceScore: 83, cover: "capa20.jpg" },
        { title: "Especial De Fim De Ano - Guardiões Da Galáxia", year: 2022, actors: "Chris Pratt, Dave Bautista", synopsis: "Os Guardiões da Galáxia celebram o Natal de uma forma única.", criticsScore: 89, audienceScore: 84, cover: "capa21.jpg" },
        { title: "Guardiões Da Galáxia 3", year: 2023, actors: "Chris Pratt, Zoe Saldana", synopsis: "A equipe embarca em sua última aventura juntos.", criticsScore: 82, audienceScore: 92, cover: "capa22.jpg" },
    ];
    
    const movieList = document.getElementById('movie-list');

    movies.forEach((movie, index) => {
        const movieItem = document.createElement('li');
        movieItem.classList.add('movie-item');

        movieItem.innerHTML = `
            <movie.title>
            <div>
                <h2>${movie.title} (${movie.year})</h2>
                <p><strong>Atores:</strong> ${movie.actors}</p>
                <p><strong>Sinopse:</strong> ${movie.synopsis}</p>
                <p><strong>Nota dos Críticos:</strong> ${movie.criticsScore ? movie.criticsScore + '%' : 'N/A'}</p>
                <p><strong>Nota do Público:</strong> ${movie.audienceScore ? movie.audienceScore + '%' : 'N/A'}</p>
                <button class="watched-button" onclick="toggleWatched(${index})">Marcar como Assistido</button>
            </div>
        `;

        movieList.appendChild(movieItem);
    });
});

function toggleWatched(index) {
    const button = document.querySelectorAll('.watched-button')[index];
    button.classList.toggle('watched');
    button.textContent = button.classList.contains('watched') ? "Assistido" : "Marcar como Assistido";
}