import { useState } from "react";
import {
  PiCaretLeftLight,
  PiCaretRightLight,
  PiCreditCardLight,
  PiDresserLight,
  PiGearLight,
  PiHouseLight,
  PiSignOutLight,
} from "react-icons/pi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`${
        isOpen ? "w-[80px]" : "w-[280px]"
      } shadow-md h-[90.5vh] flex flex-col justify-between relative`}
    >
      <div className="absolute bottom-20 -right-3.5 bg-white">
        {isOpen ? (
          <button
            className="rounded-full p-1 shadow-md"
            onClick={() => setIsOpen(false)}
          >
            <PiCaretRightLight className="w-5 h-5" />
          </button>
        ) : (
          <button
            className="rounded-full p-1 shadow-md"
            onClick={() => setIsOpen(true)}
          >
            <PiCaretLeftLight className="w-5 h-5" />
          </button>
        )}
      </div>
      <div className="w-full flex flex-col gap-2 mt-4">
        <button
          className={`py-4 w-full flex hover:bg-violet-200 ${
            !isOpen ? "" : "justify-center"
          }`}
        >
          <div className={`flex gap-4 ${!isOpen ? "ml-12" : "ml-0"}`}>
            <PiHouseLight className="w-6 h-6" />
            <span className={`${!isOpen ? "block" : "hidden"}`}>Dashboard</span>
          </div>
        </button>
        <button
          className={`py-4 w-full flex hover:bg-violet-200 ${
            !isOpen ? "" : "justify-center"
          }`}
        >
          <div className={`flex gap-4 ${!isOpen ? "ml-12" : "ml-0"}`}>
            <PiCreditCardLight className="w-6 h-6" />
            <span className={`${!isOpen ? "block" : "hidden"}`}>
              Expense Tracker
            </span>
          </div>
        </button>
        <button
          className={`py-4 w-full flex hover:bg-violet-200 ${
            !isOpen ? "" : "justify-center"
          }`}
        >
          <div className={`flex gap-4 ${!isOpen ? "ml-12" : "ml-0"}`}>
            <PiDresserLight className="w-6 h-6" />
            <span className={`${!isOpen ? "block" : "hidden"}`}>
              Monthly Budget
            </span>
          </div>
        </button>
        <button
          className={`py-4 w-full flex hover:bg-violet-200 ${
            !isOpen ? "" : "justify-center"
          }`}
        >
          <div className={`flex gap-4 ${!isOpen ? "ml-12" : "ml-0"}`}>
            <PiGearLight className="w-6 h-6" />
            <span className={`${!isOpen ? "block" : "hidden"}`}>Settings</span>
          </div>
        </button>
      </div>
      <button
        className={`py-4 w-full flex hover:cursor-not-allowed mb-4 ${
          !isOpen ? "" : "justify-center"
        }`}
      >
        <div
          className={`flex gap-4 text-slate-400 ${!isOpen ? "ml-12" : "ml-0"}`}
        >
          <PiSignOutLight className="w-6 h-6" />
          <span className={`${!isOpen ? "block" : "hidden"}`}>Sign Out</span>
        </div>
      </button>
    </div>
  );
}
