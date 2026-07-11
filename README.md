I have scaled and optimized the KPSS Geography Web Application, focusing on database performance, modular assets, and custom Tailwind CSS v4 configurations.

Technical Architecture & Optimizations:

Database & Seeding Pipeline: To handle a massive scale of 9,000 unique questions, 9,000 flashcards, and 1,500 structured tests, I designed a preloaded database structure. All content is bundled into optimized JSON packages in Supabase. I developed a Node.js seeding script with a custom batch-size runner (5 objects per transaction) to prevent database locks and statement timeouts on free-tier database instances.
Tailwind CSS v4 Theme Synchronization: The application manages light and dark themes using dataset attributes (data-theme="dark"). Because Tailwind v4 defaults to media query selectors, I configured a custom CSS utility: @custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *)). This resolves contrast inconsistencies on white-bg containers in dark mode, ensuring dynamic readability.
Rotating Asset Mapping: I mapped 15 custom educational geography graphics to 90 sub-chapters. I used a mathematical rotating offset based on topic and chapter indices to prevent any identical assets from rendering consecutively on the same page.
Dynamic Question Context: I replaced static explanations with dynamic, topic-specific tips for every single question. Additionally, choice options are fully randomized programmatically to eliminate answer biases.
Tech Stack: Next.js, React, TypeScript, Tailwind CSS v4, Supabase

Live Project: https://kpss-cografya-web-app.vercel.app/topics/turkiyenin-cografi-konumu

Source Code: https://github.com/Dpehect/KPSS-Cografya-Web-App
