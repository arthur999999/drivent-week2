import { listTicketsUser, listTicketTypes } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketRouter = Router();

ticketRouter
  .all("/*", authenticateToken)
  .get("/types", listTicketTypes)
  .get("/", listTicketsUser);

export { ticketRouter };
