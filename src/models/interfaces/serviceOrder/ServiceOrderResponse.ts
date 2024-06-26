export interface ServiceOrderResponse {
  equipment: string;
  accessories?: string;
  complaint: string;
  entryDate: Date;
  status: string;
  description: string;
  serialNumber: string;
  condition: string;
  customerId: string;
  underWarranty: boolean;
}