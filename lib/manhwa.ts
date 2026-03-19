type HomeCard = {
  slug: string;
  title: string;
  cover: string;
  href: string;
};

type LatestChapter = HomeCard & {
  chapter: string;
  updatedAt: string;
  vibe: string;
};

type BookmarkCard = HomeCard & {
  chapter: string;
  progress: number;
};

type RecommendationCard = HomeCard & {
  genres: string[];
  matchReason: string;
};

type ChapterPreview = {
  id: string;
  number: string;
  title: string;
  releasedAt: string;
};

type ChapterPage = {
  index: number;
  image: string;
};

type FullChapter = ChapterPreview & {
  pages: ChapterPage[];
};

export type HomeFeed = {
  brand: {
    name: string;
    tagline: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    chapterLabel: string;
    chapterValue: string;
    accent: string;
    href: string;
    image: string;
  };
  latestChapters: LatestChapter[];
  bookmarks: BookmarkCard[];
  recommendations: RecommendationCard[];
  auth: {
    bookmarkingEnabled: boolean;
    message: string;
  };
};

export type TitleDetails = {
  slug: string;
  title: string;
  altTitle: string;
  cover: string;
  banner: string;
  status: string;
  rating: string;
  views: string;
  genres: string[];
  summary: string;
  chapters: ChapterPreview[];
  actions: {
    primary: string;
    secondary: string;
  };
};

export type ChapterDetails = {
  title: string;
  titleSlug: string;
  chapter: FullChapter;
  nextChapterId: string | null;
  previousChapterId: string | null;
};

const mockFeed: HomeFeed = {
  brand: {
    name: "Mahwa",
    tagline: "Velvet nights, steel hearts, and a feed built for binge sessions.",
  },
  hero: {
    eyebrow: "Tonight's obsession",
    title: "Solo Leveling",
    subtitle:
      "A premium mobile reading room for shadow monarch energy, rooftop rain, and impossible glow-ups.",
    chapterLabel: "Latest drop",
    chapterValue: "Chapter 201",
    accent: "Shadow raid",
    href: "/title/solo-leveling",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  },
  latestChapters: [
    {
      slug: "solo-leveling",
      title: "Solo Leveling",
      cover:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
      chapter: "Chapter 201",
      updatedAt: "12 min ago",
      vibe: "Shadow monarch",
      href: "/title/solo-leveling",
    },
    {
      slug: "omniscient-reader",
      title: "Omniscient Reader",
      cover:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80",
      chapter: "Chapter 246",
      updatedAt: "34 min ago",
      vibe: "Apocalypse meta",
      href: "/title/omniscient-reader",
    },
    {
      slug: "wind-breaker",
      title: "Wind Breaker",
      cover:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
      chapter: "Chapter 530",
      updatedAt: "1 hr ago",
      vibe: "Street speed",
      href: "/title/wind-breaker",
    },
    {
      slug: "the-beginning-after-the-end",
      title: "The Beginning After The End",
      cover:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      chapter: "Chapter 189",
      updatedAt: "2 hr ago",
      vibe: "Regal rebirth",
      href: "/title/the-beginning-after-the-end",
    },
  ],
  bookmarks: [
    {
      slug: "solo-leveling",
      title: "Solo Leveling",
      cover:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
      chapter: "Chapter 197",
      progress: 78,
      href: "/chapter/solo-leveling-chapter-197",
    },
    {
      slug: "omniscient-reader",
      title: "Omniscient Reader",
      cover:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80",
      chapter: "Chapter 240",
      progress: 61,
      href: "/chapter/omniscient-reader-chapter-240",
    },
    {
      slug: "wind-breaker",
      title: "Wind Breaker",
      cover:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
      chapter: "Chapter 522",
      progress: 42,
      href: "/chapter/wind-breaker-chapter-522",
    },
  ],
  recommendations: [
    {
      slug: "omniscient-reader",
      title: "Omniscient Reader",
      cover:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80",
      genres: ["Thriller", "Fantasy", "Psychological"],
      matchReason:
        "Sharp if you like layered world rules and clever protagonists.",
      href: "/title/omniscient-reader",
    },
    {
      slug: "the-beginning-after-the-end",
      title: "The Beginning After The End",
      cover:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      genres: ["Fantasy", "Adventure", "Reincarnation"],
      matchReason:
        "Strong pick for royal fantasy with clean emotional beats.",
      href: "/title/the-beginning-after-the-end",
    },
    {
      slug: "eleceed",
      title: "Eleceed",
      cover:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      genres: ["Action", "Comedy", "Superpower"],
      matchReason:
        "Fits when you want lighter energy without losing the hype.",
      href: "/title/eleceed",
    },
  ],
  auth: {
    bookmarkingEnabled: true,
    message:
      "Account creation unlocks bookmarks, continue reading, and synced progress later.",
  },
};

const mockTitles: Record<string, TitleDetails> = {
  "solo-leveling": {
    slug: "solo-leveling",
    title: "Solo Leveling",
    altTitle: "Only I Level Up",
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
    rating: "4.9",
    views: "18.2M",
    genres: ["Action", "Fantasy", "Dungeon"],
    summary:
      "A weakest-hunter origin story evolves into a polished, cinematic climb where every gate, duel, and awakening lands like an event.",
    actions: {
      primary: "/chapter/solo-leveling-chapter-201",
      secondary: "#bookmark",
    },
    chapters: [
      {
        id: "solo-leveling-chapter-201",
        number: "Chapter 201",
        title: "Final resonance",
        releasedAt: "2026-03-19",
      },
      {
        id: "solo-leveling-chapter-197",
        number: "Chapter 197",
        title: "Arise again",
        releasedAt: "2026-03-19",
      },
      {
        id: "solo-leveling-chapter-193",
        number: "Chapter 193",
        title: "The throne room",
        releasedAt: "2026-03-19",
      },
    ],
  },
  "omniscient-reader": {
    slug: "omniscient-reader",
    title: "Omniscient Reader",
    altTitle: "Omniscient Reader's Viewpoint",
    cover:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    status: "Ongoing",
    rating: "4.8",
    views: "14.7M",
    genres: ["Thriller", "Fantasy", "Psychological"],
    summary:
      "A reader becomes the only person who knows how the world-ending scenario should unfold, and every decision starts to bend fate.",
    actions: {
      primary: "/chapter/omniscient-reader-chapter-246",
      secondary: "#bookmark",
    },
    chapters: [
      {
        id: "omniscient-reader-chapter-246",
        number: "Chapter 246",
        title: "Scenario 9",
        releasedAt: "2026-03-19",
      },
      {
        id: "omniscient-reader-chapter-240",
        number: "Chapter 240",
        title: "Fable collector",
        releasedAt: "2026-03-19",
      },
    ],
  },
  "wind-breaker": {
    slug: "wind-breaker",
    title: "Wind Breaker",
    altTitle: "Street Pace",
    cover:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    status: "Ongoing",
    rating: "4.7",
    views: "9.3M",
    genres: ["Sports", "Drama", "Youth"],
    summary:
      "A competitive cycling story with swagger-heavy color, found-family tension, and enough aesthetic detail to feel like a fashion editorial in motion.",
    actions: {
      primary: "/chapter/wind-breaker-chapter-530",
      secondary: "#bookmark",
    },
    chapters: [
      {
        id: "wind-breaker-chapter-530",
        number: "Chapter 530",
        title: "Tailwind",
        releasedAt: "2026-03-19",
      },
      {
        id: "wind-breaker-chapter-522",
        number: "Chapter 522",
        title: "The sprint line",
        releasedAt: "2026-03-19",
      },
    ],
  },
  "the-beginning-after-the-end": {
    slug: "the-beginning-after-the-end",
    title: "The Beginning After The End",
    altTitle: "TBATE",
    cover:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1200&q=80",
    status: "Ongoing",
    rating: "4.8",
    views: "11.1M",
    genres: ["Fantasy", "Adventure", "Reincarnation"],
    summary:
      "A king is reborn into a magical world and tries to rebuild strength, family, and purpose without repeating an older life's emptiness.",
    actions: {
      primary: "/chapter/tbate-chapter-189",
      secondary: "#bookmark",
    },
    chapters: [
      {
        id: "tbate-chapter-189",
        number: "Chapter 189",
        title: "The court below",
        releasedAt: "2026-03-19",
      },
      {
        id: "tbate-chapter-182",
        number: "Chapter 182",
        title: "Silent mana",
        releasedAt: "2026-03-19",
      },
    ],
  },
  eleceed: {
    slug: "eleceed",
    title: "Eleceed",
    altTitle: "Static Cat",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
    status: "Ongoing",
    rating: "4.8",
    views: "8.4M",
    genres: ["Action", "Comedy", "Superpower"],
    summary:
      "A kind-hearted speedster, absurdly powerful mentors, and enough humor between the action spikes to keep the tone addictive.",
    actions: {
      primary: "/chapter/eleceed-chapter-336",
      secondary: "#bookmark",
    },
    chapters: [
      {
        id: "eleceed-chapter-336",
        number: "Chapter 336",
        title: "Crackle",
        releasedAt: "2026-03-19",
      },
      {
        id: "eleceed-chapter-331",
        number: "Chapter 331",
        title: "Quick step",
        releasedAt: "2026-03-19",
      },
    ],
  },
};

const mockChapters: Record<string, ChapterDetails> = {
  "solo-leveling-chapter-201": {
    title: "Solo Leveling",
    titleSlug: "solo-leveling",
    chapter: {
      id: "solo-leveling-chapter-201",
      number: "Chapter 201",
      title: "Final resonance",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 3,
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: null,
    previousChapterId: "solo-leveling-chapter-197",
  },
  "solo-leveling-chapter-197": {
    title: "Solo Leveling",
    titleSlug: "solo-leveling",
    chapter: {
      id: "solo-leveling-chapter-197",
      number: "Chapter 197",
      title: "Arise again",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: "solo-leveling-chapter-201",
    previousChapterId: "solo-leveling-chapter-193",
  },
  "solo-leveling-chapter-193": {
    title: "Solo Leveling",
    titleSlug: "solo-leveling",
    chapter: {
      id: "solo-leveling-chapter-193",
      number: "Chapter 193",
      title: "The throne room",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: "solo-leveling-chapter-197",
    previousChapterId: null,
  },
  "omniscient-reader-chapter-246": {
    title: "Omniscient Reader",
    titleSlug: "omniscient-reader",
    chapter: {
      id: "omniscient-reader-chapter-246",
      number: "Chapter 246",
      title: "Scenario 9",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: null,
    previousChapterId: "omniscient-reader-chapter-240",
  },
  "omniscient-reader-chapter-240": {
    title: "Omniscient Reader",
    titleSlug: "omniscient-reader",
    chapter: {
      id: "omniscient-reader-chapter-240",
      number: "Chapter 240",
      title: "Fable collector",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: "omniscient-reader-chapter-246",
    previousChapterId: null,
  },
  "wind-breaker-chapter-530": {
    title: "Wind Breaker",
    titleSlug: "wind-breaker",
    chapter: {
      id: "wind-breaker-chapter-530",
      number: "Chapter 530",
      title: "Tailwind",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: null,
    previousChapterId: "wind-breaker-chapter-522",
  },
  "wind-breaker-chapter-522": {
    title: "Wind Breaker",
    titleSlug: "wind-breaker",
    chapter: {
      id: "wind-breaker-chapter-522",
      number: "Chapter 522",
      title: "The sprint line",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: "wind-breaker-chapter-530",
    previousChapterId: null,
  },
  "tbate-chapter-189": {
    title: "The Beginning After The End",
    titleSlug: "the-beginning-after-the-end",
    chapter: {
      id: "tbate-chapter-189",
      number: "Chapter 189",
      title: "The court below",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: null,
    previousChapterId: "tbate-chapter-182",
  },
  "tbate-chapter-182": {
    title: "The Beginning After The End",
    titleSlug: "the-beginning-after-the-end",
    chapter: {
      id: "tbate-chapter-182",
      number: "Chapter 182",
      title: "Silent mana",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: "tbate-chapter-189",
    previousChapterId: null,
  },
  "eleceed-chapter-336": {
    title: "Eleceed",
    titleSlug: "eleceed",
    chapter: {
      id: "eleceed-chapter-336",
      number: "Chapter 336",
      title: "Crackle",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: null,
    previousChapterId: "eleceed-chapter-331",
  },
  "eleceed-chapter-331": {
    title: "Eleceed",
    titleSlug: "eleceed",
    chapter: {
      id: "eleceed-chapter-331",
      number: "Chapter 331",
      title: "Quick step",
      releasedAt: "2026-03-19",
      pages: [
        {
          index: 1,
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1000&q=80",
        },
        {
          index: 2,
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
        },
      ],
    },
    nextChapterId: "eleceed-chapter-336",
    previousChapterId: null,
  },
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  process.env.NEXT_PUBLIC_LARAVEL_API_BASE_URL ??
  process.env.API_BASE_URL;

async function fetchFromApi<T>(path: string): Promise<T | null> {
  if (!API_BASE_URL) {
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export async function getHomeFeed(): Promise<HomeFeed> {
  return (await fetchFromApi<HomeFeed>("/api/mobile/home")) ?? mockFeed;
}

export async function getTitleDetails(
  slug: string,
): Promise<TitleDetails | null> {
  return (
    (await fetchFromApi<TitleDetails>(`/api/mobile/titles/${slug}`)) ??
    mockTitles[slug] ??
    null
  );
}

export async function getChapterDetails(
  chapterId: string,
): Promise<ChapterDetails | null> {
  return (
    (await fetchFromApi<ChapterDetails>(
      `/api/mobile/chapters?chapterId=${encodeURIComponent(chapterId)}`,
    )) ??
    mockChapters[chapterId] ??
    null
  );
}

export function buildChapterHref(chapterId: string): string {
  return `/chapter/${chapterId}`;
}
