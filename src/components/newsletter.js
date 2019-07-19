import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import PropTypes from 'prop-types';
import addToMailchimp from 'gatsby-plugin-mailchimp';

function Newsletter(props) {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [cookies, setCookie] = useCookies(['pcisnewslettersubscribed']);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (cookies.pcisnewslettersubscribed) {
            // cookie? they done this before
            setSubscribed(true);
            // if error, message get's filled in handleSubmit, don't overwrite
            if (message === '') {
                setMessage('Thank you for subscribing!');
            }
        }
    });

    async function handleSubmit(e) {
        e.preventDefault();
        // send to mailchimp
        const data = await addToMailchimp(email);
        // on success, set subscribed, message, & cookie
        if (data.result === 'success') {
            setSubscribed(true);
            setMessage(data.msg);
            const nextYear = new Date().getFullYear() + 1;
            const date = new Date(`December 31, ${nextYear} 23:59:59`);
            setCookie('pcisnewslettersubscribed', true, {expires: date});
        } else {
            // if not, set errorMessage
            const message = data.msg.includes('already subscribed')
                ? 'You have already subscribed with that email address.'
                : data.msg;
            setErrorMessage(message);
        }
    }
    return (
        <div className={`bg-${props.bg} py-5`}>
            <div className="col-md-6 col-lg-4 mx-auto">
                <h2 className="text-white">Newsletter</h2>
                <p className="text-white">
                    PCIS sends out helpful information regarding practice
                    management, electronic health records management, and
                    helping patients receive the best care available. This
                    information can be very helpful to you. Subscribe to receive
                    updates and newly published articles!
                </p>
                {subscribed && (
                    <div className="bg-light p-5">
                        <h2 className="lead">{message}</h2>
                    </div>
                )}
                {!subscribed && (
                    <form
                        id="newsletter-form"
                        className="bg-light p-5"
                        onSubmit={handleSubmit}
                    >
                        {errorMessage && (
                            <p className="text-danger">{errorMessage}</p>
                        )}
                        <p>My email address is...</p>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                value="GET UPDATES!"
                                className="form-control btn btn-primary"
                            />
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

Newsletter.propTypes = {
    bg: PropTypes.string
};

export default Newsletter;
