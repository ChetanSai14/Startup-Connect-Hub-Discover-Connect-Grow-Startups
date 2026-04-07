import { StatsCard } from "@/components/dashboard/StatsCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { MatchesPreview } from "@/components/dashboard/MatchesPreview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Users,
  TrendingUp,
  MessageSquare,
  Calendar,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import { mockEvents } from "@/data/mockData";
import { format } from "date-fns";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-display font-bold">
          Welcome back, <span className="gradient-text">John</span>
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your startup ecosystem today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Profile Views"
          value="1,284"
          change={12}
          icon={Users}
          iconColor="text-primary"
        />
        <StatsCard
          title="Investor Matches"
          value="23"
          change={8}
          icon={TrendingUp}
          iconColor="text-success"
        />
        <StatsCard
          title="Messages"
          value="45"
          change={-3}
          icon={MessageSquare}
          iconColor="text-info"
        />
        <StatsCard
          title="Job Applications"
          value="12"
          change={25}
          icon={Briefcase}
          iconColor="text-warning"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Activity Feed */}
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>

        {/* Matches Preview */}
        <div>
          <MatchesPreview />
        </div>
      </div>

      {/* Upcoming Events */}
      <Card variant="glass">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Upcoming Events
          </CardTitle>
          <Link to="/events">
            <Button variant="ghost" size="sm">
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                className="group rounded-xl overflow-hidden bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer"
              >
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2" variant="info">
                    {event.type}
                  </Badge>
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {format(event.date, "MMM d, yyyy")} • {event.location}
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">
                    {event.attendees} attending
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Link to="/startups" className="block">
          <Card variant="gradient" className="hover-lift cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  Explore Startups
                </h3>
                <p className="text-sm text-muted-foreground">
                  Discover innovative companies
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </CardContent>
          </Card>
        </Link>

        <Link to="/investors" className="block">
          <Card variant="gradient" className="hover-lift cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-success/10">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold group-hover:text-success transition-colors">
                  Find Investors
                </h3>
                <p className="text-sm text-muted-foreground">
                  Connect with VCs & angels
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-success group-hover:translate-x-1 transition-all" />
            </CardContent>
          </Card>
        </Link>

        <Link to="/jobs" className="block">
          <Card variant="gradient" className="hover-lift cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-warning/10">
                <Briefcase className="h-6 w-6 text-warning" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold group-hover:text-warning transition-colors">
                  Browse Jobs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Find startup opportunities
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-warning group-hover:translate-x-1 transition-all" />
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
