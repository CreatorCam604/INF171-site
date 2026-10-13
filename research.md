# BuildRight Hardware Project: Research Notes and Sources

**Module:** INF1781, Belgium Campus
**Team:** BC Consulting (Cam, Junior, Ivan, Kevin, Stevian)
**Client (fictional):** BuildRight Hardware, owned by Thabo Dlamini. Two branches, Vanderbijlpark and Vereeniging, around 15 staff.
**Date of this draft:** 12 October 2026

## How to read this document

This brings together the research behind each topic on the website in one place, so it can be checked and referenced easily. Each section lists the main ideas, the facts and figures we used, and where they came from. Inline citations use the author and year, and the full Harvard references are collected at the end. Anything that is still an estimate, or a source that still needs confirming, is flagged plainly in the last section so nothing gets presented as more certain than it is.

---

## 1. The client scenario

BuildRight Hardware is a fictional family-owned hardware and building supplies business. It runs two branches (Vanderbijlpark and Vereeniging) and employs around 15 people. Today it relies on Excel for stock, a handwritten order book, a basic till, paper invoices, a customer WhatsApp group and a monthly shoebox of receipts for the accountant. The recurring problems are a lack of shared stock visibility across branches, cash tied up in slow-moving stock, customer details kept insecurely, and no clear daily view of profit. The whole site is built around fixing these in a sensible order: get the data right, protect it, use it for decisions, connect the systems, then implement a chosen solution.

---

## 2. Your Data (Junior)

The data topic is treated as the foundation for everything else. It is split into four sub-pages.

### 2A. From paper and spreadsheets to real information

- **Data, information and knowledge.** Data is raw, unprocessed facts and figures with no context. Information is data that has been cleaned, categorised and given meaning so it answers who, what, where and when. Knowledge is the understanding gained by combining information with experience and local patterns, which answers how and why (Laudon and Laudon, 2022).
- **Worked example.** "SKU CEM-AFR-50: 10 sold at 14:15" is raw data. "Vanderbijlpark has 8 bags left while Vereeniging holds 142" is information. "Contractors buy on Friday mornings, so transfer 50 bags before 08:00" is knowledge that saves money.
- **South African context.** National retail sales in hardware, paint and glass contracted by 5.7% year on year in early 2023 (Stats SA, 2023). In a tight market, uncoordinated stock is a cash trap. Research from SEDA indicates that small retailers who replace manual spreadsheets with structured point-of-sale systems reduce stock carrying costs by up to 18% and cut stock-out incidents by 25% (SEDA, 2023).

### 2B. The cost of bad data (data quality)

- **Six data quality dimensions** (DAMA International, 2017): accuracy, completeness, consistency, timeliness, validity and uniqueness. Each one maps to a real counter failure, for example inconsistent product naming ("Cement 50kg" versus "50 kg Cement") causing a phantom stock-out, or text typed into a cost cell breaking the spreadsheet's =SUM() formulas.
- **Cost of poor data.** Research in the South African Journal of Information Management indicates that small and medium enterprises lose between 15% and 25% of operating staff hours tracking down and correcting data discrepancies across spreadsheets and ledgers, and that unstandardised product descriptions are the single biggest cause of phantom stock-outs in building supplies. (Full citation still to be confirmed, see Section 7.)

### 2C. From spreadsheets to a system (databases and master data)

- **Spreadsheets versus relational databases.** A spreadsheet lets any cell hold text, numbers or a broken formula. A relational database enforces strict tables and relationships through keys, so an invalid sale or a non-existent product cannot be saved.
- **ACID guarantees.** Relational databases enforce Atomicity, Consistency, Isolation and Durability, so logging a sale and reducing inventory happen together or not at all (Laudon and Laudon, 2022).
- **Master Data Management (MDM).** One authoritative Product Master and one Customer Master prevent duplicated, conflicting records.
- **Data governance.** Role-Based Access Control (RBAC) limits who can do what, for example cashiers issue receipts while only the owner changes cost prices.
- **Backups.** The 3-2-1 strategy keeps 3 copies across 2 media types with 1 held off-site.
- **South African context.** Case studies from the Gordon Institute of Business Science (GIBS) indicate that small trade businesses lose 3% to 5% of gross revenue to admin discrepancies, phantom stock-outs and unbilled credit when running on unlinked spreadsheets, and that entry-level relational retail software cuts stock reconciliation time by over 70% (Sage, n.d.; Xero, n.d.a). (GIBS citation still to be confirmed, see Section 7.)

### 2D. Retail dashboards and visualisation

- **Dashboard design.** KPI cards give high-level indicators at a glance, and chart types should be chosen to fit the question: grouped bars for branch comparison, a column and line combination for revenue against margin, and ranked horizontal bars for dead capital (Few, 2013).
- **Key formulas.**
  - Gross profit margin = (sales revenue minus cost of sales) / sales revenue, expressed as a percentage.
  - Stock turnover = cost of sales / average inventory value (Stats SA, 2022).
  - Dead stock value = capital tied up in products with zero sales for more than 90 days.
- **Sample dashboard figures** (from the mock workbook, used in the live demo): monthly turnover about R428,500 against a R400,000 target (up about 7.1%), gross margin about 28.6% (revenue R428,500, cost of sales R305,949), dead stock about R64,200 across 6 lines, and 14 inter-branch transfer candidates. These sample numbers tie out exactly to the dashboard's calculations.
- **Industry benchmark.** Statistics South Africa reports that trade enterprises average a gross profit margin of 21.7% to 23.6% and a net profit margin before tax of about 6.0% (Stats SA, 2022). Specialist hardware and building merchants usually benchmark between 25% and 30% to cover inventory holding costs, so the store's 28.6% target sits within the industry norm.

**Sources for this topic:** DAMA International (2017); Few (2013); Laudon and Laudon (2022); Sage (n.d.); SEDA (2023); Stats SA (2022); Stats SA (2023); Xero (n.d.a). Two further in-text sources still need full entries (see Section 7).

---

## 3. Customer Data and POPIA (Ivan)

The store is a "responsible party" under the Protection of Personal Information Act 4 of 2013 (POPIA), consolidated to Government Gazette 44782 of 30 June 2021. Paper records in a filing system count as much as digital ones (s 3(1)(a)).

- **The eight conditions for lawful processing** (s 4(1), ss 8 to 25): accountability, processing limitation, purpose specification, further processing limitation, information quality, openness, security safeguards, and data subject participation. Special personal information such as health, race, religion or biometrics is generally prohibited (ss 26 and 27).
- **Information Officer.** The head of the business is the Information Officer, who may authorise a management employee in writing, and must register with the Regulator before acting (ss 55 and 56; Information Regulator, 2021). The practical setup for this business is the owner as Information Officer and a branch manager as Deputy.
- **Direct marketing (s 69).** The store may not send WhatsApp or SMS specials without consent or an existing-customer relationship. Since the April 2025 amendments, opt-out is not consent, and the store must be able to prove consent (Eversheds Sutherland, 2025; Information Regulator, n.d., Form 4). Every message must name the sender and give a way to stop (s 69(4)).
- **Security and breaches (ss 19 and 22).** Reasonable safeguards are required, and a breach such as a stolen branch laptop triggers notification to the Regulator and to affected customers in writing (not by WhatsApp or SMS).
- **Cross-border transfers (s 72).** Offshore cloud hosting is treated as a transfer, allowed only under conditions such as comparable legal protection or customer consent (ENSafrica, n.d.; Acts Online, n.d.). SARS also requires authorisation to keep electronic tax records outside South Africa (SARS, 2026).
- **Retention (s 14).** Records are kept only as long as needed unless a law requires longer: invoices and till slips for five years (Tax Administration Act s 29, per SARS, 2026), company accounting records for seven years (Companies Act s 24, per Accounting Weekly, n.d.).
- **Enforcement.** The Regulator can issue fines of up to R10 million (Bowmans, 2023). In the FT Rams Consulting notice of 21 February 2024, emails sent without consent breached s 69 and an unsubscribe link did not cure it (Information Regulator, 2024). The Department of Justice received the first administrative fine, R5 million on 3 July 2023 (Bowmans, 2023; Moonstone, 2026).
- **Ethics beyond the law.** Lawful is not the same as acceptable. The idea of contextual integrity, that data should stay in the context it was given, comes from Nissenbaum (2010). Practical cases include CCTV signage and angles, weak consent for staff monitoring, and the risk of exposing customers' buying history.

**Sources for this topic:** Accounting Weekly (n.d.); Acts Online (n.d.); Bowmans (2023); ENSafrica (n.d.); Eversheds Sutherland (2025); Information Regulator (2021, 2024, n.d.); MJK Inc (n.d.); Moonstone (2026); Nissenbaum (2010); Protection of Personal Information Act 4 of 2013; SARS (2026).

---

## 4. Smarter Decisions with AI (Kevin)

Note: this topic is currently a working draft prepared to match the rest of the site. The factual claims below are modest and broadly true, but Kevin still needs to confirm the content and add formal references (see Section 7).

- **Analytics versus AI.** Analytics looks at data to answer a question. Artificial intelligence does tasks we usually think need human thinking. Machine learning, the most common form, learns patterns from past data to make a prediction.
- **Three questions data can answer.** What happened (description), what is likely to happen (prediction), and what should we do (recommendation). Small businesses get most value from the first, some from the second, and should treat the third as a suggestion to check.
- **Generative AI.** Tools such as large language models can draft text and answer questions but can also state wrong things confidently (often called hallucination), so output about prices, stock or law must be checked by a person.
- **Garbage in, garbage out.** Every prediction depends on past data, so poor data quality produces confident but useless answers. This links directly to the data quality topic.
- **Realistic uses for the store.** Reorder suggestions from sales history, dead-stock alerts, seasonal demand forecasts for the busy building season, branch balancing, and eventually a basic stock-query assistant.
- **Everyday South African example.** Load-shedding apps such as EskomSePush turn raw schedule data into a short, usable forecast that a business can plan around, which shows both the value and the limits of prediction when the underlying data changes.

**Sources for this topic:** still to be added by Kevin.

---

## 5. Connecting Your Systems (Stevian)

- **Enterprise system types.** ERP connects purchasing, stock, sales and accounting. CRM manages customer details and enquiries. SCM manages the movement of goods between suppliers, branches and customers. POS records sales and can update stock. Accounting software records income, expenses and customer accounts.
- **Why integration matters.** Connecting these so they share information cuts duplicate data entry, keeps stock consistent across branches, gives the owner a clearer view, and helps the accountant. Integration does not guarantee correct data on its own, since staff still have to enter it accurately.
- **One shared product list.** The fix for mismatched names ("Cement 50kg" versus "50 kg Cement") is one master list with a unique code, standard name, price and per-branch stock.
- **Integration challenges.** Data silos, duplicate data, APIs versus manual exports, legacy data, vendor lock-in, costs and staff skills, internet and load-shedding dependence, and security and privacy.
- **Suite versus connected apps.** A single integrated suite makes information flow easily but can be costly and hard to leave. Connected specialist apps let the store pick the best tool for each task and start small, but they must be compatible. The recommendation is a small, connected setup added in phases.
- **South African software options reviewed** (from official vendor sites): Sage for accounting with extra inventory options (Sage, n.d.); Xero for accounting with inventory and an app marketplace (Xero, n.d.a; Xero, n.d.b); Odoo for connected business applications (Odoo, n.d.); and Shopify POS for retail sales and multi-location inventory (Shopify, n.d.).

**Sources for this topic:** Odoo (n.d.); Sage (n.d.); Shopify (n.d.); Xero (n.d.a); Xero (n.d.b).

---

## 6. Making It Fit Your Business (Cam)

- **Configure, customise or build.** Configure using existing settings first, customise only with a strong reason, and avoid building from scratch for a business this size (Laudon and Laudon, 2020).
- **Ways to get a system.** COTS (ready-made), SaaS (hosted, subscription), bespoke (built for one business) and low-code (visual builders). A suitable SaaS solution is a sensible starting point.
- **Fit-gap analysis.** Compare the store's requirements against each system's features and record the gaps, then decide whether to change a process, configure, or customise.
- **Total cost of ownership (TCO).** The full cost across the system's life, not just the subscription, including hardware, migration, training, support and internet (Laudon and Laudon, 2020).
- **Rollout approaches.** Direct cutover, parallel running, phased rollout and pilot. The recommendation is a pilot at one branch run alongside the old order book for two to four weeks, then rollout to the second.
- **Change management models.** Lewin's three stages of unfreeze, change and refreeze (Lewin, 1947); the ADKAR model of awareness, desire, knowledge, ability and reinforcement (Hiatt, 2006); and the Technology Acceptance Model, where perceived usefulness and ease of use drive adoption (Davis, 1989).
- **South African evidence.** EngineerIT (2021) reported on a GetApp survey of more than 500 South African SME leaders conducted in December 2020, in which 88% described software purchases as positive or somewhat positive for business survival, while 43% found moving in-person work online moderately challenging. Mdhluli (2024), a Wits Business School study of 84 South African SMEs, found a positive relationship between digital technology use and business performance.

### Cost comparison (planning figures, not final quotes)

All prices are publicly displayed figures or clearly marked estimates, and must be checked against saved screenshots and written quotes before submission.

- **Sage Accounting Standard (South Africa):** advertised from R435 per month including VAT with two users; extra users R75 each per month; Advanced Inventory R415 per month. For five users: R435 + (3 x R75) + R415 = R1,075 per month, or R38,700 over 36 months (Sage, 2026).
- **Odoo Standard:** listed at US$24.90 per user per month on annual billing, regular price US$31.10. For five users: US$124.50 per month, US$1,494 for year one. A provisional three-year estimate using the regular price in years two and three is US$5,226. Using an illustrative rate of R17.50 per US dollar, that is roughly R91,455 before other costs (Odoo, 2026).
- **Hardware and other estimates (three years, two tills):** barcode scanners two at R700; receipt printers two at R3,140.65; UPS units two at about R1,500; setup and migration R6,000; training R3,000; support R3,600; internet and data R500 per month (R18,000).
- **Indicative three-year totals:** Sage about R79,981.30; Odoo about R128,736.30. The Sage total excludes a separate point-of-sale subscription and integration, so the real figure could be higher.

**Sources for this topic:** Davis (1989); EngineerIT (2021); Hiatt (2006); Laudon and Laudon (2020); Lewin (1947); Mdhluli (2024); Odoo (2026); Sage (2026).

---

## 7. Notes on sources to verify before submission

Keeping this honest matters for the mark, so these are the open items:

1. **Two of Junior's in-text sources need full references.** The South African Journal of Information Management article (data quality page) and the GIBS case studies (spreadsheets to a system page) are cited in the text but do not yet have full Harvard entries. Either add the full details or soften the claim.
2. **Kevin's AI topic** is a draft. The content needs Kevin's confirmation, and the example (EskomSePush, Yoco) and any statistics need proper references added.
3. **Laudon and Laudon edition clash.** Cam cites the 2020 16th edition and Junior cites the 2022 17th edition of the same textbook. Pick one edition and use it consistently across the whole project.
4. **Prescribed textbook.** The full details of the prescribed INF1781 textbook still need to be added from the lecturer.
5. **Prices and exchange rate.** The Sage and Odoo prices and the USD to ZAR rate (illustrative R17.50) must be confirmed with dated screenshots before the cost figures are presented as final.
6. **Hardware, migration, training and support costs** are planning estimates, not quotes, and should be labelled as such.
7. **Access dates.** The online sources use access dates of 11 or 12 October 2026 from this draft. Confirm these on the day each source is finally checked.

---

## 8. Consolidated reference list (Harvard)

Accounting Weekly (n.d.) *"Delete at Your Own Risk": the year-end records mistake that could cost you everything*. Available at: https://www.accountingweekly.com/practice-management/delete-at-your-own-risk-the-year-end-records-mistake-that-could-cost-you-everything (Accessed: 11 October 2026).

Acts Online (n.d.) *Protection of Personal Information Act, 2013, s 72*. Available at: https://source.acts.co.za/protection-of-personal-information-act-2013/72__transfers_of_personal_info.php (Accessed: 11 October 2026).

Bowmans (2023) *South Africa: Beware, Information Regulator issues first fine of ZAR 5 million under POPIA*. Available at: https://bowmanslaw.com/insights/south-africa-beware-information-regulator-issues-first-fine-of-zar-5-million-under-popia/ (Accessed: 11 October 2026).

DAMA International (2017) *DAMA-DMBOK: Data Management Body of Knowledge*. 2nd edn. Basking Ridge, NJ: Technics Publications.

Davis, F.D. (1989) 'Perceived usefulness, perceived ease of use, and user acceptance of information technology', *MIS Quarterly*, 13(3), pp. 319-340.

EngineerIT (2021) 'South African SMEs embrace digitalisation', 20 January. Available at: https://www.engineerit.co.za/article/south-african-smes-embrace-digitalisation (Accessed: 11 October 2026).

ENSafrica (n.d.) *POPIA and the prior authorisation conundrum*. Available at: https://www.ensafrica.com/news/detail/3958/popia-and-the-prior-authorisation-conundrum- (Accessed: 11 October 2026).

Eversheds Sutherland (2025) 'New amendments to POPIA Regulations', *GoLegal*, 23 April. Available at: https://www.golegal.co.za/amendments-popia-regulations/ (Accessed: 11 October 2026).

Few, S. (2013) *Information Dashboard Design: Displaying Data for At-a-Glance Monitoring*. 2nd edn. Burlingame, CA: Analytics Press.

Hiatt, J.M. (2006) *ADKAR: A model for change in business, government and our community*. Loveland, CO: Prosci Learning Center Publications.

Information Regulator (2021) *Guidance note on Information Officers and Deputy Information Officers*, 1 April. Available at: https://lawlibrary.org.za/akn/za/statement/guidance-note/irsa/2021/information-officers/eng@2021-04-01 (Accessed: 11 October 2026).

Information Regulator (2024) *Enforcement notice: FT Rams Consulting*, 21 February. Available at: https://inforegulator.org.za/wp-content/uploads/2020/07/FT-RAMS-CONSULTING-ENFORCEMENT-NOTICE-210224-1.pdf (Accessed: 11 October 2026).

Information Regulator (n.d.) *Form 4: consent for direct marketing*. Available at: https://inforegulator.org.za/wp-content/uploads/2020/07/FORM-4-APPLICATION-FOR-THE-CONSENT-OF-A-DATA-SUBJECT-FOR-THE-PROCESSING-OF.pdf (Accessed: 11 October 2026).

Laudon, K.C. and Laudon, J.P. (2020) *Management Information Systems: Managing the Digital Firm*. 16th edn. Harlow: Pearson.

Laudon, K.C. and Laudon, J.P. (2022) *Management Information Systems: Managing the Digital Firm*. 17th edn. Harlow: Pearson.

Lewin, K. (1947) 'Frontiers in group dynamics: Concept, method and reality in social science; social equilibria and social change', *Human Relations*, 1(1), pp. 5-41.

Mdhluli, M.E. (2024) *The impact of digital technologies on SME business performance in South Africa*. Master's dissertation. University of the Witwatersrand, Johannesburg. Available at: https://hdl.handle.net/10539/43954 (Accessed: 11 October 2026).

MJK Inc (n.d.) *CCTV and POPIA*. Available at: https://mjkinc.co.za/popia/cctv (Accessed: 11 October 2026).

Moonstone Information Refinery (2026) *Information Regulator sounds alarm over data breaches*, 3 September. Available at: https://www.moonstone.co.za/information-regulator-sounds-alarm-over-data-breaches/ (Accessed: 11 October 2026).

Nissenbaum, H. (2010) *Privacy in context*. Stanford: Stanford University Press.

Odoo (n.d.) *Odoo: Open-source business applications*. Available at: https://www.odoo.com/ (Accessed: 12 October 2026).

Odoo (2026) *Pricing*. Available at: https://www.odoo.com/pricing (Accessed: 11 October 2026).

*Protection of Personal Information Act 4 of 2013*, consolidated to Government Gazette 44782 of 30 June 2021. Available at: https://www.irba.co.za/upload/POPIA.pdf (Accessed: 11 October 2026).

Sage (n.d.) *Accounting software for small and medium businesses*. Available at: https://www.sage.com/en-za/accounting-software/ (Accessed: 12 October 2026).

Sage (2026) *Sage Business Cloud Accounting pricing*. Available at: https://www.sage.com/en-za/sage-business-cloud/accounting/pricing/ (Accessed: 11 October 2026).

Shopify (n.d.) *Point of Sale features*. Available at: https://www.shopify.com/pos/features (Accessed: 12 October 2026).

Small Enterprise Development Agency (SEDA) (2023) *SMME Quarterly Economic Review: Wholesale and Retail Trade*. Pretoria: Department of Small Business Development.

South African Revenue Service (SARS) (2026) *Record keeping*, updated 19 August. Available at: https://www.sars.gov.za/businesses-and-employers/small-businesses-taxpayers/starting-a-business-and-tax/record-keeping/ (Accessed: 11 October 2026).

Statistics South Africa (Stats SA) (2022) *Quarterly financial statistics (QFS): December 2022*. Statistical Release P0044. Pretoria: Statistics South Africa.

Statistics South Africa (Stats SA) (2023) *Retail trade sales (Preliminary): March 2023*. Statistical Release P6242.1. Pretoria: Statistics South Africa.

Xero (n.d.a) *Inventory management software for small businesses*. Available at: https://www.xero.com/za/accounting-software/manage-inventory/ (Accessed: 12 October 2026).

Xero (n.d.b) *App integrations for small businesses*. Available at: https://www.xero.com/za/accounting-software/app-integrations/ (Accessed: 12 October 2026).

### Still to be added

- South African Journal of Information Management article on SME data quality (cited on the data quality page).
- Gordon Institute of Business Science (GIBS) case studies on small trade businesses (cited on the spreadsheets to a system page).
- Kevin's references for the AI and Decisions topic.
- Full details of the prescribed INF1781 textbook.
