const fastify = require('fastify')({logger: true});
const items = require('./items')
PORT = 1111

fastify.get('/items', (req,reply) =>{
    reply.send({test: "Hello", items: items})
} )

fastify.get('/items/:id', (req,reply) =>{
    const {id} = req.params
    const item = items.find((item)=>item.id === id)
    console.log("me", id, item)
    reply.send(item)
} )
const start = async () => {
    try{
       await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}
start()