const NewsLetter = () => {
  return (
    <div className="container mx-auto p-5 bg-[#dad9d92a] rounded-3xl mb-24 border-2 border-white">
      <div
        className="px-48 py-20 bg-img "
        style={{
          backgroundImage: "url(https://i.ibb.co.com/wrG4jsb/Frame-34.png)",
          backgroundSize: "cover",
          borderRadius: "25px",
        }}
      >
        <div className="text-center space-y-5">
          <h2 className="font-bold text-3xl ">Subscribe to our Newsletter</h2>
          <p>Get the latest updates and news right in your inbox!</p>
          <div className="join">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
