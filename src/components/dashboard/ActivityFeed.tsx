import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

interface Activity {
  id: string;
  type: "match" | "message" | "event" | "funding" | "milestone";
  title: string;
  description: string;
  avatar?: string;
  avatarFallback: string;
  timestamp: Date;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "match",
    title: "New Match!",
    description: "Sequoia Capital matched with your startup",
    avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    avatarFallback: "SC",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
  },
  {
    id: "2",
    type: "message",
    title: "New Message",
    description: "Alex from Acme Ventures sent you a message",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    avatarFallback: "AV",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: "3",
    type: "event",
    title: "Event Reminder",
    description: "Demo Day starts tomorrow at 2 PM",
    avatarFallback: "DD",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
  },
  {
    id: "4",
    type: "milestone",
    title: "Milestone Achieved",
    description: "Your startup reached 10K users!",
    avatarFallback: "🎉",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
];

const typeBadges: Record<string, { variant: "success" | "info" | "warning" | "gradient"; label: string }> = {
  match: { variant: "gradient", label: "Match" },
  message: { variant: "info", label: "Message" },
  event: { variant: "warning", label: "Event" },
  funding: { variant: "success", label: "Funding" },
  milestone: { variant: "success", label: "Milestone" },
};

export function ActivityFeed() {
  return (
    <Card variant="glass">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <Avatar className="h-10 w-10 border border-border">
              {activity.avatar ? (
                <AvatarImage src={activity.avatar} />
              ) : null}
              <AvatarFallback className="text-sm bg-primary/10 text-primary">
                {activity.avatarFallback}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm truncate">{activity.title}</p>
                <Badge variant={typeBadges[activity.type].variant} className="text-xs px-1.5 py-0">
                  {typeBadges[activity.type].label}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {activity.description}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
