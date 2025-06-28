
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  Star, 
  Plus, 
  Settings, 
  Search,
  ChevronRight,
  CheckCircle,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import AIAssistant from "@/components/AIAssistant";
import ProjectCard from "@/components/ProjectCard";
import TaskWidget from "@/components/TaskWidget";
import ProductivityInsights from "@/components/ProductivityInsights";

const Index = () => {
  const [activeProjects] = useState([
    {
      id: 1,
      name: "E-commerce Redesign",
      progress: 78,
      status: "In Progress",
      team: ["JD", "SM", "AK"],
      dueDate: "Dec 15",
      priority: "High",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Mobile App Development",
      progress: 45,
      status: "In Progress",
      team: ["RJ", "MT"],
      dueDate: "Jan 20",
      priority: "Medium",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Brand Identity System",
      progress: 92,
      status: "Review",
      team: ["LK", "NP", "QR"],
      dueDate: "Dec 10",
      priority: "High",
      color: "from-green-500 to-emerald-500"
    }
  ]);

  const [todayTasks] = useState([
    { id: 1, title: "Review homepage mockups", completed: false, priority: "High" },
    { id: 2, title: "Update project timeline", completed: true, priority: "Medium" },
    { id: 3, title: "Client feedback call", completed: false, priority: "High" },
    { id: 4, title: "Code review session", completed: false, priority: "Low" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="container mx-auto px-6 py-8">
        {/* AI Daily Focus Panel */}
        <div className="mb-8">
          <Card className="glass border-purple-500/20 relative overflow-hidden">
            <div className="absolute inset-0 gradient-card opacity-50"></div>
            <CardContent className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Good morning, Alex! ✨
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Ready to make today productive? Your AI assistant has some suggestions.
                  </p>
                </div>
                <div className="animate-float">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Continue homepage design?</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Best focus time: 9-11 AM</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-background/50">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">3 tasks due today</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Projects */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Active Projects</h2>
                <Button className="gradient-primary hover:opacity-90">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </div>
              
              <div className="grid gap-6">
                {activeProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            {/* Today's Tasks */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Today's Focus</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              
              <TaskWidget tasks={todayTasks} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Assistant */}
            <AIAssistant />
            
            {/* Productivity Insights */}
            <ProductivityInsights />
            
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Task
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  Start Session
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Preferences
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
