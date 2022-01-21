const router = require("express").Router();

router.get('/', (req, res) => {
    res.send('this works');
});

router.get('/login/',(req, res) => {
    res.send('login');
})

router.post('/signup',(req, res) => {
    res.send('signup');
})

module.exports = router;
