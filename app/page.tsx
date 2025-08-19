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
      icon: <Target className="w-8 h-8" />,
      title: "Prompts optimisés SEO",
      description:
        "Templates pré-configurés pour titles, meta descriptions, H1, contenus. Intégration des mots-clés longue traîne et schema markup.",
    },
    {
      icon: <Shuffle className="w-8 h-8" />,
      title: "Zéro pénalité Google",
      description:
        "Contenus 100% uniques pour éviter le duplicate content. Améliorez votre indexation et ranking.",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "SEO local à grande échelle",
      description:
        "Générez des pages localisées pour chaque ville {{ville}}, quartier {{quartier}}. Dominez les recherches locales sur Google.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Fiches produits SEO",
      description:
        "Créez des descriptions produits optimisées pour le e-commerce. Balises structurées, rich snippets, mots-clés ciblés.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Contenus long-form SEO",
      description:
        "Générez des articles de 1000+ mots optimisés. Structure SEO parfaite : H2, H3, FAQ, maillage interne.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "SEO programmatique",
      description:
        "Générez 10 000 pages SEO en quelques minutes. Idéal pour marketplaces, annuaires, sites de contenu.",
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
                  Créer un compte
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
                L'IA génère des milliers de{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  contenus SEO uniques
                </span>{" "}
                en un clic
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Spinary, l'assistant IA conçu pour le SEO : créez des
                <span className="font-semibold text-gray-800">
                  {" "}
                  textes optimisés, prêts à publier, pour vos articles, fiches
                  produits et pages locales.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-6">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-sm font-semibold text-gray-700 mb-3">
                      📊 Variables importées (CSV) :
                    </div>
                    <div className="space-y-2 text-sm font-mono">
                      <div className="bg-white p-2 rounded border text-gray-700">
                        nom | marque | categorie | prix | specs
                      </div>
                      <div className="bg-white p-2 rounded border text-gray-700">
                        iPhone 15 | Apple | Smartphones | 999€ | 5G, 128GB
                      </div>
                      <div className="bg-white p-2 rounded border text-gray-700">
                        Galaxy S24 | Samsung | Smartphones | 899€ | AI, 256GB
                      </div>
                      <div className="bg-white p-2 rounded border text-gray-700">
                        Pixel 8 | Google | Smartphones | 799€ | Photo AI
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-sm font-semibold text-gray-700 mb-3">
                      🤖 Contenus générés par IA :
                    </div>
                    <div className="space-y-2">
                      {[
                        {
                          score: "100%",
                          text: "L'iPhone 15 d'Apple dans la catégorie Smartphones...",
                        },
                        {
                          score: "100%",
                          text: "Le Galaxy S24 de Samsung redéfinit les Smartphones...",
                        },
                        {
                          score: "100%",
                          text: "Le Pixel 8 de Google transforme la catégorie Smartphones...",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white p-2 rounded border text-sm"
                        >
                          <span className="text-green-600 font-semibold mr-2">
                            ✓ {item.score} unique
                          </span>
                          <span className="text-gray-600">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <Bot className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-semibold">
                      IA génère 5000 contenus uniques à partir de vos données
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
              Génération de
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                contenus SEO{" "}
              </span>
              en 3 étapes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Créez des milliers de pages optimisées pour Google en quelques
              minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: <Target className="w-8 h-8" />,
                title: "Définissez votre stratégie SEO",
                description:
                  "Créez un prompt optimisé avec mots-clés, structure H1/H2, meta descriptions",
              },
              {
                step: "2",
                icon: <Upload className="w-8 h-8" />,
                title: "Importez vos variables",
                description:
                  "Uploadez votre CSV. Chaque colonne devient une variable utilisable dans votre prompt",
              },
              {
                step: "3",
                icon: <Sparkles className="w-8 h-8" />,
                title: "Générez et publiez",
                description:
                  "Obtenez des milliers de pages SEO uniques, prêtes à indexer sur Google",
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
                Assistant intégré
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Configuration simplifiée avec
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}
                  l&apos;assistant IA
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Besoin d&apos;aide ? Notre assistant IA vous guide pour créer le
                template parfait pour vos générations en masse.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Création de templates optimisés
                    </h4>
                    <p className="text-gray-600">
                      Génère des templates réutilisables pour vos générations
                      futures
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Détection automatique des variables
                    </h4>
                    <p className="text-gray-600">
                      Analyse votre CSV et suggère les meilleures variables à
                      utiliser
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Configuration rapide
                    </h4>
                    <p className="text-gray-600">
                      Paramétrez vos générations en quelques clics sans
                      expertise technique
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
              Fonctionnalités
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                SEO avancées
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce qu'il faut pour dominer Google avec du contenu unique à
              grande échelle
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
            Boostez votre SEO avec du contenu unique à grande échelle
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Dominez Google avec des milliers de pages optimisées. Zéro duplicate
            content, 100% de contenus uniques
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.spinary.io/auth/signup"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Commencer
            </Link>
          </div>
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
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
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
                La plateforme SEO pour générer des milliers de contenus uniques.
                Optimisé pour Google.
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
