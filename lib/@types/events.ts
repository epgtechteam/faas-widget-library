
export type AdditionalInfo = string | Record<string, unknown>;

export enum SuccessType {
    SUCCESS = "SUCCESS",
    SUCCESS_WITH_WARNING = "SUCCESS_WITH_WARNING"
}

export enum ErrorType {
    ERROR = "ERROR",
    ERROR_WITH_WARNING = "ERROR_WITH_WARNING",
    API_ERROR = "API_ERROR",
    VALIDATION_ERROR = "VALIDATION_ERROR"
}

export enum CommunicationEventType {
    INFO = "INFO",
    WARNING = "WARNING",
    ANALYTICAL = "ANALYTICAL",
    SUCCESS = SuccessType.SUCCESS,
    SUCCESS_WITH_WARNING = SuccessType.SUCCESS_WITH_WARNING,
    ERROR = ErrorType.ERROR,
    ERROR_WITH_WARNING = ErrorType.ERROR_WITH_WARNING,
    API_ERROR = ErrorType.API_ERROR,
    VALIDATION_ERROR = ErrorType.VALIDATION_ERROR
}

export type onSuccessEvent = (type: SuccessType, message: string, additionalInfo: AdditionalInfo) => void;

export type onErrorEvent = (
  type: ErrorType,
  errorCode: number,
  message: string,
  additionalInfo: AdditionalInfo
) => void;

export type onEvent = (
  type: CommunicationEventType,
  message: string,
  additionalInfo: AdditionalInfo
) => void;
