
const PATIENT_STATUS: string[] = ["Assigned", "Pending", "Completed", "Cancelled"];
const PATIENT_CONDITION: string[] = ["Healthy", "Sick", "Injured", "Recovering"];
const PATIENT_TYPE: string[] = ["New", "Returning", "Emergency", "Routine"];

const PATIENT_STATUS_MAP = {
    Assigned: "Assigned",
    Pending: "Pending",
    Completed: "Completed",
    Cancelled: "Cancelled",
}
export const patientConfig = {
    PATIENT_TYPE,
    PATIENT_CONDITION,
    PATIENT_STATUS,
    PATIENT_STATUS_MAP,
    
}