export type BusinessInfo = {
  // Business info providing the service
  id?: string;
  logoUrl?: string;
  businessName: string;
  email:string;
  phone?: string;
  industry: string;
  type: string;
  address?: {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state: string;
    postalCode: string;
    country: string;
  };
  ownerInfo: {
    // Merchant Personal Information
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: {
      addressLine1?: string;
      addressLine2?: string;
      city?: string;
      state: string;
      postalCode: string;
      country: string;
    };
  };
};