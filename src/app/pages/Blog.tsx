import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Search, Calendar, User, ArrowRight, Filter } from "lucide-react";
import type { CmsPostSummary } from "../../../../packages/cms-contracts/src";
import { fetchPosts } from "../lib/payload-client";

export function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [posts, setPosts] = useState<CmsPostSummary[]>([]);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(posts.map((post) => post.category)));
    return [{ id: "all", label: "Tout" }, ...uniqueCategories.map((category) => ({ id: category, label: category }))];
  }, [posts]);

  const filteredArticles = posts.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (article.excerpt ?? "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = posts[0] ?? null;
  const regularArticles = filteredArticles.slice(featuredArticle ? 1 : 0);

  if (!posts.length) {
    return <div className="min-h-[60vh] pt-20 flex items-center justify-center text-muted-foreground">Chargement des actualités CMS...</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Actualités
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              Dernières nouvelles
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Découvrez nos actions, nos projets et nos conseils pour l'inclusion numérique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-muted/30 sticky top-20 z-30 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher un article..."
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border hover:bg-accent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === "all" && (
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow group"
            >
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredArticle.featuredImage?.url ?? "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"}
                  alt={featuredArticle.featuredImage?.alt ?? featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  À la une
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredArticle.publishedAt).toLocaleDateString("fr-FR")}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Goupil
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <button className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Lire l'article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold capitalize">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.publishedAt).toLocaleDateString("fr-FR")}
                      </span>
                      <span>•</span>
                      <span>{article.readingTimeMinutes} min de lecture</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Goupil
                      </span>
                      <button className="text-primary font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                        Lire
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-lg text-muted-foreground">
                Aucun article trouvé pour cette recherche
              </p>
            </div>
          )}

          {regularArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="px-8 py-4 border-2 border-border rounded-xl font-semibold hover:bg-accent transition-colors">
                Charger plus d'articles
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Restez informé·e
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Recevez nos derniers articles directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
