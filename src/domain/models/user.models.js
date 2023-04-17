const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }
}, {
  timestamps: true,
  versionKey: false
});

// Static method to find users by role
userSchema.statics.findByRole = function(role) {
  return this.find({ role });
};

// Virtual property to check if a user is an admin
userSchema.virtual('isAdmin').get(function() {
  return this.role === 'admin';
});

// Hash the password before saving
userSchema.pre('save', function(next) {
  // Only hash the password if it's new or modified
  if (!this.isModified('password')) {
    return next();
  }

  // Hash the password with a suitable algorithm
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  });
});

const User = mongoose.model('User', userSchema);

module.exports = User;

