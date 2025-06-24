
const Razorpay = require('razorpay');

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error('Error: Razorpay API keys (RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET) are missing from environment variables.');
}

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || '', 
    key_secret: process.env.RAZORPAY_KEY_SECRET || '', 
});


module.exports = instance;