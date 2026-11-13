import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  Clock3,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import chartArtwork from "@/assets/trading-point-chart.jpg";

const courses = [
  {
    title: "Reading the Candlesticks",
    category: "Free",
    level: "Beginner",
    lessons: "4 lessons",
    description: "Understand what each candle reveals about price action and market sentiment.",
    syllabus: "Candle anatomy · Bullish and bearish candles · Reading a sequence · Practice examples",
  },
  {
    title: "Your First Trading Plan",
    category: "Free",
    level: "Beginner",
    lessons: "5 lessons",
    description: "Build a thoughtful routine with clear goals, entry rules, and review habits.",
    syllabus: "Setting learning goals · Creating a routine · Writing entry rules · Keeping a journal",
  },
  {
    title: "Technical Analysis Essentials",
    category: "Paid",
    level: "Intermediate",
    lessons: "Course details soon",
    description: "Explore trend structure, key levels, and how to read a chart in context.",
    syllabus: "Trend structure · Support and resistance · Multiple timeframes · Chart case studies",
  },
  {
    title: "Risk & Position Management",
    category: "Paid",
    level: "All levels",
    lessons: "Course details soon",
    description: "Learn practical frameworks for thinking about risk before placing a trade.",
    syllabus: "Risk and reward · Position sizing concepts · Planning exits · Reviewing decisions",
  },
] as const;

type CourseFilter = "All courses" | "Free" | "Paid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trading Point Academy | Learn to Read the Markets" },
      {
        name: "description",
        content:
          "Explore free and premium trading education at Trading Point Academy, from candlestick basics to chart analysis and risk management.",
      },
      { property: "og:title", content: "Trading Point Academy | Learn to Read the Markets" },
      {
        property: "og:description",
        content:
          "A clearer place to begin learning about markets. Explore free lessons and premium trading courses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState<CourseFilter>("All courses");
  const visibleCourses = courses.filter(
    (course) => filter === "All courses" || course.category === filter,
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-10 border-b border-border/80 bg-background/95">
        <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-12">
          <a href="#home" aria-label="Trading Point Academy home" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <ChartNoAxesCombined aria-hidden="true" className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold">Trading Point</span>
              <span className="block text-xs text-muted-foreground">ACADEMY</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 sm:flex">
            <a href="#courses" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Courses
            </a>
            <a href="#approach" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Our approach
            </a>
            <a href="#start-free" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Free learning
            </a>
          </nav>

          <Button asChild className="h-10 rounded-sm px-4">
            <a href="#courses">
              Explore courses <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </header>

      <section id="home" className="relative border-b border-border/70 bg-secondary/55">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:min-h-[570px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-12 lg:py-16">
          <div className="relative z-[1] max-w-xl">
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase text-primary">
              <span className="size-2 rounded-full bg-primary" />
              A clearer way to learn the markets
            </p>
            <h1 className="max-w-xl font-display text-5xl font-semibold leading-[1.06] text-foreground sm:text-6xl lg:text-[4.35rem]">
              Learn the market.
              <span className="mt-1 block text-primary">Trade with clarity.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Build your understanding one lesson at a time—from your first candlestick to a more considered trading plan.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 rounded-sm px-6">
                <a href="#start-free">
                  Start with free lessons <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <a
                href="#courses"
                className="inline-flex min-h-12 items-center gap-2 px-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Browse all courses <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/80 pt-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><BookOpen aria-hidden="true" className="size-4 text-primary" /> Learn at your pace</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck aria-hidden="true" className="size-4 text-primary" /> Risk-aware education</span>
            </div>
          </div>

          <div className="relative min-w-0 lg:-mr-8">
            <img
              src={chartArtwork}
              alt="Green and red candlesticks tracing price movement across a pale blue chart"
              width={1200}
              height={1008}
              fetchPriority="high"
              className="aspect-[1.25] w-full object-cover object-center sm:aspect-[1.4] lg:aspect-[1.3]"
            />
            <div className="absolute bottom-4 left-3 flex items-center gap-3 border border-border/70 bg-background/95 px-4 py-3 shadow-sm sm:bottom-7 sm:left-5">
              <span className="flex size-10 items-center justify-center rounded-sm bg-market-up/10 text-market-up">
                <GraduationCap aria-hidden="true" className="size-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">A good place to begin</span>
                <span className="font-display text-sm font-semibold">Free lessons to get started</span>
              </span>
            </div>
            <div className="absolute right-3 top-4 flex items-center gap-2 border border-border/70 bg-background/95 px-3 py-2 text-xs font-medium sm:right-5 sm:top-7">
              <span className="size-2 rounded-full bg-market-down" />
              <span className="size-2 rounded-full bg-market-up" />
              Made for curious minds
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 pb-7 sm:px-8 lg:px-12">
          <p className="border-t border-border/70 pt-4 text-xs leading-5 text-muted-foreground">
            Trading involves risk. Academy content is for educational purposes and is not financial advice.
          </p>
        </div>
      </section>

      <section id="courses" className="scroll-mt-6 bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase text-primary">The course collection</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Start wherever you are.
              </h2>
              <p className="mt-3 max-w-lg leading-7 text-muted-foreground">
                Get the fundamentals for free, then explore deeper topics when you’re ready.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter courses">
              {(["All courses", "Free", "Paid"] as const).map((option) => (
                <Button
                  key={option}
                  type="button"
                  aria-pressed={filter === option}
                  variant={filter === option ? "default" : "outline"}
                  className="h-10 rounded-sm px-4"
                  onClick={() => setFilter(option)}
                >
                  {option === "Free" ? "Free courses" : option === "Paid" ? "Premium courses" : option}
                </Button>
              ))}
            </div>
          </div>

          <div id="start-free" className="scroll-mt-8 mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {visibleCourses.map((course, index) => (
              <article key={course.title} className="flex flex-col border border-border bg-card p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-sm bg-secondary text-primary">
                    {course.category === "Free" ? (
                      <BookOpen aria-hidden="true" className="size-5" />
                    ) : (
                      <ChartNoAxesCombined aria-hidden="true" className="size-5" />
                    )}
                  </span>
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold ${
                      course.category === "Free"
                        ? "bg-market-up/10 text-market-up"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {course.category === "Free" ? "Free course" : "Premium course"}
                  </span>
                </div>
                <p className="mt-6 text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")} / {course.level}</p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug">{course.title}</h3>
                <p className="mt-3 min-h-18 text-sm leading-6 text-muted-foreground">{course.description}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  <Clock3 aria-hidden="true" className="size-4" /> {course.lessons}
                </div>
                <details className="group mt-4 border-t border-border pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold marker:content-none">
                    <span>{course.category === "Free" ? "Explore this course" : "View curriculum"}</span>
                    <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-primary transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{course.syllabus}</p>
                </details>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            Premium course details and pricing will be announced soon.
          </p>
        </div>
      </section>

      <section id="approach" className="scroll-mt-6 border-y border-border/70 bg-secondary/55 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">Our approach</p>
            <h2 className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Knowledge before the next move.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              A thoughtful trading education starts with understanding the chart—and the risks that come with it.
            </p>
          </div>
          <ol className="grid gap-0 sm:grid-cols-3">
            {[
              ["01", "Learn the basics", "Get comfortable with price, charts, and the language of the market."],
              ["02", "Build your process", "Practice creating a plan that reflects your own goals and boundaries."],
              ["03", "Keep learning", "Revisit your decisions and grow your understanding over time."],
            ].map(([number, title, description]) => (
              <li key={number} className="border-t border-border py-5 sm:border-l sm:border-t-0 sm:px-5 sm:py-0 first:sm:border-l-0 first:sm:pl-0 last:sm:pr-0">
                <span className="font-display text-sm font-semibold text-primary">{number}</span>
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-2 font-display font-semibold">
            <ChartNoAxesCombined aria-hidden="true" className="size-5 text-primary" />
            Trading Point Academy
          </a>
          <p className="max-w-2xl text-xs leading-5 text-muted-foreground">
            Educational content only; not a recommendation to buy or sell any financial instrument. Trading can result in loss.
          </p>
          <a href="#courses" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Courses <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </footer>
    </main>
  );
}
