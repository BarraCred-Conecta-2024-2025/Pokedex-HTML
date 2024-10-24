const params = new URLSearchParams(window.location.search);
const numero = params.get('numero');

async function drawPokemon(pokemon) {
    document.title = `Pokemon - ${capitalizeFirstLetter(pokemon.name)}`;
    let descriptions = await getPokemon('pokemon-species/' + pokemon.id);
    let description = Array.from(descriptions.flavor_text_entries).filter(item => item.language.name == 'en')
    document.getElementById('descricao').innerHTML =  description[0].flavor_text.replace('\f', ' ');

    document.querySelector('h1').innerHTML = `${pokemon.id.toString().padStart(3, '0')} - ${capitalizeFirstLetter(pokemon.name)}`
    document.getElementById('imgPoke').innerHTML = carousel(pokemon.sprites);
    document.getElementById('altura').innerHTML = `${pokemon.height / 10} m`
    document.getElementById('peso').innerHTML = `${pokemon.weight / 10} kg`

    let buttons = document.getElementById('tipos');
    buttons.innerHTML = '';
    pokemon.types.forEach((value, index) => {
        let name = getTipo(value.type.name);
        buttons.innerHTML += `<button class="btn btn-lg btn-${name} text-white">${name}</button>`
    });

    let sons = document.getElementById('sons');
    sons.innerHTML = '';
    if (pokemon.cries.latest != null)
        sons.innerHTML += `<audio controls><source src="${pokemon.cries.latest}" type="audio/ogg"></audio>`
    if (pokemon.cries.legacy != null)
        sons.innerHTML += `<audio controls><source src="${pokemon.cries.legacy}" type="audio/ogg"></audio>`
}

document.addEventListener("DOMContentLoaded", async () => {
    const pokemon = await getPokemon('pokemon/' + numero);
    drawPokemon(pokemon);

    document.querySelector('form').addEventListener("submit", function (e) {
        e.preventDefault();
        search();
    });
});

async function search() {
    if (loading) return;
    let search = document.querySelector('input[type="search"]').value;
    if (search == '') {
        const pokemon = await getPokemon('pokemon/' + numero);
        drawPokemon(pokemon);
    }
    else {
        const pokemon = await searchPokemon();
        drawPokemon(pokemon);
    }
}
