const { dir } = require('console');
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '/text'); // file path to save the files created

//creating the files:
let textOut = ''; // Saving the random amount of lines in snu given file

const fileNameArr = []; // Array to store the file names in

const maxCount = 10; // amount of files to create

for (let i = 1; i <= maxCount; i++) {
  for (let j = 0; j < Math.random() * (i - 1) + 1; j++) {
    textOut += `${String.fromCharCode(97 + ((i - 1) % 26))}${j + 1}\n`;
  }

  fs.writeFileSync(`${dirPath}/${i}.txt`, textOut);

  textOut = '';
  fileNameArr[i] = i;
}

// string for output text
let outputStr = '';

for (let i = 0; i < maxCount; i++) {
  const myText = fs.readFileSync(`${dirPath}/${i + 1}.txt`, 'utf-8');
  const arr = myText.split('\r\n');

  for (let j = 0; j <= i && j < arr.length; j++) {
    j == arr.length - 1 || j == i
      ? (outputStr += arr[j])
      : (outputStr += arr[j] + '\r\n');
  }
}

fs.writeFileSync(`${dirPath}/output.txt`, outputStr);
