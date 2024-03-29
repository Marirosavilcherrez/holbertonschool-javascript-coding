/* Reading a file synchronously with Node JS */

const fs = require('fs');

function countStudents(path) {

  fs.readFile(path, 'utf-8', (err, data) => {

  if(err) {
    console.error(err, 'Cannot load the database');
      return;
  }     
    // Divide string in lines, trim to delete blank spaces
    const lines = data.split('\n').map(line => line.trim().split(','));
    const NUMBER_OF_STUDENTS = lines.length -1;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`)

    //Filter the lines with field CS
    const filteredLinesCs = lines.filter(line => line[3] === 'CS');
    //Firstnames of the FilteresLines
    let LIST_OF_FIRSTNAMES = filteredLinesCs.map(line => line[0]).join(', ');
    console.log(`Number of students in CS: 6. List: ${LIST_OF_FIRSTNAMES}`);

    //Filter the lines with field SWE
    const filteredLinesSwe = lines.filter(line => line[3] === 'SWE');
    //Firstnames of the FilteresLines

    LIST_OF_FIRSTNAMES = filteredLinesSwe.map(line => line[0]).join(', ');
    console.log(`Number of students in SWE: 4. List: ${LIST_OF_FIRSTNAMES}`); 
  });
}
module.exports = countStudents;
