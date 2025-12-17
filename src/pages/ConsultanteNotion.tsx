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
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import notionServiceSpecialist from "@/assets/logos/notion-service-specialist.png";

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
        <header className="w-full bg-white/95 backdrop-blur-lg border-b border-border/30 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Retour à l'accueil</span>
              </Link>
              <Button asChild className="text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm" style={{backgroundColor: '#3f779d'}}>
                <Link to="/#contacts">Prendre rendez-vous</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <img 
                  src={notionServiceSpecialist} 
                  alt="Notion Service Specialist" 
                  className="h-8 w-auto"
                />
                Spécialiste Notion Entreprise
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Consultante Notion pour TPE et PME : <span className="text-primary">mise en place de votre système de pilotage</span>, formation des équipes (Qualiopi)
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Systèmes Notion sur mesure pour structurer votre organisation. 
                Je crée des espaces de travail qui transforment le chaos en pilotage clair.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                <span className="bg-muted px-3 py-1 rounded-full">consultante Notion</span>
                <span className="bg-muted px-3 py-1 rounded-full">spécialiste Notion entreprise</span>
                <span className="bg-muted px-3 py-1 rounded-full">formation Notion Qualiopi</span>
                <span className="bg-muted px-3 py-1 rounded-full">système Notion sur mesure</span>
                <span className="bg-muted px-3 py-1 rounded-full">Notion pour le BTP</span>
              </div>
            </div>
          </div>
        </section>

        {/* Ce que je mets en place */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ce que je mets en place concrètement
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des systèmes Notion sur mesure qui s'adaptent à votre métier et vos processus
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementations.map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pour qui ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                J'accompagne les structures qui veulent professionnaliser leur organisation
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {targetAudience.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avant / Après */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Avant / Après
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-destructive/30 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-destructive flex items-center gap-2">
                    😵 Avant : le chaos doux
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">• Informations éparpillées entre mails, Excel, Drive...</p>
                  <p className="text-muted-foreground">• Chaque collaborateur a sa propre méthode</p>
                  <p className="text-muted-foreground">• Impossible de suivre l'avancement des projets</p>
                  <p className="text-muted-foreground">• Le dirigeant est le "hub" de toutes les infos</p>
                  <p className="text-muted-foreground">• Onboarding des nouveaux = bricolage</p>
                </CardContent>
              </Card>
              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    ✨ Après : pilotage clair
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">• Une source unique de vérité pour toute l'équipe</p>
                  <p className="text-muted-foreground">• Processus documentés et partagés</p>
                  <p className="text-muted-foreground">• Tableaux de bord pour piloter en un coup d'œil</p>
                  <p className="text-muted-foreground">• Autonomie des équipes, moins de sollicitations</p>
                  <p className="text-muted-foreground">• Onboarding fluide avec tout au même endroit</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ma posture */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ma posture d'accompagnement
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Lightbulb className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Structuration sur mesure</h3>
                  <p className="text-muted-foreground">
                    Je ne plaque pas un template générique. J'analyse vos processus existants pour créer 
                    un système Notion qui colle à votre réalité métier.
                  </p>
                </div>
                <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <HeartHandshake className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Adoption par les équipes</h3>
                  <p className="text-muted-foreground">
                    Un outil non utilisé ne sert à rien. Je forme vos équipes et m'assure que le système 
                    est adopté dans la durée, pas abandonné après 2 semaines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quand faire appel */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Quand faire appel à une consultante Notion ?
                </h2>
              </div>
              <div className="space-y-4">
                {whenToCallReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Notion */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pourquoi Notion plutôt qu'un outil classique ?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyNotionReasons.map((item, index) => (
                <Card key={index} className="border-border/50 text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages clients */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Linkedin className="h-6 w-6 text-blue-600" />
                <a 
                  href="https://www.linkedin.com/services/page/99439232a0ba4b836b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Voir tous les avis LinkedIn
                </a>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ils ont structuré leur entreprise avec Notion
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez les retours de clients qui ont transformé leur organisation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border/50 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-primary/10">
                    <Quote className="h-12 w-12" />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 relative z-10">{testimonial.content}</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-lg">
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
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Prêt à structurer votre entreprise avec Notion ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discutons de vos besoins lors d'un appel découverte gratuit de 30 minutes.
              </p>
              <Button asChild size="lg" className="text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-md" style={{backgroundColor: '#3f779d'}}>
                <Link to="/#contacts" className="flex items-center gap-2">
                  Réserver mon appel découverte
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border/30">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              ← Retour à l'accueil
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ConsultanteNotion;
