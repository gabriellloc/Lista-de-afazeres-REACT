import React from "react";
import Icon from "./icons";
import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

export const buttonVariants = cva("flex items-center justify-center cursor-pointer transition rounded-lg group gap-2", {
	variants: {
		variant: {
			primary: "bg-gray-200 hover:bg-pink-light",
		},
		size: {
			md: "h-14 py-4 px-5"
		},
		disabled: {
			true: "opacity-50 pointer-events-none"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
		disabled: false
	}
})

export const buttonIconVariant = cva("transition", {
	variants: {
		variant: {
			primary: "fill-pink-base"
		},
		size: {
			md: "w-5 h-5"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
})

export const buttonTextVariant = cva("", {
	variants: {
		variant: {
			primary: "text-gray-400"
		}
	},
	defaultVariants: {
		variant: "primary"
	}
})

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonVariants> {
	icon?: React.ComponentProps<typeof Icon>["svg"]
}

export default function Button({ children, variant, size, disabled, className, icon:IconComponent, ...props }:ButtonProps) {
	return(
		<button className={buttonVariants({ variant, size, disabled, className})} {...props}>{IconComponent && <Icon svg={IconComponent} className={buttonIconVariant({variant, size})}/>}
			<Text variant={"body-md-bold"} className={buttonTextVariant({variant})}>
				{children}
			</Text>
		</button>
	)
}