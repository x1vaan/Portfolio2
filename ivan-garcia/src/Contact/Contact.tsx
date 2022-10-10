import React from "react";
import css from './Contact.module.css'

export default function Contact (): JSX.Element {
    return (
        <div id="contactme" className={css.contactme}>
            <p className={css.contact}>Contact</p>
            <p className={css.getintouch}>Get In Touch</p>
            <p className={css.description}>If you have any new opportunities for me, or you just have a question, please communicate with me, here is my inbox :).</p>
            <a href="mailto:ivanx467@gmail.com" className={css.email}>Contact Me</a>

            <p className={css.ivan}>Built by Sergio Ivan Garcia</p>
        </div>
    )
}