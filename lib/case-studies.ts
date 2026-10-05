export type CaseStudy = {
  slug: string;
  name: string;
  domain: string;
  /** One line used on cards and as the detail-page lede. */
  summary: string;
  metric?: { value: string; label: string };
  challenge: string[];
  /** What our Founder personally owned, as distinct from the wider team. */
  role?: string[];
  approach: { title: string; body: string }[];
  decisions: { title: string; points: string[] }[];
  outcomes: string[];
  stack: { name: string; usage?: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-financial-news-intelligence",
    name: "DRO: AI Financial News Intelligence",
    domain: "AI · Financial media · UAE",
    summary: "A scheduled AI pipeline that turns raw financial news into persona-tailored stories on UAE market impact, with editors kept in the loop.",
    metric: { value: "80%", label: "less editorial effort" },
    challenge: [
      "Financial readers drown in duplicate coverage. Fifteen outlets report the same geopolitical event, and someone has to read all fifteen.",
      "The editorial team wrote every persona summary by hand. Rule-based grouping of related articles was inaccurate and needed manual fixing, and tagging for companies, sectors and market relevance was thin.",
      "The brief: a scalable aggregation framework that ingests news from many sources, structures it with AI, lets editors curate through a CMS, and serves each reader a feed shaped to their persona. New sources, personas and model improvements had to plug in without rework.",
    ],
    role: [
      "Engineering manager for the CMS and frontend layers, leading the India-based team. A US-based AI/ML team owned collection, ETL and clustering.",
      "Owned the Sanity schema, the REST APIs that publish from the AI layer into the CMS, and the Next.js application.",
      "Owned end-to-end integration with the solution architect: every stage wired into one pipeline, tested so that what the AI layer produced reached the reader without failure, and documented for the client.",
    ],
    approach: [
      {
        title: "Ingest",
        body: "Cloud Scheduler triggers a Cloud Run job that pulls RSS feeds and the AskNews API, normalises them and stages them as Parquet in Cloud Storage. Every article is SHA-256 hashed against Redis and duplicates are dropped. Hashes commit only after enrichment, so the pipeline restarts safely without reprocessing.",
      },
      {
        title: "Enrich",
        body: "A FastAPI service on Cloud Run uses Gemini on Vertex AI with DSPy structured prompting to tag each article with entities, industries, regions, stock tickers and persona-relevance scores, stored in Cloud Spanner.",
      },
      {
        title: "Cluster into stories",
        body: "Articles are embedded with a sentence transformer (all-MiniLM-L6-v2), reduced with UMAP and grouped by HDBSCAN, which finds the number of stories from the data rather than a fixed k. Maximal Marginal Relevance then picks the most representative, least redundant articles to feature per story.",
      },
      {
        title: "Summarise and moderate",
        body: "Gemini Flash generates a story title and description from the most relevant articles, then one summary per persona: general readers, financial advisors, market analysts and retail investors. Every summary is scored by a moderation gate: safe content publishes automatically, borderline content goes to a human review queue, and violations are blocked.",
      },
      {
        title: "Publish and serve",
        body: "Approved stories are pushed to Sanity through its REST API, where editors move reviewed items from In Review to Published through a custom admin plugin. A Next.js app on Vercel queries Sanity with GROQ. Content is pre-tagged by persona, edition (US, UK, UAE) and entity, so no AI runs at read time.",
      },
    ],
    decisions: [
      {
        title: "Model choice and prompt management",
        points: [
          "Gemini Flash on Vertex AI: fast and cheap enough for high-volume daily news, with all data kept inside the client's Google Cloud project.",
          "DSPy defines entity extraction as typed inputs and outputs rather than free-text prompts, so results come back in a predictable shape.",
          "One prompt template per persona: the story stays constant and only the reader instructions change. The model name lives in configuration, so moving to a newer Gemini version is a config change, not a code change.",
        ],
      },
      {
        title: "Humans review only what needs it",
        points: [
          "The moderation gate publishes safe summaries automatically and sends only borderline items to editors. Nothing questionable goes live without a person checking it.",
        ],
      },
      {
        title: "Caching designed around the read path",
        points: [
          "Server-side rendering degraded as the archive grew into thousands of articles. Moved to Incremental Static Regeneration with background revalidation every 10 minutes.",
          "Each paginated slice is cached server-side with its own key. The next page is prefetched as soon as the current one loads, so “Load more” is a cache hit.",
          "All persona summaries ship with the first fetch. Switching persona is handled entirely on the client, with no new request.",
        ],
      },
      {
        title: "Freshness without rebuilds",
        points: [
          "Time-based revalidation alone can cache content that is already stale. Built and validated on-demand revalidation: a Sanity webhook hits /api/revalidate and the page cache is invalidated the moment a story publishes.",
        ],
      },
      {
        title: "CMS ready before the AI",
        points: [
          "Modelled the Sanity schema (stories, articles, persona summaries, tags and stock data) and seeded it with realistic fixtures, so the frontend shipped in parallel with the AI layer.",
        ],
      },
    ],
    outcomes: [
      "Editorial work that took about 10 hours now takes 1–2: an 80–90% reduction, quoted conservatively as 80%. Measured by comparing the team's time before and after.",
      "Editors' remaining time goes to reviewing borderline items and spot-checking, not writing from scratch.",
      "Duplicate coverage collapses into a single story per event.",
      "Zero AI cost or latency at read time. All heavy lifting happens upstream.",
      "New sources, personas and model upgrades plug in without re-architecture.",
    ],
    stack: [
      { name: "Google Cloud Platform", usage: "Backend infrastructure" },
      { name: "Cloud Scheduler", usage: "Triggers the ETL pipeline" },
      { name: "Cloud Run", usage: "Batch ETL job and enrichment API" },
      { name: "Redis", usage: "Content-hash deduplication" },
      { name: "Cloud Storage", usage: "Pipeline artifacts between steps" },
      { name: "Cloud Spanner", usage: "Structured article metadata" },
      { name: "Vertex AI · Gemini Flash", usage: "Enrichment, summaries, moderation" },
      { name: "DSPy", usage: "Structured prompting for entity extraction" },
      { name: "all-MiniLM-L6-v2 · UMAP · HDBSCAN", usage: "Embeddings and story clustering" },
      { name: "MMR", usage: "Diverse featured-article selection" },
      { name: "Python · FastAPI", usage: "Aggregator API" },
      { name: "Sanity · GROQ", usage: "Headless CMS and query layer" },
      { name: "Next.js · Vercel", usage: "Persona-tailored web app" },
    ],
  },
  {
    slug: "icf-website-rebuild",
    name: "ICF Website Rebuild",
    domain: "Digital publishing · AI-accelerated delivery",
    summary: "A legacy CMS site rebuilt on a modern headless stack, with AI agents trained on the team's own conventions doing the repetitive work.",
    metric: { value: "50–60%", label: "less development effort" },
    challenge: [
      "A legacy CMS caused slow page loads, publishing friction and weak mobile engagement.",
      "The rebuild had to ship a large surface of pages, templates and content blocks with a four-developer team, without letting speed erode consistency, accessibility or review quality.",
    ],
    role: [
      "Led delivery and architecture alongside the client's technical director, and designed how AI agents were used across the team's development lifecycle.",
    ],
    approach: [
      {
        title: "Headless re-architecture",
        body: "Rebuilt on Next.js with a headless CMS organised as pages, templates and blocks, fetched through GraphQL, styled with Tailwind CSS and deployed on Vercel.",
      },
      {
        title: "Automated scaffolding from the CMS schema",
        body: "A meta file describes the content structure, and an automated task pulls the CMS schema and generates typed templates. Developers build components directly against those blocks, and nobody hand-maps the CMS again.",
      },
      {
        title: "AI agents across the lifecycle",
        body: "Cursor plan mode produced first drafts of component design, with final architecture decisions kept by humans. Agents generated components, page templates, integration code and unit tests, and ran a first-pass self-review before every PR. Human review stayed mandatory.",
      },
      {
        title: "Preview-first QA",
        body: "Every PR deployed automatically to a Vercel preview, where developers and QA tested together before merging.",
      },
    ],
    decisions: [
      {
        title: "Encode the team's standards as agent rules",
        points: [
          "Next.js conventions, Tailwind standards, accessibility practices and component patterns were captured as reusable Cursor skills and rules. The agent writes code the way the team writes it, so output from four developers stays consistent.",
          "A feedback loop closes the gap: every new kind of review comment from the technical director became a rule, so the same comment never came back.",
        ],
      },
      {
        title: "Measure the gain honestly",
        points: [
          "The 50–60% is scoped to development effort, measured against story-point history for similar work. Lead time also depends on requirements, designs and product feedback, which AI doesn't speed up.",
        ],
      },
    ],
    outcomes: [
      "Same scope delivered in roughly half the development time, often ahead of estimate.",
      "Shorter review cycles, with style, structure and accessibility basics no longer debated in review.",
      "Fewer post-merge bug-fix PRs, because basic bugs were caught and fixed in the same PR on preview.",
      "Sub-second page loads and zero layout shift across editorial articles.",
    ],
    stack: [
      { name: "Next.js", usage: "Frontend" },
      { name: "Sanity CMS · GraphQL", usage: "Headless content and queries" },
      { name: "Tailwind CSS", usage: "Styling" },
      { name: "Vercel", usage: "Hosting and per-PR previews" },
      { name: "Cursor agents", usage: "Design drafts, code, tests, self-review" },
    ],
  },
  {
    slug: "merchant-lending-platform",
    name: "Merchant Lending Platform",
    domain: "FinTech · Embedded lending",
    summary: "A platform connecting SMBs with lenders, matching every loan request to the best available offer automatically.",
    challenge: [
      "Loan processing was only partially automated. Merchants applied, and matching them to a suitable lender product relied on manual work.",
      "The platform introduced loan offerings: lenders publish products with an amount, interest rate and duration, and each incoming request is matched to the best fit. It also had to manage tenure-based variable rates and per-merchant limits.",
    ],
    role: [
      "Built the merchant-facing React application from scratch, including its client-side state-management design, within an eight-person team.",
      "Implemented seamless sign-in. The app is embedded in a parent product, so merchants already logged in there never see a second login.",
    ],
    approach: [
      {
        title: "Merchant frontend",
        body: "A React application embedded in a parent product, authenticated by token, talking to both the lending core and the centralised KYC platform.",
      },
      {
        title: "Lending core",
        body: "A Ruby on Rails service owns the business rules (loan offerings, rates and merchant limits) in PostgreSQL.",
      },
      {
        title: "Offer matching",
        body: "Each new loan request is assigned the best lender offering based on facility limit, merchant confidence score, turnover, business type and other signals.",
      },
      {
        title: "Verification and review",
        body: "Identity checks run through the centralised KYC platform and its third-party provider. Reviewers give final approval in the lending core.",
      },
      {
        title: "Notifications",
        body: "Sidekiq jobs on Redis email merchants about approval status and alert admins to new loan requests and completed KYC approvals.",
      },
    ],
    decisions: [
      {
        title: "Separate what changes fast from what must stay stable",
        points: [
          "Core lending logic stays on Rails and PostgreSQL. Verification lives in a dedicated, shared KYC service. Each scales and evolves independently.",
          "Identity verification is delegated to a specialist provider rather than rebuilt in-house.",
        ],
      },
      {
        title: "No second login",
        points: ["Token-based sign-in carried over from the parent product removes a drop-off point at the very start of the funnel."],
      },
    ],
    outcomes: [
      "Loan requests matched to lender offerings automatically instead of by hand.",
      "Merchants move from parent product to loan application without re-authenticating.",
      "Lending rules and verification scale independently.",
    ],
    stack: [
      { name: "React", usage: "Merchant frontend" },
      { name: "Ruby on Rails", usage: "Lending core" },
      { name: "Go", usage: "Centralised KYC service" },
      { name: "PostgreSQL", usage: "Loan offerings, settings and limits" },
      { name: "Kafka", usage: "KYC status events" },
      { name: "Sidekiq · Redis", usage: "Background jobs and notifications" },
      { name: "Tilaka", usage: "ID proofing, OCR, liveness" },
    ],
  },
  {
    slug: "centralized-kyc",
    name: "Centralized KYC Platform",
    domain: "FinTech · Identity & compliance",
    summary: "One KYC for every financial product, so merchants verify once instead of once per product.",
    metric: { value: "50%", label: "faster onboarding" },
    challenge: [
      "A growing suite of financial products each ran its own KYC, and approvals were manual and slow. As merchants adopted more than one product, they repeated verification every time.",
      "The fix was a single KYC platform that every product consumes, with automated third-party verification in place of manual review.",
    ],
    role: [
      "Owned the three-step third-party verification flow (OCR verification, ID proofing and liveness), including the modules and services for each step and the database updates as a KYC moves through them.",
    ],
    approach: [
      {
        title: "Data model",
        body: "Separate tables for business and individual KYC. Individual KYC splits across three tables: critical state (SSO ID, OCR and ID-proofing status), basic profile and employment details. This unifies schemas from several existing KYC apps while leaving room for each to evolve.",
      },
      {
        title: "Transactional submission",
        body: "A submission uploads every document to S3 and splits, validates and saves the details across tables as one unit. Either everything succeeds or nothing is recorded.",
      },
      {
        title: "Lifecycle and quotas",
        body: "A KYC can be sent back for revision at most three times before it must be rejected and resubmitted. Third-party verification calls are capped per KYC and in total. Deleted KYCs are soft-deleted, and their documents move from S3 Standard to Glacier Deep Archive.",
      },
      {
        title: "Contract-first service",
        body: "A Go service (Chi, GORM, Viper) with its API defined in OpenAPI and generated with oapi-codegen, so every consuming product integrates against the same spec.",
      },
      {
        title: "Data and migrations",
        body: "PostgreSQL with versioned Goose migrations. Tested with Ginkgo and mockgen, shipped through Bitbucket Pipelines.",
      },
      {
        title: "Asynchronous status",
        body: "KYC status changes are published to Kafka. Consuming applications subscribe and update their users without polling the platform.",
      },
      {
        title: "Elastic on Kubernetes",
        body: "Horizontal Pod Autoscaling between 3 and 10 replicas, triggered at 80% CPU or memory utilisation.",
      },
    ],
    decisions: [
      {
        title: "SQL vs NoSQL, decided on constraints rather than fashion",
        points: [
          "A document store had real merit: per-product fields that evolve, few strong relationships, and one self-contained document per KYC.",
          "Team skills, ready PostgreSQL infrastructure and mature Go integration made PostgreSQL the faster, lower-risk path to production. Loose relationships and carefully separated tables kept the flexibility, so schema changes don't force client apps to change.",
        ],
      },
      {
        title: "Kafka over webhooks or polling",
        points: [
          "Go, PostgreSQL and Kafka was the organisation's standard stack, with scaffolding repositories ready, a trained team and consumer code already in every client app. Under strict timelines, that outweighed introducing anything new.",
          "The platform publishes each status change once and doesn't need to know who consumes it. New products subscribe without any change to the KYC service.",
        ],
      },
    ],
    outcomes: [
      "Merchants verify once across all products instead of once per app.",
      "Roughly 50% reduction in onboarding time, from consolidating repeated KYCs and replacing manual approval with automated third-party verification.",
      "30% increase in customer-care agent productivity across verification pipelines.",
      "Status updates reach every consumer asynchronously.",
      "Scales automatically from 3 to 10 pods under load.",
    ],
    stack: [
      { name: "Go · Chi", usage: "Service and routing" },
      { name: "PostgreSQL · GORM · Goose", usage: "Data, ORM and migrations" },
      { name: "OpenAPI · oapi-codegen", usage: "API contract" },
      { name: "Kafka", usage: "Status events" },
      { name: "AWS S3", usage: "KYC documents and archival" },
      { name: "Docker · Kubernetes", usage: "Runtime and autoscaling" },
      { name: "Ginkgo · mockgen", usage: "Testing" },
      { name: "Bitbucket Pipelines", usage: "CI/CD" },
    ],
  },
  {
    slug: "moda-operandi",
    name: "Moda Operandi",
    domain: "Luxury e-commerce",
    summary: "Runway pre-orders and in-stock luxury retail: catalogue made fast, checkout made robust.",
    metric: { value: "60%+", label: "faster catalogue" },
    challenge: [
      "Moda Operandi sells luxury fashion, beauty and home, and lets customers pre-order straight off the runway through Trunk Shows, before items are even manufactured.",
      "The Rails monolith served catalogue and search directly from the database. Order code had grown tangled across years of contributors, and test coverage sat below 50%.",
    ],
    approach: [
      {
        title: "Page caching",
        body: "Implemented page caching for high-traffic category pages (clothing, shoes, bags, sale) behind CloudFront.",
      },
      {
        title: "Search as a service",
        body: "Integrated Algolia across product search, category grids, faceted filtering (designer, colour, size, price) and sorting. Products sync to the index automatically on create, update and delete, so filtering never touches the database.",
      },
      {
        title: "Order refactor",
        body: "Led the refactor of order creation with the US team: extracted shared modules, removed dead code, documented complex conditions and rewrote critical paths functionally. Covered cancellation, refund and pricing policies, including member discounts and coupons.",
      },
      {
        title: "Test coverage",
        body: "Wrote 200+ new test cases, lifting coverage by 30–40% and paving the way for a separate Order service.",
      },
    ],
    decisions: [
      {
        title: "Move reads off the database",
        points: [
          "Search and filtering moved to a purpose-built index. Category pages are served from cache. The database is left for writes and transactions.",
        ],
      },
    ],
    outcomes: [
      "60%+ performance improvement across catalogue and search.",
      "Search responses under 5 ms, with filters rendering instantly.",
      "Test coverage up 30–40% through 200+ new tests.",
      "Order domain cleaned up and ready to split into its own service.",
    ],
    stack: [
      { name: "Ruby on Rails", usage: "Monolith" },
      { name: "PostgreSQL", usage: "Primary database" },
      { name: "Sidekiq", usage: "Background jobs" },
      { name: "Algolia", usage: "Search, facets and sorting" },
      { name: "AWS EC2 · CloudFront · S3", usage: "Compute, caching, assets" },
      { name: "JavaScript", usage: "Frontend" },
    ],
  },
  {
    slug: "odigo-contact-center",
    name: "Odigo",
    domain: "Enterprise SaaS · Real-time communications",
    summary: "The agent console for an omnichannel contact-centre platform built to route millions of calls a day.",
    challenge: [
      "Businesses talk to customers across phone, chat, email and social, usually in siloed tools that leave agents juggling systems.",
      "Odigo centralises every touchpoint in one interface, automates repetitive work and handles millions of calls per day, often deployed on customer premises.",
    ],
    approach: [
      {
        title: "Agent console",
        body: "Built on AngularJS and TypeScript. On login, the agent's profile and settings load from a Java backend, then the console opens a WebSocket to the routing engine.",
      },
      {
        title: "Skill-based routing",
        body: "The routing engine matches each caller's IVR choice (“press 1 for sales”) to an available agent with the right skill.",
      },
      {
        title: "Call modes",
        body: "Agents choose to take calls by softphone, WebRTC in the browser, or a physical desk phone.",
      },
    ],
    decisions: [
      {
        title: "Calls in the browser over WebRTC",
        points: [
          "The browser resolves its public IP via STUN and opens an SRTP connection to the media gateway.",
          "A SIP server bridges the gateway and the routing engine for setup, hold, transfer and hang-up. On offer acceptance, audio flows over SRTP.",
        ],
      },
      {
        title: "Agent-to-supervisor chat over XMPP",
        points: [
          "Openfire chat server with Strophe.js on the client, kept live through BOSH long-polling, with roster presence subscriptions and SSO login.",
          "Shipped as an embeddable script, locked down with X-Frame-Options and a Content Security Policy frame-ancestors rule so only authorised Odigo domains can embed it.",
        ],
      },
    ],
    outcomes: [
      "Agents take calls directly in the browser, with no desk phone required.",
      "Real-time supervisor chat with live presence.",
      "A completely new agent interface with streamlined workflows.",
    ],
    stack: [
      { name: "AngularJS · TypeScript", usage: "Agent console" },
      { name: "Java · Vert.x", usage: "Agent backend" },
      { name: "WebRTC · SIP · SRTP", usage: "Browser calling" },
      { name: "Openfire · Strophe.js", usage: "XMPP chat" },
      { name: "Node.js", usage: "Chat services" },
    ],
  },
  {
    slug: "aws-to-alibaba-cloud-migration",
    name: "AWS to Alibaba Cloud Migration",
    domain: "Cloud infrastructure · Cost",
    summary: "A Kubernetes estate moved between clouds for a 40–50% lower bill, with minutes of downtime.",
    metric: { value: "40–50%", label: "lower monthly cost (est.)" },
    challenge: [
      "AWS costs were climbing. The move to Alibaba Cloud covered compute, managed PostgreSQL, Redis, VPC and VPN networking, and every security policy around them.",
    ],
    approach: [
      {
        title: "Cost analysis",
        body: "Mapped every AWS service to its Alibaba equivalent (EC2 to ECS, RDS to ApsaraDB, S3 to OSS, IAM to RAM) and built a per-pod cost plan.",
      },
      {
        title: "Setup",
        body: "Provisioned VPC, security groups and the Kubernetes cluster, plus a tunnel between clouds for the transition. Mirrored IAM, network rules, RBAC, bucket and database policies, encryption, SSL, observability and routing.",
      },
      {
        title: "Per-pod migration plans",
        body: "Pre-, during- and post-migration steps for every pod, with capacity planning, a rollback plan and a shared backup strategy.",
      },
      {
        title: "Cutover",
        body: "A nightly window behind a maintenance page. Verify the new infrastructure, rotate credentials in Vault, migrate the database and Redis, scale down AWS, deploy, repoint DNS, confirm traffic in observability, then run smoke and integration tests.",
      },
    ],
    decisions: [
      {
        title: "Kubernetes made the move portable",
        points: ["Manifests, Helm charts, services and ConfigMaps moved as-is. Only the underlying metal changed."],
      },
      {
        title: "Database: replication vs dump-and-restore",
        points: [
          "Managed replication (DTS/DMS) offers minimal downtime and live validation, but adds cost, WAL and network setup, and requires a schema freeze.",
          "Dump-and-restore with pg_dump/pg_restore is simple, free and point-in-time consistent, at the price of a planned downtime window.",
        ],
      },
      {
        title: "Redis and assets",
        points: [
          "Redis moved as an RDB snapshot, verified by comparing DBSIZE and keyspace before switching.",
          "S3 assets were pre-synced to OSS with ossimport, re-run incrementally on cutover day, and every database-referenced file URL was validated afterwards.",
        ],
      },
    ],
    outcomes: [
      "Estimated 40–50% reduction in monthly cloud spend.",
      "Cutover completed with 5–10 minutes of downtime.",
      "Security posture mirrored policy-for-policy, with rollback ready at every step.",
    ],
    stack: [
      { name: "Kubernetes · Helm", usage: "Portable workloads" },
      { name: "Alibaba Cloud ECS · ApsaraDB · OSS", usage: "Target compute, database, storage" },
      { name: "PostgreSQL", usage: "pg_dump / pg_restore" },
      { name: "Redis", usage: "RDB snapshot migration" },
      { name: "VPN Gateway · RAM", usage: "Networking and access" },
      { name: "ossimport", usage: "S3 to OSS asset sync" },
    ],
  },
  {
    slug: "geolocation-attendance",
    name: "Geolocation Attendance at Scale",
    domain: "HR tech · Geospatial",
    summary: "A geocoding cache that absorbs the morning check-in spike instead of paying a third-party API for it.",
    metric: { value: "60%", label: "lower geocoding cost" },
    challenge: [
      "Employee attendance reverse-geocoded every check-in through Google. At the morning peak of 20,000–30,000 requests per second, third-party costs became expensive.",
    ],
    approach: [
      {
        title: "Geocode microservice",
        body: "The attendance service calls a dedicated Go geocode service, which runs a PostGIS ST_DWithin query for a cached address within a set radius, such as 100 m.",
      },
      {
        title: "Cache on miss",
        body: "On a hit, the cached address is returned immediately. On a miss, the service calls Google or HERE, stores the result as a geography point and returns it.",
      },
    ],
    decisions: [
      {
        title: "Proximity, not exact match",
        points: ["An address within 100 m is accurate enough for attendance, so nearby check-ins share a single paid lookup."],
      },
      {
        title: "Built for the spike",
        points: ["Both services read from database replicas. Load-tested with k6 to 50,000 requests per second."],
      },
    ],
    outcomes: [
      "60% reduction in third-party geolocation costs.",
      "Handles 20–30k requests per second at peak, validated to 50k.",
      "Provider fallback across Google and HERE.",
    ],
    stack: [
      { name: "Go · Chi", usage: "Geocode service" },
      { name: "PostgreSQL · PostGIS", usage: "Geospatial queries" },
      { name: "sqlx", usage: "Database access" },
      { name: "Docker", usage: "Containers" },
      { name: "k6", usage: "Load testing" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
