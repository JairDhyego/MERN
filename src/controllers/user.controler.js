const userService = require("../services/user.service");

const create = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password || !avatar) {
    res.status(400).send({ Msg: "Submit all fields for registation" });
  }

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ msg: " error creating User" });
  }

  res.status(201).send({
    msg: "User foi criado com sucesso.",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
    },
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ msg: "there are no registered users" });
  }

  res.send(users);
};

const findById = async (req, res) => {
  const user = req.user;

  res.send(user);
};

const update = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name && !username && !email && !password && !avatar) {
    res.status(400).send({ Msg: "Submit at least one  field for update" });
  }

  const { id, user } = req;

  await userService.updateService(id, name, username, email, password, avatar);

  res.send({ msg: " User sucesfull updated." });
};

module.exports = { create, findAll, findById, update };
