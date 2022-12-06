import React from 'react'
import images from '../assets/images/images'
import './styles/contact.css'
const ContactPage = () => {
  return (
    <section id="contacto" className="contacto hide  ">
      <div className="container" data-aos="zoom-in">

        <div className="bienvenida__texto  ">
          <form id="formulario" className="formulario">
            <h2>Contact Us</h2>
            <div className="box-input">
              <input name="nombre" id="nombre" type="text" required placeholder="Name" />
            </div>
            <div className="box-input">
              <input name="apellidos" id="apellidos" type="text" required placeholder="Surname" />
            </div>
            <div className="box-input">
              <input name="email" id="email" type="email" required placeholder="Mail" />
            </div>
            <div className="box-input">
              <textarea name="comentarios" id="comentarios" rows={2} placeholder="Describe your query here" defaultValue={""} />
            </div>
            <button id="submit" type="submit" className="boton"><i className="fab fa-whatsapp" /> Sent</button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default ContactPage