const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    categoria: {
        type: String,
        required: [true, 'Se necesita una Categoria']
    },
    descripcion: {
        type: String,
        required: [true, 'No puede publicar sin texto']
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    estado: {
        type: Boolean,
        default: true
    }
});

postSchema.methods.toJSON = function () {
    const { __v, _id, ...post } = this.toObject();
    post.pid = _id;
    return post;
}

module.exports = mongoose.model('Post', postSchema);
