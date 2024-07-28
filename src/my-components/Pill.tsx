import React from "react";

const Pill = ({ name }: { name: string }) => {
  return (
    <div className="text-sm bg-slate-700 dark:bg-slate-50 px-2.5 py-0.5 text-white dark:text-black rounded-md">
      {name}
    </div>
  );
};

export default Pill;
