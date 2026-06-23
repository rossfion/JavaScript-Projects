let isInverted = true;

function pyramid(str, rowCount, isInverted){
    let pyramid = "\n"; // start with a new line as required
        if(isInverted){
        for(let i = rowCount; i > 0; i--){
        let spaces = " ".repeat(rowCount - i);
        let characters = str.repeat(2 * i - 1);
        let line = spaces + characters;
        pyramid += line + "\n";
        }
    } else {
    for (let i = 1; i <= rowCount; i++){
    let spaces = " ".repeat(rowCount - i);
        let characters = str.repeat(2 * i - 1);
        let line = spaces + characters;
        pyramid += line + "\n";
    }
    }
    return pyramid;
    }

    console.log(pyramid("o", 4, false));
    console.log(pyramid("p", 5, true));