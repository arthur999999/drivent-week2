import ticketRepository from "@/repositories/ticket-repository";

async function getTypesTicket() {
  const list = await ticketRepository.getTicketTypes();

  return list;
}

const ticketServices = {
  getTypesTicket
};

export default ticketServices;
