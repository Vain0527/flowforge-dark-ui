
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  Plus,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: string;
}

interface TaskWidgetProps {
  tasks: Task[];
}

const TaskWidget = ({ tasks }: TaskWidgetProps) => {
  const [taskList, setTaskList] = useState(tasks);

  const toggleTask = (taskId: number) => {
    setTaskList(taskList.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'High': return <ArrowUp className="w-3 h-3 text-red-400" />;
      case 'Medium': return <Minus className="w-3 h-3 text-yellow-400" />;
      case 'Low': return <ArrowDown className="w-3 h-3 text-green-400" />;
      default: return <Circle className="w-3 h-3 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'border-red-500/30 bg-red-500/10';
      case 'Medium': return 'border-yellow-500/30 bg-yellow-500/10';
      case 'Low': return 'border-green-500/30 bg-green-500/10';
      default: return 'border-gray-500/30 bg-gray-500/10';
    }
  };

  const completedCount = taskList.filter(task => task.completed).length;
  const totalCount = taskList.length;

  return (
    <Card>
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">
                  {completedCount}/{totalCount} completed
                </span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Task
            </Button>
          </div>
        </div>

        {/* Task List */}
        <div className="divide-y divide-border">
          {taskList.map((task) => (
            <div 
              key={task.id} 
              className={`p-4 flex items-center space-x-3 hover:bg-accent/30 transition-colors ${
                task.completed ? 'opacity-60' : ''
              }`}
            >
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
                className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
              />
              
              <div className="flex-1 min-w-0">
                <p className={`font-medium ${
                  task.completed ? 'line-through text-muted-foreground' : ''
                }`}>
                  {task.title}
                </p>
              </div>
              
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-md border ${getPriorityColor(task.priority)}`}>
                {getPriorityIcon(task.priority)}
                <span className="text-xs font-medium">{task.priority}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-muted/20">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {totalCount - completedCount} tasks remaining
            </span>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Est. 2h 30m</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskWidget;
