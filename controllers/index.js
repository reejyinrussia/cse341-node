displayName = (req, res) => {
  const data =
    'Lena Shannon!';
  res.status(200).send(data);
};

printName = (req, res) => {
  const data =
    'Tanya Shannon!';
  res.status(200).send(data);
};

module.exports = {
  displayName,
  printName
};