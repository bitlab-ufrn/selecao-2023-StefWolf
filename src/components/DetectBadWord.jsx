import Filter from 'bad-words';

/**
 * Método que identifica se determinada frase utiliza palavras impróprias
 * @param {*Texto digitado pelo usuário} text 
 * @returns true or false
 */
export function detectBadWord(text) {
    return new Filter().isProfane(text)
}