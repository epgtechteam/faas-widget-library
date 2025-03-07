export type PartnerInfo = {
  id: string; // ID to identify the partner (ISV)
  name: string;
}

export type ServiceTitanHeaderInfo = {
    xCorrelationid: string;
    xPartnerId: string;
    xMerchantid: string;
}