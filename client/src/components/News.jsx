import React, { useState } from 'react';
import { newsStyles, newsCSS } from '../assets/dummyStyles';
import { sampleNews } from '../assets/newdummydata';
import { Image as ImageIcon, Sparkles, Clock, Calendar, Mail, Send } from 'lucide-react';

const News = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className={newsStyles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Monoton&family=Roboto:wght@300;400;500;700;800&display=swap');
        ${newsCSS}
      `}</style>

      {/* Header section */}
      <header className={newsStyles.header}>
        <div className={newsStyles.headerFlex}>
          <div className={newsStyles.logoContainer}>
            <div className={newsStyles.logoText} style={{ fontFamily: 'Monoton, cursive' }}>
              CineNews
            </div>
            <div
              className={newsStyles.logoSubtitle}
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Latest • Curated • Cinematic
            </div>
          </div>

          <div className={newsStyles.headerButtons}>
            <button className={newsStyles.latestNewsButton}>
              <ImageIcon size={16} />
              <span className={newsStyles.buttonText}>Latest News</span>
            </button>
          </div>
        </div>

        {/* Featured hero stripe ticker */}
        <div className={newsStyles.heroStripe}>
          <div className={newsStyles.featuredBadge}>
            <span className="font-bold">Featured</span>
          </div>
          <div className={newsStyles.stripeText}>
            {sampleNews[0]?.title} — {sampleNews[0]?.excerpt}
          </div>
          <div className={newsStyles.stripeIcon}>
            <Sparkles size={16} className="text-red-500 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Main News Content */}
      <main className={newsStyles.main}>
        <section className={newsStyles.grid}>
          {/* Left Column (Span 2): Hero Card + 3 Strip Cards */}
          <article className={newsStyles.heroCard}>
            {/* Top featured image banner with readable gradient */}
            <div className="relative h-96 sm:h-[440px] md:h-[480px] lg:h-[440px] xl:h-[480px] w-full overflow-hidden">
              <img
                src={sampleNews[0]?.image}
                alt={sampleNews[0]?.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 pointer-events-none" />

              <div className={newsStyles.heroContent}>
                <span className={newsStyles.heroCategory}>
                  {sampleNews[0]?.category}
                </span>

                <h1
                  className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-white tracking-normal line-clamp-2"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {sampleNews[0]?.title}
                </h1>

                <p
                  className={`${newsStyles.heroExcerpt} line-clamp-2`}
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {sampleNews[0]?.excerpt}
                </p>

                <div className={newsStyles.heroMeta}>
                  <div className={newsStyles.metaItem}>
                    <Clock size={16} className="text-red-400" />
                    <span
                      className={newsStyles.metaText}
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {sampleNews[0]?.time}
                    </span>
                  </div>

                  <div className={newsStyles.metaItem}>
                    <Calendar size={16} className="text-red-400" />
                    <span
                      className={newsStyles.metaText}
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {sampleNews[0]?.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 3 news cards strip */}
            <div className={newsStyles.heroStrip}>
              <div className={newsStyles.stripGrid}>
                {sampleNews.slice(1, 4).map((item) => (
                  <article key={item.id} className={newsStyles.articleCard}>
                    <div className={newsStyles.articleImage}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={newsStyles.articleImg}
                        loading="lazy"
                      />
                      <span className={newsStyles.articleCategory}>
                        {item.category}
                      </span>
                    </div>

                    <div className={newsStyles.articleContent}>
                      <div>
                        <h3
                          className={`${newsStyles.articleTitle} line-clamp-2`}
                          style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`${newsStyles.articleExcerpt} line-clamp-3`}
                          style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </article>

          {/* Right Column (Span 1): Sidebar with articles 5, 6 and Subscribe card */}
          <aside className={newsStyles.sidebar}>
            {sampleNews.slice(4, 6).map((item) => (
              <article key={item.id} className={newsStyles.sidebarCard}>
                <div className={newsStyles.sidebarCardInner}>
                  <div className={newsStyles.sidebarImage}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={newsStyles.sidebarImg}
                      loading="lazy"
                    />
                  </div>

                  <div className={newsStyles.sidebarContent}>
                    <span className={newsStyles.sidebarCategory}>
                      {item.category}
                    </span>

                    <h4
                      className={`${newsStyles.sidebarTitle} line-clamp-2`}
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className={`${newsStyles.sidebarExcerpt} line-clamp-3`}
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {item.excerpt}
                    </p>

                    {(item.time || item.date) && (
                      <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
                        {item.time && (
                          <span className="flex items-center gap-1">
                            <Clock size={12} className="text-red-500" />
                            {item.time}
                          </span>
                        )}
                        {item.date && (
                          <span className="flex items-center gap-1">
                            <Calendar size={12} className="text-red-500" />
                            {item.date}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}

            {/* Newsletter Subscription Card */}
            <div className={newsStyles.subscribeCard}>
              <div className="flex items-center gap-2 text-red-600 mb-1">
                <Mail size={20} />
                <h3
                  className={newsStyles.subscribeTitle}
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Stay in the Loop
                </h3>
              </div>

              <p
                className={newsStyles.subscribeText}
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Get breaking cinema scoops, trailer releases, and weekly reviews delivered to your inbox.
              </p>

              <form
                onSubmit={handleSubscribe}
                className={newsStyles.subscribeForm}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={newsStyles.subscribeInput}
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                />
                <button
                  type="submit"
                  className={newsStyles.subscribeButton}
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  <Send size={15} />
                  <span>Join</span>
                </button>
              </form>
            </div>
          </aside>
        </section>
      </main>
      <style jsx>{newsCSS}</style>
    </div>
  );
};

export default News;
