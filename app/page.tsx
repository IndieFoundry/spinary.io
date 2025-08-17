"use client";

import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Download,
  MessageSquare,
  Shuffle,
  Sparkles,
  Target,
  TreePine,
  Upload,
  Wand2,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const smoothScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Assistant IA SEO Expert",
      description:
        "Configuration guidée étape par étape. Plus besoin d'être expert en prompt engineering, l'IA comprend vos besoins métier et optimise automatiquement pour le SEO.",
    },
    {
      icon: <Shuffle className="w-8 h-8" />,
      title: "Zéro duplication",
      description:
        "Évitez les pénalités Google, améliorez votre indexation. Chaque contenu est analysé avec notre algorithme de détection pour garantir 95%+ d'unicité.",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Variables dynamiques illimitées",
      description:
        "Un seul prompt suffit pour générer des milliers de variations uniques. Personnalisez avec {{ville}}, {{produit}}, {{caractéristique}} et obtenez instantanément des contenus adaptés à chaque besoin.",
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Import/Export CSV en masse",
      description:
        "Importez vos données, générez, exportez. Compatible avec vos outils existants. Gagnez un temps précieux en automatisant la création de contenus.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Score d'unicité temps réel",
      description:
        "Contrôle automatique de chaque génération. Filtrage intelligent des contenus à régénérer. Dashboard de suivi de la qualité.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance entreprise",
      description:
        "Génération ultra-rapide : 1000 contenus quelques minutes. Gagnez du temps et améliorez votre efficacité.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Spinary Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Spinary
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => smoothScrollTo("features")}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => smoothScrollTo("how-it-works")}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
              >
                Comment ça marche
              </button>
              <div className="flex items-center gap-4">
                <Link
                  href="https://app.spinary.io/auth/login"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Se connecter
                </Link>
                <Link
                  href="https://app.spinary.io/auth/signup"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Essai gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Générez des milliers de{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  contenus SEO uniques
                </span>{" "}
                sans duplication
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Spinary, l&apos;assistant IA conçu pour le SEO : créez des
                textes optimisés, prêts à publier, pour vos
                <span className="font-semibold text-gray-800">
                  {" "}
                  articles, fiches produits et pages locales.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="https://app.spinary.io/auth/signup"
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 font-semibold text-lg"
                >
                  Démarrer gratuitement
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 sm:p-8">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-3 sm:p-6 mb-3 sm:mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Bot className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-purple-800">
                        Assistant IA SEO
                      </div>
                      <div className="text-xs text-purple-600">
                        En ligne • Prêt à vous aider
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/80 backdrop-blur rounded-lg p-3 self-end max-w-xs ml-auto">
                      <p className="text-sm text-gray-800">
                        Je veux créer des descriptions de produits uniques pour
                        mon e-commerce
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-3 shadow-sm border border-purple-200 max-w-md">
                      <p className="text-sm text-gray-800 mb-2">
                        <span className="font-semibold text-purple-600">
                          🤖 Assistant:
                        </span>{" "}
                        Parfait ! Je vais vous aider à configurer votre
                        génération. Voici ce que je vous propose :
                      </p>
                      <div className="bg-gray-50 p-2 rounded text-xs font-mono border border-gray-200">
                        <span className="text-gray-700">
                          Créez une description SEO pour
                        </span>{" "}
                        <span className="text-indigo-700 font-semibold">{`{{produit}}`}</span>{" "}
                        <span className="text-gray-700">dans</span>{" "}
                        <span className="text-purple-700 font-semibold">{`{{categorie}}`}</span>{" "}
                        <span className="text-gray-700">à</span>{" "}
                        <span className="text-pink-700 font-semibold">{`{{ville}}`}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-6">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-sm font-semibold text-gray-700 mb-3">
                      📊 Import CSV :
                    </div>
                    <div className="space-y-2 text-sm font-mono">
                      <div className="bg-white p-2 rounded border text-gray-700">
                        produit,categorie,ville
                      </div>
                      <div className="bg-white p-2 rounded border text-gray-700">
                        iPhone 15,Smartphones,Paris
                      </div>
                      <div className="bg-white p-2 rounded border text-gray-700">
                        MacBook Pro,Ordinateurs,Lyon
                      </div>
                      <div className="bg-white p-2 rounded border text-gray-700">
                        AirPods,Audio,Marseille
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-sm font-semibold text-gray-700 mb-3">
                      ✨ Contenus générés uniques :
                    </div>
                    <div className="space-y-2">
                      {[
                        {
                          score: "98%",
                          text: "Découvrez l'iPhone 15, le smartphone révolutionnaire...",
                        },
                        {
                          score: "97%",
                          text: "Le MacBook Pro redéfinit la puissance portable...",
                        },
                        {
                          score: "99%",
                          text: "Les AirPods transforment votre expérience audio...",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white p-2 rounded border text-sm"
                        >
                          <span className="text-green-600 font-semibold mr-2">
                            {item.score} unique
                          </span>
                          <span className="text-gray-600">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-semibold">
                      1000 variations générées en 12 secondes
                    </span>
                  </div>
                  <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    Exporter CSV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Spinary{" "}
              </span>
              fonctionne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 étapes simples pour générer des milliers de contenus uniques
              optimisés SEO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Expliquez vos besoins",
                description:
                  "L'assistant IA configure le prompt parfait pour votre secteur et vos objectifs SEO",
              },
              {
                step: "2",
                icon: <Upload className="w-8 h-8" />,
                title: "Importez vos données",
                description:
                  "CSV ou API, les variables sont détectées automatiquement (villes, produits, catégories)",
              },
              {
                step: "3",
                icon: <Sparkles className="w-8 h-8" />,
                title: "Générez et exportez",
                description:
                  "Contenus uniques avec score d'unicité, prêts en moins de 30 secondes par lot",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Wand2 className="w-4 h-4" />
                Innovation exclusive
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                L&apos;assistant IA qui comprend
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}
                  vraiment{" "}
                </span>
                le SEO
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Plus besoin d&apos;être un expert en prompt engineering. Notre
                assistant conversationnel vous guide pas à pas pour configurer
                des générations parfaites en quelques minutes.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Comprend votre contexte métier
                    </h4>
                    <p className="text-gray-600">
                      L&apos;assistant analyse vos besoins spécifiques et adapte
                      ses suggestions à votre industrie
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Optimise automatiquement pour le SEO
                    </h4>
                    <p className="text-gray-600">
                      Intègre les meilleures pratiques SEO directement dans vos
                      générations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Suggère les bonnes variables
                    </h4>
                    <p className="text-gray-600">
                      Identifie et propose les variables pertinentes pour
                      maximiser vos variations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 sm:p-6">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-xl p-3 sm:p-4 -mx-3 sm:-mx-6 -mt-3 sm:-mt-6 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">
                        Assistant SEO Expert
                      </h3>
                      <p className="text-xs sm:text-sm text-purple-100">
                        Je suis là pour vous aider
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-gray-100 rounded-lg p-2 sm:p-3 max-w-[85%] sm:max-w-[80%]">
                    <p className="text-xs sm:text-sm text-gray-800">
                      <span className="font-semibold">🤖 Assistant:</span>{" "}
                      Bonjour ! Je suis votre assistant SEO. Quel type de
                      contenu souhaitez-vous générer aujourd&apos;hui ?
                    </p>
                  </div>

                  <div className="bg-indigo-100 rounded-lg p-2 sm:p-3 max-w-[75%] sm:max-w-[70%] ml-auto">
                    <p className="text-xs sm:text-sm text-gray-800">
                      Je veux créer des fiches produits pour mon e-commerce de
                      mode
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-800 mb-2 sm:mb-3">
                      <span className="font-semibold">🤖 Assistant:</span>{" "}
                      Excellent ! Pour des fiches produits mode optimisées SEO,
                      je vous suggère cette configuration avec les variables
                      adaptées :
                    </p>
                    <div className="bg-white border border-gray-200 rounded p-2 sm:p-3 font-mono text-[10px] sm:text-xs">
                      <p className="mb-1 sm:mb-2 text-gray-700">
                        Créez une fiche produit SEO de 300 mots pour :
                      </p>
                      <p className="text-gray-700">
                        • Produit :{" "}
                        <span className="text-purple-600 font-bold">{`{{nom_produit}}`}</span>
                      </p>
                      <p className="text-gray-700">
                        • Catégorie :{" "}
                        <span className="text-indigo-600 font-bold">{`{{categorie}}`}</span>
                      </p>
                      <p className="text-gray-700">
                        • Marque :{" "}
                        <span className="text-pink-600 font-bold">{`{{marque}}`}</span>
                      </p>
                      <p className="text-gray-700">
                        • Taille :{" "}
                        <span className="text-green-600 font-bold">{`{{taille}}`}</span>
                      </p>
                      <p className="mt-1 sm:mt-2 text-gray-700">
                        Incluez les bénéfices, caractéristiques et mots-clés
                        longue traîne.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500">
                    <Sparkles className="w-3 h-3" />
                    <span>
                      L&apos;assistant a identifié 4 variables optimales pour
                      votre cas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Accélérez la production de votre contenu
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                SEO à grande échelle
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des fonctionnalités pensées pour les professionnels du SEO et du
              e-commerce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à révolutionner votre production de contenu SEO ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez des milliers de professionnels qui génèrent déjà du
            contenu unique à grande échelle avec Spinary
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.spinary.io/auth/signup"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Commencer gratuitement
            </Link>
          </div>
          <p className="text-sm text-white/70 mt-6">
            Pas de carte de crédit requise • 50 crédits offerts
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            {/* Logo and Description */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Spinary"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Spinary</h3>
              </div>
              <p className="text-gray-400 text-sm max-w-sm">
                Générez des milliers de contenus SEO uniques en masse. Zéro
                duplication, variables dynamiques, score d'unicité.
              </p>
            </div>

            {/* Navigation Links - Horizontal */}
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <button
                onClick={() => smoothScrollTo("features")}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => smoothScrollTo("pricing")}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Tarifs
              </button>
              <button
                onClick={() => smoothScrollTo("how-it-works")}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Comment ça marche
              </button>
            </nav>

            {/* CTA Button */}
            <Link
              href="https://app.spinary.io/auth/signup"
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm"
            >
              Essayer gratuitement
            </Link>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © 2025 Spinary. Tous droits réservés.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-1 text-xs">
              <Link
                href="/cgu"
                className="text-gray-500 hover:text-gray-300 transition-colors px-3 py-1"
              >
                CGU
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-300 transition-colors px-3 py-1"
              >
                Confidentialité
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                href="/cgv"
                className="text-gray-500 hover:text-gray-300 transition-colors px-3 py-1"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
