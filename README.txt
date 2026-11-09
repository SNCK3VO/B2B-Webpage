Brother2Brother at Arkansas State - Website v4

WHAT'S INCLUDED
- index.html
- styles.css
- script.js
- assets/b2b-logo.png
- assets/instagram-qr.png
- assets/groupme-qr.png
- assets/membership-dues-qr.png

UPDATES IN THIS VERSION
- Added a dedicated current Membership section based on the active B2B Mintlify reference page.
- Current public join flow now matches the live B2B page: follow Instagram, attend an event, then pay dues through A-State Marketplace.
- GroupMe remains prominently available as a connection/update channel but is not presented as a formal membership requirement.
- Added a public FAQ covering joining, dues, announcements, the next interest meeting, and contact options.
- Preserved the history section from the B2B constitution (founded 2004, founding mentors, motto, creed).
- Excluded obsolete 13% Awards Committee duties and outdated classification requirements.
- Photo gallery remains ready for event photos next week.

CURRENT LINKS
Instagram: https://www.instagram.com/brother2brother.asu/
GroupMe: https://groupme.com/join_group/108480718/zyUWZH9K
Membership dues: https://secure.touchnet.net/C20019_ustores/web/product_detail.jsp?PRODUCTID=1301
Email: b2b.asu@outlook.com

PUBLISHING
Deploy the ENTIRE brother2brother_website_v4 folder to Netlify (or another static host). Do not paste only index.html into a documentation platform. CSS, JavaScript, and the assets folder must stay beside index.html.

PHOTOS
When event photos are available, add them to the assets folder and replace the gallery placeholder with real event images.


Version 5 update:
- Added Founding Mentors showcase with photos in the History section.
- Photos use a grayscale / tribute-style treatment to match the site design.


Version 6 mobile update:
- Fixed horizontal overflow on narrow phones.
- Reduced and fluidly scaled the hero/title area on mobile.
- Made buttons, cards, long links, and navigation fit the viewport.
- Added extra-small-phone breakpoints for 430px and 350px widths.


Version 6.1 update:
- Repositioned Tony Thomas's founder portrait lower within its card for better framing.


Version 7 update:
- Founder names now open short biography popups.
- KJ Whitfield's President name now opens a leadership biography.
- Added accessible modal behavior with close button, backdrop click, Escape key support, and mobile styling.


Version 8 update:
- Added private suggestion box with anonymous/contact-info option.
- Added B2B committee application and open Treasurer/Special Events application options.
- Removed Keshawn Hayes from Special Events and marked the role open.
- Added encouraging words for midterms/finals.
- Added Netlify form support, thank-you page, Netlify headers, and OPERATIONS.md.


Version 9 update:
- Split involvement into three distinct systems: Join B2B, Serve B2B, and Lead B2B.
- Added optional membership-interest form.
- Committee application is now committee-only.
- Added separate E-Board application for Treasurer and Special Events.
- Updated Netlify form operations and internal workflow guide.


GitHub / Netlify repository structure:
- Keep index.html, styles.css, script.js, thanks.html, and netlify.toml at the repository root.
- Keep all image and QR assets inside the assets/ folder.
- Do not move the assets files to the repository root because index.html and thanks.html reference assets/... paths.
- Netlify should publish from the repository root with no build command.


Revision v9.2 (20260831-1)
- Corrected the Dr. Lonnie Williams and Dr. Herman Strickland founder photo assignments.
- Increased spacing between the hero title and B2B logo card at laptop widths.
- Added version query strings to CSS, JavaScript, logo, QR, and founder image requests to force stale browsers to fetch the latest files.
- Reduced asset cache duration during active development and set HTML to revalidate.


Revision v9.3
- Footer landing-page links are now a two-column grid instead of a single stacked list.
- Added an Arkansas State University logo to the footer using a dark-background-friendly logo treatment.


Revision v9.4
- Footer links now exactly mirror the top navigation: About, Events, Leadership, Ideas, Join, Serve, Lead, Contact, and Pay Dues.
- Removed footer-only History, Membership, and FAQ links.
- Added a clearly visible Arkansas State University logo in the right footer column above the contact/social links.
- Footer navigation remains a two-column list.


Revision v9.5
- Added FAQ to the footer navigation.
- Top navigation remains unchanged.


Revision v9.6
- Reworked the footer into a significantly more compact layout.
- Switched the Arkansas State footer mark from the large stacked logo to a shorter horizontal logo.
- Reduced B2B logo size, footer padding, navigation spacing, and contact text size.
- Kept the footer navigation in two columns and retained FAQ.
- Added tablet/mobile footer layouts to prevent the footer from feeling oversized when stacked.


Revision v9.7
- Replaced the footer email, Instagram, and GroupMe text links with clickable icon buttons.
- Slightly increased footer font sizes for better readability.
- Preserved the compact footer layout and two-column navigation.
