import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export function DOFEPage() {
  const { isEnglish } = useLanguage();

  const awardLevels = [
    {
      name: { en: 'Bronze', mn: 'Хүрэл' },
      age: '14+',
      duration: { en: '6 months minimum', mn: '6 сараас дээш' },
      badge: 'BRONZE',
      color: 'bg-gray-100 border-gray-300',
    },
    {
      name: { en: 'Silver', mn: 'Мөнгө' },
      age: '15+',
      duration: { en: '12 months minimum', mn: '12 сараас дээш' },
      badge: 'SILVER',
      color: 'bg-gray-50 border-gray-200',
    },
    {
      name: { en: 'Gold', mn: 'Алт' },
      age: '16+',
      duration: { en: '18 months minimum', mn: '18 сараас дээш' },
      badge: 'GOLD',
      color: 'bg-red-50 border-cardinal-red',
    },
  ];

  const objectives = [
    { en: 'Encourage self-development and independence', mn: 'Өөрийн хөгжил, бие даасан байдлыг нэмэгдүүлэх' },
    { en: 'Build leadership and teamwork skills', mn: 'Удирдлага, баг ажиллагааны ур чадвар бүрдүүлэх' },
    { en: 'Promote physical and mental well-being', mn: 'Биеийн болон сэтгэцийн эрүүл мэндийг сайжруулах' },
    { en: 'Develop a sense of responsibility and community involvement', mn: 'Үүрэг даалгавар, нийгмийн оролцоог хөгжүүлэх' },
    { en: 'Foster perseverance and commitment', mn: 'Тэвчээр, сахилгыг эргүүлэх' },
  ];

  const awardSections = [
    {
      number: '1',
      title: { en: 'Physical Recreation', mn: 'Биеийн Сулилт' },
      description: {
        en: 'Improving physical fitness through sports or active hobbies.',
        mn: 'Спортын болон идэвхтэй сонирхолоор физиийн бэхэлэлтийг сайжруулах',
      },
      activities: [
        { en: 'Running, swimming, gym training', mn: 'Гүйлт, сүлжээ, дасгал' },
        { en: 'Team sports', mn: 'Баг спорт' },
      ],
    },
    {
      number: '2',
      title: { en: 'Skills Development', mn: 'Ур Чадварын Терөл' },
      description: {
        en: 'Learning new abilities or improving existing ones.',
        mn: 'Шинэ ур чадвар сурах эсвэл байсан үйл дээрээ сайжруулах',
      },
      activities: [
        { en: 'Coding, music, art', mn: 'Кодинг, хөгжим, урлаг' },
        { en: 'Language learning', mn: 'Хэл сурах' },
      ],
    },
    {
      number: '3',
      title: { en: 'Volunteer Service', mn: 'Сайн Дурын Үйлчилгээ' },
      description: {
        en: 'Contributing to the community through service.',
        mn: 'Нийгмийнхээ төлөө волонтер ажилтай оролцох',
      },
      activities: [
        { en: 'Helping at charities', mn: 'Буяны байгууллагад туслах' },
        { en: 'Teaching or mentoring', mn: 'Заах, дүнгээр дадлах' },
        { en: 'Environmental work', mn: 'Байгаль хамгаалах' },
      ],
    },
    {
      number: '4',
      title: { en: 'Adventurous Journey', mn: 'Адал Ядалтай Аялал' },
      description: {
        en: 'A team-based outdoor expedition designed to build leadership, survival skills, and teamwork.',
        mn: 'Удирдлага, амьдралын ур чадвар, баг ажиллагаа хөгжүүлэх гадаа аялал',
      },
      activities: [
        { en: 'Planning and training for expeditions', mn: 'Аялал төлөвлөх, бэлтгэл' },
        { en: 'Completing journeys in nature', mn: 'Байгаалийн дундуур аялал' },
      ],
    },
    {
      number: '5',
      title: { en: 'Residential Project', mn: 'Байршилтай Төсөл' },
      description: {
        en: 'Gold level only: Spend time away from home working with new people on a shared activity.',
        mn: 'Алтан түвшин: Гэр байнаас холдох, шинэ хүмүүстэй ажилла нийтлэг хүрээлэл',
      },
      activities: [
        { en: 'Work with new people', mn: 'Шинэ хүмүүстэй ажил' },
        { en: 'Shared community activities', mn: 'Нийтлэг үйл ажилбара' },
        { en: 'Extended time away from home', mn: 'Гэр байнаас удаан хугацаа' },
      ],
      goldOnly: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white text-black py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4"
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-cardinal-red">
              {isEnglish ? 'Duke of Edinburgh Award' : 'Эдинбургийн Герцгийн Наадам'}
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8">
            {/* Logo Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex-shrink-0"
            >
              <img
                src="/DofE-Logo.png"
                alt="Duke of Edinburgh's Award"
                className="h-48 md:h-56 object-contain"
              />
            </motion.div>

            {/* Title aligned with logo */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif font-bold leading-tight text-center md:text-left"
            >
              {isEnglish ? "The Duke of Edinburgh's Award" : 'Эдинбургийн Герцгийн Наадам'}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            {isEnglish
              ? 'A globally recognized program for personal development, adventure, and achievement. Build skills, gain confidence, and discover your potential.'
              : 'Хувь хүний хөгжүүлэлт, адал ядалт, амжилтын төлөө олон улсын хүлээн зөвшөөрөгдсөн хөтөлбөр'}
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-black mb-6">
              {isEnglish ? 'About the Award' : 'Наадамын Тухай'}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                {isEnglish
                  ? "The Duke of Edinburgh's International Award is a development program for young people of all abilities. We support participants in progressing along their own individual path and achieving their personal goals through a balanced program of activities across key components."
                  : 'Эдинбургийн Герцгийн Олон Улсын Наадам нь бүх чадавхийн оюутнуудын хувь хүний хөгжүүлэлтийн хөтөлбөр юм. Бид оролцогчдын өөрсдийн замаараа сайн дэвшиж, сбалалсан үйл ажилбараар дамжуулан ахиц дамжуулахад туслалцдаг.'}
              </p>
              <p className="text-cardinal-red font-semibold">
                {isEnglish
                  ? 'Whether you are 14 or 16, taking part in the Award programme is an exciting challenge to meet yourself head-on, discover your own potential, and try something new.'
                  : '14 эсвэл 16 настай байж байсан ч, Наадамын хөтөлбөрт оролцох нь өөрийгөө сорьж, боломжиоо нээх, шинээр сорилцох сэтгэл зоргоор хүргэдэг.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Objectives */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-black mb-4">
              {isEnglish ? 'Program Objectives' : 'Хөтөлбөрийн Зорилгууд'}
            </h2>
            <p className="text-gray-600 text-lg">
              {isEnglish
                ? 'The DofE program is built on five core objectives that guide personal development'
                : 'DofE хөтөлбөр нь хувь хүний хөгжүүлэлтийг чиглүүлдэг таван үндсэн зорилготой'}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow border-t-2 border-cardinal-red"
              >
                <p className="text-gray-700 font-semibold leading-relaxed">
                  {isEnglish ? obj.en : obj.mn}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Award Levels */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-black mb-4">
              {isEnglish ? 'Award Levels' : 'Наадамын Түвшнүүд'}
            </h2>
            <p className="text-gray-600 text-lg">
              {isEnglish
                ? 'Choose the level that matches your age and commit to your personal challenge.'
                : 'Өөрийнхөө насанд тохирсон түвшинг сонгоод сорилтыг даван туулаарай.'}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {awardLevels.map((level) => (
              <motion.div
                key={level.name.en}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative group"
              >
                <div className={`${level.color} border-2 rounded-sm p-8 h-full relative overflow-hidden hover:shadow-lg transition-shadow`}>
                  <div className="absolute top-0 right-0 bg-cardinal-red text-white px-3 py-1 text-xs font-bold tracking-widest">
                    {level.badge}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-black mb-2 mt-4">
                    {isEnglish ? level.name.en : level.name.mn}
                  </h3>
                  <div className="text-sm font-bold text-gray-700 mb-4">
                    {isEnglish ? `Age ${level.age}` : `${level.age} настай`}
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="text-sm font-semibold text-gray-800">
                      {isEnglish ? level.duration.en : level.duration.mn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Sections */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-black mb-4">
              {isEnglish ? 'Program Sections' : 'Хөтөлбөрийн Хэсгүүд'}
            </h2>
            <p className="text-gray-600 text-lg">
              {isEnglish
                ? 'Complete activities in all sections to earn your award level. The Residential Project is only required for Gold level.'
                : 'Наадамыг авахын тулд бүх хэсэгтэй үйл ажилбара хийх ёстой. Байршилтай төслүүд зөвхөн Алтан түвшинд шаардлагатай.'}
            </p>
          </motion.div>

          <motion.div
            className="space-y-12"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {awardSections.map((section, idx) => (
              <motion.div
                key={section.number}
                variants={{
                  hidden: { opacity: 0, x: idx % 2 === 0 ? -20 : 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={`group ${section.goldOnly ? 'border-2 border-cardinal-red bg-white' : 'bg-white'} rounded-sm p-8`}
              >
                {section.goldOnly && (
                  <div className="mb-4 inline-block bg-cardinal-red text-white px-3 py-1 rounded-sm text-xs font-bold uppercase">
                    {isEnglish ? 'Gold Level Only' : 'Зөвхөн Алтан Түвшин'}
                  </div>
                )}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 md:w-16">
                    <div className="bg-black text-white rounded-sm p-4 text-2xl font-bold flex items-center justify-center h-16 group-hover:bg-cardinal-red transition-colors">
                      {section.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-black mb-3">
                      {isEnglish ? section.title.en : section.title.mn}
                    </h3>

                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {isEnglish ? section.description.en : section.description.mn}
                    </p>

                    <div className="bg-gray-50 rounded-sm p-6 border-l-4 border-cardinal-red">
                      <h4 className="font-bold text-black mb-3 uppercase text-sm">
                        {isEnglish ? 'Examples' : 'Жишээнүүд'}
                      </h4>
                      <ul className="space-y-2">
                        {section.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-cardinal-red font-bold mt-1">—</span>
                            <span className="text-gray-700">
                              {isEnglish ? activity.en : activity.mn}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-black mb-4">
              {isEnglish ? 'How It Works' : 'Хэрхэн Ажиллах'}
            </h2>
            <p className="text-gray-600 text-lg">
              {isEnglish
                ? 'Follow these five simple steps to begin your DofE journey'
                : 'DofE аяллыг эхлүүлэхийн тулд эдгээр таван энгийн алхам дагаарай'}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: '01',
                title: isEnglish ? 'Choose Your Level' : 'Түвшин Сонгох',
                desc: isEnglish ? 'Select Bronze, Silver, or Gold based on your age' : 'Насанд үндэслэн сонгоорой',
              },
              {
                step: '02',
                title: isEnglish ? 'Select Activities' : 'Үйл Ажилбара Сонгох',
                desc: isEnglish ? 'Pick activities that interest you' : 'Сонирхол татсан үйл ажилбарыг сонгоорой',
              },
              {
                step: '03',
                title: isEnglish ? 'Set Goals' : 'Зорилго Тогтоох',
                desc: isEnglish ? 'Create clear objectives' : 'Тодорхой зорилго бүрдүүлэх',
              },
              {
                step: '04',
                title: isEnglish ? 'Complete Duration' : 'Хугацаа Гүйцэтгэх',
                desc: isEnglish ? 'Commit to the timeframe' : 'Хугацаа төлөвлөөрөй',
              },
              {
                step: '05',
                title: isEnglish ? 'Receive Award' : 'Наадам Авах',
                desc: isEnglish ? 'Earn your certificate' : 'Гэрчилгээ авахарай',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative"
              >
                <div className="bg-white rounded-sm p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                  <div className="text-3xl font-bold text-cardinal-red mb-3">{item.step}</div>
                  <h3 className="text-base font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold mb-12 text-center"
          >
            {isEnglish ? 'Benefits of the Program' : 'Хөтөлбөрийн Давуу Талууд'}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: isEnglish ? 'Internationally Recognized' : 'Олон Улсын Хүлээн Зөвшөөрөлт',
                desc: isEnglish
                  ? 'Earn a prestigious certification valued globally'
                  : 'Олон улсад үнэлэгддэг нэрт гэрчилгээ авах',
              },
              {
                title: isEnglish ? 'University Advantage' : 'Их Сургуулийн Давуу Эрх',
                desc: isEnglish
                  ? 'Strengthens university and scholarship applications'
                  : 'Их сургуулийн өргөдөл, стипендид давуу эрх өгөх',
              },
              {
                title: isEnglish ? 'Real-World Skills' : 'Бодит Ур Чадвар',
                desc: isEnglish
                  ? 'Develop practical skills valued by employers'
                  : 'Ажилтан үнэлдэг бодит ур чадвар хөгжүүлэх',
              },
              {
                title: isEnglish ? 'Confidence & Discipline' : 'Итгэл & Сахилга',
                desc: isEnglish
                  ? 'Build self-confidence and personal discipline'
                  : 'Бат бөх итгэл үнэмшил, өөрийг хянах сахилга',
              },
              {
                title: isEnglish ? 'Global Citizenship' : 'Дэлхийн Иргэн',
                desc: isEnglish
                  ? 'Foster a global mindset and cultural awareness'
                  : 'Олон нын мэдэлгэ, соёлын ухамсарыг хөгжүүлэх',
              },
              {
                title: isEnglish ? 'Personal Achievement' : 'Хүнийн Амжилт',
                desc: isEnglish
                  ? 'Celebrate your accomplishments and growth'
                  : 'Өөрийн амжилт, сайн байдлыг дуулиж хүлээлцэх',
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-gray-900 rounded-sm p-6 hover:bg-cardinal-red transition-colors border border-gray-800"
              >
                <h3 className="text-base font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-cardinal-red text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              {isEnglish ? 'Ready to Start Your Journey?' : 'Өөрийн Аяллыг Эхлүүлэхэд Бэлэн Үү?'}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              {isEnglish
                ? 'Discover what you are truly capable of. Join thousands of participants worldwide who are achieving their goals through the Duke of Edinburgh\'s Award.'
                : 'Өөрийн жинхэнэ чадварыг олж мэдэх. Эдинбургийн Герцгийн Наадамаар дамжуулан зорилгодоо хүрэж байгаа мянга мянган оролцогчдын эгнээнд нэгдээрэй.'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-cardinal-red px-8 py-3 font-bold uppercase tracking-widest rounded-sm hover:bg-gray-100 transition-colors"
            >
              {isEnglish ? 'Get Started' : 'Эхлүүлэх'}
            </motion.button>
            <p className="text-white/80 mt-6 text-sm">
              {isEnglish
                ? 'Contact our DOFE coordinator: Grace Gondwe (Operations Manager)'
                : 'DOFE координатор: Грэйс Гондве (Үйл ажиллагааны Менежер)'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
