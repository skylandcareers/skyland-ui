import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
});

const SENDER_EMAIL = process.env.SES_FROM_EMAIL || 'noreply@skylandimmigration.com'; // Must be verified in SES

interface EmailParams {
    to: string | string[];
    subject: string;
    html: string;
}

export async function sendEmail({ to, subject, html }: EmailParams) {
    if (!process.env.AWS_ACCESS_KEY_ID) {
        console.warn('AWS credentials not found, skipping email send.');
        return;
    }

    const recipients = Array.isArray(to) ? to : [to];

    try {
        const command = new SendEmailCommand({
            Source: SENDER_EMAIL,
            Destination: {
                ToAddresses: recipients,
            },
            Message: {
                Subject: {
                    Data: subject,
                },
                Body: {
                    Html: {
                        Data: html,
                    },
                },
            },
        });

        const response = await ses.send(command);
        console.log('Email sent successfully:', response.MessageId);
        return response;
    } catch (error) {
        console.error('Failed to send email:', error);
        // Don't throw to avoid crashing the main request flow
    }
}
