import React from 'react'
import { cva } from "class-variance-authority";

const FormVariants = cva(
  /* button base style */
  "flex items-center px-4 font-space_gortesk gap-2 mt-2 font-regular",
  {
      variants: {
          /* button colors */
          intent: {
              primary:
                  "bg-white border border-1 border-[#CBCBCB] text-black_color_900  !group-focus:bg-black",
              secondary: "bg-transparent appearance-none border-b !px-0 border-[#CBCBCB] text-black_color_900",
          },

          /* button sizes */
          size: {
              Xlarge: ["w-[450px]", 'h-[52px]'],

          },

          /* button roundness */
          roundness: {
              square: "rounded-none",
              round: "rounded-md",
              pill: "rounded-full",
          },
      },

      // defaults
      defaultVariants: {
          intent: "primary",
          size: "medium",
          roundness: "round"
      },
  }
);

export default function Form({ intent, size, roundness, children, IconForm, label, Text }) {
  return (
    <form action='' >
       <div>
          <label className="font-Inter font-semibold text-text5 text-[#3E3E59] leading-7" for="formlabel">
            {label}
          </label>
          <div className={FormVariants({ intent, size, roundness })}>
            <button>
               {IconForm}
            </button>
             <input class="appearance-none bg-transparent w-full border-none outline-none group text-gray-700  leading-tight focus:outline-none" id="formlabel" type="text" placeholder={children} />    
             <button>
               {Text}
             </button>
          </div>
        </div>
    </form>
  )
}