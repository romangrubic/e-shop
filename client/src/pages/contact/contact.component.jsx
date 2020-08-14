import React from 'react';
import './contact.styles.scss';

const Contact = () => {
    return (
        <div className='contact-page'>
            <h1>Hello!</h1>
            <h2>
                My name is Roman Grubic and i'm developer of this
                web-application.
            </h2>
            <p className='description'>
                I enjoy working with ReactJS and Redux and i'm currently
                learning MERN stack. I love to develop web-sites from
                presentational apps (portfolio) to fully functional e-commerce
                shop (like this one!). And if you are looking for a web-site for
                yourself or for your company, don't hesitate to contact me!
                <br /> <br /> I named this shop after Star Trek: Deep Space Nine
                character Garak, who in the show has a tailor shop named
                "Garak's Clothiers".
            </p>
            <hr />
            <h3>
                Github: {''}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/romangrubic'
                >
                    https://github.com/romangrubic
                </a>
            </h3>
            <h3>
                LinkedIn: {''}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/roman-grubic/'
                >
                    https://www.linkedin.com/in/roman-grubic/
                </a>
            </h3>
            <h3>E-mail: grubic.roman@gmail.com</h3>
        </div>
    );
};

export default Contact;
