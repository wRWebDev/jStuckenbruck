import next from 'next'

const sgMail = require('@sendgrid/mail')

export default async function(req, res){
    
    sgMail.setApiKey(process.env.SENDGRID_SECRET_KEY)

    const { name, email, message } = req.body

    const emailData = {
        from: {
            name: 'Website Contact',
            email: 'no-reply@wrweb.dev'
        },
        personalizations: [{
            to: [{
                email: process.env.CLIENT_EMAIL,
                name: process.env.CLIENT_NAME
            }],
            dynamic_template_data: {
                senderName: name,
                senderEmail: email,
                message,
                clientName: process.env.CLIENT_NAME,
                clientWebsite: process.env.CLIENT_WEBSITE
            }
        }],
        template_id: process.env.SENDGRID_EMAIL_CONTACT_CLIENT
    }


    try {
        await sgMail.send(emailData)
        res.status(200).send('Message sent successfully')
    }catch (err){
        console.error(err.message)
        res.status(400).send(`${err.message}`)
    }

}