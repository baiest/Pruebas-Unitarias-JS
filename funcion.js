/*
            a   b   c   Salida

Camino 1    2   3   5     3
Camino 2    5   3   5     1
Camino 3    3   5   2     3      
*/


function caminoBasico(a, b, c) {
    let count = 0

    if (a % 2 === 0) {
        count += a
    }

    if (b < c) {
        count += 1
    } else {
        count += 1 + c
    }

    return count
}
module.exports = caminoBasico