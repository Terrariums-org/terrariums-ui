export class SendEmailDto {
  // user email
  to: string;
  // email subject
  subject: string;
  // email body
  body: string;
  constructor(to: string, subject: string, body: string) {
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}
