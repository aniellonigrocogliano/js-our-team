/**
 * Description placeholder
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