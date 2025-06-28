
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Send, 
  Sparkles, 
  Lightbulb,
  Zap
} from "lucide-react";

const AIAssistant = () => {
  const [messages] = useState([
    {
      id: 1,
      type: "ai",
      content: "I notice you've been working on the e-commerce redesign. Would you like me to help prioritize the remaining tasks?",
      timestamp: "2 min ago"
    },
    {
      id: 2,
      type: "suggestion",
      content: "Consider taking a 15-minute break - you've been focused for 2.5 hours!",
      timestamp: "5 min ago"
    }
  ]);

  const [inputValue, setInputValue] = useState("");

  const quickActions = [
    { label: "What's next?", icon: Lightbulb },
    { label: "Start focus session", icon: Zap },
    { label: "Show analytics", icon: Sparkles }
  ];

  return (
    <Card className="h-fit">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center animate-glow">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <CardTitle className="text-lg">AI Assistant</CardTitle>
            <p className="text-xs text-muted-foreground">Always here to help</p>
          </div>
          <Badge variant="secondary" className="ml-auto text-xs bg-green-500/20 text-green-400">
            Online
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Messages */}
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className="flex space-x-2">
              <Avatar className="w-6 h-6 mt-1">
                <AvatarFallback className="bg-primary/20 text-primary text-xs">
                  AI
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="bg-accent rounded-lg p-3">
                  <p className="text-sm">{message.content}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Quick Actions:</p>
          <div className="grid grid-cols-1 gap-2">
            {quickActions.map((action, index) => (
              <Button 
                key={index}
                variant="ghost" 
                size="sm" 
                className="justify-start h-8 text-xs"
              >
                <action.icon className="w-3 h-3 mr-2" />
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <Input 
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 h-8 text-sm"
          />
          <Button size="sm" className="h-8 w-8 p-0 gradient-primary">
            <Send className="w-3 h-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
