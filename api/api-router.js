const router = require('express').Router();
const bcrypt = require('bcryptjs');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);


router.get('/hash', (req, res) => {
  const authentication = req.headers.authentication;
  const hash = bcrypt.hashSync(authentication, 13);
  res.json({ originalValue: authentication , hashedValue: hash })
})
router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

module.exports = router;
