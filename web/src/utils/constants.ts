export const PAYMENT_RESULT_STATUS = {
  success: "success",
  failure: "failure",
};

export const NUMBER_STRING = {
  "12": "twelve",
};

export const CONTRACT_STATUS = {
  completed: "completed",
};

export const VERIFICATION_STATUS = {
  started: "started",
  approved: "approved",
  resubmissionRequested: "resubmission_requested",
  timeout: "timeout",
  declined: "declined",
  expired: "expired",
  abandoned: "abandoned",
};

export const POLICY_QUOTE_STATUS = {
  quote: "quote",
  pendingDocuments: "pending_documents",
  pendingSigning: "pending_signing",
  pendingPayment: "pending_payment",
};

export const POLICY_COMPLETE_STATUS = {
  pendingSecondaryDocuments: "pending_secondary_documents",
  pendingApproval: "pending_approval",
  active: "active",
  cancelled: "cancelled",
  expiringSoon: "expiring_soon",
  expired: "expired",
};

export const POLICY_STATUS = {
  ...POLICY_QUOTE_STATUS,
  ...POLICY_COMPLETE_STATUS,
};

export const PAYMENT_STATUS = {
  registered: "registered",
  approved: "approved",
  declined: "declined",
  error: "error",
  failedRecurrence: "failed_recurrence",
  paymentCancelledPolicyPendingNewPayment:
    "payment_canceled_policy_pending_new_payment",
  paymentCancelledPolicySoonToBeCancelled:
    "payment_canceled_policy_soon_to_be_cancelled",
  cancelledPolicy: "cancelled_policy",
  cancelled: "cancelled",
  completed: "completed",
  noPaymentFound: "no_payment_found",
};

export const UPDATABLE_PAYMENT_STATUS = [
  PAYMENT_STATUS.approved,
  PAYMENT_STATUS.failedRecurrence,
  PAYMENT_STATUS.paymentCancelledPolicyPendingNewPayment,
];

export const LOCAL_PHONE_CODES = ["BRB", "GUY"];

export const CARIB_PHONE_CODES = [
  "AIA",
  "BHS",
  "ABW",
  "CUW",
  "SXM",
  "MAF",
  "BLM",
  "DOM",
  "HTI",
  "PRI",
  "VGB",
  "VIR",
  "CYM",
  "TCA",
  "CUB",
  "DMA",
  "JAM",
  "TTO",
  "KNA",
  "LCA",
  "VCT",
];

export const ENVIRONMENTS = {
  local: "local",
  development: "development",
  staging: "staging",
  production: "production",
};
