import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export function Tab() {
  return (
  <Tabs className="bg-white/80 text-black">
    <TabsList>
      <TabsTrigger value="1">cac</TabsTrigger>
    </TabsList>
    <TabsContent value="1">
        <div>
          <h1>hjjhdsk</h1>
        </div>
    </TabsContent>
  </Tabs>
)
}
