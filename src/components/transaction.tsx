import { useState } from "react";

const Transaction = () => {
  const [isExpense, setIsExpensive] = useState(true);
  return (
    <div className="bg-white/5 border-2 border-white/5 rounded-2xl p-4 flex flex-col gap-4">
      <h3 className="text-xl font-bold text-white">Transaction</h3>
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex rounded-lg bg-white/5">
            <button
              type="button"
              className={`${isExpense ? "bg-white/10 text-white" : "text-zinc-400"} w-full p-2 rounded-lg`}
              onClick={() => {
                setIsExpensive(true);
              }}
            >
              Expense
            </button>
            <button
              type="button"
              className={`${!isExpense ? "bg-white/10 text-white" : "text-zinc-400"} w-full p-2 rounded-lg`}
              onClick={() => {
                setIsExpensive(false);
              }}
            >
              Income
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Transaction;
