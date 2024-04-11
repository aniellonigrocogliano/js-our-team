/**
 * Legge array e con for key ogni elemento dell'oggetto infine stampa il risultato in console
 * @date 11/4/2024 - 18:17:04
 *
 * @param {array di oggetti} team
 */
function printLog(team) {
    for (let i = 0; i < team.length; i++) {
        const person = team[i];
        for (let key in person) {
            console.log(person[key]);
        }

    }
}

/**
 * Legge array e con for key ogni elemento dell'oggetto infine stampa il risultato DOM
 * @date 11/4/2024 - 18:17:04
 *
 * @param {array di oggetti} team
 */
function printInDom(team) {
    const teamId = document.getElementById("team");
    for (let i = 0; i < team.length; i++) {
        const person = team[i];
        teamId.innerHTML += `
        <div class="col-4">
        <div class="card mb-5 p-2">
            <img src="./img/${team[i].foto}" class="card-img-top" alt="${team[i].nome}">
            <div class="card-body">
              <h2 class="card-title">${team[i].nome}</h2>
              <h4 class="card-text">${team[i].ruolo}</h4>
            </div>
    </div>
        `;
    }
}