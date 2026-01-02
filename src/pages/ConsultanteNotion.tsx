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
        "url": "https://christellepicault.fr/consultante-notion-certifiee-notion-service-specialist-lyon-structuration-pilotage-pme",
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
        <link rel="canonical" href="https://christellepicault.fr/consultante-notion-certifiee-notion-service-specialist-lyon-structuration-pilotage-pme" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Consultante Notion Lyon | Structuration & Pilotage PME - Christelle Picault" />
        <meta property="og:description" content="Christelle Picault, consultante Notion certifiée à Lyon. Structuration sur mesure pour PME et BTP : CRM, pilotage projets, formation Qualiopi." />
        <meta property="og:url" content="https://christellepicault.fr/consultante-notion-certifiee-notion-service-specialist-lyon-structuration-pilotage-pme" />
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
        
        {/* Subtle decorative backgrounds */}
        <div className="fixed top-20 left-[10%] w-96 h-96 bg-muted/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="fixed top-[40%] right-[5%] w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="fixed bottom-[20%] left-[20%] w-64 h-64 bg-muted/40 rounded-full blur-[60px] pointer-events-none" />

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

        {/* Hero Section - Value Proposition */}
        <section className="relative min-h-[auto] md:min-h-[85vh] flex items-center py-10 md:py-16 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-secondary/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
          <div className="absolute bottom-20 right-1/4 w-40 md:w-64 h-40 md:h-64 bg-primary/10 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Main headline - H1 SEO */}
              <div className="text-center mb-6 md:mb-10 reveal-up" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-5 md:mb-8">
                  J'aide les dirigeants à{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient-secondary">reprendre le contrôle</span>
                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                      <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--secondary))" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                    </svg>
                  </span>
                  <br className="hidden sm:block" />
                  {" "}de leur organisation grâce à{" "}
                  <span className="relative inline-block">
                    <span className="text-secondary">Notion</span>
                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                      <path d="M2 8C50 2 150 2 198 8" stroke="hsl(15, 79%, 57%)" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
                    </svg>
                  </span>
                </h1>
                <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
                  Pas pour "faire joli", mais pour{" "}
                  <span className="text-foreground font-semibold">piloter</span>,{" "}
                  <span className="text-foreground font-semibold">simplifier</span> et{" "}
                  <span className="text-foreground font-semibold">gagner du temps</span>.
                </p>
              </div>

              {/* Location */}
              <p className="text-center text-sm md:text-base text-muted-foreground mb-4 md:mb-6 reveal-up" style={{ animationDelay: '0.2s' }}>
                📍 Lyon – Interventions en France entière
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 reveal-up" style={{ animationDelay: '0.25s' }}>
                {["Formation Qualiopi", "PME Services & BTP", "Accompagnement"].map((tag, i) => (
                  <span 
                    key={i} 
                    className="glass px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium text-foreground/80 border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Distinguishing features */}
              <div className="mb-8 md:mb-12">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 reveal-up" style={{ animationDelay: '0.35s' }}>
                  <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-secondary/50" />
                  <span className="text-xl md:text-2xl">🎯</span>
                  <h2 className="text-base md:text-xl font-bold text-foreground">Ce qui me distingue</h2>
                  <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-secondary/50" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                  {[
                    { icon: Settings, text: "Notion au service des process métiers", subtext: "(pas l'inverse)" },
                    { icon: Lightbulb, text: "Approche structuration + amélioration continue", subtext: null },
                    { icon: Users, text: "Une vraie capacité à faire adopter l'outil", subtext: "par les équipes" },
                    { icon: HardHat, text: "Expertise terrain", subtext: "(PME, BTP, services)" },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="group relative glass rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/30 hover:border-secondary/40 transition-all duration-500 reveal-up"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative flex items-center gap-3 md:gap-5">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-secondary/10">
                          <item.icon className="h-5 w-5 md:h-7 md:w-7 text-secondary" />
                        </div>
                        <p className="font-semibold text-foreground text-sm md:text-lg leading-snug">
                          {item.text}
                          {item.subtext && (
                            <span className="text-muted-foreground font-normal ml-1 text-xs md:text-base">{item.subtext}</span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Result banner */}
              <div className="reveal-up mb-8 md:mb-10" style={{ animationDelay: '0.8s' }}>
                <div className="relative glass-premium rounded-xl md:rounded-2xl p-5 md:p-8 text-center overflow-hidden">
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 opacity-50" />
                  <div className="absolute inset-[1px] rounded-xl md:rounded-2xl bg-background/80 backdrop-blur-xl" />
                  
                  <div className="relative flex flex-col items-center justify-center gap-3 md:gap-4">
                    <span className="text-2xl md:text-3xl animate-bounce">👉</span>
                    <p className="text-base md:text-xl lg:text-2xl font-medium text-foreground">
                      Résultat : un espace Notion
                    </p>
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary font-semibold text-sm md:text-base">clair</span>
                      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary font-semibold text-sm md:text-base">utile</span>
                      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary font-semibold text-sm md:text-base">vivant</span>
                    </div>
                    <p className="text-base md:text-xl font-medium text-foreground">
                      … et <strong className="text-secondary">utilisé</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center reveal-up" style={{ animationDelay: '0.9s' }}>
                <Button asChild className="btn-premium btn-shine text-base md:text-lg px-6 md:px-10 py-5 md:py-6 w-full sm:w-auto">
                  <a href="https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Appel découverte gratuit
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Notion Badge Section */}
        <section className="py-10 md:py-16 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="glass-premium rounded-2xl md:rounded-[2.5rem] p-8 md:p-12 max-w-2xl mx-auto text-center">
              <p className="text-lg md:text-2xl font-semibold text-foreground mb-6 md:mb-8">
                Une expertise <span className="text-secondary">reconnue par Notion</span>
              </p>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-muted/60 rounded-full blur-2xl" />
                <img 
                  src={notionSpecialistBadge} 
                  alt="Badge Notion Service Specialist - Christelle Picault consultante Notion certifiée à Lyon pour PME et BTP" 
                  className="h-28 md:h-44 w-auto mx-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Implementations - Bento Grid */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Ce que nous <span className="text-gradient-secondary">construisons ensemble</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                Des systèmes Notion sur mesure qui s'adaptent à votre métier
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
              {implementations.map((item, index) => (
                <div 
                  key={index} 
                  className="bento-card card-premium group p-4 md:p-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-container w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-14 md:py-28 relative">
          <div className="absolute inset-0 bg-muted/50" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Pour <span className="text-gradient-secondary">qui</span> ?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                Dirigeants et entreprises en croissance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {targetAudience.map((item, index) => (
                <div key={index} className="group text-center">
                  <div className="relative inline-block mb-4 md:mb-8">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                      <item.icon className="h-8 w-8 md:h-12 md:w-12 text-primary group-hover:text-secondary transition-colors duration-500" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-4">{item.title}</h3>
                  <p className="text-sm md:text-lg text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Posture Section */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Nos <span className="text-gradient-secondary">offres de valeur</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
              <div className="glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-10 card-premium">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center mb-4 md:mb-8">
                  <Lightbulb className="h-7 w-7 md:h-10 md:w-10 text-secondary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Structuration sur mesure</h3>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                  Pas de template générique. Une analyse de vos processus existants pour créer 
                  un système qui colle à votre réalité métier.
                </p>
              </div>
              
              <div className="glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-10 card-premium">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-4 md:mb-8">
                  <HeartHandshake className="h-7 w-7 md:h-10 md:w-10 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Adoption par les équipes</h3>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                  Un outil non utilisé ne sert à rien. Formation et suivi pour que le système 
                  soit adopté dans la durée.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to call */}
        <section className="py-14 md:py-28 relative">
          <div className="absolute inset-0 bg-muted/50" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  Quand faire appel à une <span className="text-gradient-secondary">consultante</span> ?
                </h2>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {whenToCallReasons.map((reason, index) => (
                  <div 
                    key={index} 
                    className="glass-premium rounded-xl md:rounded-2xl p-4 md:p-6 flex items-start gap-3 md:gap-5 group hover:border-secondary/30 transition-all duration-300"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                    </div>
                    <p className="text-sm md:text-lg text-foreground leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Notion */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Pourquoi <span className="text-gradient-secondary">Notion</span> ?
              </h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
              {whyNotionReasons.map((item, index) => (
                <div key={index} className="bento-card card-premium text-center group p-4 md:p-6">
                  <div className="icon-container w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-xs md:text-base text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formation Section */}
        <section className="py-14 md:py-28 relative">
          <div className="absolute inset-0 bg-muted/50" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Formation <span className="text-gradient-secondary">Notion</span> (Qualiopi)
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                Orientées usage réel et adoption par les équipes. Finançables OPCO
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
              {[
                { icon: GraduationCap, title: "En entreprise", desc: "Sessions sur site ou à distance, adaptées à vos cas d'usage.", color: "secondary" },
                { icon: BadgeCheck, title: "Personnalisée", desc: "Programmes adaptés au niveau de chacun, sans prérequis.", color: "primary" },
                { icon: Wallet, title: "Financement Qualiopi", desc: "Prises en charge possibles par votre OPCO.", color: "secondary" },
              ].map((item, index) => (
                <div key={index} className="glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-10 card-premium">
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-${item.color}/30 to-${item.color}/10 flex items-center justify-center mb-4 md:mb-8`}>
                    <item.icon className={`h-7 w-7 md:h-10 md:w-10 text-${item.color}`} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-4">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-20">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-[#0077b5]" />
                <a 
                  href="https://www.linkedin.com/services/page/99439232a0ba4b836b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-[#0077b5] hover:underline font-medium"
                >
                  Voir tous les avis
                </a>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Ils ont <span className="text-gradient-secondary">structuré</span> leur entreprise
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden card-premium"
                >
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 text-secondary/10">
                    <Quote className="h-12 w-12 md:h-20 md:w-20" />
                  </div>
                  
                  <div className="flex gap-1 mb-4 md:mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  
                  <p className="text-sm md:text-lg text-foreground mb-5 md:mb-8 relative z-10 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3 md:gap-4 relative z-10">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-base md:text-xl">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-sm md:text-base text-foreground">{testimonial.author}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{testimonial.title}</p>
                      <p className="text-xs md:text-sm text-secondary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-14 md:py-28 relative">
          <div className="absolute inset-0 bg-muted/50" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  Questions fréquentes sur le <span className="text-gradient-secondary">consulting Notion</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                  Tout ce que vous devez savoir avant de travailler avec Christelle Picault
                </p>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {faqItems.map((item, index) => (
                  <details 
                    key={index} 
                    className="glass-premium rounded-xl md:rounded-2xl group"
                  >
                    <summary className="p-4 md:p-6 cursor-pointer list-none flex items-center justify-between gap-3 md:gap-4 font-semibold text-foreground text-sm md:text-lg hover:text-secondary transition-colors">
                      {item.question}
                      <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="glass-premium rounded-2xl md:rounded-[3rem] p-8 md:p-16 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-6 md:mb-8">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-secondary" />
                <span className="text-xs md:text-sm font-medium text-secondary">30 minutes, gratuit</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6">
                Prêt à structurer votre entreprise ?
              </h2>
              
              <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
                Discutons de vos besoins lors d'un appel découverte gratuit.
              </p>
              
              <Button 
                asChild 
                className="btn-premium btn-shine text-base md:text-xl px-8 md:px-12 py-5 md:py-7 w-full sm:w-auto"
              >
                <a 
                  href="https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 md:gap-3"
                >
                  Réserver mon appel découverte
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-12 border-t border-border/20 relative z-10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-secondary transition-colors font-medium group"
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