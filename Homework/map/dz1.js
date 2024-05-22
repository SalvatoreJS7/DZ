const strings = ['return', 'ask', 'low', 'pisun', 'anal', 'right', 'aldebaran'];

const reversed = strings.map((value) => value[0] === 'a' ? (value.split("").reverse().join("")) : value);
console.log(reversed)