const fastify = require('fastify')({logger: true});
fastify.register(require('./routes/items'))


PORT = 1111

const start = async () => {
    try{
       await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}
start()