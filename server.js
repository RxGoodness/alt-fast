const fastify = require('fastify')({logger: true});
Port = 1111
const start = async () => {
    try{
       await fastify.listen(PORT)
    } catch (error) {
        
    }
}