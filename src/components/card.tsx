import type { ReactNode } from "react";

const Card = ({
  bgColor,
  icon,
  blurColor,
}: {
  bgColor: string;
  icon: ReactNode;
  blurColor: string;
}) => {
  return (
    <div
      className="flex flex-col bg-white/5 rounded-2xl border-2 border-zinc-800
      p-4 gap-6 overflow-hidden w-full"
    >
      <div className="flex items-center w-full relative">
        <h2 className="text-zinc-400 grow text-sm">Total Balance</h2>
        <div
          className={`absolute h-12 w-12 ${blurColor} blur-3xl -right-6 -top-10`}
        />
        <div className={`p-2 ${bgColor} rounded-lg text-white text-lg`}>
          {icon}
        </div>
      </div>
      <span className="text-white text-xl font-bold">{`$0`}</span>
    </div>
  );
};

export default Card;
