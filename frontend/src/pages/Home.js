import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";

export default function Home() {
  return (
    <div className="bg-[#DAE0E6] dark:bg-[#030303] h-screen w-screen">
      <Navbar />
      <div className="w-full flex justify-center mt-10 z-0">
        <Card upVotes={1234} subReddit={"AskReddit"} user={"Shahab"} text={"So what is your number #1 excuse for being a dissapointment that you tell your parents, mine is I am the brother of sajawal hassan"} />
      </div>
    </div>
  );
}