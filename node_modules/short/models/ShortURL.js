var wrapper = require('./prototype.js');

exports.ShortURL = function(mongoose) {
  var Schema   = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  ShortURLSchema = new Schema({
    id         : { type : ObjectId },
    URL        : { type : String, unique: false },
    hash       : { type : String, unique: true },
    hits       : { type : Number, default: 0 },
    data       : { type : Schema.Types.Mixed },
    created_at : { type : Date, default: Date.now }
  });

  return new wrapper.Model(mongoose.model('ShortURL', ShortURLSchema));
};
