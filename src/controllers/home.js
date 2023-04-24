const prisma = require("../../prisma/index");
const Treatment = require("../lib/Treatment");
class Home {
  async get(req, res) {
    let user;
    try {
      user = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      });
    } catch (err) {
      const e = Treatment.errors({ data: err });
      return res.status(e.status).json(e);
    }

    return res.status(200).json(user || {});
  }

  async post(req, res) {
    let user;
    try {
      user = await prisma.user.create({ data: req.body });
    } catch (err) {
      const e = Treatment.errors({ data: err });
      return res.status(e.status).json(e);
    }

    return res.status(200).json(user);
  }
  
  async patch(req, res) {
    let user;
    try {
      user = await prisma.user.update({
        where: {
          email: req.body.email,
        },
        data: req.body,
      });
    } catch (err) {
      const e = Treatment.errors({ data: err });
      return res.status(e.status).json(e);
    }

    return res.status(200).json(user);
  }
  
  async delete(req, res) {
    let user;
    try {
      user = await prisma.user.delete({
        where: {
          email: req.body.email,
        },
      });
    } catch (err) {
      const e = Treatment.errors({ data: err });
      return res.status(e.status).json(e);
    }

    return res.status(200).json(user);
  }

}

module.exports = new Home();
