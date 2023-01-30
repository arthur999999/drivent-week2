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
