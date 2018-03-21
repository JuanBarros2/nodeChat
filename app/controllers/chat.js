module.exports.iniciaChat = (application, req, res) => {
    let dados = req.body;
    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();

    application.get('io').emit(
        'enter',
        {apelido: dados.apelido, mensagem: dados.apelido + ' acabou de entrar'} 
    );
    res.render("chat", { apelido: dados.apelido});
}