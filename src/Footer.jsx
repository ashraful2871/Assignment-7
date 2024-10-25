const Footer = () => {
  return (
    <div className="bg-[#060919] p-10 text-[#ffffffa9] border-2 border-white">
      <img
        className="ml-[50%] mt-72"
        src="../src/assets/assets/logo-footer.png"
        alt=""
      />
      <footer className="footer mb-10">
        <nav>
          <h6 className="footer-title text-white">About us</h6>
          <p>
            We are a passionate team <br />
            dedicated to providing the best <br />
            services to our customers.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <form>
          <h6 className="footer-title text-white">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text mb-2 text-[#ffffffa9]">
                Subscribe to our newsletter for the <br />
                latest updates.
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <hr />
      <aside className="text-center mt-10">
        <p>@2024 Your Company All Rights Reserved.</p>
      </aside>
    </div>
  );
};

export default Footer;
