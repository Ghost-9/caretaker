import { z } from "zod";


export type Booking = {
  id: string;
    name: string;
    phone: string;
    patient: string;
    plan: string;
    status: string;
    attendant: string;
    datestamp: string;
  conditiontype: string;
  totalcharge: string;
    
};
  
export const bookingSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  patient: z.string(),
  plan: z.string(),
  status: z.string(),
  attendant: z.string(),
  conditiontype: z.string(),
  datestamp: z.string(),
  totalcharge: z.string(),
})
