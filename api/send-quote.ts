import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, email, phone, interest, message } = req.body
  try {
    await resend.emails.send({
      from: 'Aulakh Quote Form <quotes@aulakhelectronics.com>',
      to: 'info@aulakhelectronics.com',
      reply_to: email,
      subject: `New Quote Request:  - `,
      html: `<h2>New Import Quote Request</h2>
        <p><b>Name:</b> </p>
        <p><b>Email:</b> </p>
        <p><b>Phone:</b> </p>
        <p><b>Machine Type:</b> </p>
        <p><b>Requirements:</b><br/></p>`
    })
    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}