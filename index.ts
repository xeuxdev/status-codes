export const s = {
  statusContinue: 100,
  statusOk: 200,
  statusCreated: 201,
  statusAccepted: 202,
  statusNonAuthoritativeInfo: 203,
  statusNoContent: 204,
  statusResetContent: 205,
  statusPartialContent: 206,
  statusMultiStatus: 207,
  statusAlreadyReported: 208,
  statusIMUsed: 226,
  statusMultipleChoices: 300,
  statusMovedPermanently: 301,
  statusFound: 302,
  statusSeeOther: 303,
  statusNotModified: 304,
  statusUseProxy: 305,
  statusSwitchProxy: 306,
  statusTemporaryRedirect: 307,
  statusPermanentRedirect: 308,
  statusBadRequest: 400,
  statusUnauthorized: 401,
  statusPaymentRequired: 402,
  statusForbidden: 403,
  statusNotFound: 404,
  statusMethodNotAllowed: 405,
  statusNotAcceptable: 406,
  statusProxyAuthenticationRequired: 407,
  statusRequestTimeout: 408,
  statusConflict: 409,
  statusGone: 410,
  statusLengthRequired: 411,
  statusPreconditionFailed: 412,
  statusRequestEntityTooLarge: 413,
  statusRequestUriTooLong: 414,
  statusUnsupportedMediaType: 415,
  statusRequestedRangeNotSatisfiable: 416,
  statusExpectationFailed: 417,
  statusTeapot: 418,
  statusEnhanceYourCalm: 420,
  statusMisdirectedRequest: 421,
  statusUnprocessableEntity: 422,
  statusLocked: 423,
  statusFailedDependency: 424,
  statusUnorderedCollection: 425,
  statusUpgradeRequired: 426,
  statusTooManyRequests: 429,
  statusRequestHeaderFieldsTooLarge: 431,
  statusNoResponse: 444,
  statusBlockedByWindowsParentalControls: 450,
  statusUnavailableForLegalReasons: 451,
  statusRequestHeaderTooLarge: 494,
  statusClientClosedRequest: 499,
  statusInternalServerError: 500,
  statusNotImplemented: 501,
  statusBadGateway: 502,
  statusServiceUnavailable: 503,
  statusGatewayTimeout: 504,
  statusHttpVersionNotSupported: 505,
  statusVariantAlsoNegotiates: 506,
  statusInsufficientStorage: 507,
  statusLoopDetected: 508,
  statusBandWithLimitExceeded: 509,
  statusNotExtended: 510,
  statusNetworkAuthenticationRequired: 511,
  statusNetworkConnectTimeoutError: 599,
} as const;

export type StatusCodes = typeof s;
