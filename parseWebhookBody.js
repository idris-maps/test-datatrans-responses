const parseWebhookBody = body => {
  const transaction = body.uppTransactionService.body[0].transaction[0]
  return {
    status: transaction.$.status,
    refno: transaction.$.refno,
    success: transaction.success ? true : false,
    transactionId: transaction.uppTransactionId[0],
  }
}

export default parseWebhookBody