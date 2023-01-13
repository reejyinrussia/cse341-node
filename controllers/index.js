const displayName = (req, res) => {
  const data =
    'Lena Shannon!';
  res.status(200).send(data);
};

const printName = (req, res) => {
  const data =
    'Tanya Shannon!';
  res.status(200).send(data);
};

const getNames = (req, res, next) => {
  res.json(['Mike', 'Dean', 'Bobby', 'Sam']);
};

module.exports = {
  displayName,
  printName,
  getNames
};