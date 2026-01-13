const errorHandler = (req, res, next) => {
  return res.statu(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
}

module.exports = errorHandler;