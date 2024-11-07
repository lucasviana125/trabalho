const movies = [
    {
        title: "Harry Potter e a Pedra Filosofal",
        description: "A história do jovem bruxo Harry Potter em sua primeira aventura em Hogwarts.",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        releaseDate: "2001-11-23",
        criticsRating: 4.5,
        publicRating: 4.8,
        duration: "2h 32min",
        streaming: ["HBO Max"],
        image: "https://upload.wikimedia.org/wikipedia/pt/0/0d/Harry_Potter_and_the_Sorcerer%27s_Stone.jpg",
    },
    {
        title: "Titanic",
        description: "Um romance trágico que acontece a bordo do famoso navio Titanic.",
        actors: ["Leonardo DiCaprio", "Kate Winslet"],
        releaseDate: "1997-12-19",
        criticsRating: 4.7,
        publicRating: 4.9,
        duration: "3h 15min",
        streaming: ["Star+"],
        image: "https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg",
    },
    {
        title: "Crepúsculo",
        description: "A história de amor entre Bella e o vampiro Edward Cullen.",
        actors: ["Kristen Stewart", "Robert Pattinson"],
        releaseDate: "2008-11-21",
        criticsRating: 3.5,
        publicRating: 4.0,
        duration: "2h 2min",
        streaming: ["Prime Video"],
        image: "https://upload.wikimedia.org/wikipedia/pt/3/3d/Twilightfilm.jpg",
    },
    {
        title: "Jurassic Park",
        description: "A visita a um parque temático de dinossauros que dá errado.",
        actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
        releaseDate: "1993-06-11",
        criticsRating: 4.5,
        publicRating: 4.7,
        duration: "2h 7min",
        streaming: ["Netflix"],
        image: "https://upload.wikimedia.org/wikipedia/pt/e/e7/Jurassic_Park_poster.jpg",
    },
    {
        title: "O Rei Leão",
        description: "A jornada de Simba para se tornar o rei da savana.",
        actors: ["Matthew Broderick", "James Earl Jones"],
        releaseDate: "1994-06-15",
        criticsRating: 4.9,
        publicRating: 4.8,
        duration: "1h 28min",
        streaming: ["Disney+"],
        image: "https://upload.wikimedia.org/wikipedia/pt/8/88/The_Lion_King_poster.jpg",
    },
    {
        title: "Vingadores: Ultimato",
        description: "A batalha final dos Vingadores contra Thanos.",
        actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
        releaseDate: "2019-04-26",
        criticsRating: 4.8,
        publicRating: 4.9,
        duration: "3h 2min",
        streaming: ["Disney+"],
        image: "https://upload.wikimedia.org/wikipedia/pt/9/90/Avengers_Endgame.jpg",
    },
    {
        title: "Avatar",
        description: "A história de um humano que vive entre os Na'vi no planeta Pandora.",
        actors: ["Sam Worthington", "Zoe Saldana"],
        releaseDate: "2009-12-18",
        criticsRating: 4.6,
        publicRating: 4.7,
        duration: "2h 42min",
        streaming: ["Disney+"],
        image: "https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg",
    },
    {
        title: "Coringa",
        description: "A origem sombria do vilão Coringa.",
        actors: ["Joaquin Phoenix", "Robert De Niro"],
        releaseDate: "2019-10-04",
        criticsRating: 4.5,
        publicRating: 4.8,
        duration: "2h 2min",
        streaming: ["HBO Max"],
        image: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Joker_2019.jpg",
    },
    {
        title: "A Lenda do Cavaleiro sem Cabeça",
        description: "Um investigador se depara com o mistério do Cavaleiro Sem Cabeça.",
        actors: ["Johnny Depp", "Christina Ricci"],
        releaseDate: "1999-11-19",
        criticsRating: 4.2,
        publicRating: 4.0,
        duration: "1h 45min",
        streaming: ["Prime Video"],
        image: "https://upload.wikimedia.org/wikipedia/pt/d/dd/Sleepy_Hollow_1999.jpg",
    },
    {
        title: "Coraline",
        description: "Uma garota encontra um mundo alternativo que parece melhor, mas é perigoso.",
        actors: ["Dakota Fanning", "Teri Hatcher"],
        releaseDate: "2009-02-06",
        criticsRating: 4.3,
        publicRating: 4.5,
        duration: "1h 40min",
        streaming: ["Prime Video"],
        image: "https://upload.wikimedia.org/wikipedia/pt/0/06/Coraline_poster.jpg",
    }
];

// Função para carregar os filmes na página
function loadMovies() {
    const movieList = document.querySelector('.movie-list');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="movie-image">
            <div class="movie-info">
                <h2 class="movie-title">${movie.title}</h2>
                <button class="show-more-btn">Ver Mais</button>
                <div class="rating-stars">
                    ${[...Array(5)].map((_,