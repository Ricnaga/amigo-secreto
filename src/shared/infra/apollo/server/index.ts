import 'reflect-metadata';
import { GraphQLSchema } from 'graphql';
import { createServer, Server } from 'http';
import { createApolloServer } from '..';
import { koaApp, koaServerRequest } from '../../http/koaApp';

export async function initServer(
  schema: GraphQLSchema,
  PORT: string,
  PATH: string,
): Promise<Server> {
  const httpServer = createServer(koaServerRequest);
  await createApolloServer(schema, koaApp, httpServer, PATH);

  return httpServer.listen(PORT, () =>
    console.log(
      `Is Up on http://localhost:${PORT}${PATH} - 'Quis custodiet ipsos custodes? 🤔'!`,
    ),
  );
}
