import { cva } from 'class-variance-authority';
import React from 'react'

const RadioVariants = cva(
    /* RADIO base style */
    "appearance-none",
    {
        variants: {
            /* RADIO colors */
            intent: {
                primary:
                    "checked:bg-black_color_900 outline outline-1 outline-black_color_900 border border-[3px] border-white",
            },
  
            /* RADIO sizes */
            size: {
                large: [ "w-[32px]", 'h-[32px]'],
                medium: ["w-[24px]", 'h-[24px]'],
                small: [ "w-[18px]", 'h-[18px]'],
            },  
  
            /* RADIO roundness */
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
  
  export default function Radio({ intent, size, roundness}) {
    return (
        <input type='radio' className={RadioVariants({ intent, size, roundness })} />
    )
  }