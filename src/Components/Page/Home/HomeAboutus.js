import React from 'react'
import Lottie from "lottie-react";
import work from "../../../Animation/work.json";
import workplace from "../../../Animation/wrokplace.json";

function HomeAboutus() {
    return (
        <>
            <div className="container-fluid my-2">
                <div className="row justify-content-center">
                    <div className="col-xl-6 Content-center">
                        <div className='p-3 px-2 py-3'>
                            <p className='fs-4 fw-bold'><span className='color' >WaveMantra Web</span> - is an all-in-one workspace for Agencies and Digital Professionals that takes your client collaboration to another level</p>
                            <p>Save your time by creating an all-together collab & info hub in SoftInfo. Deliver an exceptional experience to your clients through all stages: from lead generation to project completion</p>
                        </div>
                    </div>
                    <div className="col-xl-4 Content-center">
                        <div className='p-5'>
                            <Lottie animationData={workplace} loop={true} />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center row-reverse">
                    <div className="col-xl-7 Content-center">
                        <div className='px-2 py-3'>
                            <p className='fs-4 fw-bold'>Tasks and <span className='color'>Workflows</span></p>
                            <p>Do not overwhelm yourself and your clients with complex project management tools. SoftInfo tasks are built to be effective and easy to use.</p>
                            <p>Do not overwhelm yourself and your clients with complex project management tools. SoftInfo tasks are built to be effective and easy to use.</p>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className='p-3'>
                            <Lottie animationData={work} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAboutus