
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Bell, 
  Settings, 
  Calendar,
  ChevronDown 
} from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                FlowForge
              </h1>
              <p className="text-xs text-muted-foreground">AI-Powered Project Management</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search projects, tasks, or ask AI..." 
                className="pl-10 bg-background/50 border-border/50 focus:border-primary/50"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Today's Date */}
            <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-background/50">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Dec 28, 2024</span>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-red-500"></Badge>
            </Button>

            {/* Settings */}
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>

            {/* Profile */}
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-accent rounded-lg p-2 transition-colors">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-primary text-primary-foreground">AX</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Alex Chen</p>
                <p className="text-xs text-muted-foreground">Product Designer</p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
