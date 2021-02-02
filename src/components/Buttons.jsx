import React, { Component } from 'react';
import { GitHub, LinkedIn, Email } from './../icons'

const DATA = [
    {
        href: "mailto:moulhengborann@gmail.com",
        aria: "Open a pre-addressed email prompt to me that you can fill out",
        icon: <Email />,
        label: "Email",
    },
    {
        href: "https://www.linkedin.com/in/moul-hengborann-35a307115/",
        aria: "Visit my LinkedIn profile to learn more about my education and work experience",
        icon: <LinkedIn />,
        label: "LinkedIn",
    },
    {
        href: "https://github.com/Hengborann-Moul",
        aria: "Visit my GitHub profile to learn more about the projects I have created and contributed to",
        icon: <GitHub />,
        label: "Github",
    }
];

const Button = ({ href, aria, icon, label }) => {
    return (
        <span className='button-container'>
            <a className='button' href={href} target='_blank' aria-label={aria} rel='noopener noreferrer'>
                <div className='icon'>{icon}</div>
                <span className='icon_title'>{label}</span>
            </a>
        </span>
    );
};

class Buttons extends Component {
    render() {
        return (
            <div>
                {DATA.map((props, i) => (
                    <Button {...props} key={i} />
                ))}
            </div>
        );
    }
}

export default Buttons;
