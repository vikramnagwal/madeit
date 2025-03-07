import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { cva, VariantProps } from "class-variance-authority";
import { LayoutGroup } from "framer-motion";
import { useId } from "react";

const tabButtonVariants = cva(
  "px-4 py-2 rounded-md duration-75 text-sm font-normal cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-white text-black",
        ghost: "bg-transparent border border-gray-400",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export function Tab<T extends string>({ 
  variant,
  options
}: VariantProps<typeof tabButtonVariants> & {
  options: {id: T, label: string, children: React.ReactNode}[],
}) {
  const layoutId = useId();
  return (
    <figure className="flex flex-col justify-center space-y-4">
      <Tabs defaultValue={options[0].id}>
        <TabsList className="flex space-x-4">
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
