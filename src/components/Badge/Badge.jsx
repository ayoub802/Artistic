import { cva } from 'class-variance-authority';
import React from 'react'

const BadgeVariants = cva(
    /* button base style */
    "flex items-center text-center justify-center font-space_gortesk font-medium gap-2 uppercase",
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
                large: ["text-text5", "font-semibold", "py-1", "px-4", "w-[117px]", 'h-[34px]'],
                medium: ["text-text6", "font-semibold", "py-1", "px-3.5", "w-[104px]", 'h-[30px]'],
                small: ["text-text7", "py-0.5", "px-2.5", "w-[87px]", 'h-[24px]'],
  
                badge_sm: ["w-[72px]", "h-[72px]"]
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
  
  export default function Badge({ intent, size, roundness, children }) {
    return (
        <span className={BadgeVariants({ intent, size, roundness })}>{children}</span>
    )
  }
