import Filter from 'bad-words';

/**
 * Método que identifica se determinada frase utiliza palavras impróprias
 * @param {*Texto digitado pelo usuário} text 
 * @returns true or false
 */
export function detectBadWord(text) {
    return new Filter().isProfane(text)
}

/**
 * 
 * @param {*Texto para verificação} text 
 * @returns array com todas as palavras inapropriadas
 */
export function listAllBadWords(text) {
    const filter = new Filter()
    const listWords = text.split(" ")
    return listWords.filter((word) => filter.isProfane(word))
}