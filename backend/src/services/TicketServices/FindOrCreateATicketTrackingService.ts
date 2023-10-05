import TicketTracking from "../../models/TicketTracking";

interface Params {
  ticketId: string | number;
  whatsappId?: string | number;
  userId?: string | number;
}

const FindOrCreateATicketTrackingService = async ({
  ticketId,
  whatsappId,
  userId
  }: Params): Promise<TicketTracking > => {

  const ticketTracking = await TicketTracking.findOne({
    where: {
      ticketId,
      finishedAt: null
    }
  });

  if (ticketTracking) {
    return ticketTracking;
  }

  const newRecord = await TicketTracking.create({
    ticketId,
    whatsappId,
    userId
  });

  return newRecord;
};

export default FindOrCreateATicketTrackingService;