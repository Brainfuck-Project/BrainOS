// use this for converting strings into print instructions

let output = "";

process.argv[2].toLowerCase().split("").forEach((letter) => {
  switch (letter) {
    case ".":
      output += `point c_dot\nprint\n\n`;
    break;
    case ">":
      output += `point c_prompt\nprint\n\n`;
    break;
    case " ":
      output += `point c_sp\nprint\n\n`;
    break;
    case "\n":
      output += `point c_lf\nprint\n\n`;
    break;
    default:
      output += `point c_${letter}\nprint\n\n`;
    break;
  }
});

console.log(output);
