const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//create
async function create(req, res){
    const datiInIngresso = req.body;

    const newPost = await prisma.post.create({
        data: {
            title: datiInIngresso.title,
            slug: datiInIngresso.slug,     
            image: datiInIngresso.image,    
            content: datiInIngresso.content,  
            published: datiInIngresso.published,
        }

    }) 
    return res.json(newPost);
}

//show
async function show(req, res){
    const slug = req.params.slug

    const data = await prisma.post.findUnique({
        where: {
            slug: slug
        }
    })

    if (!data) {
        throw new Error("Not found");
        console.log('errore')
      }

    return res.json(data)
}

//show all
async function showAll(req, res){
    const data = await prisma.post.findMany();

    return res.json(data)
}

//update
async function update(req, res){
    const slug = req.params.slug;
    const datiInIngresso = req.body

    //controllo se il post esiste
    const post = await prisma.post.findUnique({
        where: {
            slug: slug
        }
    })

    if(!post){
        throw new Error('not found');
    }

    const postAggiornato = await prisma.post.update({
        data: datiInIngresso,
        where: {
            slug: slug
        }
    })
    return res.json(postAggiornato)
}

async function destroy(req, res){

}

module.exports = {
    create,
    show,
    showAll,
    update,
    destroy
  };