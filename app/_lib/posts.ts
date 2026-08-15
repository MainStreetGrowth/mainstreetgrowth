/* ─── Blog post data + types (single source of truth for the blog) ─── */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO-ish, e.g. "2026-07-15"
  readMins: number;
  /**
   * Body paragraphs. A paragraph prefixed with "## " is rendered as an <h2>
   * subhead (the prefix is stripped by the page); everything else is a <p>.
   */
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "get-found-on-google-maps",
    title: "Why your restaurant isn't showing up on Google Maps (and how to fix it)",
    excerpt:
      "If new customers can't find you on the map, they're eating somewhere else. Here's why local restaurants get buried in Google Maps results, and the practical steps that pull you back to the top.",
    category: "Local SEO",
    date: "2026-07-15",
    readMins: 7,
    body: [
      "Picture someone new in town at 6 p.m. on a Friday. They're hungry, they don't know the area, and they do what almost everyone does now: they pull out their phone and type \"restaurants near me\" or \"BBQ in town\" into Google. In the next ten seconds, three places show up in a little boxed list with a map above them. One of them gets the visit. If it isn't you, it's usually not because your food is worse. It's because Google doesn't have enough reason to trust that you're the right answer.",
      "That boxed list of three results is called the local pack, and for a small-town restaurant it is the single most valuable piece of real estate on the internet. It sits above the regular blue links, it's the first thing a hungry person sees, and it's built almost entirely from your Google Business Profile, not your website. If you've never claimed or filled out that profile, you're essentially invisible in the exact moment someone is deciding where to eat.",
      "## Google ranks three things: relevance, distance, and prominence",
      "Google is fairly open about how it decides who shows up. It weighs three factors. Relevance is how well your profile matches what someone searched, which comes from your categories, your menu, and the words on your listing. Distance is how close you are to the searcher, which you can't change, but which matters less than owners assume once the other two are strong. Prominence is how well-known and trusted you appear to be, and that's driven heavily by your reviews, your citations around the web, and how complete and active your profile is. Most restaurants lose on relevance and prominence, and both are fixable.",
      "The most common reason a restaurant is buried is a thin or abandoned profile. The category is set to something generic like \"Restaurant\" instead of \"Barbecue restaurant\" or \"Southern restaurant,\" the hours are wrong or missing, there are two or three photos from 2019, and the last review reply was never written. Google reads all of that as a business that isn't really paying attention, and it quietly ranks the competitor down the street who is.",
      "## The fixes that actually move you up",
      "Start by claiming and fully completing your Google Business Profile: correct name, address, and phone number, accurate hours including holidays, your real menu, your service options (dine-in, takeout, catering), and your most specific primary category. Then add photos, and keep adding them. Restaurants with a steady stream of fresh, real photos of their food and dining room consistently pull more clicks and calls than ones with a stale gallery. Aim for a handful of new photos every month, not a one-time dump.",
      "Reviews are the other lever, and they matter more than almost anything else you can control. You want a steady flow of recent reviews, and you want to reply to them, warmly, to the good ones and the bad ones alike. A restaurant with 120 reviews and replies within a day reads as far more trustworthy than one with 400 reviews and total silence. The trick is simply asking, consistently, at the moment a guest is happiest, which is usually right as they're paying or when they compliment the server.",
      "Behind the scenes, consistency across the web matters too. Your name, address, and phone number should match exactly everywhere they appear, on Yelp, Facebook, TripAdvisor, and any local directory. When those details conflict, Google gets less confident about which information is right, and confidence is exactly what prominence is made of. Cleaning up conflicting listings is unglamorous work, but it's often what separates the top three from everyone below.",
      "## This is the quiet work we do every month",
      "None of this is a one-time project, and that's the part most owners underestimate. Ranking on Google Maps is a habit, not a switch: a complete profile, fresh photos, a steady review flow, replies that sound like a real neighbor, and clean listings across the web, month after month. Doing it consistently while also running a kitchen is the hard part, and it's exactly the part we take off your plate at Main Street Compass. If you're not sure where you stand today, we'll run a free revenue audit that shows you exactly how you rank against the restaurants nearby, and what it would take to move you into that top three.",
    ],
  },
  {
    slug: "hidden-cost-of-delivery-apps",
    title: "The hidden cost of delivery-app fees — and how to win back direct customers",
    excerpt:
      "Delivery apps feel free because you don't write a check, but they quietly take a third of every order and rent you your own customers. Here's the real math, and how to build direct ordering that you actually own.",
    category: "Growth",
    date: "2026-06-28",
    readMins: 8,
    body: [
      "Delivery apps arrived like a gift. Someone else brings you orders, handles the driver, and takes the customer's payment, and all you have to do is cook. For a small-town restaurant with no line out the door on a Tuesday, that felt like found money. The problem is that the money was never really found. It was borrowed, at a rate that would make a credit card blush, and the interest is paid in customers you never get to keep.",
      "## The math nobody puts in front of you",
      "The typical commission on a marketplace delivery order runs between 15 and 30 percent, and once you stack delivery fees, service fees, and the promoted-placement fees you pay to not get buried, the effective take on many orders lands near a third of the ticket. On a $40 order, that can be $12 or more gone before you've paid for the food, the labor, or the packaging. Restaurants routinely run 3 to 6 percent net margins in a good month. A 25 percent commission doesn't shave your profit on that order; it erases it, and then some. You can genuinely lose money on delivery volume while feeling busier than ever.",
      "There's a subtler cost that's easier to miss. When an order comes through a marketplace app, the customer isn't yours. You often don't get their name, their email, or their phone number. The app does. So the next time that person is hungry, the app shows them your competitor's promoted listing right next to yours, and you pay again to win back someone who already loved your food. You're not buying a customer. You're renting one, over and over, from a landlord who also rents to everyone on your street.",
      "## Delivery apps aren't the enemy — dependence is",
      "This isn't an argument to delete every app tomorrow. For a lot of restaurants, the apps genuinely do reach new people, and that discovery has real value, especially early on. The mistake is treating them as your ordering system instead of as one marketing channel among several. An app that brings you a brand-new customer once has done its job. An app that skims 25 percent off your most loyal regular, who would happily have called you directly, is quietly bleeding you. The goal is to keep the discovery and stop the bleed.",
      "The way you do that is by giving people an easy, obvious way to order directly from you, and then a reason to choose it. Direct online ordering on your own website, with a flat, low monthly cost instead of a per-order cut, means a $40 order stays a $40 order. Across a month of steady takeout, the difference between paying a percentage on every ticket and paying nothing per order adds up to real money, often more than a part-time employee's wages.",
      "## How to win the direct customer back",
      "Start by making direct the path of least resistance. Your own \"Order Now\" button should be the first thing a customer sees on your site and your Google profile, it should work flawlessly on a phone, and it should be genuinely faster than opening an app and scrolling past three sponsored competitors. When ordering direct is easier than ordering through a marketplace, a surprising number of people simply will.",
      "Then give people a reason to come back to you instead of the app. A small perk for ordering direct, a free side, a loyalty punch, a coupon in the bag, tilts the habit in your favor. Put a little card in every delivery order that says \"order direct next time and skip the fees.\" Capture an email or a phone number at checkout so you can reach that customer yourself, with a slow Tuesday offer or a new-menu announcement, without paying a toll to do it. Over a few months, the regulars migrate to your direct channel, and the apps go back to doing what they're actually good at: introducing you to someone new.",
      "## We build the system that keeps more of every order",
      "Winning back direct customers isn't one clever move; it's a system: fast direct ordering on a site you own, a prominent order button everywhere people find you, a way to capture and reach your regulars, and small nudges that make direct the easy choice. That's the kind of quiet infrastructure we build and run for restaurants at Main Street Compass, for a flat monthly fee with no cut of your orders and no contract. If you want to see exactly how much the apps are costing you right now, and what you'd keep by shifting even a third of that volume direct, we'll show you in a free revenue audit.",
    ],
  },
  {
    slug: "restaurant-website-essentials",
    title: "5 things every small-town restaurant website needs in 2026",
    excerpt:
      "Most restaurant sites fail at the three questions a hungry customer actually has. Here are the five essentials that turn your website from a digital business card into something that fills tables.",
    category: "Websites",
    date: "2026-06-10",
    readMins: 6,
    body: [
      "Here's an uncomfortable truth about most small-town restaurant websites: they were built once, years ago, by a cousin or a template, and they've been quietly costing customers ever since. The menu is a blurry PDF that won't open on a phone. The hours are from before the last renovation. There's a beautiful photo of a sunset but not one of the food. Meanwhile the person looking at it on their phone has exactly three questions, and your site answers none of them fast enough.",
      "A restaurant website in 2026 has one job, and it isn't to win a design award. Its job is to take a hungry, distracted person who found you on their phone and turn them into someone sitting at your table or placing an order. Almost everything that matters comes down to answering three questions instantly: What is this place? Can I trust it? How do I order or come in? Here are the five things every site needs to do that well.",
      "## 1. A phone-first design that loads fast",
      "The majority of the people looking at your restaurant site are doing it on a phone, often on a spotty connection, often while standing somewhere deciding where to eat. If your site is slow, if the text is tiny, if they have to pinch and zoom, they're gone in a few seconds, and Google notices that they left. A modern site should load in a couple of seconds, be effortless to read and tap with a thumb, and put the essentials, hours, location, menu, and an order button, within immediate reach. This isn't a nice-to-have. Speed and mobile usability are now direct ranking factors, so a slow site loses twice: once with the customer, once with Google.",
      "## 2. A real menu, not a PDF",
      "The single most-visited page on any restaurant website is the menu, and it's the one owners most often get wrong. A menu trapped in a PDF or a photo is slow to open, impossible to read on a phone, and invisible to Google, which can't index the dishes you're known for. Your menu should be real text, right on the page, easy to skim, with prices and your signature items clearly presented. When your menu is actual web text, Google can match someone searching for \"catfish plate\" or \"brisket near me\" directly to your dishes, which is exactly the customer you want.",
      "## 3. Hours, location, and tap-to-call that are impossible to miss",
      "It sounds almost too basic to mention, and yet it's the most common failure: a customer can't quickly find whether you're open, where you are, and how to reach you. Your current hours (including holidays) should be obvious, your address should link straight to Google Maps directions, and your phone number should be a single tap to call. A hungry person who can't confirm you're open in five seconds doesn't email you to check. They pick the place that made it easy. Make being found the easiest thing on the page.",
      "## 4. An obvious way to take action",
      "Every page should make the next step obvious, whether that's \"Order Online,\" \"Book a Table,\" \"Call Us,\" or \"Get Directions.\" One clear, high-contrast button that follows the customer as they scroll removes the tiny moments of friction where people give up. If you do takeout, your own direct-order button should be front and center, so you keep the customer and the margin instead of handing both to a delivery app. The goal is that no one ever has to hunt for how to give you their money.",
      "## 5. Proof that you're the real thing",
      "New customers are cautious, and a small-town restaurant lives or dies on trust. Real photos of your actual food and dining room, not stock images, do more to earn a visit than any amount of copy. A few genuine reviews on the page, a line about your story or the family behind the place, and a consistent look that matches your Google listing all quietly answer the question \"can I trust this?\" People eat with their eyes and their gut long before they taste anything, and your website is where that first impression is made.",
      "## Your website should be earning its keep",
      "A restaurant website that nails these five things stops being a digital business card and starts being a quiet, tireless host, greeting every new customer, answering their questions, and walking them to the table or the order button. That's the standard we build every site to at Main Street Compass, and then we keep it fast, current, and working month after month, all for a flat monthly fee. If you want an honest read on where your current site is helping and where it's leaking customers, we'll walk through it with you in a free revenue audit, no pressure and no jargon.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
