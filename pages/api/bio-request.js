const sgMail = require('@sendgrid/mail')
import { validate } from './validation'

export default async function(req, res){
    
    sgMail.setApiKey(process.env.SENDGRID_SECRET_KEY)

    const { email } = req.body

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
                requestAddress: email
            }
        }],
        template_id: process.env.SENDGRID_EMAIL_CLIENT_BIO_REQUEST
    }


    try {
        if(!validate(1, "", email)){
            throw new Error('Passed parameters are not valid')
        }
        await sgMail.send(emailData)
        res.status(200).send('Message sent successfully')
    }catch (err){
        console.error(err.message)
        res.status(400).send(`${err.message}`)
    }

}