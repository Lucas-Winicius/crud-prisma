const prisma = require('../../prisma/index')
class Home {
  get(req, res) {
    res.json({ message: "Hello, world!" });
  }

  async post(req, res) {
    const user = await prisma.user.create({ data: req.body })
    res.status(201).json(user)
  }

}

module.exports = new Home();
