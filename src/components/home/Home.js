import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Banner from '../custom/Banner';
import About from '../views/About';
import Blog from '../views/Blog';
import Campaign from '../views/Campaign';
import DonationProcess from '../views/DonationProcess';
import PhotoGallery from '../views/PhotoGallery';
import SubmitForm from '../views/SubmitForm';
import Volunteers from '../views/Volunteers';

const Home = () => {
    return (
        <div>
            <Banner />
            <DonationProcess />
            <Volunteers />
            <Campaign />
            <About />
            <SubmitForm />
            <PhotoGallery />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;