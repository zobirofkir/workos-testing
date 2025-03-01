import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StateOverviewProps {
  title: string;
  value: number;
  description: string;
}

const StateOverview = ({ title, value, description }: StateOverviewProps) => {
  return (
    <Card className="w-full p-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-extrabold">{value}</p>
        <p className="dark:text-white text-black">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StateOverview;
