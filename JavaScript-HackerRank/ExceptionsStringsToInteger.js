function main() {
  const S = readLine();
  try {
    const num = JSON.parse(S);
    console.log(num);
  } catch (e) {
    console.log("Bad String");
  }
}
