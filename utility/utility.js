const monthDiff = (dateFrom, dateTo) => {
  return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
};

module.exports = { monthDiff };
