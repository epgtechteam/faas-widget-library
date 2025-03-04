// TODO: Re-think Type Exporting
export type LoanPurpose =
  | "REFINANCE_CREDIT_CARD"
  | "CONSOLIDATE_DEBT"
  | "HOME_IMPROVEMENT"
  | "MAJOR_PURCHASE"
  | "COVER_UNEXPECTED_COST"
  | "OTHER";

export type SuccessType = "SUCCESS" | "SUCCESS_WITH_WARNING";

export type ErrorType =
  | "ERROR"
  | "ERROR_WITH_WARNING"
  | "API_ERROR"
  | "VALIDATION_ERROR";
export type CommunicationEventType =
  | "INFO"
  | "WARNING"
  | "ANALYTICAL"
  | SuccessType
  | ErrorType;

export type FaasWidgetProps = {
  partnerInfo: {
    id: string; // ID to identify the partner (ISV)
    name: string;
  };
  financingApplicationInfo: {
    loanAmount: number; // Amount for which the offers will be fetched
    loanPurpose: LoanPurpose;
  };
  consumerInfo: {
    // // Recipient Info for which Offers will be fetched
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
  businessInfo: {
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
};

export type EventAdditionalInfo = string | Record<string, unknown>;

export type onSuccessEvent = (type: SuccessType, message: string, additionalInfo: EventAdditionalInfo) => void;

export type onErrorEvent = (
  type: ErrorType,
  errorCode: number,
  message: string,
  additionalInfo: EventAdditionalInfo
) => void;

export type onEvent = (
  type: CommunicationEventType,
  message: string,
  additionalInfo: EventAdditionalInfo
) => void;
