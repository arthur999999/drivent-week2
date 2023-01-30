import { prisma } from "@/config";

async function getTicketTypes() {
  return await prisma.ticketType.findMany();
}

async function getTickt(userId: number) {
  return await prisma.user.findMany({
    where: {
      id: userId
    },
    include: {
      Enrollment: {
        include: {
          Ticket: {
            include: {
              TicketType: true
            }
          }
        }
      }
    }
  });
}

const ticketRepository = {
  getTicketTypes,
  getTickt
};

export default ticketRepository;
