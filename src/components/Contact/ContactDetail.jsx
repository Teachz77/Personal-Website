const ContactDetail = () => {
    return (
        <>
            <div className='container py-16'>
                <div className='row'>
                    <div className='col-md-7 mt-3'>
                        <h1 className='mt-5 text-dark display-6 pb-4'>
                            <span className='text-primary'>My</span> Contact
                        </h1>
                        <p className='col-md-10 fs-5 text-dark'>
                            You can contact me via email or Whatsapp. And
                            actually you can ask me anything about the
                            programming world, I happen to really like
                            discussing and chatting. See you on the other side.
                        </p>
                    </div>
                    <div className='col-md-5 mt-3 d-flex align-items-center justify-content-center'>
                        <div>
                            <div className='mb-2'>
                                <a
                                    href='mailto:matthew.manuels17@gmail.com'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-regular fa-envelope'></i>{" "}
                                    matthew.manuels17@gmail.com{" "}
                                </a>
                            </div>
                            <div className='mb-2'>
                                <a
                                    href='https://wa.me/6285882735427'
                                    target='_blank'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-brands fa-whatsapp'></i>{" "}
                                    (+62) 85881735427{" "}
                                </a>
                            </div>
                            <div className='mb-2'>
                                <a
                                    href='https://www.instagram.com/haloalfii/'
                                    target='_blank'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-brands fa-instagram'></i>{" "}
                                    @matthew.manuels{" "}
                                </a>
                            </div>
                            <div className='mb-2'>
                                <a
                                    href='https://www.linkedin.com/in/matthew-imanuels/'
                                    target='_blank'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-brands fa-linkedin'></i>{" "}
                                    @matthew-imanuels{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactDetail;
