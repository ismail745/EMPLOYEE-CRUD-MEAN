const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB').then(() => {
  console.log('✅ MongoDB connecté');
}).catch(err => {
    console.error('❌ Erreur MongoDB', err);
});

module.exports = { mongoose }; 