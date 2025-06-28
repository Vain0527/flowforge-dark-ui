
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  ArrowRight,
  Clock,
  AlertCircle
} from "lucide-react";

interface Project {
  id: number;
  name: string;
  progress: number;
  status: string;
  team: string[];
  dueDate: string;
  priority: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-500/20 text-blue-400';
      case 'Review': return 'bg-purple-500/20 text-purple-400';
      case 'Completed': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Card className="group hover:bg-accent/50 transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {project.name}
              </h3>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Due {project.dueDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{project.team.length} members</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className={getPriorityColor(project.priority)}>
              {project.priority === 'High' && <AlertCircle className="w-3 h-3 mr-1" />}
              {project.priority}
            </Badge>
            <Badge variant="secondary" className={getStatusColor(project.status)}>
              {project.status}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          {/* Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-muted-foreground">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>

          {/* Team & Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {project.team.map((member, index) => (
                  <Avatar key={index} className="w-6 h-6 border-2 border-background">
                    <AvatarFallback className="text-xs bg-primary/20 text-primary">
                      {member}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Team</span>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              View Details
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
