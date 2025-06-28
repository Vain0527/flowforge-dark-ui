
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Zap,
  Calendar,
  Award
} from "lucide-react";

const ProductivityInsights = () => {
  const insights = [
    {
      label: "Focus Score",
      value: 85,
      change: "+12%",
      trend: "up",
      color: "text-green-400",
      icon: Target
    },
    {
      label: "Daily Goal",
      value: 73,
      change: "6/8 tasks",
      trend: "up",
      color: "text-blue-400",
      icon: Award
    },
    {
      label: "Time Spent",
      value: 68,
      change: "5h 30m",
      trend: "up",
      color: "text-purple-400",
      icon: Clock
    }
  ];

  const weeklyStats = [
    { day: "Mon", hours: 7.5, productivity: 85 },
    { day: "Tue", hours: 6.2, productivity: 78 },
    { day: "Wed", hours: 8.1, productivity: 92 },
    { day: "Thu", hours: 5.8, productivity: 65 },
    { day: "Fri", hours: 7.0, productivity: 88 }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <CardTitle className="text-lg">Productivity Insights</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Current Metrics */}
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <insight.icon className={`w-4 h-4 ${insight.color}`} />
                  <span className="text-sm font-medium">{insight.label}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-400">
                    {insight.change}
                  </Badge>
                </div>
              </div>
              <Progress value={insight.value} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{insight.value}%</span>
                <span>This week</span>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Overview */}
        <div>
          <h4 className="text-sm font-medium mb-3 flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
            This Week
          </h4>
          <div className="space-y-2">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium w-8">{stat.day}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-xs text-muted-foreground">{stat.hours}h</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={stat.productivity} className="w-12 h-1" />
                  <span className="text-xs font-medium w-8">{stat.productivity}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Suggestion */}
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
          <div className="flex items-start space-x-2">
            <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-primary mb-1">AI Insight</p>
              <p className="text-xs text-muted-foreground">
                Your peak productivity is between 9-11 AM. Consider scheduling your most important tasks during this time.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductivityInsights;
