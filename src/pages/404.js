import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Capterra from '../components/capterra';
import Card from '../components/card';
import Footer from '../components/footer';
import '../styles/index.scss';

export default () => (
    <div>
        <Header />
        <div className="row justify-content-center">
            <div className="col-md-8 mx-auto text-center">
                <p className="display-4 text-center">
                    That's not a page. But scroll down for more info.
                </p>
            </div>
        </div>
        <Hero />
        <div className="my-5">
            <Capterra />
        </div>
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 p-3">
                    <Card
                        preHeading="Use Our"
                        heading="Practice Management"
                        description="PCIS' PM solution is designed to get your physicians paid faster. With powerful reporting, simple integrations, and an intuitive workflow, it will help you decrease your days in A/R."
                        link="/practice-management"
                        buttonText="How It Works"
                        btnColor="#2196f3"
                    />
                </div>
                <div className="col-12 col-md-6 p-3">
                    <Card
                        preHeading="Use Our"
                        heading="Electronic Health Records"
                        description="PCIS' EHR software enables you to save time, cut out excess paperwork and keep each of your physicians happy. PCIS' software can be customized to specifically meet your clinic’s needs."
                        link="/electronic-health-records"
                        buttonText="How It Works"
                        btnColor="#00bcd4"
                    />
                </div>
            </div>
        </div>
        <div className="my-5">
            <Footer />
        </div>
    </div>
);
