import ticketRepository from "@/repositories/ticket-repository";

async function getTypesTicket() {
  const list = await ticketRepository.getTicketTypes();

  return list;
}

async function getTickets(userId: number) {
  const list = await ticketRepository.getTickt(userId);

  return list[0].Enrollment[0].Ticket[0];
}

const ticketServices = {
  getTypesTicket,
  getTickets
};

export default ticketServices;
