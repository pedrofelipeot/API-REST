import {consulta} from "../database/conexao.js"
class selecaoRepository{

    create(selecao){
        const sql = "INSERT INTO selecoes SET?"
        return consulta(sql,selecao,'não foi possível cadastrar')
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql,'Não foi possível listar as seleções')
    }
    
    findById(id){
        const sql = 'SELECT * FROM SELECOES WHERE idselecoes=?'
        return consulta(sql,id, 'Não foi possível listar as seleções por id')
    }

    update(selecao, id){
        const sql = "UPDATE selecoes SET? where idselecoes=?"
        return consulta(sql,[selecao, id],'Não foi possível atualizar')
    }
    delete(id){
        const sql = "DELETE FROM selecoes where idselecoes=?"
        return consulta(sql,id,'Não foi possível deletar')
    }
}

export default new selecaoRepository()
