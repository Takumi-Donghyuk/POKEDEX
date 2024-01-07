import { useDispatch } from "react-redux";
import { setTreinerName } from "../store/slice/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTreinerName(e.target.trainerName.value));
    navigate("/pokedex");
  };
  return (
    <section className="grid grid-rows-[1fr_auto] h-screen overflow-hidden gap-3 ">
      <div className="text-center justify-self-center self-center ">
        <main>
          <header className="p-11 flex justify-center items-center">
            <img src="/images/pokedex.png" className="w-50" alt="" />
          </header>
          <h1 className="text-green-700 text-[50px] font-semibold font-mono">
            ¡(Hello, 안녕하세요, こんにちは) coach !
          </h1>
          <p className="font-semibold font-serif text-orange-600 ">ESCRIBE TU NOMBRE</p>
          <form
            className="bg-white flex  justify-center h-[570]items-center p-6"
            onSubmit={handleSubmit}
          >
            <input
              name="trainerName"
              placeholder="your name.."
              type="text"
              autoComplete="off"
              required
              className="border border-purple-500 outline-none rounded-md p-3"
            />
            <button
              className="bg-purple-500 p-3 text-white font-semibold"
              type="submit"
            >
              Star
            </button>
          </form>
        </main>
      </div>
      <Footer />
    </section>
  );
};
export default Home;
