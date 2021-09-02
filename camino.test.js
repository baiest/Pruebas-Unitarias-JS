const caminoBasico = require('./funcion.js')

test('Camino basico 1', () => {
    const a = 2
    const b = 3
    const c = 5

    const result = caminoBasico(a, b, c)

    expect(result).toBe(3)
})
test('Camino basico 2', () => {
    const a = 5
    const b = 3
    const c = 5

    const result = caminoBasico(a, b, c)

    expect(result).toBe(1)
})
test('Camino basico 3', () => {
    const a = 3
    const b = 5
    const c = 2

    const result = caminoBasico(a, b, c)

    expect(result).toBe(5)
})