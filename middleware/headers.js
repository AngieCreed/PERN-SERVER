module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*'); //allow everything - origin of the request
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE') //allow every method
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  
    next();
  }