function Footer() {
    return (
        <div className="footer container">
            <div>
                <a href="/" className="title mr-1">SWYM TASK</a>
                <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div>
                <p className="title">Specisl Thanks to</p>
                <p className="li">React</p>
                <p className="li">Firebase</p>
                <p className="li">Github</p>
            </div>
            <div>
                <p className="title">Find me on</p>
                <a href="https://github.com/harshjaiswal556" className="li">Github</a>
                <a href="https://www.linkedin.com/in/harsh-shah-jaiswal/" className="li">LinkedIn</a>
                <a href="https://www.instagram.com/harsh_jaiswal.3110/" className="li">Instagram</a>
            </div>
        </div>
    )
}

export default Footer