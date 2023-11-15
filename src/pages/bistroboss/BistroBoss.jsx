import img from "../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <img src={img} alt="" className="object-contain w-full h-full" />
      <div className="absolute bg-white w-full md:w-[80%] lg:w-[60%] text-black text-center p-8">
        <div>
          <h1 className="text-4xl uppercase">Bistro Boss</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto <br /> ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
