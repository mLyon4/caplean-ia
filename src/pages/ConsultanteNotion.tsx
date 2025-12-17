import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Users, 
  Building2, 
  HardHat,
  LayoutDashboard,
  FolderKanban,
  UserCircle,
  ClipboardList,
  ArrowRight,
  Lightbulb,
  Zap,
  Clock,
  Settings,
  HeartHandshake,
  Star,
  Quote,
  Linkedin,
  GraduationCap,
  BadgeCheck,
  Wallet
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import notionSpecialistBadge from "@/assets/logos/notion-specialist-badge.png";

const ConsultanteNotion = () => {
  const implementations = [
    { icon: LayoutDashboard, title: "CRM sur mesure", description: "Gestion clients et prospects adaptée à votre métier" },
    { icon: FolderKanban, title: "Pilotage de projets", description: "Suivi d'avancement, jalons et livrables centralisés" },
    { icon: UserCircle, title: "Gestion RH", description: "Onboarding, suivi des équipes, plannings" },
    { icon: ClipboardList, title: "Documentation", description: "Base de connaissances et procédures internes" },
  ];

  const targetAudience = [
    { icon: Building2, title: "PME en croissance", description: "Structurer pour scaler sans perdre en agilité" },
    { icon: Users, title: "Dirigeants débordés", description: "Reprendre le contrôle de votre organisation" },
    { icon: HardHat, title: "Entreprises BTP", description: "Solutions métier adaptées au terrain" },
  ];

  const whenToCallReasons = [
    "Vous passez plus de temps à chercher l'information qu'à la traiter",
    "Vos outils ne se parlent pas et vous ressaisissez les mêmes données",
    "Votre équipe utilise chacun sa propre méthode de travail",
    "Vous avez essayé Notion mais n'arrivez pas à l'adopter en équipe",
    "Vous voulez un outil qui évolue avec votre entreprise",
  ];

  const whyNotionReasons = [
    { icon: Settings, title: "100% personnalisable", description: "Contrairement aux outils figés, Notion s'adapte à VOTRE façon de travailler" },
    { icon: Zap, title: "Tout-en-un", description: "Docs, bases de données, projets, wiki... un seul outil remplace 5" },
    { icon: Clock, title: "Évolutif", description: "Votre système grandit avec vous, sans changer d'outil ni migrer de données" },
    { icon: HeartHandshake, title: "Adoption facile", description: "Interface intuitive que vos équipes adoptent réellement" },
  ];

  const testimonials = [
    {
      content: "Christelle nous a accompagné dans notre transition numérique chez AC2R; Nous savions qu'il fallait que l'on opère des changements organisationnels, fonctionnels, et d'outils. Christelle, grâce à son travail de compréhension de notre mode de fonctionnement, à son analyse très précise, et à son état des lieux sans équivoque, nous a permis de changer de logiciel de gestion (après 17 ans avec un prestataire), et de mettre en place de nouveaux outils. C'est notre magicienne :) Merci",
      author: "Anne-Gaëlle de Kinkelin- Roux",
      title: "DG et Responsable du développement commercial",
      company: "AC2R",
      date: "Septembre 2025"
    },
    {
      content: "Mise en place d'un système Notion sur mesure. Une vraie pro 🤩 J'ai fait appel aux services de Christelle pour la création de mon espace Notion. Après quelques mois d'activité en tant que free-lance, je commençais à avoir des informations un peu partout, sous différents formats, et j'avais besoin de structurer! Christelle a pris le temps d'écouter mes besoins et s'y est très facilement adaptée, avec un grand sens pédagogique, de sorte que je suis devenue autonome avec « mon » Notion hyper rapidement! Je recommande les yeux fermés 🚀",
      author: "Céline Mansuy Ferreira",
      title: "Consultante Free-lance",
      company: "Up Neo",
      date: "Juillet 2025"
    },
    {
      content: "J'ai eu l'occasion de travailler avec Christelle sur la refonte complète de mon espace Notion, avec pour objectif de le rendre utilisable à la fois en interne et en externe (clients). Son travail a été remarquable : elle a su structurer l'ensemble de manière claire et fluide, tout en gardant une logique d'utilisation simple et intuitive. Résultat : un outil bien plus efficace, adapté à mes besoins et prêt à évoluer. Je recommande vivement son accompagnement.",
      author: "Quentin Forgeot",
      title: "CEO",
      company: "Fireco | Agence Meta Ads, Google Ads & Créa",
      date: "Août 2025"
    },
    {
      content: "En tant que directrice marketing externalisée, je pilote plusieurs projets par client chaque mois. J'ai testé pas mal d'outils : trop chers, trop rigides. Rien ne collait. Christelle a changé la donne. Elle a écouté mes besoins réels et conçu MON outil. Celui qui me fait gagner du temps. Aujourd'hui, mon assistante et moi collaborons sur une plateforme fluide, fiable, sans superflu. Christelle digitalise intelligemment, sans usine à gaz. Pour digitaliser avec pragmatisme : foncez !",
      author: "Coralie Moiny",
      title: "Directrice Marketing",
      company: "#FeeCommTuVeux",
      date: "Décembre 2025"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultante Notion Entreprise | Spécialiste Notion pour PME et BTP</title>
        <meta name="description" content="Consultante Notion certifiée pour PME et BTP. Formation Notion Qualiopi, systèmes sur mesure (CRM, projets, RH). Transformez votre organisation avec Notion." />
        <meta name="keywords" content="consultante Notion, spécialiste Notion entreprise, formation Notion Qualiopi, système Notion sur mesure, Notion pour le BTP" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="w-full bg-background/95 backdrop-blur-lg border-b border-border/30 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Retour à l'accueil</span>
              </Link>
              <Button 
                asChild 
                variant="outline"
                className="font-semibold px-6 py-2.5 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <Link to="/#contacts">Prendre rendez-vous</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-background pt-16 pb-20">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                <span className="text-primary">Consultante spécialiste Notion</span>
                <br />
                <span className="text-primary">pour les </span>
                <span className="text-secondary">entreprises</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground/80 mb-4">
                Structuration, pilotage d'entreprise et formation Qualiopi
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                Des systèmes Notion sur mesure pour centraliser l'information, piloter l'activité et faciliter l'adoption par les équipes.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                📍 Basée à Lyon – Interventions en France entière
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {["consultante Notion", "spécialiste Notion entreprise", "formation Notion Qualiopi", "système Notion sur mesure", "Notion pour le BTP"].map((tag, i) => (
                  <span key={i} className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise reconnue par Notion */}
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl font-semibold text-foreground mb-6">
                Une expertise <span className="text-secondary">reconnue par Notion</span>
              </p>
              <img 
                src={notionSpecialistBadge} 
                alt="Notion Service Specialist - Expertise certifiée" 
                className="h-32 md:h-40 w-auto mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Ce que je mets en place */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ce qui est mis en place <span className="text-secondary">concrètement</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des systèmes Notion sur mesure qui s'adaptent à votre métier et vos processus
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementations.map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover-lift bg-card">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Pour <span className="text-secondary">qui</span> ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Un accompagnement pour les structures qui veulent professionnaliser leur organisation
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {targetAudience.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 group-hover:bg-secondary/10 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <item.icon className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ma posture */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Une posture <span className="text-secondary">d'accompagnement</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover-lift">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                    <Lightbulb className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Structuration sur mesure</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Pas de template générique. Une analyse de vos processus existants pour créer 
                    un système Notion qui colle à votre réalité métier.
                  </p>
                </div>
                <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover-lift">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <HeartHandshake className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Adoption par les équipes</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Un outil non utilisé ne sert à rien. Formation des équipes et suivi pour que le système 
                    soit adopté dans la durée, pas abandonné après 2 semaines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quand faire appel */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Quand faire appel à une <span className="text-secondary">consultante Notion</span> ?
                </h2>
              </div>
              <div className="space-y-4">
                {whenToCallReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-secondary/30 transition-colors">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground text-lg">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Notion */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Pourquoi <span className="text-secondary">Notion</span> plutôt qu'un outil classique ?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyNotionReasons.map((item, index) => (
                <Card key={index} className="border-border/50 text-center hover-lift hover:border-secondary/30 transition-all duration-300 bg-card">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Formation Notion */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Formation Notion <span className="text-secondary">en entreprise</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Orientées usage réel et adoption par les équipes
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover-lift bg-card">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                      <GraduationCap className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Formation en entreprise</h3>
                    <p className="text-muted-foreground">
                      Sessions sur site ou à distance, adaptées à vos équipes et à vos cas d'usage métier concrets.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover-lift bg-card">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <BadgeCheck className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Formation personnalisée</h3>
                    <p className="text-muted-foreground">
                      Programmes adaptés au niveau de chacun : débutants ou utilisateurs avancés. Aucun prérequis technique.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover-lift bg-card">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                      <Wallet className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Financement Qualiopi</h3>
                    <p className="text-muted-foreground">
                      Organisme certifié Qualiopi : vos formations peuvent être prises en charge par votre OPCO.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages clients */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Linkedin className="h-6 w-6 text-[#0077b5]" />
                <a 
                  href="https://www.linkedin.com/services/page/99439232a0ba4b836b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0077b5] hover:underline font-medium"
                >
                  Voir tous les avis LinkedIn
                </a>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ils ont structuré leur entreprise avec <span className="text-secondary">Notion</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez les retours de clients qui ont transformé leur organisation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border/50 relative overflow-hidden hover-lift bg-card">
                  <div className="absolute top-4 right-4 text-secondary/10">
                    <Quote className="h-16 w-16" />
                  </div>
                  <CardContent className="pt-8 pb-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 relative z-10 leading-relaxed">{testimonial.content}</p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-xl">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title} • {testimonial.company}</p>
                        <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Prêt à structurer votre entreprise avec <span className="text-secondary">Notion</span> ?
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Discutons de vos besoins lors d'un appel découverte gratuit de 30 minutes.
              </p>
              <Button 
                asChild 
                variant="outline"
                size="lg" 
                className="group font-semibold px-8 py-6 text-lg rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <a href="https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Réserver mon appel découverte
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-border/30 bg-background">
          <div className="container mx-auto px-6 text-center">
            <Link to="/" className="text-muted-foreground hover:text-secondary transition-colors font-medium">
              ← Retour à l'accueil
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ConsultanteNotion;
