const mongoose = require('mongoose');
const {Schema,model} = mongoose;

// Committee schema
const CommitteeSchema = new Schema({
  name: { type: String, required: true }, // Name of the committee
  head: { type: String, required: true }, // Head of the committee
  description: { type: String, required: true }, // Description of the committee
  image: {
    type: String, // or change this to the appropriate type for storing the image URL
    required: false, // or remove this line if 'image' is not required
    default: '', // or provide a default value if needed
  },
});

const CommitteeModel = model('CommitteeScheme',CommitteeSchema);
module.exports = CommitteeModel;
