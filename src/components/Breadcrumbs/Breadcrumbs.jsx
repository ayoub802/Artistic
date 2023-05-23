import { cva } from 'class-variance-authority';
import React from 'react'

const BreadcrumbsVariants = cva(
    /* Breadcrumbs base style */
    "flex items-center text-center justify-center font-Inter font-medium gap-2",
    {
        variants: {
  
            /* Breadcrumbs sizes */
            size: {
                small: ["text-text6" ,"leading-5"]
            },

            /* Breadcrumbs disabled */
            diabled: {
                true: ["text-[#605F5F]"],
                false: ["text-black_color_900"],
            }
  
        },
  
        // defaults
        defaultVariants: {
            size: "small",
            diabled: "false"
        },
    }
  );

  export default function Breadcrumbs({  size, diabled, children }) {
    return (
        <button className={BreadcrumbsVariants({ size, diabled })}>{children}</button>
    )
  }


