import Fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from 'fastify';
import fastifyMongo from '@fastify/mongodb';
import 'dotenv/config';

const fastify: FastifyInstance = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
    },
  },
});

fastify.get('/', {
  handler: async () => {
    return { message: 'Hello World!!' };
  },
});

async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/', {
    handler: async (
      request: FastifyRequest<{
        Body: {
          name: string;
          age: number;
        };
      }>,
      reply: FastifyReply
    ) => {
      const body = request.body;
      console.log({ body });

      return reply.code(201).send(body);
    },
  });

  fastify.log.info('User routes registered');
}

function dbConnector(fastify: FastifyInstance) {
  fastify.register(fastifyMongo, {
    url: process.env.MONGODB_URI,
  });

  fastify.log.info('Connected to database');
}

fastify.register(dbConnector);

fastify.register(userRoutes, {
  prefix: '/api/users',
});

async function main() {
  await fastify.listen({
    port: 3000,
    host: '0.0.0.0',
  });
}

main();
