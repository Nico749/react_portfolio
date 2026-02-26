import React, { useEffect } from 'react';
import { Columns } from 'react-bulma-components';
import '../styles/Contacts.css';
import '../styles/PortfolioContainer.css';
import Pdf from '../Demo_photos/Resume_Pasqualini.pdf';

// removed phone number, linkedin profile, github link and email address
export default function Contacts() {
  // loads the page at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactLinks = [
    {
      label: 'Mail',
      href: 'mailto:',
      target: '_self',
      action: 'mail link click',
      linkLabel: 'mail',
    },
    {
      label: 'Phone',
      href: '',
      target: '_self',
      action: 'phone link click',
      linkLabel: 'phone',
    },
    {
      label: 'GitHub Profile',
      href: ' ',
      target: '_blank',
      action: 'github link click',
      linkLabel: 'github',
    },
    {
      label: 'LinkedIn',
      href: '',
      target: '_blank',
      action: 'linkedin link click',
      linkLabel: 'linkedin',
    },
    {
      label: 'Resume',
      href: Pdf,
      target: '_blank',
      action: 'resume link click',
      linkLabel: 'resume',
    },
  ];

  const trackClick = (action, linkLabel) => {
    window.dataLayer.push({
      event: 'link_click',
      eventProps: {
        link_category: 'contacts',
        link_action: action,
        link_label: linkLabel,
        link_page: window.location.href.split('#').pop(),
      },
    });
  };

  return (
    <div className="hero is-fullheight page-shell contacts-page">
      <div className="contacts-layout">
        <h1 className="page-title lineUp contacts-title">CONTACTS</h1>
        <p className="page-subtitle">Choose any channel below to get in touch.</p>
        <Columns className="is-vcentered is-centered is-multiline contact-list">
        {contactLinks.map((item) => {
          const disabled = item.href.trim() === '';
          return (
            <Columns.Column key={item.label} size={12} className="contact-card-wrap">
              <div className="contact-card">
              <div className="content">
                <h1 className="title is-size-4 center">
                  {disabled ? (
                    <button
                      type="button"
                      className="contact-link is-disabled"
                      onClick={() => trackClick(item.action, item.linkLabel)}
                      aria-disabled="true"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      className="contact-link"
                      href={item.href}
                      target={item.target}
                      rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                      onClick={() => trackClick(item.action, item.linkLabel)}
                    >
                      {item.label}
                    </a>
                  )}
                </h1>
              </div>
              </div>
            </Columns.Column>
          );
        })}
        </Columns>
      </div>
    </div>
  );
}
