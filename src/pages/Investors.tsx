import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Briefcase, Users, ExternalLink, Heart, MessageSquare } from "lucide-react";
import { mockInvestors } from "@/data/mockData";

export default function Investors() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold">Find Investors</h1>
        <p className="text-muted-foreground mt-1">
          Connect with VCs, angels, and accelerators looking for their next investment
        </p>
      </div>

      {/* Filters */}
      <Card variant="glass">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search investors by name or focus area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="vc">Venture Capital</SelectItem>
                <SelectItem value="angel">Angel Investor</SelectItem>
                <SelectItem value="accelerator">Accelerator</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full lg:w-44">
                <SelectValue placeholder="Check Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Amount</SelectItem>
                <SelectItem value="small">$100K - $500K</SelectItem>
                <SelectItem value="medium">$500K - $2M</SelectItem>
                <SelectItem value="large">$2M+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Investor Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockInvestors.map((investor, index) => (
          <Card
            key={investor.id}
            variant="glass"
            className="hover-lift group cursor-pointer animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-14 w-14 rounded-xl border-2 border-border shadow-md">
                    <AvatarImage src={investor.logo} alt={investor.name} />
                    <AvatarFallback className="rounded-xl bg-primary/10 text-primary font-bold">
                      {investor.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                      {investor.name}
                    </h3>
                    <Badge variant="muted" className="mt-1">
                      {investor.type}
                    </Badge>
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
              {/* Focus Areas */}
              <div className="flex flex-wrap gap-1.5">
                {investor.focus.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span>{investor.checkSize}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-success" />
                  <span>{investor.portfolio} companies</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground col-span-2">
                  <MapPin className="h-4 w-4 text-info" />
                  <span>{investor.location}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="default" size="sm" className="flex-1">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Connect
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
