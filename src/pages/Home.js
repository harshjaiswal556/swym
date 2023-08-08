import { Link } from 'react-router-dom'

import banner from "../assets/banner.svg"
import features from "../assets/features.svg"

function Home() {
    return <div>
        <div className="section">
            <img src={banner} alt="banner" />
            <div className="content">
                <h1>Create, Share <span>Events Forms</span> easily</h1>
                <p>This platform lets you create forms super simply that captures questions from participants
                    for a live event. This form generate a unique URL for each event where
                    participants can submit their questions.</p>
                <Link to="/create" className="btn">get started</Link>
            </div>
        </div>
        <div className="section">
            <div className="content">
                <h1>Why choose us</h1>
                <p>
                    <span className="li">Easy to use</span>
                    <span className="li">100% free</span>
                    <span className="li">Share with friends</span>
                    <span className="li">No login required for submitting form</span>
                    <span className="li">Supports media file</span>
                </p>
            </div>
            <img src={features} alt="features" />
        </div>
    </div>
}

export default Home