const prisma = require("../../prisma/index");
const Treatment = require("../lib/Treatment");
class Home {
  async get(req, res) {
    res.json({ message: "Hello, world!" });
  }

  async post(req, res) {
    let user;
    try {
      user = await prisma.user.create({ data: req.body });
    } catch (err) {
      const e = Treatment.errors({ data: err });
      return res.status(e.status).json(e);
    }

    return res.status(201).json(user);
  }
}

module.exports = new Home();
