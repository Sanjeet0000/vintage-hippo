import ChooseCard from "./WhyChooseCard";

export default function WhyChooseCards() {
  return (
    <div className="flex pb-52 justify-around flex-wrap">
      <ChooseCard
        logo="/assets/WeAreUniqueLogo.png"
        title="We're unique"
        borderColor="border-secondary"
        textColor="text-secondary"
        description=" We believe in support, customer service and being available to our
  clients 24/7. We answer our phones, emails and texts. We’re unique
  that way! We provide our clients with the best service and care."
      />
      <ChooseCard
        logo="/assets/WeAreTraditionalLogo.png"
        title="We're traditional"
        borderColor="border-green-500"
        textColor="text-green-500"
        description="Our values are traditional, but our approach is not. Our clients are people we want to work with. We enjoy the work we do, the people and businesses we do it with and for. Get in touch…you’ll see the difference.."
      />
      <ChooseCard
        logo="/assets/WeAreUniqueLogo.png"
        title="We're special"
        borderColor="border-red-600"
        textColor="text-red-600"
        description="We enjoy what we do and who we do it with! Our passion is very apparent. Get in touch…you’ll see the difference."
      />
    </div>
  );
}
