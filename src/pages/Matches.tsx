import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Check, X, MessageSquare, Star, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const matches = [
  {
    id: "1",
    name: "Sequoia Capital",
    type: "investor",
    avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    description: "Leading VC firm focused on tech startups. Invested in Apple, Google, and WhatsApp.",
    matchScore: 95,
    tags: ["SaaS", "AI/ML", "Series A"],
    reason: "Strong interest in AI enterprise solutions matching your focus",
  },
  {
    id: "2",
    name: "Andreessen Horowitz",
    type: "investor",
    avatar: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=100&h=100&fit=crop",
    description: "Venture capital firm investing in bold entrepreneurs building the future.",
    matchScore: 88,
    tags: ["Enterprise", "Growth Stage"],
    reason: "Portfolio overlap with similar B2B SaaS companies",
  },
  {
    id: "3",
    name: "Sarah Chen",
    type: "mentor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    description: "Ex-Google PM, 3x founder. Advisor to 20+ startups.",
    matchScore: 92,
    tags: ["Product", "Strategy", "GTM"],
    reason: "Expertise in scaling B2B products from 0 to 1M ARR",
  },
  {
    id: "4",
    name: "Y Combinator",
    type: "investor",
    avatar: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=100&h=100&fit=crop",
    description: "The world's most successful startup accelerator.",
    matchScore: 85,
    tags: ["Early Stage", "Accelerator"],
    reason: "Your startup fits their current batch focus areas",
  },
];

export default function Matches() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            Your Matches
          </h1>
          <p className="text-muted-foreground mt-1">
            AI-powered recommendations based on your profile and preferences
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Adjust Preferences
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Matches</TabsTrigger>
          <TabsTrigger value="investors">Investors</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
          <TabsTrigger value="startups">Startups</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {matches.map((match, index) => (
            <Card
              key={match.id}
              variant="glass"
              className="hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Avatar & Basic Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <Avatar className="h-16 w-16 rounded-xl border-2 border-primary/20 shadow-lg">
                      <AvatarImage src={match.avatar} />
                      <AvatarFallback className="rounded-xl bg-primary/10 text-primary font-bold">
                        {match.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display font-semibold text-xl">{match.name}</h3>
                        <Badge
                          variant={match.matchScore >= 90 ? "success" : "info"}
                          className="text-sm"
                        >
                          <Star className="h-3 w-3 mr-1" />
                          {match.matchScore}% Match
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1">{match.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {match.tags.map((tag) => (
                          <Badge key={tag} variant="muted" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Match Reason */}
                  <div className="lg:w-64 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                      Why you match
                    </p>
                    <p className="text-sm text-muted-foreground">{match.reason}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-2">
                    <Button variant="success" className="flex-1 lg:flex-none">
                      <Check className="h-4 w-4 mr-1" />
                      Connect
                    </Button>
                    <Button variant="outline" className="flex-1 lg:flex-none">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Message
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="investors">
          <Card variant="glass" className="p-12 text-center">
            <p className="text-muted-foreground">Showing investor matches only...</p>
          </Card>
        </TabsContent>

        <TabsContent value="mentors">
          <Card variant="glass" className="p-12 text-center">
            <p className="text-muted-foreground">Showing mentor matches only...</p>
          </Card>
        </TabsContent>

        <TabsContent value="startups">
          <Card variant="glass" className="p-12 text-center">
            <p className="text-muted-foreground">Showing startup matches only...</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
