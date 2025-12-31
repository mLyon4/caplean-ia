import { useEffect } from "react";
import { Button } from "@/components/ui/button";
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
  Wallet,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import notionSpecialistBadge from "@/assets/logos/notion-specialist-badge.png";

const ConsultanteNotion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const implementations = [
    { icon: LayoutDashboard, title: "CRM sur mesure", description: "Gestion clients et prospects adaptée à votre métier" },
    { icon: FolderKanban, title: "Pilotage de projets", description: "Suivi d'avancement, jalons et livrables centralisés" },
    { icon: UserCircle, title: "Gestion RH", description: "Onboarding, suivi des équipes, plannings" },
    { icon: ClipboardList, title: "Documentation", description: "Base de connaissances et procédures internes" },
  ];

  const targetAudience = [
    { icon: Building2, title: "PME en croissance", description: "Structurer pour scaler sans perdre en agilité" },
    { icon: Users, title: "Dirigeants débordés", description: "Reprendre le contrôle de votre organisation" },
    { icon: HardHat, title: "Entreprises Services & BTP", description: "Solutions métier adaptées au terrain" },
  ];

  const whenToCallReasons = [
    "Vous passez plus de temps à chercher l'information qu'à la traiter",
    "Vos outils ne se parlent pas et vous ressaisissez les mêmes données",
    "Votre équipe utilise chacun sa propre méthode de travail",
    "Vous avez essayé Notion mais n'arrivez pas à l'adopter en équipe",
    "Vous voulez un outil qui évolue avec votre entreprise",
  ];

  const whyNotionReasons = [
    { icon: Settings, title: "100% personnalisable", description: "S'adapte à VOTRE façon de travailler" },
    { icon: Zap, title: "Tout-en-un", description: "Un seul outil remplace 5" },
    { icon: Clock, title: "Évolutif", description: "Grandit avec vous, sans migration" },
    { icon: HeartHandshake, title: "Adoption facile", description: "Interface que vos équipes adoptent" },
  ];

  const faqItems = [
    {
      question: "Combien coûte un accompagnement Notion pour PME ?",
      answer: "Le tarif dépend de la complexité de votre projet. Un audit initial gratuit de 30 minutes permet d'évaluer vos besoins et d'établir un devis sur mesure."
    },
    {
      question: "Combien de temps pour mettre en place un système Notion ?",
      answer: "Comptez entre 2 et 8 semaines selon l'ampleur du projet. Un CRM simple peut être opérationnel en 2 semaines, un système complet de pilotage d'entreprise en 6-8 semaines."
    },
    {
      question: "Intervenez-vous uniquement à Lyon ?",
      answer: "Basée à Lyon, j'interviens en présentiel sur Lyon et sa région et à distance dans toute la France pour les PME et entreprises de Services et de BTP."
    },
    {
      question: "La formation Notion est-elle finançable par mon OPCO ?",
      answer: "Oui, mes formations Notion sont certifiées Qualiopi et donc éligibles au financement OPCO."
    },
    {
      question: "Notion est-il adapté aux entreprises du BTP ?",
      answer: "Absolument. Je crée des systèmes Notion spécialisés BTP : SIRH, demandes de congés, gestion des équipes terrain, des services généraux, documentation technique."
    }
  ];

  const testimonials = [
    {
      content: "Christelle nous a accompagné dans notre transition numérique chez AC2R. Grâce à son travail de compréhension de notre mode de fonctionnement et à son analyse très précise, nous avons pu changer de logiciel de gestion après 17 ans. C'est notre magicienne :)",
      author: "Anne-Gaëlle de Kinkelin-Roux",
      title: "DG et Responsable du développement commercial",
      company: "AC2R",
    },
    {
      content: "Une vraie pro 🤩 Christelle a pris le temps d'écouter mes besoins et s'y est très facilement adaptée, avec un grand sens pédagogique. Je suis devenue autonome avec « mon » Notion hyper rapidement! Je recommande les yeux fermés 🚀",
      author: "Céline Mansuy Ferreira",
      title: "Consultante Free-lance",
      company: "Up Neo",
    },
    {
      content: "Son travail a été remarquable : elle a su structurer l'ensemble de manière claire et fluide, tout en gardant une logique d'utilisation simple et intuitive. Résultat : un outil bien plus efficace, adapté à mes besoins.",
      author: "Quentin Forgeot",
      title: "CEO",
      company: "Fireco | Agence Meta Ads",
    },
    {
      content: "Christelle a changé la donne. Elle a écouté mes besoins réels et conçu MON outil. Aujourd'hui, mon assistante et moi collaborons sur une plateforme fluide, fiable, sans superflu. Pour digitaliser avec pragmatisme : foncez !",
      author: "Coralie Moiny",
      title: "Directrice Marketing",
      company: "#FeeCommTuVeux",
    }
  ];

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://christellepicault.fr/#business",
        "name": "Christelle Picault - Consultante Notion",
        "description": "Consultante Notion certifiée à Lyon. Structuration et pilotage d'entreprise pour PME et BTP. Formation Qualiopi, CRM sur mesure, automatisations.",
        "url": "https://christellepicault.fr/consultante-notion-lyon-structuration-pilotage-pme",
        "telephone": "+33",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lyon",
          "addressRegion": "Auvergne-Rhône-Alpes",
          "addressCountry": "FR"
        },
        "areaServed": [
          { "@type": "City", "name": "Lyon" },
          { "@type": "AdministrativeArea", "name": "Auvergne-Rhône-Alpes" },
          { "@type": "Country", "name": "France" }
        ],
        "priceRange": "€€"
      },
      {
        "@type": "Person",
        "@id": "https://christellepicault.fr/#person",
        "name": "Christelle Picault",
        "jobTitle": "Consultante Notion certifiée",
        "description": "Notion Service Specialist certifiée, spécialisée dans la structuration et le pilotage de PME et entreprises BTP à Lyon et en France.",
        "knowsAbout": ["Notion", "Structuration entreprise", "Pilotage PME", "CRM", "BTP", "Formation Qualiopi"],
        "worksFor": {
          "@id": "https://christellepicault.fr/#business"
        }
      },
      {
        "@type": "Service",
        "@id": "https://christellepicault.fr/#service",
        "name": "Consulting Notion pour PME",
        "provider": { "@id": "https://christellepicault.fr/#person" },
        "serviceType": "Consulting",
        "areaServed": "France",
        "description": "Création de systèmes Notion sur mesure : CRM, gestion de projets, RH, documentation. Formation Qualiopi incluse."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Consultante Notion Lyon | Structuration & Pilotage PME - Christelle Picault</title>
        <meta name="description" content="Christelle Picault, consultante Notion certifiée à Lyon. Structuration sur mesure pour PME et BTP : CRM, pilotage projets, formation Qualiopi. Appel découverte gratuit." />
        <link rel="canonical" href="https://christellepicault.fr/consultante-notion-lyon-structuration-pilotage-pme" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Consultante Notion Lyon | Structuration & Pilotage PME - Christelle Picault" />
        <meta property="og:description" content="Christelle Picault, consultante Notion certifiée à Lyon. Structuration sur mesure pour PME et BTP : CRM, pilotage projets, formation Qualiopi." />
        <meta property="og:url" content="https://christellepicault.fr/consultante-notion-lyon-structuration-pilotage-pme" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consultante Notion Lyon | Structuration & Pilotage PME" />
        <meta name="twitter:description" content="Christelle Picault, consultante Notion certifiée à Lyon. Structuration sur mesure pour PME et BTP." />
        
        {/* Additional SEO */}
        <meta name="author" content="Christelle Picault" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Lyon" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background mesh gradient */}
        <div className="fixed inset-0 bg-mesh pointer-events-none" />
        <div className="fixed inset-0 bg-noise pointer-events-none" />
        
        {/* Floating decorative orbs */}
        <div className="fixed top-20 left-[10%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] float-slow pointer-events-none" />
        <div className="fixed top-[40%] right-[5%] w-80 h-80 bg-primary/15 rounded-full blur-[80px] float-medium pointer-events-none" />
        <div className="fixed bottom-[20%] left-[20%] w-64 h-64 bg-secondary/10 rounded-full blur-[60px] float-fast pointer-events-none" />

        {/* Header */}
        <header className="w-full glass-premium sticky top-0 z-50 border-b border-border/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="group flex items-center gap-3 text-foreground/70 hover:text-primary transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                </div>
                <span className="font-medium hidden sm:block">Retour</span>
              </Link>
              <Button 
                asChild 
                className="btn-premium btn-shine"
              >
                <Link to="/#contacts" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Prendre rendez-vous
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="container mx-auto px-6 py-4 relative z-10">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            </li>
            <li><ChevronRight className="h-4 w-4" /></li>
            <li className="text-foreground font-medium">Consultante Notion Lyon</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center pt-8 pb-24">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Badge */}
              <div className="flex justify-center mb-8 reveal-up" style={{ animationDelay: '0.1s' }}>
                <div className="glass-premium px-6 py-3 rounded-full flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-medium text-foreground/80">Christelle Picault – Notion Service Specialist</span>
                </div>
              </div>
              
              {/* Title - H1 SEO optimized */}
              <div className="text-center mb-8 reveal-up" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                  <span className="text-foreground">Structurez votre</span>
                  <br />
                  <span className="text-gradient-animated">entreprise</span>
                  <br />
                  <span className="text-foreground">avec </span>
                  <span className="relative inline-block">
                    <span className="text-secondary">Notion</span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                      <path d="M2 8C50 2 150 2 198 8" stroke="hsl(15, 79%, 57%)" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
                    </svg>
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto leading-relaxed reveal-up" style={{ animationDelay: '0.3s' }}>
                Des systèmes sur mesure pour centraliser l'information, piloter l'activité et faciliter l'adoption par les équipes.
              </p>

              {/* Location */}
              <p className="text-center text-muted-foreground mb-10 reveal-up" style={{ animationDelay: '0.4s' }}>
                📍 Lyon, Auvergne-Rhône-Alpes – Interventions en France entière
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-3 reveal-up" style={{ animationDelay: '0.5s' }}>
                {["Formation Qualiopi", "Systèmes sur mesure", "PME Services & BTP", "Accompagnement"].map((tag, i) => (
                  <span 
                    key={i} 
                    className="glass px-5 py-2.5 rounded-full text-sm font-medium text-foreground/80 border border-primary/20 hover:border-secondary/40 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-12 reveal-up" style={{ animationDelay: '0.6s' }}>
                <Button asChild className="btn-premium btn-shine text-lg px-10 py-6">
                  <a href="https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Appel découverte gratuit
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="glass-premium rounded-[2.5rem] p-10 md:p-14 max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                  J'aide les dirigeants d'entreprise à <span className="text-secondary font-semibold">reprendre le contrôle de leur organisation</span> grâce à Notion.
                </p>
                <p className="text-lg text-muted-foreground">
                  Pas pour "faire joli", mais pour <strong className="text-foreground">piloter</strong>, <strong className="text-foreground">simplifier</strong> et <strong className="text-foreground">gagner du temps</strong>.
                </p>
              </div>

              <div className="border-t border-border/30 pt-10">
                <h2 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Ce qui me distingue
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/70 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Settings className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Notion au service des process métiers</p>
                      <p className="text-sm text-muted-foreground">(pas l'inverse)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/70 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Approche structuration + amélioration continue</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/70 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Une vraie capacité à faire adopter l'outil</p>
                      <p className="text-sm text-muted-foreground">par les équipes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/70 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <HardHat className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Expertise terrain</p>
                      <p className="text-sm text-muted-foreground">(PME, BTP, services)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border/30 text-center">
                <p className="text-lg font-medium text-foreground flex items-center justify-center gap-2">
                  <span className="text-xl">👉</span>
                  Résultat : un espace Notion <span className="text-secondary">clair</span>, <span className="text-secondary">utile</span>, <span className="text-secondary">vivant</span>… et <strong>utilisé</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notion Badge Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="glass-premium rounded-[2.5rem] p-12 max-w-2xl mx-auto text-center">
              <p className="text-2xl font-semibold text-foreground mb-8">
                Une expertise <span className="text-secondary">reconnue par Notion</span>
              </p>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl pulse-glow" />
                <img 
                  src={notionSpecialistBadge} 
                  alt="Badge Notion Service Specialist - Christelle Picault consultante Notion certifiée à Lyon pour PME et BTP" 
                  className="h-36 md:h-44 w-auto mx-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Implementations - Bento Grid */}
        <section className="py-28 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
            <h2 className="section-title text-foreground mb-6">
                Ce que nous <span className="text-gradient-secondary">construisons ensemble</span>
              </h2>
              <p className="section-subtitle">
                Des systèmes Notion sur mesure qui s'adaptent à votre métier
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {implementations.map((item, index) => (
                <div 
                  key={index} 
                  className="bento-card card-premium group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-container w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-28 relative">
          <div className="absolute inset-0 bg-muted/50" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="section-title text-foreground mb-6">
                Pour <span className="text-gradient-secondary">qui</span> ?
              </h2>
              <p className="section-subtitle">
                Dirigeants et entreprises en croissance en région lyonnaise et France
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {targetAudience.map((item, index) => (
                <div key={index} className="group text-center">
                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                      <item.icon className="h-12 w-12 text-primary group-hover:text-secondary transition-colors duration-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Posture Section */}
        <section className="py-28 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="section-title text-foreground mb-6">
                Nos <span className="text-gradient-secondary">offres de valeur</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-premium rounded-[2rem] p-10 card-premium">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center mb-8">
                  <Lightbulb className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Structuration sur mesure</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Pas de template générique. Une analyse de vos processus existants pour créer 
                  un système qui colle à votre réalité métier.
                </p>
              </div>
              
              <div className="glass-premium rounded-[2rem] p-10 card-premium">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-8">
                  <HeartHandshake className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Adoption par les équipes</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Un outil non utilisé ne sert à rien. Formation et suivi pour que le système 
                  soit adopté dans la durée.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to call */}
        <section className="py-28 relative">
          <div className="absolute inset-0 bg-muted/50" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="section-title text-foreground mb-6">
                  Quand faire appel à une <span className="text-gradient-secondary">consultante</span> ?
                </h2>
              </div>
              
              <div className="space-y-4">
                {whenToCallReasons.map((reason, index) => (
                  <div 
                    key={index} 
                    className="glass-premium rounded-2xl p-6 flex items-start gap-5 group hover:border-secondary/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                    </div>
                    <p className="text-foreground text-lg leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Notion */}
        <section className="py-28 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="section-title text-foreground mb-6">
                Pourquoi <span className="text-gradient-secondary">Notion</span> ?
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyNotionReasons.map((item, index) => (
                <div key={index} className="bento-card card-premium text-center group">
                  <div className="icon-container w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formation Section */}
        <section className="py-28 relative">
          <div className="absolute inset-0 bg-muted/50" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="section-title text-foreground mb-6">
                Formation <span className="text-gradient-secondary">Notion</span> (Qualiopi)
              </h2>
              <p className="section-subtitle">
                Orientées usage réel et adoption par les équipes. Finançables OPCO
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: GraduationCap, title: "En entreprise", desc: "Sessions sur site ou à distance, adaptées à vos cas d'usage.", color: "secondary" },
                { icon: BadgeCheck, title: "Personnalisée", desc: "Programmes adaptés au niveau de chacun, sans prérequis.", color: "primary" },
                { icon: Wallet, title: "Financement Qualiopi", desc: "Prises en charge possibles par votre OPCO.", color: "secondary" },
              ].map((item, index) => (
                <div key={index} className="glass-premium rounded-[2rem] p-10 card-premium">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${item.color}/30 to-${item.color}/10 flex items-center justify-center mb-8`}>
                    <item.icon className={`h-10 w-10 text-${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-28 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Linkedin className="h-6 w-6 text-[#0077b5]" />
                <a 
                  href="https://www.linkedin.com/services/page/99439232a0ba4b836b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077b5] hover:underline font-medium"
                >
                  Voir tous les avis
                </a>
              </div>
              <h2 className="section-title text-foreground mb-6">
                Ils ont <span className="text-gradient-secondary">structuré</span> leur entreprise
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-premium rounded-[2rem] p-10 relative overflow-hidden card-premium"
                >
                  <div className="absolute top-6 right-6 text-secondary/10">
                    <Quote className="h-20 w-20" />
                  </div>
                  
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-8 relative z-10 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      <p className="text-sm text-secondary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-28 relative">
          <div className="absolute inset-0 bg-muted/50" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="section-title text-foreground mb-6">
                  Questions fréquentes sur le <span className="text-gradient-secondary">consulting Notion</span>
                </h2>
                <p className="section-subtitle">
                  Tout ce que vous devez savoir avant de travailler avec Christelle Picault
                </p>
              </div>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <details 
                    key={index} 
                    className="glass-premium rounded-2xl group"
                  >
                    <summary className="p-6 cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-foreground text-lg hover:text-secondary transition-colors">
                      {item.question}
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="glass-premium rounded-[3rem] p-16 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-8">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">30 minutes, gratuit</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Prêt à structurer votre entreprise ?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Discutons de vos besoins lors d'un appel découverte gratuit.
              </p>
              
              <Button 
                asChild 
                className="btn-premium btn-shine text-xl px-12 py-7"
              >
                <a 
                  href="https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3"
                >
                  Réserver mon appel découverte
                  <ArrowRight className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border/20 relative z-10">
          <div className="container mx-auto px-6 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors font-medium group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ConsultanteNotion;