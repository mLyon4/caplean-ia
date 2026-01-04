import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Activity, MousePointerClick, Mail, Navigation, Trash2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface TrackedEvent {
  id: string;
  eventName: string;
  parameters: Record<string, string | number | boolean>;
  timestamp: Date;
}

const AnalyticsDashboard = () => {
  const [events, setEvents] = useState<TrackedEvent[]>([]);
  const [isTracking, setIsTracking] = useState(true);

  useEffect(() => {
    // Override gtag to capture events
    const originalGtag = window.gtag;
    
    window.gtag = function(...args: any[]) {
      if (args[0] === 'event' && isTracking) {
        const newEvent: TrackedEvent = {
          id: Math.random().toString(36).substr(2, 9),
          eventName: args[1] as string,
          parameters: args[2] || {},
          timestamp: new Date(),
        };
        setEvents(prev => [newEvent, ...prev].slice(0, 50)); // Keep last 50 events
      }
      
      // Call original gtag
      if (originalGtag) {
        originalGtag.apply(window, args);
      }
    };

    return () => {
      window.gtag = originalGtag;
    };
  }, [isTracking]);

  const clearEvents = () => setEvents([]);

  const getEventIcon = (eventName: string) => {
    switch (eventName) {
      case 'cta_click':
        return <MousePointerClick className="h-4 w-4 text-secondary" />;
      case 'contact_method_click':
        return <Mail className="h-4 w-4 text-green-500" />;
      case 'page_navigation':
        return <Navigation className="h-4 w-4 text-blue-500" />;
      default:
        return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getEventColor = (eventName: string) => {
    switch (eventName) {
      case 'cta_click':
        return 'bg-secondary/10 border-secondary/30';
      case 'contact_method_click':
        return 'bg-green-500/10 border-green-500/30';
      case 'page_navigation':
        return 'bg-blue-500/10 border-blue-500/30';
      default:
        return 'bg-muted/50 border-border';
    }
  };

  // Configuration summary
  const trackedCTAs = [
    { location: "Header Desktop", cta: "Rendez-vous", page: "Accueil" },
    { location: "Header Mobile", cta: "Prendre rendez-vous", page: "Accueil" },
    { location: "Hero", cta: "Prendre rendez-vous", page: "Accueil" },
    { location: "Hero", cta: "Découvrir nos services", page: "Accueil" },
    { location: "Contact Section", cta: "Réserver un créneau", page: "Accueil" },
    { location: "Contact Section", cta: "Remplir le formulaire", page: "Accueil" },
    { location: "Contact Section", cta: "Envoyer un email", page: "Accueil" },
    { location: "Header", cta: "Prendre rendez-vous", page: "Consultante Notion" },
    { location: "Hero", cta: "Appel découverte gratuit", page: "Consultante Notion" },
    { location: "CTA Final", cta: "Réserver mon appel découverte", page: "Consultante Notion" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full glass-premium sticky top-0 z-50 border-b border-border/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="group flex items-center gap-3 text-foreground/70 hover:text-primary transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <span className="font-medium">Retour au site</span>
            </Link>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={clearEvents}
                className="flex items-center gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Vider
              </Button>
              <Button
                variant={isTracking ? "default" : "outline"}
                size="sm"
                onClick={() => setIsTracking(!isTracking)}
                className={isTracking ? "bg-green-500 hover:bg-green-600" : ""}
              >
                {isTracking ? "⏺ Tracking actif" : "⏸ Tracking pausé"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dashboard Analytics GA4
            </h1>
            <p className="text-muted-foreground">
              Vérifiez la configuration du tracking en temps réel
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              ID de mesure : <code className="bg-muted px-2 py-1 rounded">G-3GQNKMBT03</code>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Configuration Summary */}
            <div className="glass-premium rounded-2xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                CTAs trackés ({trackedCTAs.length})
              </h2>
              
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                {trackedCTAs.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/30"
                  >
                    <MousePointerClick className="h-4 w-4 text-secondary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm truncate">
                        {item.cta}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.page} → {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Types d'événements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <code>cta_click</code> - Clics sur les boutons CTA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <code>contact_method_click</code> - Méthodes de contact
                  </li>
                </ul>
              </div>
            </div>

            {/* Live Events */}
            <div className="glass-premium rounded-2xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Événements en direct
                {events.length > 0 && (
                  <span className="ml-auto text-sm font-normal text-muted-foreground">
                    {events.length} événement{events.length > 1 ? 's' : ''}
                  </span>
                )}
              </h2>

              {events.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <Activity className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p className="font-medium">Aucun événement capturé</p>
                  <p className="text-sm mt-2">
                    Cliquez sur un CTA pour voir l'événement apparaître ici
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                  {events.map((event) => (
                    <div 
                      key={event.id}
                      className={`p-4 rounded-xl border ${getEventColor(event.eventName)} animate-fade-in`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {getEventIcon(event.eventName)}
                        <span className="font-mono font-semibold text-foreground">
                          {event.eventName}
                        </span>
                        <span className="ml-auto text-xs text-muted-foreground">
                          {event.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      
                      <div className="bg-background/50 rounded-lg p-3 mt-2">
                        <pre className="text-xs text-muted-foreground overflow-x-auto">
                          {JSON.stringify(event.parameters, null, 2)}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-10 glass-premium rounded-2xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Comment vérifier dans Google Analytics ?
            </h2>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Allez sur <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics</a></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Ouvrez <strong>Rapports → Temps réel</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Cliquez sur <strong>Nombre d'événements par nom d'événement</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span>Vous devriez voir <code className="bg-muted px-2 py-0.5 rounded">cta_click</code> et <code className="bg-muted px-2 py-0.5 rounded">contact_method_click</code></span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
