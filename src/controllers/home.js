class Home {
  get(req, res) {
    res.json({ message: "Hello, world!" });
  }
}

module.exports = new Home();
