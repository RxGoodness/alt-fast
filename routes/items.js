const {getItems, getItem} = require('../controllers/items')
// const items = require('../items')

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
    handler: getItems
}

const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getItem
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