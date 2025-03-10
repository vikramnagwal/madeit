import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { cva, VariantProps } from "class-variance-authority";
import { LayoutGroup } from "framer-motion";
import { useId } from "react";
import { cn } from "../utils/cn";

const tabButtonVariants = cva(
  "px-4 py-2 rounded-md duration-75 text-sm font-normal cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-white text-black w-24 mb-4 dark:bg-black dark:text-white",
        ghost: "bg-transparent border border-gray-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Tab<T extends string>({ 
  variant,
  options,
  className,
}: VariantProps<typeof tabButtonVariants> & {
  options: {id: T, label: string, children: React.ReactNode}[], className?: T,
}) {
  const layoutId = useId();
  return (
    <figure className={cn("flex flex-col justify-center space-y-4", className)}>
      <Tabs defaultValue={options[0].id}>
        <TabsList className="flex justify-center items-center gap-4 space-x-4 my-2">
          <LayoutGroup id={layoutId}>
            {options.map(({ id, label }) => (
              <TabsTrigger
                key={id}
                value={id}
                className={tabButtonVariants({ variant })}
                data-layout-id={layoutId}
              >
                {label}
              </TabsTrigger>
            ))}
          </LayoutGroup>
        </TabsList>
        {options.map(({ id, children }) => (
          <TabsContent key={id} value={id}>
            {children}
          </TabsContent>
        ))}
      </Tabs>
    </figure>
  );
}
