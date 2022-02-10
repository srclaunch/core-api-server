import AWS from 'aws-sdk';

export const sendFeedback = async ({
  email,
  first_name,
  last_name,
  message,
  user_id,
}: {
  email: string;
  first_name: string;
  last_name: string;
  message: string;
  user_id?: string;
}): Promise<void> => {
  // Create sendEmail params
  const params = {
    Destination: {
      // CcAddresses: [
      //   'EMAIL_ADDRESS'
      //   /* more items */
      // ],
      /* required */
      ToAddresses: [
        'contact@budgetbloom.com',
        /* more items */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: 'UTF-8',
          Data: `${user_id} -> ${first_name ? `${first_name} ${last_name}` : email} wrote,<br /><br />"${message}"`,
        },
        Text: {
          Charset: 'UTF-8',
          Data: `${user_id} -> ${first_name ? `${first_name} ${last_name}` : email} wrote,<br /><br />"${message}"`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Feedback from the Web App',
      },
    },
    ReplyToAddresses: [
      'contact@budgetbloom.com',
      /* more items */
    ] /* required */,
    Source: 'feedback@budgetbloom.com',
  };

  // Create the promise and SES service object
  const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise;

  await sendPromise();
};
