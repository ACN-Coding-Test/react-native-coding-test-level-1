export function valLetter(word) {
    const rgx = /^[a-zA-Z]+$/;
    return rgx.test(word);
}
  
export function valEmail(email) {
    const rgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return rgx.test(email);
}
