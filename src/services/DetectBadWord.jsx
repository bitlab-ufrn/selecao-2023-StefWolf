import Filter from 'bad-words';

const filter = new Filter();
filter.addWords("nazi", "broken into")

/**
 * Método que identifica se determinada frase utiliza palavras impróprias
 * @param {*Texto digitado pelo usuário} text 
 * @returns true or false
 */
export function detectBadWord(text) {
    return filter.isProfane(text)
}

/**
 * 
 * @param {*Texto para verificação} text 
 * @returns array com todas as palavras inapropriadas
 */
export function listAllBadWords(text) {
    const listWords = text.split(" ")
    return listWords.filter((word) => filter.isProfane(word))
}