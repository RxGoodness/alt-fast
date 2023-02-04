const fastify = require('fastify')({logger: true});
fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {title: 'fastify-api'},  
    }


    // swagger: {
    //     info: {
    //       title: 'Test swagger',
    //       description: 'Testing the Fastify swagger API',
    //       version: '0.1.0'
    //     },
    //     externalDocs: {
    //       url: 'https://swagger.io',
    //       description: 'Find more info here'
    //     },
    //     host: 'localhost',
    //     schemes: ['http'],
    //     consumes: ['application/json'],
    //     produces: ['application/json'],
    //     tags: [
    //       { name: 'user', description: 'Item related end-points' },
    //       { name: 'code', description: 'Code related end-points' }
    //     ],
    //     definitions: {
    //       User: {
    //         type: 'object',
    //         required: ['id', 'name'],
    //         properties: {
    //           id: { type: 'string', },
    //           name: { type: 'string' },
    //         //   lastName: { type: 'string' },
    //         //   email: {type: 'string', format: 'email' }
    //         }
    //       }
    //     },
    //     securityDefinitions: {
    //       apiKey: {
    //         type: 'apiKey',
    //         name: 'apiKey',
    //         in: 'header'
    //       }
    //     }
    //   }

    // info: {
    //     title: String,
    //     description: String,
    //     version: String
    //   },
    //   externalDocs: Object,
    //   host: String,
    //   schemes: [ String ],
    //   consumes: [ String ],
    //   produces: [ String ],
    //   tags: [ Object ],
    //   securityDefinitions: Object
    // },


}
)
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
// fastify.ready()
// fastify.swagger()