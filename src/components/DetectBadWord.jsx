import Filter from 'bad-words';

/**
 * Método que identifica se determinada frase utiliza palavras impróprias
 * @param {*Texto digitado pelo usuário} text 
 * @returns true or false
 */
export function detectBadWord(text) {
    let filter = new Filter()
    return filter.isProfane(text)
}