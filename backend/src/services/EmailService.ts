interface IMailTo {
  name: string,
  email: string
}

interface IMailMessage {
  subject: string,
  body: string,
  attachment?: Array<string>,
}

// DTO => Data Transfer Object
interface IMailDTO {
  to: IMailTo,
  message: IMailMessage
}

class EmailService {
  static sendMail({ to, message }: IMailDTO) {
    console.log(`Email enviado para ${to.email}: ${message.subject}`)
  }
}

export default EmailService