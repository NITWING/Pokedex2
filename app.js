const pokemonNameInput = document.getElementById("pokemon-name-input");
const searchButton = document.getElementById("search-button");
const pokemonSection = document.getElementById("pokemon");

searchButton.addEventListener("click", () => {
    const pokemonName = pokemonNameInput.value.toLowerCase();

    if (pokemonName.trim()) {
        fetchPokemon(pokemonName);
    } else {
        alert("Ingresa un nombre de Pokémon válido.");
    }
    
});

function fetchPokemon(pokemonName) {
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(pokemonURL)
        .then(response => response.json())
        .then(data => {
            if (data) {
                showPokemonInfo(data);
            } else {
                alert("No se encontró ningún Pokémon con ese nombre.");
            }
        })
        .catch(error => console.error("Error:", error));
}

function showPokemonInfo(pokemonData) {
    const pokemonName = pokemonData.name;
    const pokemonType = pokemonData.types[0].type.name;
    const pokemonAbilities = pokemonData.abilities[1].ability.name;

    pokemonSection.style.display = "block";

    document.getElementById("pokemon-name").textContent = pokemonName;
    document.getElementById("pokemon-type").textContent = pokemonType;
    document.getElementById("pokemon-abilities").textContent = pokemonAbilities;

    
    const pokemonImageURL = pokemonData.sprites.front_default;
    const pokemonImage = document.querySelector(".pokemon-image");
    pokemonImage.src = pokemonImageURL;
}
