const assert = require('assert')
const caminoBasico = require('../funcion.js')

describe('Caminos', () => {
    it('Camino basico 1', () => {
        const a = 2
        const b = 3
        const c = 5

        const result = caminoBasico(a, b, c)

        assert.strictEqual(result, 3)
    })
    it('Camino basico 2', () => {
        const a = 5
        const b = 3
        const c = 5

        const result = caminoBasico(a, b, c)

        assert.strictEqual(result, 1)
    })
    it('Camino basico 3', () => {
        const a = 3
        const b = 5
        const c = 2

        const result = caminoBasico(a, b, c)

        assert.strictEqual(result, 10)
    })
})