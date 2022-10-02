import userService from "../services/user.service.js";

const create = async (req, res) => {
  try {
    const { name, username, email, password, avatar } = req.body;

    if (!name || !username || !email || !password || !avatar) {
      res.status(400).send({ Msg: "Submit all fields for registation" });
    }

    const user = await userService.createUserService(req.body);

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
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllUserService();

    if (users.length === 0) {
      return res.status(400).send({ msg: "there are no registered users" });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar } = req.body;

    if (!name && !username && !email && !password && !avatar) {
      res.status(400).send({ Msg: "Submit at least one  field for update" });
    }

    const { id, user } = req;

    await userService.updateUserService(
      id,
      name,
      username,
      email,
      password,
      avatar
    );

    res.send({ msg: " User sucesfull updated." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { create, findAll, findById, update };
