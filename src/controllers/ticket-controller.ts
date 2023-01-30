import { AuthenticatedRequest } from "@/middlewares";
import ticketServices from "@/services/ticket-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listTicketTypes( req: Request, res: Response) {
  try {
    const listTypes = await ticketServices.getTypesTicket();

    res.send(listTypes).status(200);
  } catch (error) {
    res.send(error.message).status(400);
  }
}

export async function listTicketsUser(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const listTickets = await ticketServices.getTickets(userId);

    res.send(listTickets).status(200);
  } catch (error) {
    res.send(error.message).status(400);
  }
}
