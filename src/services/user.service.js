import User from "../models/User.js";

const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();

const findByUserIdService = (id) => User.findById(id);

const updateUserService = (id, name, username, email, password, avatar) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar }
  );

export default {
  createUserService,
  findAllUserService,
  findByUserIdService,
  updateUserService,
};
