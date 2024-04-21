(() => {
  let a = 6,
    b = 9;
  function zipTag(strings, ...expressions) {
    console.log(strings);
    return (
      strings[0] + expressions.map((e, i) => `${e}${strings[i + 1]}`).join("")
    );
  }

  let taggedResult = zipTag`${a} + ${b} = ${a + b}`;
  console.log(taggedResult);
})();
