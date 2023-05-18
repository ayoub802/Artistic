import React from 'react'
import { cva } from "class-variance-authority";

const ButtonVariants = cva(
  /* button base style */
  "flex items-center text-center justify-center font-space_gortesk font-medium gap-2",
  {
      variants: {
          /* button colors */
          intent: {
              primary:
                  "bg-black_color_900 text-white",
              secondary:
                  "bg-white text-black_color_900",
              outline:
                  "bg-transparent border border-black_color_900 text-black_color_900",
          },

          /* button sizes */
          size: {
              Xlarge: ["text-text1", "p-xlg", "w-[335px]", 'h-[76px]'],
              large: ["text-text2", "p-lg", "w-[282px]", 'h-[72px]'],
              medium: ["text-text4", "p-md", "w-[204px]", 'h-[52px]'],
              small: ["text-text5", "p-sm", "w-[181px]", 'h-[46px]'],
              xsmall: ["text-text6", "p-xsm", "w-[158px]", 'h-[40px]'],

              button_sm: ["w-[72px]", "h-[72px]"]
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

export default function Button({ intent, size, roundness, children }) {
  return (
      <button className={ButtonVariants({ intent, size, roundness })}>{children}</button>
  )
}