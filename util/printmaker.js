// use this for converting strings into print instructions

let output = "";

process.argv[2].toUpperCase().split("").forEach((letter) => {
  switch (letter) {
    case ">":
      output += `point PROMPT\nprint\n\n`;
    break;
    case " ":
      output += `point SP\nprint\n\n`;
    break;
    case "\n":
      output += `point LF\nprint\n\n`;
    break;
    default:
      output += `point ${letter}\nprint\n\n`;
    break;
  }
});

console.log(output);
