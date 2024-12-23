const  { userService } = require('../services');

const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

module.exports = { getUser }