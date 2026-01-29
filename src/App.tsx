import Header from "./components/header";
import Card from "./components/card";
import { BsCreditCardFill } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Transaction from "./components/transaction";

function App() {
  return (
    <div className=" flex justify-center bg-[#030712]">
      <div className="bg-[#030712] min-h-screen w-5xl flex flex-col gap-4">
        <Header />
        <div className="flex gap-4 w-full">
          <Card
            bgColor="bg-blue-500/20"
            blurColor="bg-blue-500"
            icon={<BsCreditCardFill />}
          />
          <Card
            bgColor="bg-emerald-500/20"
            blurColor="bg-emerald-500"
            icon={<FaPlus />}
          />
          <Card
            bgColor="bg-rose-500/20"
            blurColor="bg-rose-500"
            icon={<FaMinus />}
          />
        </div>
        <Transaction />
      </div>
    </div>
  );
}

export default App;
