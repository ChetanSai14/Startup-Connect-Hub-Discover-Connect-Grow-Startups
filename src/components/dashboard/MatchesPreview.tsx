import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

interface Match {
  id: string;
  name: string;
  type: "investor" | "startup" | "mentor";
  avatar: string;
  description: string;
  matchScore: number;
  tags: string[];
}

const matches: Match[] = [
  {
    id: "1",
    name: "Sequoia Capital",
    type: "investor",
    avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    description: "Leading VC firm focused on tech startups",
    matchScore: 95,
    tags: ["SaaS", "AI", "Series A"],
  },
  {
    id: "2",
    name: "Andreessen Horowitz",
    type: "investor",
    avatar: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=100&h=100&fit=crop",
    description: "Venture capital firm investing in software",
    matchScore: 88,
    tags: ["Enterprise", "Growth"],
  },
  {
    id: "3",
    name: "Sarah Chen",
    type: "mentor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    description: "Ex-Google PM, 3x founder",
    matchScore: 92,
    tags: ["Product", "Strategy"],
  },
];

export function MatchesPreview() {
  return (
    <Card variant="glass">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Top Matches
        </CardTitle>
        <Link to="/matches">
          <Button variant="ghost" size="sm">
            View All
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="space-y-3">
        {matches.map((match) => (
          <div
            key={match.id}
            className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group"
          >
            <Avatar className="h-12 w-12 border-2 border-primary/20">
              <AvatarImage src={match.avatar} />
              <AvatarFallback>{match.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-sm truncate">{match.name}</p>
                <Badge variant="success" className="text-xs">
                  {match.matchScore}% match
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {match.description}
              </p>
              <div className="flex gap-1 mt-1">
                {match.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" variant="ghost" className="h-8 w-8 text-success hover:bg-success/10">
                <Check className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:bg-destructive/10">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
