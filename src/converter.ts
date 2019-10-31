export const convertToAlternatingCase = (text: string) => {
  const words = text.toLowerCase().split(" ");

  const outputWords = words.map(w => {
    let newWord = "";
    for (let i = 0; i < w.length; i++) {
      newWord += i % 2 == 0 ? w[i] : w[i].toUpperCase();
    }

    return newWord;
  });

  return outputWords.join(" ");
};

console.log(convertToAlternatingCase("make sarcasm with less effort now"));
console.log(convertToAlternatingCase("people are gonna love this project"));
