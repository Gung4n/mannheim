export function WordScramble(word: string, seed1: number, seed2: number) {
  const charlist = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "=",
    "_",
    "+",
    "[",
    "]",
    "{",
    "}",
    "<",
    ">",
    ":",
  ];
  const scramblable = word.split("");
  const retval: string[] = [];

  //@TODO: create a better function

  scramblable.forEach((element) => {
    const charlistIndex = charlist.findIndex((item) => item === element) ?? 1;
    retval.push(
      charlist[
        (charlistIndex * Math.abs(seed1) * Math.abs(seed2)) %
          (charlist.length - 1)
      ] ?? "x"
    );
  });
  return retval.join("");
}
