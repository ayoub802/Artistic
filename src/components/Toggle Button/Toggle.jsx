import { cva } from 'class-variance-authority';
import React from 'react'

const ToggleVariants = cva(
    /* RADIO base style */
    "block",
    {
        variants: {
            /* TOOGLE colors */
            intent: {
                primary:
                    "bg-white border border-1 border-black_color_900 outline-none peer peer-checked:after:bg-white peer-checked:after:translate-x-full after:content-[''] after:absolute after:bg-black_color_900  after:rounded-full after:transition-all peer-checked:bg-black_color_900",
            },
  
            /* TOOGLE sizes */
            size: {
                large: [ "w-[66px]", 'h-[32px]', 'after:top-1', 'after:left-[5px]', 'peer-checked:after:left-[12px]', 'peer-checked:after:top-1','after:h-[24px]', 'after:w-[24px]'],
                medium: ["w-[50px]", 'h-[24px]', 'after:top-[3px]', 'after:left-[5px]', 'peer-checked:after:left-[10px]', 'peer-checked:after:top-[3px]','after:h-[18px]', 'after:w-[18px]'],
                small: [ "w-[38px]", 'h-[18px]', 'after:top-[2px]', 'after:left-[3px]', 'peer-checked:after:left-[7px]', 'peer-checked:after:top-[2px]','after:h-[13.5px]', 'after:w-[13.5px]'],
            },  
  
            /* TOOGLE roundness */
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
            roundness: "round",

        },
    }
  );
  
  export default function Toogle({ intent, size, roundness }) {
    return (
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"/>
            <div className={ToggleVariants({ intent, size, roundness })}></div>
      </label>
    )
  }