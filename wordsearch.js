const wordSearch = (letters, word) => { 
    if (letters.length <= 0 || word === "") return false

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    //transpose letters matrix
    let transposedLetter = [];
    const verticalJoin = letters.map((row, index) => {
        row.map((elem, indexe) => {
            if (index === 0) {
                const temp = [];
                temp.push(letters[index][indexe]);
                transposedLetter.push(temp);
            } else {
                transposedLetter[indexe].push(letters[index][indexe]);
            }
        })
    })

    for (l of transposedLetter.map(elem => elem.join(''))) {
        if (l.includes(word)) return true
    }

    const horizontalRevJoin = letters.map(ls => ls.reverse().join(''))
    for (l of horizontalRevJoin) {
        if (l.includes(word)) return true
    }

    const rev = letters.map(ls => ls.reverse())
    

    return false
}

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'REYS'))

module.exports = wordSearch