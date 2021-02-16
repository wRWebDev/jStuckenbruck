import firebase from '../../../db/firebase'
const sgMail = require('@sendgrid/mail')
import { separatePerformances } from '../../../components/Events/separation'
import { validate } from './validation'

export default async function(req, res){
    
    sgMail.setApiKey(process.env.SENDGRID_SECRET_KEY)

    const { name, email } = req.body

    const now = new Date()
    const events = await firebase
        .firestore()
        .collection('schedule')
        .orderBy('endDate', 'asc')
        .where('endDate', '>=', now)
        .limit(2)
        .get()
        .then(snapshot => {
            const events = []
            snapshot.forEach(doc => {
                events.push(doc.data())
            })
            return separatePerformances(events, true)
                .filter(event => event.type === 'event')
                .slice(0,2)
                .map(event => {
                    let programme = ''
                    event.repertoire.forEach(rep => {
                        programme += `${rep.composer}: ${rep.work}\n`
                    })
                    return {
                        date: new Date(event.performanceDate * 1000).toLocaleDateString('en-GB'),
                        location: event.location,
                        institution: event.institution,
                        programme,
                        soloist: event.soloist
                    }
                })
        })

    const emailData = {
        from: {
            name: 'Johann Stuckenbruck',
            email: 'no-reply@wrweb.dev'
        },
        personalizations: [{
            to: [{
                email: email,
                name: name
            }],
            dynamic_template_data: {
                senderName: name,
                event1: events[0],
                event2: events[1]
            }
        }],
        template_id: process.env.SENDGRID_EMAIL_MESSAGER
    }


    try {
        if(!validate(2, name, email)){
            throw new Error('Passed parameters are not valid')
        }
        await sgMail.send(emailData)
        res.status(200).send('Message successfully sent.')

    }catch (err){
        console.error(err.message)
        res.status(400).send(`${err.message}`)
    }

}