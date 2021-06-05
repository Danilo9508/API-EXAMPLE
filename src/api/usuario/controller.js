const getUsers = async (req, res) => {
  try {
    res.send('ok');
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getUsers };
