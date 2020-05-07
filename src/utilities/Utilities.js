//percentage calculation
export const getPercantage = (totalMarks) => {
    let percentage = (totalMarks / 400) * 100;
    return percentage;
}

//grade calculation based on percentage
export const getGrade = (percentage) => {
    let grade;
    switch (true) {
        case ( percentage >= 90 ) && (percentage <100 ):
            grade = 'A';
            break;

            case ( percentage >= 80 ) && (percentage <90 ):
                grade = 'B';
            break;

            case ( percentage >= 70 ) && (percentage <80 ):
                grade = 'C';
            break;
            case ( percentage >= 60 ) && (percentage <70 ):
            grade = 'D';
            break;

        case (percentage < 60):
            grade = 'F';
            break;
        default:

    }
    return { grade: grade}

}


//final grade
export const calculate = (studentsData) => {
    let marks = [];
    for (let key in studentsData) {
        marks.push(studentsData[key]);
    }
    const totalMarks = marks.reduce((a, b) => a + b);
    const percentage = getPercantage(totalMarks);
    const grade = getGrade(percentage);

    return grade;
}

