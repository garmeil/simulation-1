const getData = (req, res, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .getData()
    .then(response => console.log(response))
    .catch(() => res.status(500).send());
};

module.exports = { getData };
