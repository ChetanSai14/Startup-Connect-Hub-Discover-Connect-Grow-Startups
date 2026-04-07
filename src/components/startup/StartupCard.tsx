import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Users, TrendingUp, ExternalLink, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface StartupCardProps {
  startup: {
    id: string;
    name: string;
    logo: string;
    tagline: string;
    stage: string;
    industry: string;
    location: string;
    teamSize: number;
    fundingTarget: string;
    traction: string;
    tags: string[];
  };
  className?: string;
}

const stageColors: Record<string, string> = {
  "Pre-Seed": "bg-info/10 text-info",
  "Seed": "bg-success/10 text-success",
  "Series A": "bg-primary/10 text-primary",
  "Series B": "bg-warning/10 text-warning",
  "Growth": "bg-secondary/10 text-secondary",
};

export function StartupCard({ startup, className }: StartupCardProps) {
  return (
    <Card
      variant="glass"
      className={cn(
        "hover-lift group cursor-pointer overflow-hidden",
        className
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-14 w-14 rounded-xl border-2 border-border shadow-md">
              <AvatarImage src={startup.logo} alt={startup.name} />
              <AvatarFallback className="rounded-xl bg-primary/10 text-primary font-bold">
                {startup.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                {startup.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {startup.tagline}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge className={stageColors[startup.stage] || "bg-muted text-muted-foreground"}>
            {startup.stage}
          </Badge>
          <Badge variant="muted">{startup.industry}</Badge>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{startup.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>{startup.teamSize} team members</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-success" />
            <span>{startup.traction}</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            ${startup.fundingTarget}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
          {startup.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {startup.tags.length > 4 && (
            <span className="text-xs px-2 py-1 text-muted-foreground">
              +{startup.tags.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button variant="default" size="sm" className="flex-1">
            View Profile
          </Button>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
