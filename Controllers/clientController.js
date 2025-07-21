import * as clientService from "../Services/clientService.js";

//C R U D

export const getClient = async (req, res) => {
  try {
    const clients = await clientService.getClient();
    res.status(200).json(clients);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error getClient",
    });
  }
};

export const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newclients = await clientService.createClient(clientData);
    res.status(200).json(newclients);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error createClient",
    });
  }
};

export const updateClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const clientData = req.body;
    const updateClient = await clientService.updateClient(clientId, clientData);
    if (!updateClient) {
      return res.status(400).json({
        message: "Client not Found",
      });
    }
    res.status(200).json(updateClient);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error updateClient",
    });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const deleted = await clientService.deleteClient(clientId);
    if (!deleted) {
      return res.status(404).json({
        message: "Client not Found",
      });
    }
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.stataus(500).json({
      message: "Server error deleteClient",
    });
  }
};

export const searchClient = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const clients = await clientService.searchClient(searchTerm);
    res.status(200).json(clients);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error searchClient",
    });
  }
};
