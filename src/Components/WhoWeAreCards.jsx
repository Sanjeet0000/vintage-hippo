import WhoWeAreCard from "./WhoWeAreCard";

export default function WhoWeAreCards() {
  return (
    <div className="flex pb-52 justify-around flex-wrap ">
      <WhoWeAreCard
        logo="/assets/DedicatedPeopleLogo.png"
        titlePart1="We are a group of..."
        titlePart2="dedicated, creative people"
        textColor="text-secondary"
        description="We love print. We love graphics and design. We love our team. Come check us out."
      />
      <WhoWeAreCard
        logo="/assets/BreadAndButterLogo.png"
        titlePart1="Our"
        titlePart2="bread & butter"
        textColor="text-green-500"
        description="Trusted long lasting relationships are the b & b of VHM. We value & build relationships with our clients, vendors, friends, family and each other. It is important for a healthy & happy work environment."
      />
      <WhoWeAreCard
        logo="/assets/LetsTalkLogo.png"
        titlePart1="Got an idea?"
        titlePart2="Let's talk"
        textColor="text-red-600"
        description="We know that listening is an invaluable skill. We like to listen. Run your ideas by us and we’ll give you our honest opinion. Call, email or text."
      />
    </div>
  );
}
