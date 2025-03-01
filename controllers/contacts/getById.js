const { Contact } = require('../../models/contact');
const { requestError } = require('../../helpers');

const getById = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;

  const result = await Contact.findOne({
    _id: contactId,
    owner,
  });

  if (!result) {
    throw requestError(404, `Contact with id=${contactId} not found`);
  }

  res.json({ status: 'success', code: 200, data: { result } });
};

module.exports = getById;
