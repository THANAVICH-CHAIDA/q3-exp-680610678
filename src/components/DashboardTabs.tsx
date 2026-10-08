import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="category">By Category</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-4">
        <OverviewCards />
      </TabsContent>

      <TabsContent value="category" className="mt-4">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}