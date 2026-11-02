"use client";

import { Plus } from "lucide-react";

export function ContentDetails({ label, children }: { label: string; children: React.ReactNode }) {
  return <details className="content-details"><summary>{label}<Plus size={20} aria-hidden="true" /></summary><div className="content-details__body">{children}</div></details>;
}

export const detailCopy = {
  en: {
    leaders: [
      ["Healthcare leadership", "Dr Raza Siddiqui brings experience in healthcare strategy, hospital development, accreditation and governance. His work spans digital transformation, AI decision support, digital twin operations and cross-border medical tourism.", "He was recognised among Forbes Middle East’s Top 100 Healthcare Leaders in 2023 and 2024, and received the Pride of Bharat award in 2025."],
      ["Connecting industries and innovation", "Dr Aftab Hasan is the founder and chairman of GAIP. His career spans more than 30 years across insurance, reinsurance, InsurTech, information technology, energy, oil and gas, and maritime industries.", "He brings experience in building partnerships and applying digital transformation across complex organisations."],
      ["Five decades of preventive health", "Prof Adrian Kennedy’s career spans lifestyle medicine, corporate health, assessment, counselling and education. He developed the Computerized Health Scan, which received a World Health Award in 2000.", "His work has been implemented across more than 50 hospitals. He is the author of eight books and has contributed to long-term studies in the UAE and India."],
    ],
    programmes: [
      ["A continuous workplace programme", "Begin with health assessment and individual risk profiles. Follow with counselling, health education, practical lifestyle guidance and opportunities for movement at work.", "The programme includes workshops, health tips, exercise sessions, sports activities and app-supported follow-up. Programme records cover 75 organisations and 98,578 employees between 2013 and 2025."],
      ["Weight Loss Challenge", "A three-month challenge combining health education, structured support and measurable progress. Participation formats include physical, virtual, corporate, hospital, school and family categories, subject to programme eligibility.", "Diabetes Challenge", "A three-month programme using HbA1c, BMI and lifestyle measures to track progress. Physical, virtual, hospital and corporate formats bring guidance and shared motivation into daily life."],
    ],
    studies: [
      ["2015–2024 · United Arab Emirates", "The study draws on 100,000 health screenings of 70,000 industrial employees across more than 100 facilities. Annual programmes combined assessment, counselling, workshops and health activities.", "The supplied report records improvement in 15 of 17 group health factors. A repeated cohort of 9,315 employees improved across 9 of 11 factors. These are reported programme findings, rather than a guarantee of individual results."],
      ["2000–2008 · Eight Indian cities", "The historical study included 116,731 people and examined changes in urban lifestyle and health. The supplied report describes improvements in fitness and nutrition alongside reductions in chronic conditions.", "The findings offer a long-term perspective on preventive health in an urban population. This study was conducted in India."],
      ["Prevention across life stages", "Children and adults have different health priorities, daily environments and opportunities for prevention. This research compares those needs to inform age-appropriate screening, education and lifestyle support.", "The practical focus is on building healthy habits early and supporting them as responsibilities and risk profiles change."],
      ["Understanding different health needs", "This comparative work explores differences in health and lifestyle patterns between men and women. Its purpose is to support relevant assessment, education and preventive-health priorities.", "Individual health planning should consider personal history and clinical assessment alongside population patterns."],
      ["Supporting healthy ageing", "Ageing changes physical capacity, health risks and daily needs. This work explores how nutrition, activity, stress management and regular assessment can support vitality and independence.", "The aim is to preserve quality of life and functional health throughout later life."],
    ],
    curriculum: ["Lifestyle Medicine", "Learning spans health assessment, nutrition, exercise, counselling, stress and psychology, disease management, cardiac care and cancer risk. The emphasis is on applying knowledge in clinical, workplace and community settings.", "Discuss programmes and workshops", "Explore a curriculum or a focused workshop for your organisation. Our team can help identify the appropriate topic, audience and delivery format."],
  },
  ar: {
    leaders: [
      ["قيادة في الرعاية الصحية", "يمتلك الدكتور رضا صديقي خبرة في استراتيجية الرعاية الصحية وتطوير المستشفيات والاعتماد والحوكمة. ويشمل عمله التحول الرقمي ودعم القرار بالذكاء الاصطناعي والتوأم الرقمي والسياحة العلاجية.", "أُدرج ضمن قائمة فوربس الشرق الأوسط لأفضل 100 قائد في الرعاية الصحية عامي 2023 و2024، وحصل على جائزة فخر بهارات عام 2025."],
      ["الربط بين القطاعات والابتكار", "الدكتور أفتاب حسن هو مؤسس ورئيس مجلس إدارة GAIP. تمتد خبرته لأكثر من 30 عاماً في التأمين وإعادة التأمين وتقنيات التأمين والمعلومات والطاقة والنفط والغاز والقطاع البحري.", "يقدم خبرة في بناء الشراكات وتطبيق التحول الرقمي في المؤسسات المعقدة."],
      ["خمسة عقود من الصحة الوقائية", "تشمل مسيرة البروفيسور أدريان كينيدي طب نمط الحياة والصحة المؤسسية والتقييم والإرشاد والتعليم. وقد طور المسح الصحي المحوسب الذي حصل على جائزة الصحة العالمية عام 2000.", "طُبق عمله في أكثر من 50 مستشفى. وهو مؤلف ثمانية كتب وساهم في دراسات طويلة المدى في الإمارات والهند."],
    ],
    programmes: [
      ["برنامج مستمر لصحة الموظفين", "يبدأ البرنامج بالتقييم الصحي وتحليل المخاطر الفردية، ثم الإرشاد والتثقيف الصحي والتوجيه العملي لنمط الحياة وفرص الحركة في العمل.", "يشمل ورش العمل والنصائح الصحية والتمارين والأنشطة الرياضية والمتابعة الرقمية. وتغطي سجلات البرامج 75 مؤسسة و98,578 موظفاً بين 2013 و2025."],
      ["تحدي إنقاص الوزن", "تحدٍ لمدة ثلاثة أشهر يجمع التثقيف الصحي والدعم المنظم والتقدم القابل للقياس. تشمل صيغ المشاركة الحضور المباشر والمشاركة الافتراضية والمؤسسات والمستشفيات والمدارس والعائلات وفق شروط الأهلية.", "تحدي السكري", "برنامج لمدة ثلاثة أشهر يستخدم السكر التراكمي ومؤشر كتلة الجسم ومقاييس نمط الحياة لمتابعة التقدم، بصيغ حضورية وافتراضية ومؤسسية ومستشفوية."],
    ],
    studies: [
      ["2015–2024 · الإمارات العربية المتحدة", "تستند الدراسة إلى 100,000 فحص صحي لسبعين ألف موظف صناعي في أكثر من 100 منشأة. جمعت البرامج السنوية التقييم والإرشاد وورش العمل والأنشطة الصحية.", "يسجل التقرير المقدم تحسناً في 15 من 17 عاملاً صحياً للمجموعة. وتحسنت مجموعة متكررة تضم 9,315 موظفاً في 9 من 11 عاملاً. هذه نتائج برنامج مُبلّغ عنها وليست ضماناً لنتائج فردية."],
      ["2000–2008 · ثماني مدن هندية", "شملت الدراسة التاريخية 116,731 شخصاً، وبحثت التغيرات في نمط الحياة الحضري والصحة. ويصف التقرير تحسناً في اللياقة والتغذية وانخفاضاً في الحالات المزمنة.", "تقدم النتائج منظوراً طويل المدى للصحة الوقائية في المجتمع الحضري. أُجريت هذه الدراسة في الهند."],
      ["الوقاية عبر مراحل الحياة", "تختلف الأولويات الصحية والبيئات اليومية وفرص الوقاية بين الأطفال والبالغين. يقارن هذا العمل الاحتياجات لدعم فحوص وتثقيف وإرشاد يناسب كل مرحلة عمرية.", "ينصب الاهتمام على بناء العادات الصحية مبكراً ودعمها مع تغير المسؤوليات والمخاطر."],
      ["فهم الاحتياجات الصحية المختلفة", "يبحث هذا العمل المقارن اختلاف أنماط الصحة ونمط الحياة بين الرجال والنساء لدعم تقييم وتثقيف وأولويات وقائية أكثر ملاءمة.", "ينبغي أن تراعي الخطط الفردية التاريخ الشخصي والتقييم السريري إلى جانب الأنماط السكانية."],
      ["دعم التقدم الصحي في العمر", "يغيّر التقدم في العمر القدرات البدنية والمخاطر والاحتياجات اليومية. يبحث هذا العمل دور التغذية والنشاط وإدارة التوتر والتقييم المنتظم في دعم الحيوية والاستقلال.", "الهدف هو الحفاظ على جودة الحياة والصحة الوظيفية في المراحل المتقدمة من العمر."],
    ],
    curriculum: ["طب نمط الحياة", "يشمل التعلم التقييم الصحي والتغذية والتمارين والإرشاد والتوتر وعلم النفس وإدارة الأمراض والعناية بالقلب ومخاطر السرطان، مع التركيز على التطبيق في العيادات والمؤسسات والمجتمعات.", "ناقش البرامج وورش العمل", "استكشف منهجاً أو ورشة متخصصة لمؤسستك. يمكن لفريقنا مساعدتك على تحديد الموضوع والجمهور وطريقة التقديم المناسبة."],
  },
};
