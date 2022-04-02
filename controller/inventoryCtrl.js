const inventoryModel = require("../models/inventoryModel");
const inventoryCtrl = {};

inventoryCtrl.getInventory = (request, response) => {
  let query = {};
  try {
    inventoryModel.find(query, (error, data) => {
      if (error) {
        response.status(500).send({
          success: false,
          error: [
            {
              code: "500",
              desc: "Data not found",
            },
          ],
        });
      } else {
        console.log(data);
        response.send({
          success: true,
          data: data,
        });
      }
    });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: [
        {
          code: "500",
          desc: "Internal server Error",
        },
      ],
    });
  }
};

inventoryCtrl.createInventory = (request, response) => {
  console.log(request.body);

  try {
    inventoryModel.create(request.body).then((data) => {
      console.log(data.toJSON());
      response.send({
        data: data,
        success: true,
      });
    });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: [
        {
          code: "500",
          desc: "Internal server Error",
        },
      ],
    });
  }
};

inventoryCtrl.updateInventory = (request, response) => {
  const { id, qty } = request.body;
  let query = { id: id };
  let update = { $set: { qty: qty }, $currentDate: { lastModified: true } };
  console.log("updateRecord", update);
  try {
    inventoryModel.updateOne(query, update, (error, data) => {
      if (error) {
        console.log("error", error);
        response.status(500).send({
          success: false,
          error: [
            {
              code: "500",
              desc: "Data not found",
            },
          ],
        });
      } else {
        response.send({
          success: true,
          data: data,
        });
      }
    });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: [
        {
          code: "500",
          desc: "Internal server Error",
        },
      ],
    });
  }
};

inventoryCtrl.deleteInventory = (request, response) => {
  let query = {
    _id: request.body.id,
  };

  try {
    inventoryModel
      .deleteOne(query)
      .then((data) => {
        response.send({
          success: true,
          data: [],
        });
      })
      .catch((error) => {
        console.log(error);
        response.status(500).send({
          success: false,
          error: [
            {
              code: "500",
              desc: "Internal server Error",
            },
          ],
        });
      });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: [
        {
          code: "500",
          desc: "Internal server Error",
        },
      ],
    });
  }
};

module.exports = inventoryCtrl;
