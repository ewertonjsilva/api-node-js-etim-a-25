const db = require('../dataBase/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {

            const sql = `
                SELECT 
                    usu_id, usu_nome, usu_email, usu_cpf, usu_dt_nasc, 
                    usu_senha, usu_tipo, usu_ativo = 1 AS usu_ativo 
                FROM usuarios;
            `;

            const [rows] = await db.query(sql); 

            const nRegistros = rows.length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários', 
                nRegistros, 
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarUsuarios(request, response) {
        try {

            const { nome, email, senha, tipo, dt_nasc, cpf } = request.body;
            const usu_ativo = 1;

            const sql = `
                INSERT INTO usuarios 
                (usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc, usu_cpf) 
                VALUES 
                (?, ?, ?, ?, ?, ?, ?);
            `
            const values = [nome, email, senha, tipo, usu_ativo, dt_nasc, cpf]; 

            const [result] = await db.query(sql, values); 

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de usuários', 
                dados: result
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarUsuarios(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de usuário', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarUsuarios(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de usuário', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  