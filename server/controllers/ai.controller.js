// controller
export const summarize = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    console.log(req.file.filename);
    res.json(req.file.filename);
  } catch (error) {
    console.error(error);
  }
};

