import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  TrendingUp,
  Users,
  Briefcase,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Play,
  Star,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-info flex items-center justify-center shadow-lg">
              <Rocket className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">StartupHub</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/startups" className="text-muted-foreground hover:text-foreground transition-colors">
              Startups
            </Link>
            <Link to="/investors" className="text-muted-foreground hover:text-foreground transition-colors">
              Investors
            </Link>
            <Link to="/jobs" className="text-muted-foreground hover:text-foreground transition-colors">
              Jobs
            </Link>
            <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors">
              Events
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link to="/auth">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-info/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-slide-up">
            <Badge variant="gradient" className="px-4 py-1.5 text-sm">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Trusted by 2,500+ startups worldwide
            </Badge>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Where{" "}
              <span className="gradient-text">Founders</span>
              <br />
              Meet{" "}
              <span className="gradient-text">Investors</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The premier platform connecting innovative startups with visionary investors.
              Discover opportunities, build relationships, and accelerate growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/auth">
                <Button variant="hero" size="xl" className="group">
                  Start for Free
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="glass" size="xl">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-8 pt-8 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <Star className="h-4 w-4 fill-warning text-warning" />
                <Star className="h-4 w-4 fill-warning text-warning" />
                <Star className="h-4 w-4 fill-warning text-warning" />
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="ml-2 text-sm font-medium">4.9/5 Rating</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-sm">$2B+ Funded</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-sm">500+ Active Investors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2,500+", label: "Startups", icon: Rocket },
              { value: "500+", label: "Investors", icon: TrendingUp },
              { value: "15,000+", label: "Connections", icon: Users },
              { value: "1,200+", label: "Jobs Posted", icon: Briefcase },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-4xl font-display font-bold">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools and features designed to help startups and investors thrive together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Matchmaking",
                description: "AI-powered algorithm matches you with the perfect investors or startups based on your preferences.",
                icon: Sparkles,
                color: "text-primary",
              },
              {
                title: "Investor Discovery",
                description: "Access our curated database of 500+ verified investors, VCs, and angel investors.",
                icon: TrendingUp,
                color: "text-success",
              },
              {
                title: "Startup Profiles",
                description: "Showcase your startup with rich media, metrics, and pitch deck previews.",
                icon: Rocket,
                color: "text-info",
              },
              {
                title: "Job Board",
                description: "Post jobs and attract top talent from our community of startup enthusiasts.",
                icon: Briefcase,
                color: "text-warning",
              },
              {
                title: "Events & Networking",
                description: "Join demo days, pitch competitions, and networking events.",
                icon: Users,
                color: "text-secondary",
              },
              {
                title: "Mentorship",
                description: "Connect with experienced founders and industry experts for guidance.",
                icon: Star,
                color: "text-accent",
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                variant="glass"
                className="hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-current/10 flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-info/5" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Join the{" "}
            <span className="gradient-text">Ecosystem?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start connecting with investors, discovering startups, and growing your network today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Create Free Account
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Free forever plan
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              No credit card required
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-info flex items-center justify-center">
                <Rocket className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">StartupHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 StartupHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
