import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface Team {
  id: string;
  name: string;
  description: string;
  schedule: string;
  coach: string;
  location: string;
  isDofe?: boolean;
}

export function AthleticsSection() {
  const { isEnglish } = useLanguage();

  const teams: Team[] = [
    {
      id: 'basketball',
      name: isEnglish ? 'Basketball' : 'Сагс',
      description: isEnglish
        ? 'Join our competitive basketball team and develop your skills on the court'
        : 'Манай спортын сагсны багт нэгдээд танай ур чадварыг өргөжүүлэх',
      schedule: isEnglish ? 'MON-FRI / 16:30 - 17:30' : 'ДА-ПТ / 16:30 - 17:30',
      coach: isEnglish ? 'Head Coach: Marcus Thorne' : 'Ж.Сургууль: Маркус Торн',
      location: isEnglish ? 'East Gymnasium / Court A' : 'Зүүн Спортын Цэнгэлдэх Хүрээлэн / Цэнгэлдэх А',
    },
    {
      id: 'volleyball',
      name: isEnglish ? 'Volleyball' : 'Волейбол',
      description: isEnglish
        ? 'Team-oriented sport that builds camaraderie and athletic excellence'
        : 'Баг санаатай спорт, баг санаа, спортын хүнд ажил үүсгэлт хийх',
      schedule: isEnglish ? 'TUE-THU / 16:00 - 17:00' : 'ТУ-БА / 16:00 - 17:00',
      coach: isEnglish ? 'Head Coach: Sarah Chen' : 'Ж.Сургууль: Сара Чэн',
      location: isEnglish ? 'West Sports Hall / Court B' : 'Баруун Спортын Цэнгэлдэх Хүрээлэн / Цэнгэлдэх Б',
    },
    {
      id: 'badminton',
      name: isEnglish ? 'Badminton (DofE)' : 'Бадминтон (DofE)',
      description: isEnglish
        ? 'Develop precision, agility, and competitive skills through badminton'
        : 'Бадминтонаар нарийвчлалыг, хөдөлгөөний чадварыг, спортын ур чадварыг хөгжүүлэх',
      schedule: isEnglish ? 'WED-SAT / 15:00 - 16:00' : 'БҮ-БА / 15:00 - 16:00',
      coach: isEnglish ? 'Coach: David Wong' : 'Ж.Сургууль: Дэвид Вонг',
      location: isEnglish ? 'Indoor Courts / Hall 3' : 'Дотор Цэнгэлдэх / Цэнгэлдэх 3',
      isDofe: true,
    },
    {
      id: 'tabletennis',
      name: isEnglish ? 'Table Tennis (DofE)' : 'Ширээний Теннис (DofE)',
      description: isEnglish
        ? 'Build reflexes, strategy, and competitive spirit through table tennis'
        : 'Ширээний теннисаар рефлекс, стратеги, спортын сүнсийг хөгжүүлэх',
      schedule: isEnglish ? 'MON-WED / 17:00 - 18:00' : 'ДА-БҮ / 17:00 - 18:00',
      coach: isEnglish ? 'Coach: Emma Liu' : 'Ж.Сургууль: Эмма Лиу',
      location: isEnglish ? 'Recreation Center / Room 105' : 'Сонирхол Төв / Өрөө 105',
      isDofe: true,
    },
    {
      id: 'yoga',
      name: isEnglish ? 'Yoga (DofE)' : 'Йога (DofE)',
      description: isEnglish
        ? 'Enhance flexibility, strength, and mental wellness through yoga'
        : 'Йогаар сулгацыг, хүчийг, сэтгэцийн эрүүл мэндийг сайжруулах',
      schedule: isEnglish ? 'TUE-THU / 16:30 - 17:30' : 'ТУ-БА / 16:30 - 17:30',
      coach: isEnglish ? 'Instructor: Lisa Park' : 'Ж.Сургууль: Лиза Парк',
      location: isEnglish ? 'Wellness Studio / Room 201' : 'Эрүүл Мэндийн Студио / Өрөө 201',
      isDofe: true,
    },
    {
      id: 'dance',
      name: isEnglish ? 'Dance (DofE)' : 'Бүжиг (DofE)',
      description: isEnglish
        ? 'Express yourself through dance while building coordination and confidence'
        : 'Бүжигээр сонгинаа илэрхийлж, координац, итгэл чадварыг бөгөөлөх',
      schedule: isEnglish ? 'MON-WED / 18:00 - 19:00' : 'ДА-БҮ / 18:00 - 19:00',
      coach: isEnglish ? 'Choreographer: Miguel Santos' : 'Ж.Сургууль: Мигель Сантос',
      location: isEnglish ? 'Dance Studio / Hall 4' : 'Бүжгийн Студио / Цэнгэлдэх 4',
      isDofe: true,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Title Section */}
      <section className="py-12 bg-white border-b border-black border-opacity-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
              {isEnglish ? 'Athletics' : 'Спорт'}
            </h1>
            <p className="text-lg text-black text-opacity-70">
              {isEnglish
                ? 'Build strength, teamwork, and excellence through our competitive athletic programs. From individual sports to team-based activities, we offer something for every athlete.'
                : 'Манай спортын програмуудаар хүч чадал, баг санаа, хүнд ажил үүсгэлт хийнэ'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teams Showcase */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {teams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  className="relative h-80 bg-black rounded-lg overflow-hidden flex items-center justify-center order-2 lg:order-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white/30 text-8xl mb-4 font-bold">
                        {team.name.charAt(0)}
                      </div>
                      <p className="text-white/40 text-sm">{isEnglish ? 'Team Photo' : 'Баг Зураг'}</p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  {team.isDofe && (
                    <div className="absolute top-4 right-4 bg-cardinal-red text-white px-3 py-1 text-xs font-bold rounded">
                      DOFE
                    </div>
                  )}

                  {/* Team Label - Vertical */}
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 writing-mode-vertical text-white font-bold text-lg uppercase tracking-widest">
                    <div style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
                      {team.name}
                    </div>
                  </div>
                </motion.div>

                {/* Details */}
                <motion.div className="space-y-4 order-1 lg:order-2">
                  <div>
                    <p className="text-black text-opacity-70 leading-relaxed mb-4">
                      {team.description}
                    </p>
                  </div>

                  <div className="space-y-3 bg-gray-50 rounded-lg p-6">
                    <div>
                      <p className="text-black text-opacity-50 text-sm uppercase tracking-wider">
                        {isEnglish ? 'Meeting Times' : 'Уулзалтын Цаг'}
                      </p>
                      <p className="text-black font-bold">{team.schedule}</p>
                    </div>
                    <div>
                      <p className="text-black text-opacity-50 text-sm uppercase tracking-wider">
                        {isEnglish ? 'Head Coach' : 'Ж.Сургууль'}
                      </p>
                      <p className="text-black font-bold">{team.coach}</p>
                    </div>
                    <div>
                      <p className="text-black text-opacity-50 text-sm uppercase tracking-wider">
                        {isEnglish ? 'Location' : 'Байршил'}
                      </p>
                      <p className="text-black font-bold">{team.location}</p>
                    </div>
                  </div>

                  <button className="w-full border-2 border-black text-black font-bold py-3 rounded hover:bg-black hover:text-white transition">
                    {isEnglish ? 'VIEW ROSTER' : 'БАГ ҮЗЭХ'}
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
