module.exports = (data) => {
  const { email, message, name } = data;
  if (name) {
    console.log({ email, message, name }); //TODO: Need to implement message saving future
  }
};
