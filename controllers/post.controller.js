const Post = require('../models/post');
const User = require('../models/user');

const postPublicacion = async (req, res) => {
    try {
        const { titulo, categoria, descripcion } = req.body;
        const post = new Post({
            titulo,
            categoria,
            descripcion,
            user: req.usuario._id
        });
        await post.save();
        res.status(201).json({
            msg: 'Se publicó la publicación',
            post
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
};

const putPublicacion = async (req, res) => {
    try {
        const { postId } = req.params;
        const { titulo, categoria, descripcion } = req.body;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                msg: 'Publicación no encontrada',
            });
        }
        if (post.user.toString() !== req.usuario._id.toString()) {
            return res.status(403).json({
                msg: 'No puedes editar esta publicación',
            });
        }

        post.titulo = titulo;
        post.categoria = categoria;
        post.descripcion = descripcion;
        await post.save();

        res.status(200).json({
            msg: 'Publicación editada',
            post
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
};

module.exports = {
    postPublicacion,
    putPublicacion,
};
