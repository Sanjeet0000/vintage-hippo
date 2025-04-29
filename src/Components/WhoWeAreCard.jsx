export default function WhoWeAreCard({
  logo,
  titlePart1,
  titlePart2,
  description,
  textColor,
}) {
  return (
    <div className="flex flex-col items-center mt-10 max-w-[360px]  bg-white shadow-lg py-8 px-4">
      <div className={`flex items-center justify-center h-72`}>
        <img src={`${logo}`} alt={`${titlePart1} logo`} />
      </div>
      <span className="bg-gray-400 w-100 max-w-[360px] h-[1px]"></span>
      <h2 className="inline-block font-cookie text-[34px] mt-6 text-center ">
        {titlePart1}
        <span className={`font-abril pl-2 mt-1 font-extrabold ${textColor}`}>
          {titlePart2}
        </span>
      </h2>

      <p className="pt-4 px-6 text-center text-gray-600">{description}</p>
    </div>
  );
}
