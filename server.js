const fastify = require('fastify')({logger: true});
const items = require('./items')
PORT = 1111

fastify.get('/items', (req,reply) =>{
    reply.send({test: "Hello", items: items})
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