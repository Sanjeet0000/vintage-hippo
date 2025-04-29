export default function WhyChooseCard({
  logo,
  title,
  description,
  borderColor,
  textColor,
}) {
  return (
    <div className="flex flex-col items-center mt-10 max-w-[320px] ">
      <div
        className={`h-60 w-60 rounded-full ${borderColor} border-4 flex items-center justify-center`}
      >
        <img src={`${logo}`} alt={`${title} logo`} />
      </div>
      <h2 className="inline-block font-cookie text-3xl mt-6 after:block after:w-24  after:bg-gray-300 after:h-1 after:mt-2 after:mx-auto">
        Why
        <span className={`font-abril pl-2 mt-1 font-extrabold ${textColor}`}>
          {title}
        </span>
      </h2>
      <p className="pt-4 px-6 text-center text-gray-600">{description}</p>
    </div>
  );
}
