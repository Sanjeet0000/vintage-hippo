import GoldenRule from "./GoldenRule.jsx";
import WhoWeAreCards from "./WhoWeAreCards.jsx";
export default function WhoWeAre() {
  return (
    <section className="bg-[url('/assets/WhoBackground.png')] bg-cover flex flex-col w-full px-72">
      <div className="flex flex-col w-full">
        <GoldenRule />

        <img src="/assets/WhoText.png" alt="Who text" className="w-32 h-36" />

        <div className="pt-6 flex ">
          <img
            src="/assets/WeAreLogo.png"
            alt="We Are Logo"
            className="w-20 h-20 ml-1"
          />
          <h2 className="text-6xl font-abril font-extrabold pl-2.5 pt-2 text-primary align-items-center">
            We Are
            <span className="font-cookie text-gray-400 ml-2">
              Vintage Hippo Media
            </span>
          </h2>
        </div>

        <WhoWeAreCards />
      </div>
    </section>
  );
}
