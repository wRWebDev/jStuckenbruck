const sgMail = require('@sendgrid/mail')

export default async function(req, res){
    
    sgMail.setApiKey(process.env.SENDGRID_SECRET_KEY)

    const { senderName, senderEmail, message } = req.body

    const clientName = process.env.CLIENT_NAME
    const clientEmail = process.env.CLIENT_EMAIL

    const emailData = {
        from: {
            name: senderName,
            email: senderEmail
        },
        personalizations: [{
            to: [{
                email: clientEmail,
                name: clientName
            }],
            dynamic_template_data: {
                senderName,
                senderEmail,
                message,
                clientName
            }
        }],
        template_id: process.env.SENDGRID_EMAIL_CONTACT_CLIENT
    }


    try {
        await sgMail.send(emailData)
        res.status(200).send('Message sent successfully')
    }catch (err){
        res.status(400).send(`${err.message}`)
    }

}