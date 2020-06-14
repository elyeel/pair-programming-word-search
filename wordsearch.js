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

    const horizontalRevJoin = letters.map(ls => ls.reverse().join(''));
    for (l of horizontalRevJoin) {
        if (l.includes(word)) return true
    }

    const seed = letters.map(ls => ls.reverse().join(''));
    const seed2 = letters.map(ls => ls.reverse().join(''));

    //diagonal search
    const diagonal1 = [];
    for (let i=0; i<seed[0].length; i++) { //top half
        const temp = [];
        for (let j=i; j<seed.length; j++) {
            temp.push(seed[j-i][j]);
        }
        diagonal1.push(temp.join(""));
    }
    for (let i=1; i<seed.length; i++) { //bottom half
        const temp = [];
        for (let j=i; j<seed.length; j++) {
            temp.push(seed[j][j-i]);
        }
        diagonal1.push(temp.join(""));
    }
    // console.log(JSON.stringify(diagonal1,null,"  "));
    for (s of diagonal1) {
        if (s.includes(word)) return true;
    }

    //diagonal search
    const diagonal2 = [];
    for (let i=0; i<seed2[0].length; i++) { //top half
        const temp = [];
        for (let j=i; j<seed2.length; j++) {
            temp.push(seed2[j-i][j]);
        }
        diagonal2.push(temp.join(""));
    }
    for (let i=1; i<seed2.length; i++) { //bottom half
        const temp = [];
        for (let j=i; j<seed2.length; j++) {
            temp.push(seed2[j][j-i]);
        }
        diagonal2.push(temp.join(""));
    }
    // console.log(JSON.stringify(diagonal2,null,"  "));
    for (s of diagonal2) {
        if (s.includes(word)) return true;
    }

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