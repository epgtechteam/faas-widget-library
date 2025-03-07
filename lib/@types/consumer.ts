
export type ConsumerInfo = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string; // Recipient Email to which Offers will be fetched
    phone?: string; // Recipient Phone to which Offers will be fetched
    address?: {
      addressLine1?: string;
      addressLine2?: string;
      street?: string;
      city?: string;
      state: string;
      postalCode: string;
      country: string;
    };
  };