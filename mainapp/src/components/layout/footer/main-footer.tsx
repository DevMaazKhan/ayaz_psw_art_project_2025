import FooterNewsLetter from "./footer-news-letter";

const MainFooter = () => {
  return (
    <section className="bg-black pt-18 pb-10">
      <div className="flex text-white max-w-360 mx-auto px-5">
        <div className="px-4">
          <h2 className="mb-6 font-bold uppercase text-[26px]">Location</h2>
          <div className="mb-6 font-[montserrat] font-medium text-[16px]">
            <p>BANDAH ALI</p>
            <p>Hyderabad, Latifabad</p>
            <p>Pakistan</p>
          </div>
          <div className="font-[montserrat] font-medium text-[16px]">
            <h6>+92 314-2831275</h6>
            <h6>bandahali@gmail.com</h6>
          </div>
        </div>
        <div className="px-4 w-3/5 ml-auto">
          <h2 className="text-5xl font-bold mb-6">
            Stay informed on new exhibitions and special announcements.
          </h2>
          <FooterNewsLetter />
        </div>
      </div>
      <div className="pt-14 text-white max-w-360 mx-auto px-5">
        <div className="px-4 flex mb-6">
          <p className="mr-6 font-[montserrat] text-[14px] font-normal">© 2025 Bandah Ali</p>
          <p className="mr-6 font-[montserrat] text-[14px] font-normal">Policy</p>
          <p className="mr-6 font-[montserrat] text-[14px] font-normal">Accessibility</p>
        </div>
      </div>
    </section>
  );
};

export default MainFooter;
