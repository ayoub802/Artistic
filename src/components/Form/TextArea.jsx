import React from 'react'
import { cva } from "class-variance-authority";

const TextAreaVariants = cva(
  /* button base style */
  "flex items-center px-4 font-space_gortesk gap-2 mt-2 font-regular resize-none",
  {
      variants: {
          /* button colors */
          intent: {
              primary: "bg-white border border-1 border-[#CBCBCB] text-black_color_900 ",
              secondary: "bg-transparent appearance-none border-b pt-2 border-[#CBCBCB] text-black_color_900 focus:outline-none focus:border-black",
          },

          /* button sizes */
          size: {
              Xlarge: ["w-[450px]", 'h-[250px]'],
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

export default function TextArea({ intent, size, roundness, children, label}) {
  return (
    <form action='' >
       <div>
          <label className="font-Inter font-semibold text-text5 text-[#3E3E59] leading-7" for="formlabel">
            {label}
          </label>
          <textarea className={TextAreaVariants({ intent, size, roundness })} placeholder={children} rows={30} cols={30} id='formlabel'>
          </textarea>
        </div>
    </form>
  )
}