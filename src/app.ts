import cookie from "@fastify/cookie";
import fastify, { FastifyInstance } from "fastify";
import { transactionsRoutes } from "./routes/transactions";

export const app: FastifyInstance = fastify();

app.register(cookie);

app.register(transactionsRoutes, {
  prefix: "transactions",
});
