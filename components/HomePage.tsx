"use client";

import { ArrowUpRight, Microscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { useLocale } from "./LocaleProvider";
import { leaders } from "@/lib/page-data";
import { ResearchCarousel } from "./ResearchCarousel";
import { ProgrammeShowcase } from "./ProgrammeShowcase";
import { AcademiaSection } from "./AcademiaSection";

const content = {
  en: {
    visionTitle: "Dubai’s vision for a healthier, longer life",
    visionQuote: "The true wealth of nations lies in their people.",
    visionBody: "The Dubai Longevity Authority was established under Law No. 17 of 2026 to advance prevention, personalised health and evidence-led longevity. Arabian Life carries this spirit into practical daily action—helping people, workplaces and communities protect healthspan before illness begins.",
    visionLaw: "Established under Law No. 17 of 2026.",
    visionNote: "Based on five decades of global health and longevity promotion, Arabian Life Longevity HealthTech is aligned with Dubai’s vision for regulated, science-led longevity.",
    leadershipTitle: "Leadership shaped by healthcare, technology and human potential",
    leadershipIntro: "A multidisciplinary team with leadership in healthcare, health insurance and preventive health leads this longevity-based digital transformation vision into the corporate, community and health insurance sectors.",
    leaders: [
      ["Dr Raza Siddiqui", "Chairman", "Healthcare strategist advancing governance, hospital excellence, digital health and AI-enabled decision support."],
      ["Dr Aftab Hasan", "Vice Chairman", "Transformation leader with more than three decades across insurance, technology and complex industries."],
      ["Prof Adrian Kennedy", "Chief Executive Officer", "Lifestyle medicine pioneer with five decades in health assessment, corporate wellness, education and research."],
    ],
    associatesTitle: "A connected ecosystem",
    associatesIntro: "Connects health insights into everyday health promotion.",
    modelTitle: "From reactive treatment to proactive vitality",
    modelIntro: "Our model turns preventive insight into a continuous, motivating health journey.",
    steps: [["01", "Assess", "Digital health scanning creates a clear starting point."], ["02", "Understand", "Risk profiling translates data into meaningful priorities."], ["03", "Act", "Personalised goals make prevention achievable every day."], ["04", "Sustain", "Progress, support and rewards help healthy habits endure."]],
    programmesTitle: "Health programmes designed for real life",
    programmesIntro: "From the workplace to the wider community, our programmes combine assessment, education and sustained support.",
    programmes: [
      ["Corporate Health", "A complete workplace wellness framework spanning health scans, counselling, education, movement, nutrition and digital continuity.", "75 organisations supported", "98,578 employees reached"],
      ["Community Health & Wellness", "Medically guided challenges that help individuals and families make measurable progress together.", "18,000+ weight challenge participants", "5,000+ diabetes challenge participants"],
    ],
    evidenceTitle: "Evidence built over time",
    evidenceIntro: "Long-term population studies and repeated assessments. Programmes delivering meaningful results at scale.",
    stats: [["100,000", "health screenings"], ["70,000", "industrial employees studied"], ["100+", "industrial facilities"], ["20,000+", "schoolchildren screened"]],
    researchTitle: "Research for healthier generations",
    researchIntro: "A growing evidence base explores how environment, age, gender and lifestyle influence health over time.",
    research: [
      ["10-year UAE Industrial Health Study", "A decade of workplace screening, health improvement and research across the UAE industrial sector."],
      ["10-year Urban Health & Lifestyle Study", "A large retrospective study of 116,731 people across eight cities."],
      ["Child vs Adult Health", "How health needs and preventive priorities change across the lifespan."],
      ["Male vs Female Health", "Understanding gender risk patterns to support more relevant longevity care."],
      ["Ageing & Health", "Practical strategies for preserving longevity, vitality and quality of life."],
    ],
    academiaTitle: "Learning that turns knowledge into practice",
    academiaIntro: "Evidence-based Lifestyle Medicine programmes and expert-led workshops equip professionals, organisations and communities to act on prevention and longevity with confidence.",
    workshopsTitle: "Signature workshops",
    workshops: ["Rules of Good Health", "Fit for Life", "Lifestyle Management", "Healthy Ageing", "Stress Management", "Brain Health & Mental Fitness", "Weight Management", "Cardiac Care"],
    contactTitle: "Begin a healthier future today",
    contactBody: "Connect with Arabian Life to explore a programme for your organisation, community or institution.",
    read: "Read the overview",
  },
  ar: {
    visionTitle: "رؤية دبي لحياة أطول وأكثر صحة",
    visionQuote: "الثروة الحقيقية للأمم هي صحة شعوبها.",
    visionBody: "أُنشئت سلطة دبي للديمومة الصحية بموجب القانون رقم 17 لسنة 2026 لتعزيز الوقاية والصحة الشخصية والديمومة الصحية القائمة على الأدلة. وتحول أرابيان لايف هذه الروح إلى ممارسات يومية تساعد الأفراد والمؤسسات والمجتمعات على حماية سنوات الصحة قبل بدء المرض.",
    visionLaw: "أُنشئت بموجب القانون رقم 17 لسنة 2026.",
    visionNote: "تستند أرابيان لايف لونجيفيتي هيلث تك إلى خمسة عقود من تعزيز الصحة وطول العمر عالمياً، وتنسجم مع رؤية دبي للديمومة الصحية المنظمة والقائمة على العلم.",
    leadershipTitle: "قيادة تجمع الصحة والتقنية والإمكانات البشرية",
    leadershipIntro: "يقود فريق متعدد التخصصات بخبرات قيادية في الرعاية الصحية والتأمين الصحي والصحة الوقائية رؤية التحول الرقمي القائمة على الديمومة الصحية في قطاعات المؤسسات والمجتمع والتأمين الصحي.",
    leaders: [
      ["الدكتور رضا صديقي", "رئيس مجلس الإدارة", "خبير في استراتيجية الرعاية الصحية والحوكمة وتطوير المستشفيات والصحة الرقمية ودعم القرار بالذكاء الاصطناعي."],
      ["الدكتور أفتاب حسن", "نائب رئيس مجلس الإدارة", "قائد للتحول بخبرة تتجاوز ثلاثة عقود في التأمين والتقنية والقطاعات المعقدة."],
      ["البروفيسور أدريان كينيدي", "الرئيس التنفيذي", "رائد في طب نمط الحياة بخبرة خمسة عقود في التقييم الصحي والعافية المؤسسية والتعليم والبحث."],
    ],
    associatesTitle: "منظومة مترابطة",
    associatesIntro: "تربط الرؤى الصحية بتعزيز الصحة في الحياة اليومية.",
    modelTitle: "من العلاج التفاعلي إلى الحيوية الاستباقية",
    modelIntro: "يحوّل نموذجنا الرؤية الوقائية إلى رحلة صحية مستمرة ومحفزة.",
    steps: [["١", "التقييم", "مسح صحي رقمي يحدد نقطة البداية بوضوح."], ["٢", "الفهم", "تحليل المخاطر يحول البيانات إلى أولويات مفهومة."], ["٣", "العمل", "أهداف شخصية تجعل الوقاية جزءاً من كل يوم."], ["٤", "الاستدامة", "متابعة ودعم ومكافآت تساعد العادات الصحية على الاستمرار."]],
    programmesTitle: "برامج صحية مصممة للحياة الواقعية",
    programmesIntro: "من بيئة العمل إلى المجتمع، تجمع برامجنا بين التقييم والتعليم والدعم المستمر.",
    programmes: [
      ["الصحة المؤسسية", "منظومة متكاملة تشمل الفحوص والإرشاد والتثقيف والحركة والتغذية والاستمرارية الرقمية.", "دعم 75 مؤسسة", "الوصول إلى 98,578 موظفاً"],
      ["صحة المجتمع والعافية", "تحديات بإشراف طبي تساعد الأفراد والعائلات على تحقيق تقدم قابل للقياس معاً.", "أكثر من 18,000 مشارك في تحدي الوزن", "أكثر من 5,000 مشارك في تحدي السكري"],
    ],
    evidenceTitle: "أدلة تراكمت عبر الزمن",
    evidenceIntro: "دراسات سكانية طويلة المدى وتقييمات متكررة. برامج تحقق نتائج ملموسة على نطاق واسع.",
    stats: [["100,000", "فحص صحي"], ["70,000", "موظف في القطاع الصناعي"], ["100+", "منشأة صناعية"], ["20,000+", "طالب تم فحصه"]],
    researchTitle: "أبحاث لأجيال أكثر صحة",
    researchIntro: "قاعدة أدلة متنامية تبحث أثر البيئة والعمر والنوع الاجتماعي ونمط الحياة على الصحة عبر الزمن.",
    research: [
      ["دراسة صحة القطاع الصناعي في الإمارات لمدة 10 سنوات", "عقد من الفحوص في مواقع العمل وتحسين الصحة والبحث في القطاع الصناعي الإماراتي."],
      ["دراسة الصحة ونمط الحياة الحضري لمدة 10 سنوات", "دراسة استعادية واسعة شملت 116,731 شخصاً في ثماني مدن."],
      ["صحة الطفل مقارنة بالبالغ", "كيف تتغير الاحتياجات الصحية والأولويات الوقائية على امتداد العمر."],
      ["صحة الرجل مقارنة بالمرأة", "فهم أنماط المخاطر لدى الرجال والنساء لدعم رعاية أكثر ملاءمة للديمومة الصحية."],
      ["التقدم في العمر والصحة", "استراتيجيات عملية للحفاظ على الديمومة الصحية والحيوية وجودة الحياة."],
    ],
    academiaTitle: "تعلم يحول المعرفة إلى ممارسة",
    academiaIntro: "برامج طب نمط الحياة القائمة على الأدلة وورش الخبراء تمنح المهنيين والمؤسسات والمجتمعات القدرة على تطبيق الوقاية وتعزيز الديمومة الصحية بثقة.",
    workshopsTitle: "ورش عمل مختارة",
    workshops: ["قواعد الصحة الجيدة", "لياقة للحياة", "إدارة نمط الحياة", "التقدم الصحي في العمر", "إدارة التوتر", "صحة الدماغ واللياقة الذهنية", "إدارة الوزن", "العناية بالقلب"],
    contactTitle: "ابدأ مستقبلاً أكثر صحة اليوم",
    contactBody: "تواصل مع أرابيان لايف لاستكشاف برنامج يناسب مؤسستك أو مجتمعك أو جهتك التعليمية.",
    read: "اقرأ الملخص",
  },
};

export function HomePage() {
  const { locale, isArabic } = useLocale();
  const c = content[locale];
  const associates = [{ name: "GAIP – InsureTek", url: "https://www.gaip.co", logo: "/images/gaip-logo.webp", className: "partner-logo--gaip" }, { name: "Active Life", url: "https://www.activelifehra.com", logo: "/images/active-life-logo.png", className: "partner-logo--active" }];

  return <main>
    <Header />
    <Hero />
    <section className="section vision-section" id="vision"><div className="page-shell vision-grid">
      <div className="portrait-wrap"><div className="portrait-frame"><Image src="/images/vision-family-uae.webp" alt={isArabic ? "صورة توضيحية لعائلة إماراتية تضم أطفالاً ووالدين وجدّين في حديقة مشمسة" : "Illustrative multigenerational Emirati family with children, parents and grandparents in a sunlit garden"} fill sizes="(max-width: 800px) 90vw, 40vw" /></div></div>
      <div className="vision-copy"><h2>{c.visionTitle}</h2><blockquote>“{c.visionQuote}”</blockquote><p>{c.visionBody}</p><p className="vision-law">{c.visionLaw}</p><p className="vision-note">{c.visionNote}</p></div>
    </div></section>
    <section className="section leadership" id="who-we-are"><div className="page-shell"><SectionIntro title={isArabic ? "خبرة تقود رؤيتنا" : "Experience behind our vision."} body={c.leadershipIntro} /><div className="leader-list">{c.leaders.map(([name, role, bio], index) => <Link href={`/leadership/${leaders[index].slug}`} className="leader leader-photo-card" key={name}><div className="leader-photo"><Image src={leaders[index].image} alt={name} fill sizes="(max-width: 780px) 92vw, 31vw" /></div><div className="leader-card-copy"><p className="leader-role">{role}</p><h3>{name}</h3><p>{bio}</p><span className="card-link">{isArabic ? "الملف القيادي" : "View leadership profile"}<ArrowUpRight size={21} /></span></div></Link>)}</div></div></section>
    <section className="section associates" id="partners"><div className="page-shell partner-section"><h2>{isArabic ? "منظومة مترابطة من الشركاء" : "A connected ecosystem of partners."}</h2><p>{c.associatesIntro}</p><div className="partner-logos">{associates.map((partner) => <a key={partner.name} href={partner.url} target="_blank" rel="noreferrer" className={`partner-logo ${partner.className}`} aria-label={`${partner.name} — ${isArabic ? "زيارة الموقع" : "Visit website"}`}><Image src={partner.logo} alt={partner.name} width={300} height={120} /><ArrowUpRight size={20} aria-hidden="true" /></a>)}</div></div></section>
    <section className="section model" id="model"><div className="page-shell"><SectionIntro title={c.modelTitle} body={c.modelIntro} light /><Link className="model-feature-card" href="/longevity-model" aria-label={isArabic ? "اقرأ المقال الكامل عن نموذج أرابيان لايف هيلث تك" : "Read the full Arabian Life HealthTech model article"}><div className="model-feature-image"><Image src="/images/research-industrial-uae.webp" alt={isArabic ? "صورة توضيحية لأخصائية صحية ومشارك عربي في بيئة عمل إماراتية" : "Illustrative scene of an Arab health professional and participant in a UAE workplace"} fill sizes="(max-width: 780px) 92vw, 800px" /></div><div className="model-feature-caption"><span>{isArabic ? "نموذج أرابيان لايف هيلث تك" : "The Arabian Life HealthTech model"}</span><ArrowUpRight size={21} aria-hidden="true" /></div></Link></div></section>
    <ProgrammeShowcase heading={c.programmesTitle} programmes={c.programmes} />
    <section className="section evidence"><div className="page-shell evidence-grid"><div><h2>{c.evidenceTitle}</h2><p>{c.evidenceIntro}</p></div><div className="stat-grid">{c.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>
    <section className="section research" id="research"><div className="page-shell"><SectionIntro icon={<Microscope />} title={isArabic ? "معرفة تقود العمل." : "Insight that moves us forward."} body={c.researchIntro} /><ResearchCarousel items={c.research} /></div></section>
    <AcademiaSection intro={c.academiaIntro} workshops={c.workshops} />
    <section className="section contact" id="contact"><div className="page-shell contact-inner"><div><h2>{c.contactTitle}</h2><p>{c.contactBody}</p></div><div className="contact-links"><a href="tel:+971585908468"><bdi dir="ltr">+971 58 590 8468</bdi></a><a href="mailto:info@arabianlife.org"><bdi dir="ltr">info@arabianlife.org</bdi></a><p>{isArabic ? "1603، برج داماك للأعمال، الخليج التجاري، دبي، الإمارات" : "1603, Damac Business Tower, Business Bay, Dubai, UAE"}</p></div></div></section>
    <Footer />
  </main>;
}

function SectionIntro({ icon, title, body, light = false }: { icon?: React.ReactNode; title: string; body: string; light?: boolean }) {
  return <div className={`section-intro ${light ? "section-intro--light" : ""}`}>{icon && <div className="section-intro__icon">{icon}</div>}<div><h2>{title}</h2><p>{body}</p></div></div>;
}
