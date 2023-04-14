import Piii from 'piii'
import PiiiFilters from 'piii-filters'

/**
 * Método que identifica se determinada frase utiliza palavras impróprias
 * @param {*Texto digitado pelo usuário} text 
 * @returns true or false
 */
export function detectBadWord(text) {
    const piii = new Piii({
        filters: [
          ...Object.values(PiiiFilters) //Container de palavras vindas da biblioteca piii-filters
        ]
    });

    return piii.has(text)
}