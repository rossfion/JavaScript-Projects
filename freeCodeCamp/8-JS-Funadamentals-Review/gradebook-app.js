function getAverage(testScores) {
    let sum = 0;
    for (let i = 0; i < testScores.length; i++) {
        sum += testScores[i];
    }
    return sum / testScores.length;

}

function getGrade(studentScore) {
    if (studentScore === 100) {
        return "A+";
    } else if (studentScore >= 90 && studentScore <= 99) {
        return "A";
    } else if (studentScore >= 80 && studentScore <= 89) {
        return "B";
    } else if (studentScore >= 70 && studentScore <= 79) {
        return "C";
    } else if (studentScore >= 60 && studentScore <= 69) {
        return "D";
    } else {
        return "F";
    }

}

function hasPassingGrade(score) {
    let grade = getGrade(score);
    return !(grade === "F")
}


function studentMsg(scores, studentScore) {
    let classAverage = getAverage(scores);
    let studentGrade = getGrade(studentScore);
    if (hasPassingGrade(studentScore)) {
        return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed`;
    } else {
        return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed`;
    }
}

getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]);
getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]);
getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]);
getAverage([10, 20, 30, 40, 55, 65, 75, 83]);
getAverage([10, 20, 30, 40, 50, 60, 70, 97]);

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));