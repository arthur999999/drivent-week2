import { AuthenticatedRequest } from "@/middlewares";
import enrollmentsService from "@/services/enrollments-service";
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
    const enrollment = await enrollmentsService.findEnrollmnetUser(userId);

    if(!enrollment) {
      res.sendStatus(404);
      return;
    }

    const listTickets = await ticketServices.getTickets(userId);

    if(!listTickets) {
      res.sendStatus(404);
      return;
    }

    res.send(listTickets).status(200);
  } catch (error) {
    res.send(error.message).status(400);
  }
}
