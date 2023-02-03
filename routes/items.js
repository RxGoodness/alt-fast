const items = require('../items')

const Item = {
    // type: 'object',
    // type: 'array', 
    // items: {
        type: 'object',
        properties: {
            id: {type: 'integer'},
            name: {type: 'string'}
        // }
    },
}

const getItemsOpts = {
    schema: {
        response: {
            200: {
                // type: 'object',
                type: 'array', 
                items: Item
            }
        }
    },
    handler: function (req, reply) {
        reply.send(items)
    } 
}

const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: (req,reply) =>{
        const {id} = req.params
        const item = items.find((item)=>item.id === id)
        reply.send(item)
    }
}


function itemRoutes(fastify, options, done) {
    fastify.get('/items',getItemsOpts, 
    // (req,reply) =>{
    //     reply.send( items)
    // }
    )
    
    fastify.get('/items/:id', getItemOpts, 
    
    )

    done()
}

module.exports = itemRoutes