import Entity from "./model";
const entityName = Entity.modelName.toUpperCase();

const readData = (req, res) => {
  Entity.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const createData = (req, res) => {
  Entity.create(req.body)
    .then((data) => {
      console.log(`New ${entityName} Created!`, data);
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === "CalidationError") {
        console.error("Error Validating!", err);
        readData.status(422).json(err);
      } else {
        console.log(err);
        res.status(500).json(data);
      }
    });
};

const updateData = (req, res) => {
  Entity.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      console.log(`${entityName} Updated!`);
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        console.error("Error Validating!", err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const deleteData = (req, res) => {
  Entity.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error(`${entityName} not available`);
      }
      return data.remove();
    })
    .then((data) => {
      console.log(`${entityName} Removed!`);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

export default { entityName, readData, createData, updateData, deleteData };
