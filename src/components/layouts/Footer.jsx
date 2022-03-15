
function Footer() {
    const footerYear = new Date().getFullYear();
  return (
    <div className="footer p-10  text-primary-content footer-center">
        <p className="flex">Copyright<i className="fa fa-copyrigh bg-red-700" aria-hidden="true"></i>{footerYear} All rights reserved</p>
    </div>
  )
}

export default Footer