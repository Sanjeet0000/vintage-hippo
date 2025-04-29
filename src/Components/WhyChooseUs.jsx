import WhyChooseCards from "./WhyChooseCards";

export default function WhyChooseUs() {
  return (
    <section className="bg-[url('/assets/WhyBackground.png')] bg-cover flex flex-col w-full sm:px-72 px-0">
      <div className="flex flex-col w-full">
        <img src="/assets/WhyText.png" alt="Why text" className="w-32 h-36" />

        <div className="pt-6 flex ">
          <img
            src="/assets/ChooseUsLogo.png"
            alt="Choose Us Logo"
            className="w-20 h-20 ml-1"
          />
          <h2 className="text-6xl font-abril font-extrabold pl-2.5 pt-2 text-primary align-items-center">
            Choose us
            <span className="font-cookie text-gray-400">
              ...Let's work together
            </span>
          </h2>
        </div>
        <div className="flex mt-10 sm:gap-4">
          <div className="w-1/2 pl-4">
            <p className="font-abril ">
              <span className="font-bold text-2xl">vintage </span>adj_
            </p>
            <p className="font-arial">
              of old, recognized and enduring interest, importance or quality:
              classic
            </p>
          </div>
          <div className="w-1/2 pl-4 ">
            <p className="font-abril">
              <span className="font-bold text-2xl"> hippo </span>n_
            </p>
            <p className="font-arial">
              meaning versatile, strong, friendly, assertive, caring, quirky and
              supportive
            </p>
          </div>
        </div>
      </div>

      <WhyChooseCards />
    </section>
  );
}
