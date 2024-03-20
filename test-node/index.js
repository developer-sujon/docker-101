function sayName(name = "default name") {
  console.log(name);
}

sayName(process.argv[2]);
