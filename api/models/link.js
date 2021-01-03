const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const linkSchema = new mongoose.Schema({
    code: { type: String, unique: true, required: true },
    target: { type: String, required: true },
    public: { type: Boolean, default: false }, // Whether a user has to login to access the link.
    click_count: { type: Number, default: 0 },
    expired: { type: Boolean, default: false },
    owner_upn: String,
    expiry_time: Date,
}, { timestamps: true })

linkSchema.plugin(uniqueValidator)

const Link = mongoose.model("Link", linkSchema)

module.exports = {
    Link,
    linkSchema
}