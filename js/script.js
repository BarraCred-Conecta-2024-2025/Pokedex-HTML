let pokemons = [
    {
        numero: '001',
        nome: 'Bulbasaur',
        tipos: ['Planta', 'Venenoso'],
        rgba: '119,204,85,0.75'
    },
    {
        numero: '002',
        nome: 'Ivysaur',
        tipos: ['Planta', 'Venenoso'],
        rgba: '119,204,85,0.75'
    },
    {
        numero: '003',
        nome: 'Venusaur',
        tipos: ['Planta', 'Venenoso'],
        rgba: '119,204,85,0.75'
    },
    {
        numero: '004',
        nome: 'Charmander',
        tipos: ['Fogo'],
        rgba: '255, 68, 34, 0.75'
    },
    {
        numero: '005',
        nome: 'Charmeleon',
        tipos: ['Fogo'],
        rgba: '255, 68, 34, 0.75'
    },
    {
        numero: '006',
        nome: 'Charizard',
        tipos: ['Fogo', 'Voador'],
        rgba: '255, 68, 34, 0.75'
    },
    {
        numero: '007',
        nome: 'Squirtle',
        tipos: ['Água'],
        rgba: '51, 153, 255, 0.75'
    },
    {
        numero: '008',
        nome: 'Wartortle',
        tipos: ['Água'],
        rgba: '51, 153, 255, 0.75'
    },
    {
        numero: '009',
        nome: 'Blastoise',
        tipos: ['Água'],
        rgba: '51, 153, 255, 0.75'
    },
    {
        numero: '010',
        nome: 'Caterpie', tipos: ['Inseto'], rgba: '170,187,102, 0.75'
    },
    {
        numero: '011',
        nome: 'Metapod', tipos: ['Inseto'], rgba: '170,187,102, 0.75'
    },
    {
        numero: '012',
        nome: 'Butterfree',
        tipos: ['Inseto', 'Voador'],
        rgba: '170,187,102, 0.75'
    },
    {
        numero: '013',
        nome: 'Weedle',
        tipos: ['Inseto'],
        rgba: '170,187,102, 0.75'
    },
    {
        numero: '014',
        nome: 'Kakuna',
        tipos: ['Inseto'],
        rgba: '170,187,102, 0.75'
    },
    {
        numero: '015',
        nome: 'Beedrill',
        tipos: ['Inseto', 'Voador'],
        rgba: '170,187,102, 0.75'
    },
    {
        numero: '016',
        nome: 'Pidgey',
        tipos: ['Normal', 'Voador'],
        rgba: '170,170,153, 0.75'
    },
    {
        numero: '017',
        nome: 'Pidgeotto',
        tipos: ['Normal', 'Voador'],
        rgba: '170,170,153, 0.75'
    },
    {
        numero: '018',
        nome: 'Pidgeot',
        tipos: ['Normal', 'Voador'],
        rgba: '170,170,153, 0.75'
    },
    {
        numero: '019',
        nome: 'Rattata',
        tipos: ['Normal'],
        rgba: '170,170,153, 0.75'
    },
    {
        numero: '020',
        nome: 'Raticate',
        tipos: ['Normal'],
        rgba: '170,170,153, 0.75'
    },
    {
        numero: '021',
        nome: 'Spearow',
        tipos: ['Normal', 'Voador'],
        rgba: '170,170,153, 0.75'
    },
    {
        numero: '022',
        nome: 'Fearow',
        tipos: ['Normal', 'Voador'],
        rgba: '170,170,153, 0.75'
    },
    {
        numero: '023',
        nome: 'Ekans',
        tipos: ['Venenoso'],
        rgba: '170,85,153, 0.75'
    },
    {
        numero: '024',
        nome: 'Arbok',
        tipos: ['Venenoso'],
        rgba: '170,85,153, 0.75'
    },
    {
        numero: '025',
        nome: 'Pikachu',
        tipos: ['Elétrico'],
        rgba: '255,204,51, 0.75'
    },
    {
        numero: '026',
        nome: 'Raichu',
        tipos: ['Elétrico'],
        rgba: '255,204,51, 0.75'
    },
];

let div = document.getElementById('pokemons');
div.innerHTML = '';
pokemons.forEach((value, index) => {
    div.innerHTML += `<div class="col">
                    <div class="card" style="background-color: rgba(${value.rgba});">
                        <img src="img/pokemons/${value.numero}.png" alt="Charmander" class="card-img-top">
                        <div class="card-body text-white">
                            <h5 class="card-text mb-1">Nº ${value.numero}</h5>
                            <h3 class="card-title">${value.nome}</h3>
                            <div class="d-flex gap-2 my-2">
                                ${buttonTipo(value.tipos)}
                            </div>
                        </div>
                    </div>
                </div>`
})

function buttonTipo(tipos) {
    let buttons = '';
    tipos.forEach((value, index) => {
        buttons += `<button class="btn btn-${value} text-white">${value}</button>`
    })
    return buttons;
}