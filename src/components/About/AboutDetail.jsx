const AboutDetail = () => {
    return (
        <>
            <div className='container py-16 pb-5'>
                <div className='row'>
                    <div className='col-md-8 mt-3'>
                        <h1 className='mt-5 text-dark display-6 pb-4'>
                            <span className='text-primary'>Matthew</span> Imanuel
                        </h1>
                        <p className='col-md-8 fs-5 text-dark'>
                        As an Information Systems student at Pembangunan Jaya University, I am an individual who is a planner and open-minded in the learning process. I want to dive more into the field of information systems and the world of programming while maintaining good performance.
                        </p>
                    </div>
                    <div className='col-md-4 d-flex align-items-center justify-content-center'>
                        <img
                            src='/images/pictures/foto style.jpeg'
                            alt='Matthew'
                            width='630'
                            height='450'
                            loading='lazy'
                            class='d-block mx-lg-auto img-fluid'></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutDetail;
