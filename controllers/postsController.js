const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function create(req, res){
    const datiInIngresso = req.body;

    const newPost = await prisma.post.create({
        data: {
            title: datiInIngresso.title

        }

    }) 
}

async function show(req, res){

}

async function update(req, res){

}

async function destroy(req, res){

}

module.exports = {
    create,
    show,
    update,
    destroy
  };