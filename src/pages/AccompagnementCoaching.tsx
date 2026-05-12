import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Linkedin,
  Star,
  Quote,
  Repeat,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { trackCTAClick } from "@/lib/analytics";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendly.com/contact-christelle-picault/tout-commence-par-un-echange";

const AccompagnementCoaching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const painPoints = [
    "3 mois après : les vues se dégradent, les automatisations cassent.",
    "Les équipes reviennent sur Excel « juste pour cette fois ».",
    "L'IA évolue — vous, vous n'avez pas le temps de suivre.",
    "Les nouvelles recrues n'ont jamais été formées au système.",
    "Votre belle architecture devient une dette technique.",
    "12 mois plus tard : votre investissement initial a fondu.",
  ];

  const promises = [
    "Un écosystème digital qui reste propre, performant, vivant",
    "Des équipes formées en continu, qui gardent les bons réflexes",
    "Une intégration progressive de l'IA dans votre quotidien opérationnel",
    "Des KPI dirigeant lisibles, ajustés à vos priorités",
    "Un partenaire qui connaît votre business — pas un prestataire interchangeable",
  ];

  const monthlyPillars = [
    {
      emoji: "🔧",
      title: "Optimisation continue",
      description: "Revue mensuelle de votre écosystème digital (outils, bases, vues, automatisations). Corrections, ajustements, nettoyage. Mises à jour Notion et intégration des nouveautés.",
    },
    {
      emoji: "📈",
      title: "Évolutions fonctionnelles",
      description: "Nouveaux process, nouvelles bases, nouveaux dashboards. Nouvelles automatisations et intégrations IA. Connexions entre vos outils (ERP, CRM, Drive, mails, Notion).",
    },
    {
      emoji: "🎓",
      title: "Formation & adoption",
      description: "Sessions de formation à la demande pour vos nouvelles recrues (Qualiopi). Piqûres de rappel pour vos équipes existantes. Mise à jour de la documentation vidéo.",
    },
    {
      emoji: "📊",
      title: "Pilotage dirigeant",
      description: "Revue des KPI dirigeant : ce qui marche, ce qui dérive. Ajustement du tableau de bord selon vos priorités. Lecture mensuelle des chiffres avec vous.",
    },
    {
      emoji: "🤖",
      title: "Veille IA & Digital",
      description: "Veille mensuelle sur les nouveautés IA, Notion et outils digitaux PME. Recommandations ciblées. Test et intégration des fonctionnalités pertinentes.",
    },
  ];

  const monthlyFormulas = [
    {
      name: "Essentiel",
      volume: "4h/mois",
      ideal: "Entreprise qui veut garder son écosystème digital propre",
      price: "490 € HT/mois",
    },
    {
      name: "Croissance",
      volume: "8h/mois",
      ideal: "Entreprise en évolution digitale active",
      price: "890 € HT/mois",
      highlighted: true,
    },
    {
      name: "Premium",
      volume: "16h/mois",
      ideal: "Entreprise avec besoin de co-pilotage digital",
      price: "1 690 € HT/mois",
    },
  ];

  const monthlyIncluded = [
    "Point mensuel d'1 heure (revue + arbitrages)",
    "Accès direct par mail / WhatsApp entre les points",
    "Reporting mensuel d'activité",
    "Veille Digital + IA ciblée PME",
    "Documentation tenue à jour",
  ];

  const carnetUses = [
    "Structurer vos process : CRM, suivi clients, gestion de projets, OKR",
    "Mettre en place Notion comme socle de votre organisation",
    "Choisir et articuler vos outils digitaux (Notion, Drive, mails, IA…)",
    "Intégrer l'IA dans votre quotidien opérationnel",
    "Former votre équipe (même petite) aux bons réflexes",
    "Débloquer un projet spécifique par sprints ciblés",
  ];

  const carnetFormulas = [
    { name: "Carnet 5h", volume: "5 heures", price: "690 € HT", ideal: "Un démarrage, une formation ciblée, un sprint ponctuel" },
    { name: "Carnet 10h", volume: "10 heures", price: "1 290 € HT", ideal: "Une structuration complète, une refonte de process, une montée en compétence équipe", highlighted: true },
  ];

  const carnetModalities = [
    "Heures consommables par créneaux d'1h minimum",
    "Validité 6 mois à partir de l'achat",
    "Sessions en visio ou sur site (frais en sus si déplacement)",
    "Reporting de consommation à chaque session",
    "Possibilité de basculer vers un Suivi mensuel à tout moment (heures restantes reportées)",
  ];

  const trustReasons = [
    "Certifiée PMP® — Project Management Professional",
    "Plus de 20 ans d'expérience en ESN",
    "Certifiée Qualiopi — vos formations sont finançables",
    "Ambassadrice Notion — expertise pointue sur l'outil de référence",
    "Expertise Lean + Digital — je structure avant d'outiller",
    "Orientation PME — je parle dirigeant, pas jargon technique",
    "Veille IA continue — vous restez à jour sans devoir suivre vous-même",
    "Maximum 8 clients en Suivi mensuel simultané -- pour garantir réactivité et qualité du suivi",
  ];

  const forSuivi = [
    "Vous avez déjà terminé Le Cap Digital, l'Espace Notion ou l'Accompagnement Global",
    "Vous voulez un partenaire digital fixe, sans recruter en interne",
    "Votre PME est en croissance active (nouveaux process, équipes, outils)",
    "Vous voulez que votre transformation digitale vive dans la durée",
  ];

  const forCarnet = [
    "Vous êtes une petite structure (TPE, indépendant, jeune PME) qui veut se structurer",
    "Vous voulez du coaching ponctuel sans engagement mensuel",
    "Vous avez un projet précis (mise en place Notion, refonte process, intégration IA)",
    "Vous êtes client existant et avez un besoin spécifique",
  ];

  const notForWhom = [
    "Vous cherchez un « dépanneur à la demande » hors carnet (pas de TJM isolé)",
    "Vous voulez tout sous-traiter sans vous impliquer dans les arbitrages",
    "Vous attendez un effet magique sans poser les bases d'une vraie transformation",
  ];

  const journeySteps = [
    { emoji: "🗺️", week: "Mois 1", title: "Calage", desc: "Point d'ouverture, roadmap digitale 12 mois, définition des KPI dirigeant prioritaires, première session d'optimisation." },
    { emoji: "🔧", week: "Mois 2-3", title: "Premières évolutions", desc: "Nouveaux besoins intégrés (outils, process, automatisations), 1ère piqûre de rappel formation." },
    { emoji: "🚀", week: "Mois 4-6", title: "Croisière", desc: "Optimisations continues, intégrations IA ciblées, bilan trimestriel + ajustement formule si besoin." },
    { emoji: "🏁", week: "Mois 7-12", title: "Extension", desc: "Nouveaux outils / process métier selon croissance, onboarding nouveaux collaborateurs, bilan annuel + roadmap 12 mois suivants." },
  ];

  const faqItems = [
    {
      question: "Et si je ne consomme pas toutes mes heures ?",
      answer: "Suivi mensuel : les heures non consommées sont reportées sur le mois suivant (dans la limite de 2 mois). Carnet d'heures : vous avez 6 mois pour consommer la totalité du carnet.",
    },
    {
      question: "Je peux changer de formule en cours de route ?",
      answer: "Oui. Sur le Suivi mensuel, vous pouvez monter ou descendre à chaque échéance trimestrielle. Vous pouvez aussi passer d'un Carnet à un Suivi mensuel à tout moment, avec report des heures restantes.",
    },
    {
      question: "Le Carnet d'heures est-il vraiment adapté à une petite structure ?",
      answer: "Oui, c'est sa raison d'être. 5h ou 10h c'est le bon volume pour structurer un CRM, mettre en place Notion, ou débloquer un projet précis sans s'engager au mois.",
    },
    {
      question: "Les formations sont-elles finançables ?",
      answer: "Oui, je suis certifiée Qualiopi. Les sessions de formation peuvent être prises en charge par votre OPCO selon votre situation.",
    },
    {
      question: "Vous intervenez uniquement sur Notion ?",
      answer: "Non. Notion est mon socle d'expertise, mais l'accompagnement couvre votre écosystème digital complet : Drive, CRM, mails, IA, automatisations, articulation entre outils, conduite du changement.",
    },
    {
      question: "Sous quel délai démarre-t-on ?",
      answer: "Carnet d'heures : sous 15 jours. Suivi mensuel : le mois suivant la signature.",
    },
  ];

  const testimonials = [
    { content: "Christelle nous a accompagné dans notre transition numérique chez AC2R. Grâce à son travail de compréhension de notre mode de fonctionnement et à son analyse très précise, nous avons pu changer de logiciel de gestion après 17 ans. C'est notre magicienne :)", author: "Anne-Gaëlle de Kinkelin-Roux", title: "DG", company: "AC2R" },
    { content: "Une vraie pro 🤩 Christelle a pris le temps d'écouter mes besoins et s'y est très facilement adaptée, avec un grand sens pédagogique. Je suis devenue autonome avec « mon » Notion hyper rapidement! Je recommande les yeux fermés 🚀", author: "Céline Mansuy Ferreira", title: "Consultante Free-lance", company: "Up Neo" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Accompagnement & Coaching sur-mesure Notion & Digital PME",
        serviceType: "Consulting & Coaching",
        areaServed: "France",
        description: "Accompagnement digital sur-mesure pour PME : Suivi mensuel (à partir de 490 € HT/mois) ou Carnet d'heures (à partir de 700 € HT). Notion, IA, outils, formation Qualiopi.",
        offers: [
          { "@type": "Offer", name: "Suivi mensuel Essentiel", price: "490", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Suivi mensuel Croissance", price: "1300", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Suivi mensuel Premium", price: "2400", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Carnet 5h", price: "700", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Carnet 10h", price: "1300", priceCurrency: "EUR" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((i) => ({
          "@type": "Question",
          name: i.question,
          acceptedAnswer: { "@type": "Answer", text: i.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accompagnement & Coaching sur-mesure Notion & Digital PME | Christelle Picault</title>
        <meta name="description" content="Faites vivre votre transformation digitale : Suivi mensuel (à partir de 490 € HT/mois) ou Carnet d'heures (à partir de 700 € HT) — coaching Notion, IA et digital pour PME." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Accompagnement & Coaching sur-mesure — Notion, IA & Digital PME" />
        <meta property="og:description" content="Suivi mensuel ou Carnet d'heures : un partenaire fixe pour faire vivre votre digital, ou des sprints ciblés pour vous structurer." />
        <meta property="og:locale" content="fr_FR" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-b from-muted/30 via-background to-background pointer-events-none" />

        {/* Header */}
        <header className="w-full bg-background/80 backdrop-blur-lg sticky top-0 z-50 border-b border-border/30">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium hidden sm:block">Retour</span>
              </Link>
              <Button asChild className="bg-secondary hover:bg-secondary-dark text-foreground rounded-full px-6 py-2 shadow-lg shadow-secondary/20">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  onClick={() => trackCTAClick("Prendre rendez-vous", "accompagnement_header", "calendly")}
                >
                  Prendre rendez-vous
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="container mx-auto px-6 py-4 relative z-10">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
            <li><ChevronRight className="h-4 w-4" /></li>
            <li className="text-foreground font-medium">Accompagnement & Coaching</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative py-8 md:py-16 lg:py-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Accompagnement & Coaching sur-mesure</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                  Faites <span className="text-secondary">vivre</span> votre transformation digitale
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Votre transformation digitale mérite mieux qu'un projet « one shot ». Faites-la vivre, à votre rythme — avec un <strong className="text-foreground">partenaire fixe au mois</strong>, ou par <strong className="text-foreground">sprints ciblés</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button asChild className="btn-premium text-base px-8 py-6">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                      onClick={() => trackCTAClick("Réserver un échange", "accompagnement_hero", "calendly")}
                    >
                      Réserver un échange de 30 min
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <span className="text-sm text-muted-foreground self-center">📍 Lyon · France entière</span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/5 border border-secondary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Repeat className="h-6 w-6 text-secondary" />
                    <h3 className="font-bold text-foreground">Le Suivi mensuel</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Un partenaire digital fixe, tous les mois, pour faire évoluer votre écosystème.</p>
                  <p className="text-secondary font-bold">À partir de 490 € HT/mois</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-foreground">Le Carnet d'heures</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">5h ou 10h de coaching Notion ou Digital, utilisables sur 6 mois.</p>
                  <p className="text-primary font-bold">À partir de 700 € HT</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-14 md:py-24 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Le <span className="text-gradient-secondary">constat</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Vous avez investi dans votre digital. Vous avez structuré Notion, branché vos outils, formé vos équipes. Et puis le quotidien reprend le dessus…
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                {painPoints.map((point, i) => (
                  <div key={i} className="glass-premium rounded-xl md:rounded-2xl p-4 md:p-6 flex items-start gap-3 md:gap-5">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                    </div>
                    <p className="text-sm md:text-lg text-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="text-3xl md:text-4xl flex-shrink-0">💡</div>
                  <div>
                    <p className="text-lg md:text-xl text-foreground font-semibold mb-3">
                      Une transformation digitale bien menée, ce n'est pas un projet. C'est un produit vivant.
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Comme un ERP, comme un CRM — elle doit être maintenue, améliorée, étendue. Sinon, elle s'érode.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section className="py-14 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  La <span className="text-gradient-secondary">promesse</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  Que vous choisissiez le Suivi mensuel ou le Carnet d'heures, vous obtenez :
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {promises.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 md:p-5 rounded-xl bg-card border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Suivi mensuel */}
        <section className="py-14 md:py-28 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
                <Repeat className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Le Suivi mensuel</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Un partenariat actif d'<span className="text-gradient-secondary">amélioration continue</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Pas un contrat de maintenance passif. Chaque mois, j'optimise vos outils, je forme vos équipes, je branche les nouveaux process, j'intègre l'IA — pour que votre investissement digital continue de produire de la valeur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto mb-12">
              {monthlyPillars.map((d, i) => (
                <div key={i} className="glass-premium rounded-2xl p-6 md:p-8 card-premium">
                  <div className="text-3xl md:text-4xl mb-3">{d.emoji}</div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{d.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Les 3 formules Suivi mensuel</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {monthlyFormulas.map((f, i) => (
                <div
                  key={i}
                  className={`glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-8 card-premium ${
                    f.highlighted ? "border-2 border-secondary/40" : ""
                  }`}
                >
                  <h4 className="text-2xl font-bold text-foreground mb-1">{f.name}</h4>
                  <p className="text-secondary font-semibold mb-4">{f.volume}</p>
                  <p className="text-sm text-muted-foreground mb-6 min-h-[60px]">{f.ideal}</p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-base md:text-lg font-bold text-foreground">{f.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm md:text-base text-muted-foreground mt-6 font-medium">Engagement minimum 3 mois</p>

            <div className="max-w-4xl mx-auto mt-12">
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">Inclus dans toutes les formules Suivi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {monthlyIncluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Carnet d'heures */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Le Carnet d'heures</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Pour les petites structures qui veulent <span className="text-gradient-secondary">se structurer</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Vous êtes TPE, indépendant, jeune PME ? Vous sentez que votre organisation digitale freine votre croissance, mais vous n'êtes pas prêt à vous engager en mensuel ? Le Carnet d'heures est fait pour vous.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">Ce que vous pouvez faire avec votre carnet</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {carnetUses.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Les 2 formules Carnet</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {carnetFormulas.map((f, i) => (
                <div
                  key={i}
                  className={`glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-10 card-premium ${
                    f.highlighted ? "border-2 border-primary/40" : ""
                  }`}
                >
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{f.name}</h4>
                  <p className="text-primary font-semibold mb-4">{f.volume}</p>
                  <p className="text-sm text-muted-foreground mb-6">{f.ideal}</p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-base md:text-lg font-bold text-foreground">{f.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">Au choix — deux orientations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-premium rounded-2xl p-6 md:p-8">
                  <div className="text-3xl mb-3">📐</div>
                  <h4 className="text-lg md:text-xl font-bold text-foreground mb-3">Coaching Notion</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Prise en main, structuration de bases, vues, automatisations, formation équipe.
                  </p>
                </div>
                <div className="glass-premium rounded-2xl p-6 md:p-8">
                  <div className="text-3xl mb-3">🌐</div>
                  <h4 className="text-lg md:text-xl font-bold text-foreground mb-3">Coaching Digital</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Choix d'outils, articulation de votre stack, intégration IA, conduite du changement, optimisation de process.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">Modalités Carnet d'heures</h3>
              <div className="space-y-3">
                {carnetModalities.map((m, i) => (
                  <div key={i} className="glass-premium rounded-xl p-4 md:p-5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-foreground">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-14 md:py-24 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Mes <span className="text-gradient-secondary">garanties</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-7 w-7 text-secondary" />
                  <h3 className="text-lg font-bold text-foreground">🔄 Flexibilité totale</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Besoin d'un mois plus chargé ? Vous basculez sur la formule supérieure, sans être engagé dessus. Ou vous complétez avec un Carnet.
                </p>
              </div>
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-7 w-7 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">📊 Transparence</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Reporting mensuel détaillé : heures consommées, actions réalisées, recommandations. Vous savez exactement ce que vous payez.
                </p>
              </div>
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-7 w-7 text-secondary" />
                  <h3 className="text-lg font-bold text-foreground">🤝 Engagement raisonnable</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Suivi mensuel par tranche de 3 mois renouvelable. Carnet sans engagement. Vous gardez la main.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-14 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Pourquoi me <span className="text-gradient-secondary">choisir</span>
                </h2>
              </div>
              <div className="space-y-3">
                {trustReasons.map((r, i) => (
                  <div key={i} className="glass-premium rounded-xl p-4 md:p-5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-foreground">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="py-14 md:py-24 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-6">
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">✅ Le Suivi mensuel est fait pour vous si :</h3>
                <ul className="space-y-3">
                  {forSuivi.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-premium rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">✅ Le Carnet d'heures est fait pour vous si :</h3>
                <ul className="space-y-3">
                  {forCarnet.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="glass-premium rounded-2xl p-6 md:p-8 bg-muted/30">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">❌ Ces offres ne sont PAS pour vous si :</h3>
                <ul className="space-y-3">
                  {notForWhom.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                      <span className="text-muted-foreground font-bold mt-0.5">✗</span>
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Le parcours-type Suivi mensuel sur <span className="text-gradient-secondary">12 mois</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
              {journeySteps.map((s, i) => (
                <div key={i} className="glass-premium rounded-2xl p-6 card-premium">
                  <div className="text-3xl mb-3">{s.emoji}</div>
                  <p className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">{s.week}</p>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 md:py-28 relative">
          <div className="absolute inset-0 bg-muted/40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
                <Linkedin className="h-5 w-5 text-[#0077b5]" />
                <a
                  href="https://www.linkedin.com/services/page/99439232a0ba4b836b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-[#0077b5] hover:underline font-medium"
                >
                  Voir tous les avis
                </a>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Ils m'ont fait <span className="text-gradient-secondary">confiance</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="glass-premium rounded-2xl md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden card-premium">
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 text-secondary/10">
                    <Quote className="h-12 w-12 md:h-20 md:w-20" />
                  </div>
                  <div className="flex gap-1 mb-4 md:mb-6 relative z-10">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-4 w-4 md:h-5 md:w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm md:text-lg text-foreground mb-5 md:mb-8 relative z-10 leading-relaxed">"{t.content}"</p>
                  <div className="relative z-10">
                    <p className="font-bold text-sm md:text-base text-foreground">{t.author}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{t.title}</p>
                    <p className="text-xs md:text-sm text-secondary font-medium">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Questions <span className="text-gradient-secondary">fréquentes</span>
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4">
                {faqItems.map((item, i) => (
                  <details key={i} className="glass-premium rounded-xl md:rounded-2xl group">
                    <summary className="p-4 md:p-6 cursor-pointer list-none flex items-center justify-between gap-3 font-semibold text-foreground text-sm md:text-lg hover:text-secondary transition-colors">
                      {item.question}
                      <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">{item.answer}</div>
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
                <span className="text-xs md:text-sm font-medium text-secondary">30 minutes, gratuit & sans engagement</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6">
                Prête à faire vivre votre transformation digitale ?
              </h2>
              <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
                Contactez-moi pour caler un premier échange de 30 min. On choisit ensemble la formule — Suivi mensuel ou Carnet d'heures — et on démarre sous 15 jours.
              </p>
              <Button
                asChild
                className="bg-secondary hover:bg-secondary-dark text-foreground btn-shine text-base md:text-xl px-8 md:px-12 py-5 md:py-7 w-full sm:w-auto rounded-full shadow-md"
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:gap-3"
                  onClick={() => trackCTAClick("Prendre rendez-vous", "accompagnement_footer_cta", "calendly")}
                >
                  Prendre rendez-vous
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground mt-6">
                Maximum 8 clients en Suivi mensuel simultané — pour garantir réactivité et qualité du suivi.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AccompagnementCoaching;
