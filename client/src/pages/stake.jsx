import { Navbar, Footer, Stake } from "../components";

const send = () => (
  <div className="w-full bg-black-100">
    <Navbar />
    <div className="text-4xl text-center text-white font-bold mt-10 mb-20">
      <h1> Send Fund Page</h1>
    </div>
    <Stake />

    <Footer />
  </div>
);

export default send;
