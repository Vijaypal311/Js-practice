
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The Reason is that an equality check == and  comparisions > < > >= <= work differently.
// comparisions convert null to a number, treating it as 0.
// Thats why null >=0 is true and null>0 is false.