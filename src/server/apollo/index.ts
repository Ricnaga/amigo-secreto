import Koa from 'koa'
import { ApolloServer } from "apollo-server-koa"
import { schema } from "../../schemas"

export async function createApolloServer(app: Koa) {

    const instanceOfApolloServer = new ApolloServer({
        schema,
    })

    instanceOfApolloServer.start().then(() => instanceOfApolloServer.applyMiddleware({ app }))
}