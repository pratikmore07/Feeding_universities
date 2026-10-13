function errorHandler(error, req, res, next) {
  console.error(error);

  console.error("Google Sheets error:", {
  message: error.message,
  code: error.code,
  status: error.response?.status,
  details: error.response?.data,
});

  res.status(error.status || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : error.message,
  });
}

module.exports = errorHandler;