type LocalText = { en: string; ar: string };
const t = (en: string, ar: string): LocalText => ({ en, ar });
type VisualBase = { after: number; title: LocalText; note?: LocalText; replaceItems?: boolean };
export type ArticleVisualData = VisualBase & (
  { type: "table"; columns: LocalText[]; rows: LocalText[][] } |
  { type: "process"; steps: { label: LocalText; description: LocalText }[] } |
  { type: "topics"; groups: { label: LocalText; chapters: number[] }[] }
);

// Editorial summaries of the supplied source documents. No estimated results or invented data.
export const articleVisuals: Record<string, ArticleVisualData[]> = {
  "corporate-health": [{ after: 2, type: "table", title: t("A year of continuing support", "دعم مستمر طوال العام"), columns: [t("When", "التوقيت"), t("What happens", "النشاط")], rows: [
    [t("Annual", "سنوياً"), t("Health assessment, personal risk review", "تقييم الصحة ومراجعة المخاطر الشخصية")],
    [t("Monthly", "شهرياً"), t("Health talks and targeted workshops", "محاضرات صحية وورش حسب الاحتياج")],
    [t("Weekly", "أسبوعياً"), t("Health tips and lifestyle education", "نصائح صحية وتثقيف حول نمط الحياة")],
    [t("At work", "أثناء العمل"), t("Short exercise sessions led by departmental champions", "جلسات تمارين قصيرة يقودها منسقو الأقسام")],
    [t("Across the year", "على مدار العام"), t("Sports, challenges and digital engagement", "رياضة وتحديات ومشاركة رقمية")],
    [t("Annual review", "المراجعة السنوية"), t("Year-on-year review for ROV and ROI", "مراجعة سنوية للعائد على القيمة والعائد على الاستثمار")],
  ] }],
  "community-health": [{ after: 1, type: "table", title: t("Two challenges, at a glance", "التحديان في لمحة"), columns: [t("Programme", "البرنامج"), t("Progress measures", "مقاييس التقدم"), t("Duration", "المدة")], rows: [
    [t("Weight Loss", "إنقاص الوزن"), t("Verified weight records and programme-specific team measures", "سجلات وزن موثقة ومقاييس خاصة بالفرق") ,t("3 months", "3 أشهر")],
    [t("Diabetes", "السكري"), t("HbA1c, BMI and lifestyle assessment", "السكر التراكمي ومؤشر كتلة الجسم وتقييم نمط الحياة"), t("3 months", "3 أشهر")],
  ] }],
  "weight-loss-challenge": [{ after: 1, type: "table", replaceItems: true, title: t("Choose a participation format", "صيغ المشاركة"), columns: [t("Format", "الفئة"), t("Measurement & coordination", "القياسات والتنسيق")], rows: [
    [t("Physical · adults 18+", "حضورية · للبالغين 18+"), t("Opening and closing weigh-ins at designated hospitals.", "قياس الوزن في البداية والنهاية بالمستشفيات المحددة.")],
    [t("Virtual · adults 18+", "افتراضية · للبالغين 18+"), t("Clinic-certified opening and final weight records.", "سجلات وزن أولية ونهائية معتمدة من عيادة.")],
    [t("Hospital outpatients", "العيادات الخارجية"), t("Eligible hospital records reviewed; participants informed individually.", "مراجعة سجلات المستشفى المؤهلة وإبلاغ المشاركين فردياً.")],
    [t("Corporate teams", "فرق المؤسسات"), t("HR / administration coordinates; the source ranks the average loss of the top ten team members.", "تنسيق الموارد البشرية أو الإدارة؛ يعتمد الترتيب الأصلي على متوسط أفضل عشرة أعضاء.")],
    [t("Schools", "المدارس"), t("Separate staff-team and school BMI formats. Children’s records remain confidential, with school-clinic oversight and approvals.", "صيغ منفصلة للموظفين ومؤشر كتلة الجسم المدرسي، مع سرية بيانات الأطفال وإشراف العيادة والموافقات.")],
    [t("Families", "العائلات"), t("Relatives by birth or marriage, plus a couples category; winning teams verify relationships.", "أقارب بالولادة أو الزواج وفئة للأزواج، مع التحقق من القرابة للفرق الفائزة.")],
  ] },
  { after: 2, type: "process", title: t("The measurement journey", "مسار القياس"), steps: [
    { label: t("Register", "التسجيل"), description: t("Identity, programme details and consent", "الهوية وبيانات البرنامج والموافقة") },
    { label: t("Record", "القياس"), description: t("Verified starting weight", "وزن أولي موثق") },
    { label: t("Participate", "المشاركة"), description: t("Support and certified progress records", "دعم وسجلات تقدم معتمدة") },
    { label: t("Review", "المراجعة"), description: t("Final measurement and programme review", "قياس نهائي ومراجعة البرنامج") },
  ] }],
  "diabetes-challenge": [{ after: 1, type: "table", replaceItems: true, title: t("Participation and testing", "المشاركة والفحوص"), columns: [t("Format", "الفئة"), t("How it works", "طريقة المشاركة")], rows: [
    [t("Physical", "حضورية"), t("Validation at a sponsored facility. The source edition describes complimentary HbA1c testing there.", "التحقق في منشأة راعية؛ يصف المصدر فحص السكر التراكمي مجاناً في تلك النسخة.")],
    [t("Virtual", "افتراضية"), t("Clinic-certified opening and final measurements, arranged at the participant’s own cost; lifestyle assessment online.", "قياسات أولية ونهائية معتمدة على نفقة المشارك، وتقييم نمط الحياة عبر الإنترنت.")],
    [t("Hospital outpatients", "العيادات الخارجية"), t("Eligible clients receive information and education; further testing is required for prize-category entry.", "معلومات وتثقيف للمرضى المؤهلين، مع فحوص إضافية لدخول فئة الجوائز.")],
    [t("Corporate teams", "فرق المؤسسات"), t("Ten or more eligible employees; team review considers average improvement and participation.", "عشرة موظفين مؤهلين أو أكثر؛ تراجع الفرق وفق متوسط التحسن والمشاركة.")],
  ] },
  { after: 2, type: "process", title: t("Three months of supported participation", "ثلاثة أشهر من المشاركة المدعومة"), steps: [
    { label: t("Baseline", "نقطة البداية"), description: t("HbA1c, BMI and lifestyle assessment", "السكر التراكمي ومؤشر كتلة الجسم ونمط الحياة") },
    { label: t("Ongoing support", "دعم مستمر"), description: t("Health tips, expert webinars and physician-led care", "نصائح وندوات ورعاية بإشراف الطبيب") },
    { label: t("Final review", "المراجعة النهائية"), description: t("Repeat measurements and individual progress review", "إعادة القياس ومراجعة التقدم الفردي") },
  ] }],
  "lifestyle-medicine": [{ after: 0, type: "table", title: t("Find the relevant learning pathway", "مسار التعلم المناسب"), columns: [t("Pathway", "المسار"), t("Intended audience", "الفئة المستهدفة"), t("Emphasis", "التركيز")], rows: [
    [t("Lifestyle Medicine", "طب نمط الحياة"), t("Medical, alternative-medicine and allied-health graduates", "خريجو الطب والطب البديل والمهن الصحية المساندة"), t("Applying lifestyle knowledge in health practice", "تطبيق معرفة نمط الحياة في الممارسة الصحية")],
    [t("Wellness & Lifestyle Management", "إدارة العافية ونمط الحياة"), t("Graduates of other disciplines, including HR and physical education", "خريجو التخصصات الأخرى، ومنها الموارد البشرية والتربية البدنية"), t("Organising and supporting wellness services", "تنظيم خدمات العافية ودعمها")],
  ], note: t("Based on the supplied prospectus. Current eligibility, award title, duration and fees must be confirmed.", "وفق الدليل المقدم. يجب تأكيد الأهلية الحالية والمؤهل والمدة والرسوم.") },
  { after: 4, type: "process", title: t("How learning is assessed", "كيف يُقيّم التعلم؟"), steps: [
    { label: t("Study", "الدراسة"), description: t("Textbooks, videos and faculty support", "كتب وفيديوهات ودعم المدرسين") },
    { label: t("Apply", "التطبيق"), description: t("Subject assignments and practical assessment experience", "واجبات وخبرة عملية في التقييم") },
    { label: t("Evaluate", "التقييم"), description: t("Subject evaluations and a final online examination", "تقييمات المواد واختبار نهائي عبر الإنترنت") },
  ] }],
  "health-workshops": [{ after: -1, type: "topics", title: t("Browse the workshops by theme", "استكشف الورش حسب الموضوع"), groups: [
    { label: t("Health foundations", "أساسيات الصحة"), chapters: [0,1,4,11] },
    { label: t("Movement, food & ageing", "الحركة والغذاء والتقدم في العمر"), chapters: [2,3,6] },
    { label: t("Mind & health habits", "الصحة النفسية والعادات"), chapters: [7,8,9] },
    { label: t("Work, recovery & heart health", "العمل والتعافي وصحة القلب"), chapters: [5,10,12] },
  ], note: t("An editorial topic guide to the 13 talks in the supplied workshop brochure. Select a title to read its description.", "دليل موضوعي للمحاضرات الـ13 في الكتيب المقدم. اختر العنوان لقراءة وصفه.") }],
  "longevity-model": [{ after: 0, type: "process", title: t("From assessment to continuing support", "من التقييم إلى الدعم المستمر"), steps: [
    { label: t("Scientific", "التقييم العلمي"), description: t("Health and lifestyle assessment", "تقييم الصحة ونمط الحياة") },
    { label: t("Evaluate", "التقييم"), description: t("Individual health risk profile", "ملف المخاطر الصحية الفردي") },
    { label: t("Deliver", "التقديم"), description: t("Personal goals and relevant content", "أهداف شخصية ومحتوى مناسب") },
    { label: t("Continuous", "الاستمرارية"), description: t("Engagement, rewards and reassessment", "مشاركة ومكافآت وإعادة تقييم") },
  ] }],
  "leader-0": [{ after: 0, type: "table", title: t("Leadership at a glance", "القيادة في لمحة"), columns: [t("Focus", "المجال"), t("Experience", "الخبرة")], rows: [
    [t("Healthcare institutions", "المؤسسات الصحية"), t("Hospital development, governance and accreditation", "تطوير المستشفيات والحوكمة والاعتماد")],
    [t("Digital transformation", "التحول الرقمي"), t("AI decision support and digital twin operations", "دعم القرار بالذكاء الاصطناعي والتوأم الرقمي")],
    [t("Partnerships", "الشراكات"), t("International healthcare links and institutional advisory work", "روابط صحية دولية وعمل استشاري مؤسسي")],
  ] }],
  "leader-1": [{ after: 0, type: "table", title: t("Leadership at a glance", "القيادة في لمحة"), columns: [t("Focus", "المجال"), t("Experience", "الخبرة")], rows: [
    [t("Insurance", "التأمين"), t("Insurance, reinsurance and InsurTech entrepreneurship", "ريادة الأعمال في التأمين وإعادة التأمين وتقنياته")],
    [t("Technology", "التقنية"), t("Digital transformation across complex industries", "التحول الرقمي عبر قطاعات معقدة")],
    [t("Ecosystem building", "بناء المنظومات"), t("Connecting industry, regulators, technology firms and academia", "الربط بين القطاع والمنظمين وشركات التقنية والأكاديميين")],
  ] }],
  "leader-2": [{ after: 1, type: "table", title: t("A career connecting research and practice", "مسيرة تربط البحث بالممارسة"), columns: [t("Area", "المجال"), t("Work profile", "مجالات العمل")], rows: [
    [t("Assessment", "التقييم"), t("Computerized Health Scan and hospital assessment software", "المسح الصحي المحوسب وبرمجيات التقييم بالمستشفيات")],
    [t("Research", "البحث"), t("Long-term corporate and population health studies", "دراسات طويلة المدى للصحة المؤسسية والسكانية")],
    [t("Education", "التعليم"), t("Author of eight books for postgraduate Lifestyle Management studies", "مؤلف ثمانية كتب لدراسات إدارة نمط الحياة على مستوى الدراسات العليا")],
  ] }],
};

export const studyDesignVisuals: ArticleVisualData[] = [
  { after: 0, type: "table", title: t("Understand the comparison", "فهم المقارنة"), columns: [t("Group", "المجموعة"), t("Period", "الفترة"), t("People assessed", "الأشخاص المقيمون")], rows: [
    [t("Earlier industrial group", "المجموعة الصناعية السابقة"), t("2015–2018", "2015–2018"), t("25,000", "25,000")],
    [t("Cumulative industrial group", "المجموعة الصناعية التراكمية"), t("2015–2024", "2015–2024"), t("70,000", "70,000")],
  ] },
  { after: 0, type: "table", title: t("Understand the comparison", "فهم المقارنة"), columns: [t("Client group", "مجموعة العملاء"), t("Period", "الفترة"), t("People assessed", "الأشخاص المقيمون")], rows: [
    [t("Earlier group", "المجموعة السابقة"), t("2000–2004", "2000–2004"), t("68,986", "68,986")],
    [t("Later group", "المجموعة اللاحقة"), t("2005–2008", "2005–2008"), t("47,745", "47,745")],
  ] },
  { after: 0, type: "table", title: t("Who was assessed?", "من شملهم التقييم؟"), columns: [t("Survey group", "مجموعة المسح"), t("Reported coverage", "التغطية المذكورة")], rows: [
    [t("Children", "الأطفال"), t("40,000 pupils, classes 6–12, over 50 schools", "40,000 طالب بالصفوف السادس إلى الثاني عشر في أكثر من 50 مدرسة")],
    [t("Adults", "البالغون"), t("100,000 adults", "100,000 بالغ")],
  ], note: t("Both surveys are described as 2009 assessments in the supplied report.", "يصف المصدر كلا المسحين بأنهما أُجريا عام 2009.") },
  { after: 0, type: "table", title: t("Who was assessed?", "من شملهم التقييم؟"), columns: [t("Group", "المجموعة"), t("Reported participants", "المشاركون المذكورون")], rows: [
    [t("Men", "الرجال"), t("31,979", "31,979")], [t("Women", "النساء"), t("15,776", "15,776")],
  ] },
  { after: 0, type: "table", title: t("How the study is organised", "تنظيم الدراسة"), columns: [t("Study feature", "العنصر"), t("Reported design", "التصميم المذكور")], rows: [
    [t("Age bands", "الفئات العمرية"), t("Under 35 / 35–50 / over 50", "أقل من 35 / 35–50 / أكثر من 50")],
    [t("Comparison", "المقارنة"), t("Different people in each age group", "أشخاص مختلفون في كل فئة عمرية")],
    [t("Reported total", "الإجمالي المذكور"), t("47,745 participants", "47,745 مشاركاً")],
  ] },
];
