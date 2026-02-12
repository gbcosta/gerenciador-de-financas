import { useState } from "react";
import { TransactionCategory } from "../utils/types";

const TransactionType = () => {
  const [isExpense, setIsExpensive] = useState(true);
  return (
    <div className="flex rounded-lg bg-white/5 ring-4 ring-white/5 ">
      <button
        type="button"
        className={`${isExpense ? "bg-white/10 text-zinc-200" : "text-zinc-400"} w-full p-1 rounded-lg 
                    hover:text-zinc-200 transition delay-100 cursor-pointer`}
        onClick={() => {
          setIsExpensive(true);
        }}
      >
        Expense
      </button>
      <button
        type="button"
        className={`${!isExpense ? "bg-white/10 text-zinc-200" : "text-zinc-400"} w-full p-1 rounded-lg 
                    hover:text-zinc-200 transition delay-100 cursor-pointer`}
        onClick={() => {
          setIsExpensive(false);
        }}
      >
        Income
      </button>
    </div>
  );
};

const TransactionInput = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder?: string;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-zinc-400 text-sm">{label.toUpperCase()}</label>
      <div
        className="flex w-full bg-white/5 border border-white/10 has-focus:ring-2 
                has-focus:ring-blue-500/40 has-focus:border-blue-500/40 rounded-lg
                items-center h-11 p-2"
      >
        <input
          type={type}
          placeholder={placeholder}
          className="flex rounded-lg w-full text-zinc-200 outline-none
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                    [&::-webkit-inner-spin-button]:appearance-none"
        />
        {type == "number" ? (
          <div className="flex flex-col text-white cursor-pointer text-[0.5rem] gap-1">
            <div className="px-1">▲</div>
            <div className="px-1">▼</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const SelectCategory = () => {
  return (
    <div className="flex flex-col">
      <label className="text-zinc-400">CATEGORY</label>
      <div
        className="flex w-full bg-white/5 border border-white/10 has-focus:ring-2 
                has-focus:ring-blue-500/40 has-focus:border-blue-500/40 rounded-lg px-2
                items-center h-11"
      >
        <select
          value={"Other"}
          className="w-full text-zinc-200 p-2 appearance-none"
        >
          {Object.values(TransactionCategory).map((e) => {
            return (
              <option
                key={e}
                value={e}
                className="text-zinc-400 bg-[#030712] hover:bg-red-500"
              >
                {e}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

const Transaction = () => {
  return (
    <div className="bg-white/5 border-2 border-white/5 rounded-2xl p-4 flex flex-col gap-4">
      <h3 className="text-xl font-bold text-white">New Transaction</h3>
      <form>
        <div className="flex flex-col gap-4">
          <TransactionType />
          <TransactionInput
            label="description"
            type="text"
            placeholder="e.g. Coffe"
          />
          <TransactionInput label="amount" type="number" placeholder="0.0" />
          <SelectCategory />
        </div>
      </form>
    </div>
  );
};

export default Transaction;
