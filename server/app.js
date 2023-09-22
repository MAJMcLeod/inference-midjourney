import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

import cors from "@fastify/cors";
import configCors from './config/cors.js';
await fastify.register(cors, configCors);

const PORT = 3000

import routesIndex from './routes/index.js';

fastify.register(routesIndex, { prefix: '/api' });

// Run the server!
// Liftoff
const startServer = async () => {
  try {
    await fastify.listen({ port: PORT });
    fastify.log.info(`Server started on port ${PORT}`);
  } catch (err) {
    console.error(err)
    fastify.log.error(err);
    process.exit(1);
  }
};

// Start the Server
startServer();