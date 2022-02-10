export const plaidItemErrorWebhookErrorTypes = [
  'INVALID_REQUEST',
  'INVALID_RESULT',
  'INVALID_INPUT',
  'INSTITUTION_ERROR',
  'RATE_LIMIT_EXCEEDED',
  'API_ERROR',
  'ITEM_ERROR',
  'ASSET_REPORT_ERROR',
  'RECAPTCHA_ERROR',
  'OAUTH_ERROR',
  'PAYMENT_ERROR',
  'BANK_TRANSFER_ERROR',
];

export const plaidItemErrorWebhookBody = {
  error: {
    display_message: null,
    error_code: 'ITEM_LOGIN_REQUIRED',
    error_message:
      `the login details of this item have changed \
       (credentials, MFA, or required user action) \
       and a user login is required to update this \
       information. use Link's update mode to restore \
       the item to a good state`,
    error_type: 'ITEM_ERROR',
    status: 400,
  },
  item_id: 'wz666MBjYWTp2PDzzggYhM6oWWmBb',
  webhook_code: 'ERROR',
  webhook_type: 'ITEM',
};

export const plaidItemPendingExpirationBody = {
  consent_expiration_time: '2020-01-15T13:25:17.766Z',
  item_id: 'wz666MBjYWTp2PDzzggYhM6oWWmBb',
  webhook_code: 'PENDING_EXPIRATION',
  webhook_type: 'ITEM',
};

export const plaidItemUserPermissionRevokedBody = {
  error: {
    error_code: 'USER_PERMISSION_REVOKED',
    error_message: 'the holder of this account has revoked their permission for your application to access it',
    error_type: 'ITEM_ERROR',
    status: 400,
  },
  item_id: 'gAXlMgVEw5uEGoQnnXZ6tn9E7Mn3LBc4PJVKZ',
  webhook_code: 'USER_PERMISSION_REVOKED',
  webhook_type: 'ITEM',
};

export const plaidItemWebhookUpdateAcknowledgedBody = {
  error: null,
  item_id: 'wz666MBjYWTp2PDzzggYhM6oWWmBb',
  new_webhook_url: 'https://plaid.com/example/webhook',
  webhook_code: 'WEBHOOK_UPDATE_ACKNOWLEDGED',
  webhook_type: 'ITEM',
};

export const plaidTransactionsInitialUpdateBody = {
  error: null,
  item_id: 'wz666MBjYWTp2PDzzggYhM6oWWmBb',
  new_transactions: 19,
  webhook_code: 'INITIAL_UPDATE',
  webhook_type: 'TRANSACTIONS',
};

export const plaidTransactionsHistoricalUpdateBody = {
  error: null,
  item_id: 'wz666MBjYWTp2PDzzggYhM6oWWmBb',
  new_transactions: 231,
  webhook_code: 'HISTORICAL_UPDATE',
  webhook_type: 'TRANSACTIONS',
};

export const plaidTransactionsDefaultUpdateBody = {
  error: null,
  item_id: 'wz666MBjYWTp2PDzzggYhM6oWWmBb',
  new_transactions: 3,
  webhook_code: 'DEFAULT_UPDATE',
  webhook_type: 'TRANSACTIONS',
};

export const plaidTransactionsTransactionsRemovedBody = {
  error: null,
  item_id: 'wz666MBjYWTp2PDzzggYhM6oWWmBb',
  removed_transactions: ['yBVBEwrPyJs8GvR77N7QTxnGg6wG74H7dEDN6', 'kgygNvAVPzSX9KkddNdWHaVGRVex1MHm3k9no'],
  webhook_code: 'TRANSACTIONS_REMOVED',
  webhook_type: 'TRANSACTIONS',
};

export const plaidTransactionsBody = {
  accounts: [
    {
      account_id: 'BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp',
      balances: {
        available: 110,
        current: 110,
        iso_currency_code: 'USD',
        limit: null,
        unofficial_currency_code: null,
      },
      mask: '0000',
      name: 'Plaid Checking',
      official_name: 'Plaid Gold Standard 0% Interest Checking',
      subtype: 'checking',
      type: 'depository',
    },
  ],
  item: {
    available_products: ['balance', 'identity', 'investments'],
    billed_products: ['assets', 'auth', 'liabilities', 'transactions'],
    consent_expiration_time: null,
    error: null,
    institution_id: 'ins_3',
    item_id: 'eVBnVMp7zdTJLkRNr33Rs6zr7KNJqBFL9DrE6',
    update_type: 'background',
    webhook: 'https://www.genericwebhookurl.com/webhook',
  },
  request_id: '45QSn',
  total_transactions: 1,
  transactions: [
    {
      account_id: 'BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp',
      account_owner: null,
      amount: 2307.21,
      authorized_date: '2017-01-27',
      authorized_datetime: null,
      category: ['Shops', 'Computers and Electronics'],
      category_id: '19013000',
      date: '2017-01-29',
      datetime: null,
      iso_currency_code: 'USD',
      location: {
        address: '300 Post St',
        city: 'San Francisco',
        country: 'US',
        lat: 40.740352,
        lon: -74.001761,
        postal_code: '94108',
        region: 'CA',
        store_number: '1235',
      },
      merchant_name: 'Apple',
      name: 'Apple Store',
      payment_channel: 'in store',
      payment_meta: {
        by_order_of: null,
        payee: null,
        payer: null,
        payment_method: null,
        payment_processor: null,
        ppd_id: null,
        reason: null,
        reference_number: null,
      },
      pending: false,
      pending_transaction_id: null,
      transaction_code: null,
      transaction_id: 'lPNjeW1nR6CDn5okmGQ6hEpMo4lLNoSrzqDje',
      transaction_type: 'place',
      unofficial_currency_code: null,
    },
  ],
};
