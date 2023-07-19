import Button from "../Shared/Button/Button"
import emailjs from 'emailjs-com'; 
import Swal from 'sweetalert2'

const Contact =()=>{

    const onSubmit = (event) => {
        event.preventDefault();

        const serviceID = 'service_xqhj3c6';
        const templateID = 'template_8hmu167';
        const userID = '1OKuoOu21MIjLo14z';


        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;


        emailjs.send(serviceID, templateID, {
        to_email: email,
        from_name: name,
        message: message,
        }, userID)
        .then((response) => {
            console.log('Correo enviado:', response.status, response.text);

        })
        .catch((error) => {
            console.error('Error al enviar el correo:', error);

        });

        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';

        Swal.fire(
            'Good job!',
            'You send a message to Talía!',
            'success'
          )
};



    return (
        <form onSubmit={onSubmit} className="flex justify-center align-center flex-col text-center m-40 font-mono">
            <label htmlFor="email">Email:</label>
            <input type='email' id='email' className="border-2 rounded-lg" required />
            <label htmlFor="name">Name:</label>
            <input type='text' id='name' className="border-2 rounded-lg" required />
            <label htmlFor="message">Message:</label>
            <input type='text' id='message' className="border-2 rounded-lg h-20" required />
            <Button type="submit" text='Contact me' />

        </form>
    );
    };

export default Contact