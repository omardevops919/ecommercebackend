const express=require('express');
const router = express.Router();
const stripe = require ('stripe');
const Stripe =
stripe('sk_test_51NnLq9Dib4BJ34uNdisYF7QagL11RTOq3V2cdJuyPQ0xxsQ0jS0XXGVsQYnzWNcwVNHLhFltyV2KqNObJla9kud100PF5HLrI3');
router.post('/', async (req, res) => {
let status, error;
const { token, amount } = req.body;
try {
await Stripe.charges.create({
source: token.id,
amount,
currency: 'Dinar Tunisien ',
});

status = 'success';
} catch (error) {
console.log(error);
status = 'Failure';
}
res.json({ error, status });
});
module.exports = router;