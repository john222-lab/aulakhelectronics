import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, email, phone, interest, message, _honey, _ts } = req.body

  // --- ANTI-SPAM PROTECTION ---
  // 1. Honeypot check: Bots fill this, humans don't see it.
  if (_honey) {
    console.warn('Spam detected via honeypot');
    return res.status(200).json({ success: true, warning: 'Bot detected' })
  }

  // 2. Timing check: Bots submit instantly. Reject if under 3 seconds.
  const submissionTime = Date.now() - Number(_ts)
  if (submissionTime < 3000) {
    console.warn('Spam detected via timing:', submissionTime)
    return res.status(200).json({ success: true, warning: 'Too fast' })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Aulakh Quote Form <quotes@aulakhelectronics.com>',
      to: 'info@aulakhelectronics.com',
      reply_to: email,
      subject: `New Quote Request: ${interest} - ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">New Import Quote Request</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Machine Type:</b> ${interest}</p>
          <p><b>Requirements:</b></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eee;">
            ${message ? message.replace(/\n/g, '<br/>') : 'No requirements provided'}
          </div>
          <br/>
          <p style="font-size: 12px; color: #666;">This message was sent from the contact form on aulakhelectronics.com</p>
        </div>
      `
    })

    if (error) {
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ success: true, id: data?.id })
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message })
  }
}
