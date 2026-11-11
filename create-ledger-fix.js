

// This script is to generate ledger updates fox stuck ledger transactions in the ledger inbox
// This happened when EPS sent different time in initiationInfo field.
// See https://tideaccount.atlassian.net/browse/PAYSBA-54515


//to get payloads, select from ledger inbox:
// select '["' || id || '",' || payload || '],' from tide_inbox ti 

const payloads = [
// ----added
 ["748075835","{\"accountId\":\"e3f35118-18c5-49ce-bc92-e1daa6aad67e\",\"externalTransactionTrackingId\":\"2611021217094839\",\"transactionReference\":\"2611021217094839\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"DECLINED\",\"bookingDateTime\":\"2026-11-02T12:17:10.000Z\",\"valueDateTime\":\"2026-11-02T12:17:10.000Z\",\"amount\":{\"amount\":1900,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"TOOLSTATION LTD ABERDE WESTHILL\",\"merchantCategoryCode\":\"5211\",\"merchantIdentifier\":\"12216-1527359-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"CONTACTLESS_DEVICE\",\"identification\":\"559908******7717\",\"cardId\":\"59c5605a-52de-4340-842d-983667c6d03d\"},\"supplementaryData\":{\"statusReason\":\"EXTERNAL_ENDPOINT_NOT_REACHABLE\",\"issuerInstitution\":\"CB\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"7507eba1-43d5-431f-8c80-773d6532ee07\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"7507eba1-43d5-431f-8c80-773d6532ee07\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"28092759-f4af-4347-8927-59f4afb347a5\",\"performedOn\":\"2026-11-02T12:17:10.000Z\"}},\"maxNegativeBalanceAmount\":{\"amount\":10000000000,\"currency\":\"GBP\",\"currencyExponent\":2},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],

// -----expired - delete
 ["754513557","{\"accountId\":\"1030807\",\"externalTransactionTrackingId\":\"fa45b111-0904-4a9b-8986-a70193d177d7\",\"transactionReference\":\"3584492198622402794\",\"creditDebitIndicator\":\"CREDIT\",\"status\":\"EXPIRED\",\"bookingDateTime\":\"2026-10-25T13:40:19.000Z\",\"valueDateTime\":\"2026-10-25T13:40:20.325Z\",\"amount\":{\"amount\":23,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION_REFUND\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"Dreamina               SINGAPORE\",\"merchantCategoryCode\":\"5817\",\"merchantIdentifier\":\"018622-230198000202198-UNKNOWN\",\"merchantCountry\":\"SG\"},\"cardInstrument\":{\"authorisationType\":\"ECOMMERCE\",\"identification\":\"519132******2411\",\"cardId\":\"ded6277f-11e3-4ec1-85a6-2dabe9593f46\"},\"supplementaryData\":{\"issuerInstitution\":\"CB\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"806605b0-ec85-46ac-ab04-5f38e21c6523\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"806605b0-ec85-46ac-ab04-5f38e21c6523\"],\"expirationTriggeredBy\":\"AUTOMATIC_EXPIRY_SCHEDULER\",\"provider\":\"PAYMENTOLOGY\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"2370678\",\"performedOn\":\"2026-10-25T13:40:19.000Z\"}},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],

// -----expired - delete
 ["753609436","{\"accountId\":\"5242a740-bb3f-4da4-adc2-a171cac6c0ae\",\"externalTransactionTrackingId\":\"34fed491-b26f-4a19-9cb0-4943b2b8d1e9\",\"transactionReference\":\"3582010089517027842\",\"creditDebitIndicator\":\"CREDIT\",\"status\":\"EXPIRED\",\"bookingDateTime\":\"2026-10-23T00:16:48.000Z\",\"valueDateTime\":\"2026-10-23T00:16:49.001Z\",\"amount\":{\"amount\":80,\"currency\":\"USD\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION_REFUND\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"VERCEL INC.            COVINA\",\"merchantCategoryCode\":\"7372\",\"merchantIdentifier\":\"019517-YODNEM7UA0WHUAV-00000190175\",\"merchantCountry\":\"US\"},\"cardInstrument\":{\"authorisationType\":\"ECOMMERCE\",\"identification\":\"524968******0018\",\"cardId\":\"fafc0c0f-3a69-4f10-80f4-3219dfc83da3\"},\"supplementaryData\":{\"issuerInstitution\":\"CURRENCY_CLOUD\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"d3b36b49-d525-478d-821e-dc7482258cb9\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"d3b36b49-d525-478d-821e-dc7482258cb9\"],\"expirationTriggeredBy\":\"AUTOMATIC_EXPIRY_SCHEDULER\",\"provider\":\"PAYMENTOLOGY\"},\"feeAmount\":{\"amount\":0,\"currency\":\"USD\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"2086908\",\"performedOn\":\"2026-10-23T00:16:48.000Z\"}},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],

// --- added
 ["747894875","{\"accountId\":\"2bf63548-cf71-4c2c-9b02-f945699b1c37\",\"externalTransactionTrackingId\":\"26110209321026726\",\"transactionReference\":\"26110209321026726\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"DECLINED\",\"bookingDateTime\":\"2026-11-02T09:32:11.000Z\",\"valueDateTime\":\"2026-11-02T09:32:11.000Z\",\"amount\":{\"amount\":10200,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"AMAZON.CO.UK           LONDON\",\"merchantCategoryCode\":\"5399\",\"merchantIdentifier\":\"18505-RTM8SIGSSD4N4AY-1N8JjjPpQ35brEX\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"ECOMMERCE\",\"identification\":\"559908******8237\",\"cardId\":\"383e5cef-f06c-4b20-b755-6d7c13e641bd\"},\"supplementaryData\":{\"statusReason\":\"EXTERNAL_ENDPOINT_NOT_REACHABLE\",\"issuerInstitution\":\"CB\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"5558b306-12d1-4f18-8447-1ac41a4c4e5d\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"5558b306-12d1-4f18-8447-1ac41a4c4e5d\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"f226c1d6-3dd6-4009-a6c1-d63dd6f009b1\",\"performedOn\":\"2026-11-02T09:32:11.000Z\"}},\"maxNegativeBalanceAmount\":{\"amount\":10000000000,\"currency\":\"GBP\",\"currencyExponent\":2},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],

// ---- ignore, sent RESERVED for authorised
 ["754217762","{\"accountId\":\"16ada511-5116-34d5-a71e-73ebd7b32084\",\"externalTransactionTrackingId\":\"26110917070438695\",\"transactionReference\":\"26110917070438695\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"RESERVED\",\"bookingDateTime\":\"2026-11-09T17:07:04.000+00:00\",\"localInstrument\":\"MASTERCARD\",\"amount\":{\"amount\":10,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"merchantDetails\":{\"merchantName\":\"TfL Travel Charge\",\"merchantCategoryCode\":\"4111\",\"merchantIdentifier\":\"12216-1022701-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"CONTACTLESS_DEVICE\",\"identification\":\"559908******0597\",\"cardId\":\"6c0056ca-9d9d-44c0-8cc4-c7c8136ad6c1\"},\"supplementaryData\":{\"issuerInstitution\":\"CB\",\"additionalData\":{\"virtualAccountId\":\"1f886350-4184-4550-b135-871cf43b154a\",\"virtualAccountTransactionId\":\"59850501-9326-33b0-893c-d2a2b93cc6f1\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"8885b17a-fbe0-46f0-85b1-7afbe0a6f0aa\",\"performedOn\":\"2026-11-09T17:07:04.000+00:00\"}}}"],

// ----ignore, provisional
 ["755115066","{\"accountId\":\"e19585a9-3905-4e49-85f5-fb6470c8c751\",\"externalTransactionTrackingId\":\"f8f4bb2b-43e6-44bd-a078-64d3051d5f7c\",\"creditDebitIndicator\":\"CREDIT\",\"status\":\"PROVISIONAL\",\"bookingDateTime\":\"2026-11-10T18:40:47.909Z\",\"valueDateTime\":\"2026-11-10T18:40:48.640Z\",\"amount\":{\"amount\":3634,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"transactionReference\":\"f8f4bb2b-43e6-44bd-a078-64d3051d5f7c\",\"transactionInformation\":\"POS-101126-88N5C\",\"localInstrument\":\"CARD\",\"merchantDetails\":{\"merchantCategoryCode\":\"5999\",\"merchantIdentifier\":\"452b1c78-2e8c-410f-8085-0d2004cd3e29\"},\"cardInstrument\":{\"authorisationType\":\"CONTACTLESS_DEVICE\",\"identification\":\"VISA******8809\"},\"creditorAccount\":{\"accountId\":\"e19585a9-3905-4e49-85f5-fb6470c8c751\",\"schemeName\":\"TIDE.INTERNAL\",\"name\":\"externalReference\",\"identification\":\"7689c1ff-7e1b-4a3a-808e-c015d9d8044b\"},\"debtorAccount\":{\"schemeName\":\"TIDE.INTERNAL.PAYMENT.ACCOUNT\",\"name\":\"Payment Account\",\"identification\":\"LDFPNS6RMV4PPVH6\"},\"supplementaryData\":{\"originalTransactionReference\":\"b1c7e225-5fbc-4f8d-9ec0-16609538a4e4\",\"instrumentSubType\":\"SOFT_POS\",\"initiationChannel\":\"Tap to Pay on iPhone\",\"issuerInstitution\":\"ADYEN\",\"additionalData\":{\"expiryDate\":\"12/2031\",\"cardScheme\":\"VISA\",\"regionType\":\"DOMESTIC\",\"cardSummary\":\"8809\",\"cardHolderName\":\"N/A\",\"accountType\":\"MERCHANT_ACCOUNT\",\"cardType\":\"CONSUMER\",\"paymentMethod\":\"CARD\",\"counterpartyName\":\"POS-101126-88N5C\",\"shopperEmail\":null,\"fundingSource\":\"DEBIT\"},\"feeAmount\":{\"amount\":66,\"currency\":\"GBP\",\"currencyExponent\":2}}}"],

// ----added
 ["743201746","{\"accountId\":\"106253\",\"externalTransactionTrackingId\":\"2610280819532944\",\"transactionReference\":\"2610280819532944\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"CLEARED\",\"bookingDateTime\":\"2026-10-28T08:19:53.000Z\",\"valueDateTime\":\"2026-10-29T03:39:57.000Z\",\"amount\":{\"amount\":24694,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":3,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"DPD - D P D Group Uk Ltd, SMETHWICK\",\"merchantCategoryCode\":\"4215\",\"merchantIdentifier\":\"11595-020276158-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"CONTACTLESS_DEVICE\",\"identification\":\"530553******2083\",\"cardId\":\"032973e3-f597-422d-88a9-2e86e9b6049a\"},\"supplementaryData\":{\"issuerInstitution\":\"PPS\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"82f8b26b-f02c-4028-ba69-314ad835cad5\"},\"topUpStatus\":\"NOT_INITIATED\",\"authCode\":\"017431\",\"linkedTransactionIds\":[\"b1ace346-c64c-4862-94dc-14ea40893d37\",\"e4c8fe21-ad19-41ec-a052-748dcc4748f1\",\"82f8b26b-f02c-4028-ba69-314ad835cad5\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"1461301\",\"performedOn\":\"2026-10-28T08:19:53.000Z\"}},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],


// ----- addded
 ["744656657","{\"accountId\":\"226c01e1-e47c-4442-ada5-4bd959ed2fb1\",\"externalTransactionTrackingId\":\"26103012511824779\",\"transactionReference\":\"26103012511824779\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"DECLINED\",\"bookingDateTime\":\"2026-10-30T12:51:19.000Z\",\"valueDateTime\":\"2026-10-30T12:51:19.000Z\",\"amount\":{\"amount\":1157,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"UBER   * PENDING       London\",\"merchantCategoryCode\":\"4121\",\"merchantIdentifier\":\"11595-020434184-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"ECOMMERCE\",\"identification\":\"559908******1928\",\"cardId\":\"17d80e55-4110-42a5-b0e4-115a1284aa02\"},\"supplementaryData\":{\"statusReason\":\"EXTERNAL_ENDPOINT_NOT_REACHABLE\",\"issuerInstitution\":\"CB\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"399fc94b-439e-4aa9-8b4d-2eda7d567acc\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"399fc94b-439e-4aa9-8b4d-2eda7d567acc\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"7468aa45-6b08-491e-a8aa-456b08b91e2f\",\"performedOn\":\"2026-10-30T12:51:19.000Z\"}},\"maxNegativeBalanceAmount\":{\"amount\":10000000000,\"currency\":\"GBP\",\"currencyExponent\":2},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],

// ----addded
 ["744354945","{\"accountId\":\"8a65c3f4-7c03-44b2-8e44-dc2fd996ee82\",\"externalTransactionTrackingId\":\"26103008365932760\",\"transactionReference\":\"26103008365932760\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"DECLINED\",\"bookingDateTime\":\"2026-10-30T08:37:00.000Z\",\"valueDateTime\":\"2026-10-30T08:37:00.000Z\",\"amount\":{\"amount\":12285,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"WICKES RAYLEIGH        RAYLEIGH\",\"merchantCategoryCode\":\"5200\",\"merchantIdentifier\":\"12216-8107930-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"CONTACTLESS_DEVICE\",\"identification\":\"559908******5231\",\"cardId\":\"bbf400dc-524d-4463-8e83-aa00565136e6\"},\"supplementaryData\":{\"statusReason\":\"EXTERNAL_ENDPOINT_NOT_REACHABLE\",\"issuerInstitution\":\"CB\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"9e63caac-ef54-4c78-8e67-b7f175d1f70d\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"9e63caac-ef54-4c78-8e67-b7f175d1f70d\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"1eb3a15a-cf64-4da5-b3a1-5acf648da5c4\",\"performedOn\":\"2026-10-30T08:37:00.000Z\"}},\"maxNegativeBalanceAmount\":{\"amount\":10000000000,\"currency\":\"GBP\",\"currencyExponent\":2},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],

// ----added
 ["744597802","{\"accountId\":\"132738\",\"externalTransactionTrackingId\":\"26102907105928784\",\"transactionReference\":\"26102907105928784\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"CLEARED\",\"bookingDateTime\":\"2026-10-29T07:10:59.000Z\",\"valueDateTime\":\"2026-10-30T11:56:36.000Z\",\"amount\":{\"amount\":3006,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":3,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"FARNWORTH FILLING STAT - HARROWBY STREET FARN, BOLTON\",\"merchantCategoryCode\":\"5541\",\"merchantIdentifier\":\"10496-2102165710-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"CONTACTLESS_DEVICE\",\"identification\":\"530553******5398\",\"cardId\":\"310fdb24-4a73-4f13-8b85-a204b7b8ee82\"},\"supplementaryData\":{\"issuerInstitution\":\"PPS\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"0268c065-92ad-4987-b2a7-0b4fdda75a7b\"},\"topUpStatus\":\"NOT_INITIATED\",\"authCode\":\"554962\",\"linkedTransactionIds\":[\"49a3ea35-909a-444f-a5c8-264aeb928355\",\"2c5104ca-f08c-48cf-bc41-749049d04cea\",\"0268c065-92ad-4987-b2a7-0b4fdda75a7b\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"316691\",\"performedOn\":\"2026-10-29T07:10:59.000Z\"}},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],


// ---- RESERVED on authorised, delete
 ["755286213","{\"accountId\":\"16ada511-5116-34d5-a71e-73ebd7b32084\",\"externalTransactionTrackingId\":\"2611110319512251\",\"transactionReference\":\"2611110319512251\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"RESERVED\",\"bookingDateTime\":\"2026-11-11T03:19:51.000+00:00\",\"localInstrument\":\"MASTERCARD\",\"amount\":{\"amount\":1090,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"merchantDetails\":{\"merchantName\":\"TfL Travel Charge\",\"merchantCategoryCode\":\"4111\",\"merchantIdentifier\":\"12216-1022701-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"CONTACTLESS_DEVICE\",\"identification\":\"559908******0597\",\"cardId\":\"6c0056ca-9d9d-44c0-8cc4-c7c8136ad6c1\"},\"supplementaryData\":{\"issuerInstitution\":\"CB\",\"additionalData\":{\"virtualAccountId\":\"1f886350-4184-4550-b135-871cf43b154a\",\"virtualAccountTransactionId\":\"e83565aa-267d-337b-8b28-8d3585bd0370\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"8885b17a-fbe0-46f0-85b1-7afbe0a6f0aa\",\"performedOn\":\"2026-11-11T03:19:51.000+00:00\"}}}"],


// --- added
 ["744358398","{\"accountId\":\"730910\",\"externalTransactionTrackingId\":\"2610300839467227\",\"transactionReference\":\"2610300839467227\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"DECLINED\",\"bookingDateTime\":\"2026-10-30T08:39:47.000Z\",\"valueDateTime\":\"2026-10-30T08:39:47.000Z\",\"amount\":{\"amount\":4183,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"Zyber Ltd              London\",\"merchantCategoryCode\":\"5251\",\"merchantIdentifier\":\"33447-202011322284160-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"CONTACTLESS_CARD\",\"identification\":\"559908******9210\",\"cardId\":\"5a44680c-0e7f-4660-a1b8-a08288e1d7e2\"},\"supplementaryData\":{\"statusReason\":\"EXTERNAL_ENDPOINT_NOT_REACHABLE\",\"issuerInstitution\":\"CB\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"e8bb968d-9a70-4ac4-83c7-9915c2e78ca8\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"e8bb968d-9a70-4ac4-83c7-9915c2e78ca8\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"1630162\",\"performedOn\":\"2026-10-30T08:39:47.000Z\"}},\"maxNegativeBalanceAmount\":{\"amount\":10000000000,\"currency\":\"GBP\",\"currencyExponent\":2},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],


// --- added
 ["743676748","{\"accountId\":\"451959\",\"externalTransactionTrackingId\":\"26102913530236841\",\"transactionReference\":\"26102913530236841\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"DECLINED\",\"bookingDateTime\":\"2026-10-29T13:53:03.000Z\",\"valueDateTime\":\"2026-10-29T13:53:03.000Z\",\"amount\":{\"amount\":7560,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"CLIENT ENGAGER ONLINE  WOKINGHAM\",\"merchantCategoryCode\":\"5734\",\"merchantIdentifier\":\"18505-JAYUXXASLLGCHSP-1FPDonJotVNxkQ6\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"ECOMMERCE\",\"identification\":\"559908******2279\",\"cardId\":\"62b6d8f9-27ad-48f1-a554-e54a8633ea4a\"},\"supplementaryData\":{\"statusReason\":\"EXTERNAL_ENDPOINT_NOT_REACHABLE\",\"issuerInstitution\":\"CB\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"f54be3f0-090f-4331-98e2-17678934eed5\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"f54be3f0-090f-4331-98e2-17678934eed5\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"1111963\",\"performedOn\":\"2026-10-29T13:53:03.000Z\"}},\"maxNegativeBalanceAmount\":{\"amount\":10000000000,\"currency\":\"GBP\",\"currencyExponent\":2},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],

// --- added
 ["743286844","{\"accountId\":\"257ffa80-9e54-4fa3-846f-2fb86a744c90\",\"externalTransactionTrackingId\":\"2610290706555958\",\"transactionReference\":\"2610290706555958\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"DECLINED\",\"bookingDateTime\":\"2026-10-29T07:06:56.000Z\",\"valueDateTime\":\"2026-10-29T07:06:56.000Z\",\"amount\":{\"amount\":3419,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"Toolstation UK         Northampton\",\"merchantCategoryCode\":\"5251\",\"merchantIdentifier\":\"11595-020380856-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"ECOMMERCE\",\"identification\":\"544060******3091\",\"cardId\":\"70ffad2f-3d45-476b-bf72-c47fdead09e9\"},\"supplementaryData\":{\"statusReason\":\"EXTERNAL_ENDPOINT_NOT_REACHABLE\",\"issuerInstitution\":\"CB\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"24dffa3a-cff4-45d5-9de5-9486c772b447\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"24dffa3a-cff4-45d5-9de5-9486c772b447\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"a28336ff-bc97-4445-8336-ffbc97f44572\",\"performedOn\":\"2026-10-29T07:06:56.000Z\"}},\"maxNegativeBalanceAmount\":{\"amount\":10000000000,\"currency\":\"GBP\",\"currencyExponent\":2},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],

// ---added
 ["751937734","{\"accountId\":\"991922\",\"externalTransactionTrackingId\":\"26110615185627955\",\"transactionReference\":\"26110615185627955\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"DECLINED\",\"bookingDateTime\":\"2026-11-06T15:18:57.000Z\",\"valueDateTime\":\"2026-11-06T15:18:57.000Z\",\"amount\":{\"amount\":2350,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"THE NATURAL WOODFLOOR  London\",\"merchantCategoryCode\":\"5713\",\"merchantIdentifier\":\"20146-680000050559947-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"CONTACTLESS_DEVICE\",\"identification\":\"559908******1954\",\"cardId\":\"c3ade99b-73ea-44e0-8687-4f94a41fccc0\"},\"supplementaryData\":{\"statusReason\":\"EXTERNAL_ENDPOINT_NOT_REACHABLE\",\"issuerInstitution\":\"CB\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"4cd9e7c3-2e0f-4f30-a27e-5c716b6c19e6\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"4cd9e7c3-2e0f-4f30-a27e-5c716b6c19e6\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"2265358\",\"performedOn\":\"2026-11-06T15:18:57.000Z\"}},\"maxNegativeBalanceAmount\":{\"amount\":10000000000,\"currency\":\"GBP\",\"currencyExponent\":2},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],

// ----added
 ["744454635","{\"accountId\":\"134cec45-4926-4446-974b-c94c0669e632\",\"externalTransactionTrackingId\":\"26103009420321851\",\"transactionReference\":\"26103009420321851\",\"creditDebitIndicator\":\"DEBIT\",\"status\":\"DECLINED\",\"bookingDateTime\":\"2026-10-30T09:42:04.000Z\",\"valueDateTime\":\"2026-10-30T09:42:04.000Z\",\"amount\":{\"amount\":2929,\"currency\":\"GBP\",\"currencyExponent\":2},\"proprietaryBankTransactionCode\":{\"code\":\"CARD_TRANSACTION\",\"issuer\":\"TIDE\"},\"sequenceNumber\":1,\"localInstrument\":\"MASTERCARD\",\"merchantDetails\":{\"merchantName\":\"PORTWOOD TIMBER        STOCKPORT\",\"merchantCategoryCode\":\"5211\",\"merchantIdentifier\":\"16036-GB0000000250801-UNKNOWN\",\"merchantCountry\":\"GB\"},\"cardInstrument\":{\"authorisationType\":\"CONTACTLESS_DEVICE\",\"identification\":\"559908******2490\",\"cardId\":\"bfbfd1c3-9ad4-4e78-a51e-8d9ea830ddac\"},\"supplementaryData\":{\"statusReason\":\"EXTERNAL_ENDPOINT_NOT_REACHABLE\",\"issuerInstitution\":\"CB\",\"additionalData\":{\"referencedEntity\":{\"type\":\"CPS_TRANSACTION\",\"id\":\"2a89dea1-b40e-4340-9630-c28e9f6b221f\"},\"topUpStatus\":\"NOT_INITIATED\",\"linkedTransactionIds\":[\"2a89dea1-b40e-4340-9630-c28e9f6b221f\"],\"provider\":\"EPS\"},\"feeAmount\":{\"amount\":0,\"currency\":\"GBP\",\"currencyExponent\":2},\"initiationInfo\":{\"userId\":\"73079376-c60c-4651-8793-76c60c36514d\",\"performedOn\":\"2026-10-30T09:42:04.000Z\"}},\"maxNegativeBalanceAmount\":{\"amount\":10000000000,\"currency\":\"GBP\",\"currencyExponent\":2},\"payloadType\":\"application/vnd.tide.process-transaction.v1.0\"}"],



];



const refs = [

    "2611021217094839",
    "26110209321026726",
    "2610280819532944",
    "26103012511824779",
    "26103008365932760",
    "26102907105928784",
    "2610300839467227",
    "26102913530236841",
    "2610290706555958",
    "26110615185627955",
    "26103009420321851",

];

function containsRef(r) {
	return refs.includes(r);
}

let inboxIds = [];
let updateSqls = [];

const timeRe = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\d/;

function generateForPayload(pair) {

	let id = pair[0];
	let p = pair[1];
	let json = JSON.parse(p);
	let ref = json.transactionReference;
	if (!containsRef(ref)) return;
	console.log("got ref: ", json.transactionReference);

	let inInfo = json.supplementaryData.initiationInfo;
	let bookingTime = inInfo.performedOn;
	let bookingTimeForUpdate = bookingTime.match(timeRe)[0];

	console.log("book time for upd:", bookingTimeForUpdate);

	let initInfo = {...inInfo, performedOn:bookingTimeForUpdate + "+00:00"};

	//update tide_transaction set booking_date_time = '2026-05-11T14:43:33.000 +00', initiation_info = '{"userId":"2ca90eb3-a498-4455-a90e-b3a498d455ce","performedOn":"2026-05-11T14:43:33.000+00:00"}' where transaction_reference='2605111543321883';
	let updateSql = "update tide_transaction set booking_date_time = '" + bookingTimeForUpdate + " +00', initiation_info = '" + JSON.stringify(initInfo) +"' where transaction_reference='" + ref + "';";

	console.log("upd sql: \n", updateSql);

	inboxIds.push(id);

}

function generateInboxUpdates() {

	let todayDate = (new Date()).toISOString().split("T")[0];

	const ids = inboxIds.join(", ");
	console.log("\nupdate tide_inbox set retry_count = 0 where id in (" + ids + ");");

	console.log("\nupdate tide_inbox_recovery set recovery_date_time = '" + todayDate + " 00:00:00.000' where inbox_event_id in (" + ids + ");\n\n");

}

payloads.forEach(generateForPayload);
generateInboxUpdates();



