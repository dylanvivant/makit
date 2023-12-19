'use client'
import React, { useState, useEffect } from 'react';
import { kaushan } from '@/app/fonts/kaushan/kaushan.js'
import { kelson, kelson_regular, kelson_meduim, kelson_light } from '@/app/fonts/kelson/kelson';
import './style.css'
import '../../page.min.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);


    const validateForm = () => {
        let tempErrors = {};
        let formIsValid = true;

        if (!formData.name) {
            formIsValid = false;
            tempErrors["name"] = "Le nom est requis.";
        }
        if (!formData.email) {
            formIsValid = false;
            tempErrors["email"] = "L'email est requis.";
        }
        if (!formData.subject) {
            formIsValid = false;
            tempErrors["subject"] = "L'objet est requis.";
        }
        if (!formData.message) {
            formIsValid = false;
            tempErrors["message"] = "La description est requise.";
        }

        setErrors(tempErrors);
        return formIsValid;
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Gérer l'ajout/suppression de la classe 'filled'
        if (value.length > 0) {
            e.target.classList.add('filled');
        } else {
            e.target.classList.remove('filled');
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setFormStatus('Veuillez remplir tous les champs.');
            return;
        }

        const formspreeURL = 'https://formspree.io/f/mleqrbeb';

        try {
            const response = await fetch(formspreeURL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                setIsSubmit(true);
                setFormStatus('Message envoyé avec succès.');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setFormStatus('Une erreur est survenue. Veuillez réessayer.');
            }
        } catch (error) {
            setFormStatus('Une erreur de réseau est survenue. Veuillez réessayer.');
            console.error('Erreur lors de l\'envoi du formulaire', error);
        }
    };

    const [isSubmit, setIsSubmit] = useState(false);

    const submitHandleEnter = () => {
        setIsSubmit(true);
    }

    const submitHandleLeave = () => {
        setIsSubmit(false);
    }





    return (

        <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
                <input className={kelson_light.className} type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                <label className={kelson_regular.className} htmlFor="name">NOM PRÉNOM</label>

                {errors.name && <div className="error"><p className={kelson_light.className}>{errors.name}</p></div>}
            </div>

            <div className="input-group">

                <input className={kelson_light.className} type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                <label className={kelson_regular.className} htmlFor="email">MAIL</label>


                {errors.email && <div className="error"><p className={kelson_light.className}>{errors.email}</p></div>}
            </div>


            <div className="input-group">
                <input className={kelson_light.className} type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} />

                <label className={kelson_regular.className} htmlFor="subject">OBJET</label>
                {errors.subject && <div className="error"><p className={kelson_light.className}>{errors.subject}</p>
                </div>}
            </div>

            <div className="input-group">
                <textarea className={kelson_light.className} id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>

                <label id='description' className={kelson_regular.className} htmlFor="message">DESCRIPTION</label>
                {errors.message && <div className="error"><p className={kelson_light.className}>{errors.message}</p></div>}
            </div>
            <div className="submit">
                <div className={`submit-btn ${isSubmitted ? 'submitted' : ''}`} onMouseEnter={submitHandleEnter} onMouseLeave={submitHandleLeave}>
                    <button className={isSubmit ? kelson.className : kelson_meduim.className} type="submit">ENVOYER</button>

                </div>


            </div>
            {formStatus && <div className={`form-status ${isSubmitted ? 'submitted' : ''}`}><p className={kelson_meduim.className}>{formStatus}</p></div>}
        </form>
    );
};

export default ContactForm;
