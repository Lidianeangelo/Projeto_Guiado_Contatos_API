const express=require("express")
const router=express.Router()
const controller=require("../controller/contatosController")

router.get("/", controller.getAllContatos)
router.get("/id/:id", controller.getContatosById)
router.get("/nome/:nome", controller.getContatosByNome)
router.post("/criar", controller.addContato)
router.delete("/deletar/:id", controller.deleteContatoById)
router.put("/atualizar/telefone/:id", controller.updateTelefone)

module.exports=router