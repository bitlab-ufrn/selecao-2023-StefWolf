import translate from 'translate';

/**
 * 
 * @param {*previous Língua da palavra} previous 
 * @param {*current Para qual língua quer traduzir} current 
 * @param {*text O texto a ser traduzido} text 
 * @returns 
 */
export async function handleWordTranslator(previous, current, text){
    return await translate(text, { from: previous, to: current })
};
