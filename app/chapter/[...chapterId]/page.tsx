import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildChapterHref, getChapterDetails } from "../../../lib/manhwa";

type ChapterPageProps = {
  params: Promise<{
    chapterId: string[];
  }>;
};

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapterId } = await params;
  const joinedChapterId = chapterId.join("/");
  const chapter = await getChapterDetails(joinedChapterId);

  if (!chapter) {
    notFound();
  }

  return (
    <main className="grain min-h-screen bg-[#050505] px-3 pb-10 pt-4 text-foreground">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
        <header className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-4">
          <Link
            href={`/title/${chapter.titleSlug}`}
            className="text-[0.68rem] uppercase tracking-[0.25em] text-[var(--muted)]"
          >
            Back to title
          </Link>
          <h1 className="font-heading mt-3 text-3xl leading-none">{chapter.title}</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {chapter.chapter.number} | {chapter.chapter.title}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {chapter.previousChapterId ? (
              <Link
                href={buildChapterHref(chapter.previousChapterId)}
                className="rounded-[1rem] border border-[var(--line)] bg-white/5 px-3 py-3 text-center text-[0.65rem] uppercase tracking-[0.22em] text-[var(--muted)]"
              >
                Previous
              </Link>
            ) : (
              <span className="rounded-[1rem] border border-[var(--line)] bg-white/3 px-3 py-3 text-center text-[0.65rem] uppercase tracking-[0.22em] text-white/30">
                Previous
              </span>
            )}

            {chapter.nextChapterId ? (
              <Link
                href={buildChapterHref(chapter.nextChapterId)}
                className="rounded-[1rem] bg-[var(--accent)] px-3 py-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#140f0a]"
              >
                Next
              </Link>
            ) : (
              <span className="rounded-[1rem] border border-[var(--line)] bg-white/3 px-3 py-3 text-center text-[0.65rem] uppercase tracking-[0.22em] text-white/30">
                Next
              </span>
            )}
          </div>
        </header>

        <section className="space-y-3">
          {chapter.chapter.pages.map((page) => (
            <article
              key={page.index}
              className="overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)]"
            >
              <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3 text-[0.65rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                <span>Page {page.index}</span>
                <span>{chapter.chapter.number}</span>
              </div>
              <Image
                src={page.image}
                alt={`${chapter.title} page ${page.index}`}
                width={1200}
                height={1800}
                className="h-auto w-full object-cover"
              />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
