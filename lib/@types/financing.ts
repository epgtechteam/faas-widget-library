import { ConsumerInfo } from "./consumer";
import { BusinessInfo } from "./business";
import { PartnerInfo } from "./isv";

export enum LoanPurpose {
  RefinanceCreditCard = "REFINANCE_CREDIT_CARD",
  ConsolidateDebt = "CONSOLIDATE_DEBT",
  HomeImprovement = "HOME_IMPROVEMENT",
  MajorPurchase = "MAJOR_PURCHASE",
  CoverUnexpectedCost = "COVER_UNEXPECTED_COST",
  Other = "OTHER"
}

export enum FinancingEnvironment {
  E2E = 'e2e',
  PRODUCTION = 'prod'
}

export enum FinancingType {
  B2C_CK_PERSONAL_LOAN = "B2C_CK_PERSONAL_LOAN",
  B2C_CK_CREDIT_CARD = "B2C_CK_CREDIT_CARD",
  B2B_QBO_LINE_OF_CREDIT = "B2B_QBO_LINE_OF_CREDIT",
  B2B_QBO_TERM_LOAN = "B2B_QBO_TERM_LOAN",
  B2B_NONQBO_CREDIT_CARD = "B2B_NONQBO_CREDIT_CARD",
  B2B_NONQBO_BUSINESS_LOAN = "B2B_NONQBO_BUSINESS_LOAN",
}

export type FinancingApplicatonInfo = {
  loanAmount: number;
  loanPurpose: LoanPurpose;
}

export type FinancingPIIData = {
  partnerInfo: PartnerInfo;
  financingApplicationInfo: FinancingApplicatonInfo;
  consumerInfo: ConsumerInfo
  businessInfo: BusinessInfo
};
