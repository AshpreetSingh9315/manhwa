import Image from "next/image";
import Link from "next/link";
import { getHomeFeed } from "../lib/manhwa";

export default async function Home() {
  const data = await getHomeFeed();

  return (
    <main className="grain min-h-screen bg-background px-4 pb-10 pt-5 text-foreground">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <header className="flex items-start justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[var(--muted)]">
              {data.brand.name}
            </p>
            <h1 className="font-heading mt-2 text-4xl leading-none text-[var(--accent-strong)]">
              Manhwa after dark
            </h1>
          </div>
          <div className="rounded-full border border-[var(--line)] bg-white/5 px-3 py-2 text-right text-[0.65rem] uppercase tracking-[0.25em] text-[var(--muted)]">
            Mobile
            <br />
            First
          </div>
        </header>

        <section className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="relative h-72">
            <Image
              src={data.hero.image}
              alt={data.hero.title}
              fill
              sizes="384px"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-[var(--muted)]">
                {data.hero.eyebrow}
              </p>
              <h2 className="font-heading mt-2 text-4xl leading-none">
                {data.hero.title}
              </h2>
              <p className="mt-3 max-w-[26ch] text-sm leading-6 text-[var(--muted)]">
                {data.hero.subtitle}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[var(--muted)]">
                    {data.hero.chapterLabel}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--accent-strong)]">
                    {data.hero.chapterValue}
                  </p>
                </div>
                <Link
                  href={data.hero.href}
                  className="rounded-full bg-[var(--accent)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#140f0a]"
                >
                  Open title
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                Latest chapters
              </p>
              <h2 className="font-heading text-2xl">Fresh drops</h2>
            </div>
            <span className="text-xs text-[var(--muted)]">Swipe energy</span>
          </div>
          <div className="hide-scrollbar flex snap-x gap-3 overflow-x-auto pb-1">
            {data.latestChapters.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="min-w-[15rem] snap-start overflow-hidden rounded-[1.4rem] border border-[var(--line)] bg-[var(--panel-soft)]"
              >
                <div className="relative h-40">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    sizes="240px"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    {item.vibe}
                  </div>
                </div>
                <div className="space-y-2 p-4">
                  <h3 className="font-heading text-2xl leading-none">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                    <span>{item.chapter}</span>
                    <span>{item.updatedAt}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                Bookmarks
              </p>
              <h2 className="font-heading text-2xl">Continue reading</h2>
            </div>
            <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-[var(--muted)]">
              Optional login
            </span>
          </div>
          <div className="space-y-3">
            {data.bookmarks.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="flex items-center gap-3 rounded-[1.2rem] border border-[var(--line)] bg-[var(--panel-soft)] p-3"
              >
                <Image
                  src={item.cover}
                  alt={item.title}
                  width={56}
                  height={72}
                  className="h-[4.5rem] w-14 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-heading truncate text-2xl leading-none">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.chapter}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-[var(--accent)]"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 rounded-[1.35rem] border border-dashed border-[var(--line)] bg-black/15 p-4">
            <p className="text-sm leading-6 text-[var(--muted)]">{data.auth.message}</p>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-4">
          <div className="mb-4">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              You might like
            </p>
            <h2 className="font-heading text-2xl">Picked for your vibe</h2>
          </div>
          <div className="space-y-3">
            {data.recommendations.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="rounded-[1.35rem] border border-[var(--line)] bg-[var(--panel-soft)] p-3"
              >
                <div className="flex gap-3">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    width={80}
                    height={112}
                    className="h-28 w-20 rounded-[1rem] object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl leading-none">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.matchReason}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.genres.map((genre) => (
                        <span
                          key={genre}
                          className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-[var(--accent-strong)]"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
