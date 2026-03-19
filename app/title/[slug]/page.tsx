import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTitleDetails } from "../../../lib/manhwa";

type TitlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TitlePage({ params }: TitlePageProps) {
  const { slug } = await params;
  const title = await getTitleDetails(slug);

  if (!title) {
    notFound();
  }

  return (
    <main className="grain min-h-screen bg-background px-4 pb-8 pt-4 text-foreground">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-5">
        <Link
          href="/"
          className="w-fit rounded-full border border-[var(--line)] bg-white/5 px-4 py-2 text-[0.68rem] uppercase tracking-[0.25em] text-[var(--muted)]"
        >
          Back home
        </Link>

        <section className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)]">
          <div className="relative h-56">
            <Image
              src={title.banner}
              alt={title.title}
              fill
              sizes="384px"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                {title.altTitle}
              </p>
              <h1 className="font-heading mt-2 text-4xl leading-none">{title.title}</h1>
            </div>
          </div>
          <div className="flex gap-4 p-5">
            <Image
              src={title.cover}
              alt={title.title}
              width={96}
              height={144}
              className="h-36 w-24 rounded-[1.2rem] object-cover"
            />
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                <span className="rounded-full border border-[var(--line)] px-2.5 py-1">
                  {title.status}
                </span>
                <span className="rounded-full border border-[var(--line)] px-2.5 py-1">
                  {title.rating} rating
                </span>
                <span className="rounded-full border border-[var(--line)] px-2.5 py-1">
                  {title.views} views
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                {title.summary}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-4">
          <div className="mb-4 flex flex-wrap gap-2">
            {title.genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-[var(--line)] bg-[var(--panel-soft)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-[var(--accent-strong)]"
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href={title.actions.primary}
              className="rounded-[1.2rem] bg-[var(--accent)] px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#140f0a]"
            >
              Start reading
            </Link>
            <a
              href={title.actions.secondary}
              className="rounded-[1.2rem] border border-[var(--line)] bg-white/5 px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]"
            >
              Bookmark
            </a>
          </div>
        </section>

        <section
          id="bookmark"
          className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-4"
        >
          <div className="mb-4">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              Chapter preview
            </p>
            <h2 className="font-heading text-2xl">Choose your drop</h2>
          </div>
          <div className="space-y-3">
            {title.chapters.map((chapter) => (
              <Link
                key={chapter.id}
                href={`/chapter/${chapter.id}`}
                className="flex items-center justify-between rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel-soft)] p-4"
              >
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {chapter.releasedAt}
                  </p>
                  <h3 className="font-heading mt-1 text-2xl leading-none">
                    {chapter.number}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{chapter.title}</p>
                </div>
                <span className="rounded-full border border-[var(--line)] px-3 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  Open
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
