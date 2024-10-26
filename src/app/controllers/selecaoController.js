import selecaoRepository from '../repositories/selecaoRepository.js';

class SelecaoController {
    async index(req, res) {
        try {
            const rows = await selecaoRepository.findAll();
            res.json(rows);
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao listar as seleções" });
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id;
            const row = await selecaoRepository.findById(id);
            if (!row) {
                return res.status(404).json({ erro: "Seleção não encontrada" });
            }
            res.json(row);
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao listar seleção por ID" });
        }
    }

    async store(req, res) {
        try {
            const selecao = req.body;
            const row = await selecaoRepository.create(selecao);
            res.status(201).json(row); 
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao criar seleção" });
        }
    }

    async update(req, res) {
        try {
            const selecao = req.body;
            const id = req.params.id;
            const row = await selecaoRepository.update(selecao, id);
            if (!row) {
                return res.status(404).json({ erro: "Seleção não encontrada para atualizar" });
            }
            res.json(row);
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao atualizar seleção" });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const row = await selecaoRepository.delete(id);
            if (!row) {
                return res.status(404).json({ erro: "Seleção não encontrada para deletar" });
            }
            res.status(204).send();
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao deletar" });
        }
    }
}

// Padrão singleton
export default new SelecaoController();
