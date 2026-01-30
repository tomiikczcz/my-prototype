We have a shared basic and functional prototype. The prototype is just a simple HTML page. 
What I already have is a Git repository (both locally and on GitHub), connection and publication of the page via Netlify, and the overall plan.
I want to expand the prototype into an application that will emulate a small client zone. I want the application to be written in JavaScript, use my existing infrastructure with Netlify, and have the following parameters.

**Target prototype:** this project (my-prototype) — what we are building.

**Inspiration:**
- **Design/UX:** https://lnd-poj.netlify.app/ (JerryPoj by Lundegaard — pet insurance; styling, flow, “hotovo za 3 minuty” feel)
- **Business (car insurance):**
  - **Povinné ručení** (mandatory liability): https://www.generaliceska.cz/povinne-ruceni — flexible mandatory insurance, online discount, variants + add-ons
  - **Havarijní pojištění** (comprehensive / emergency): https://www.generaliceska.cz/havarijni-pojisteni — collision, theft, natural events, vandalism; variants, add-ons, optional excess

My feature requirements are:
- Basic login and hiding from the public
- Multi-step form with basic validations
- Use of camera for file upload (vehicle photodocumentation)
- Option to view contract (smlouva)
- Styling and colors inspired by lnd-poj (JerryPoj)
- **Main goal:** B2C car insurance — **povinné ručení** (mandatory) and **havarijní pojištění** (comprehensive/emergency), inspired by the Generali product pages above

**Product & scope decisions:**
- **Role:** Lundegaard as insurer (pojišťovna).
- **Flow:** Kalkulace → formulář → uzavření smlouvy → vygenerování zelené karty. **Bez platby.** Přidat běžného asistenta (asistence jako doplňek).
- **Tech:** Jednoduché přihlášení; mock data stačí. Kamera = fotodokumentace vozu. Zobrazení smlouvy (smlouva) ano.
- **Compliance:** Stačí povrchně, ale dodržet zákonné náležitosti (KIP, informace o zprostředkovateli / pojišťovně dle 170/2018 Sb. atd.).
- **Jazyky:** Čeština a angličtina.
- **Cílová skupina a přístupnost:** B2C; základní přístupnost (WCAG na rozumné úrovni).

**Czech regulatory context (ČKP, ČAP, ČNB):**
- **ČKP** (Česká kancelář pojistitelů) — body established by the Motor Liability Insurance Act; handles central functions for **povinné ručení** (e.g. green card, coordination). Key law: **zákon č. 30/2024 Sb.** + **vyhláška č. 69/2024 Sb.** (pojištění odpovědnosti z provozu vozidla; in force from 1 April 2024). Obligation to have insurance lies with the **provozovatel vozidla** (operator), not the owner.
- **ČAP** (Česká asociace pojišťoven) — industry **trade association** (cap.cz); statistics, education, tools. Not a regulator; no law-making or supervisory powers.
- **ČNB** (Česká národní banka) — **supervisor** of the insurance sector. Regulation: **zákon č. 277/2009 Sb.** (pojišťovnictví), **zákon č. 170/2018 Sb.** (distribuce pojištění; amended 396/2024 Sb.). For distribution / intermediation (who may sell, online sales), 170/2018 Sb. applies.