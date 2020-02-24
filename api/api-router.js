const router = require('express').Router();
const bcrypt = require('bcryptjs');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);


router.get('/hash', (req, res) => {

  const credentials = req.body;

  const hash = bcrypt.hashSync(credentials.password, 14);

credentials.password = hash;
  res.json({ originalValue: authentication , hashedValue: hash })
})
router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

module.exports = router;
