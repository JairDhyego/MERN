import { createService, findAllService } from "../services/news.service.js";
export const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    if (!title || !banner || !text) {
      res.status(400).send({
        message: "Submit all fields for registration",
      });
    }

    await createService({ title, text, banner, id: "objectidFaker" });

    res.send(201);
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

export const findAll = (req, res) => {
  const news = [];
  res.send(news);

  try {
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};
