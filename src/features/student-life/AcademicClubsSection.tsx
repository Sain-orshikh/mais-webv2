import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface Club {
  id: string;
  name: string;
  description: string;
}

export function AcademicClubsSection() {
  const { isEnglish } = useLanguage();
  const [searchText, setSearchText] = useState('');

  const clubs: Club[] = [
    {
      id: 'mogul-robotic',
      name: isEnglish ? 'Mogul Robotics' : 'Mogul Робоцтик',
      description: isEnglish
        ? 'Build and program robots through hands-on engineering projects'
        : 'Робот бүтээж, програм хийх замаар инженерийн чадварыг сайжруулах',
    },
    {
      id: 'chemhack',
      name: isEnglish ? 'ChemHack' : 'ChemHack',
      description: isEnglish
        ? 'Explore chemistry through interactive experiments and challenges'
        : 'Интерактив туршилтаар химийг судлах',
    },
    {
      id: 'momentum-physics',
      name: isEnglish ? 'Momentum Physics' : 'Momentum Физик',
      description: isEnglish
        ? 'Discover physics through dynamic experiments and real-world applications'
        : 'Физикийг туршилт, бодит хэрэглээгээр сүнсэлэх',
    },
    {
      id: 'german-club',
      name: isEnglish ? 'German Language Club' : 'Герман хэл',
      description: isEnglish
        ? 'Master German language and culture'
        : 'Герман хэл, соёлыг сайжруулах',
    },
    {
      id: 'chinese-club',
      name: isEnglish ? 'Chinese Language Club' : 'Хятад хэл',
      description: isEnglish
        ? 'Develop Chinese language skills and understand Chinese culture'
        : 'Хятад хэл, соёлыг судлах',
    },
    {
      id: 'ecobusiness',
      name: isEnglish ? 'EcoBusiness' : 'EcoBusiness',
      description: isEnglish
        ? 'Learn sustainable business practices and environmental entrepreneurship'
        : 'Байгаль ухаалаг бизнесийг судлах',
    },
    {
      id: 'money-mind',
      name: isEnglish ? 'Money Mind' : 'Money Mind',
      description: isEnglish
        ? 'Master financial literacy and investment strategies'
        : 'Санхүүгийн мэдлэг, хөрөнгө оруулалтыг судлах',
    },
    {
      id: 'book-club',
      name: isEnglish ? 'Book Club' : 'Номын Клуб',
      description: isEnglish
        ? 'Discuss literature and expand your reading horizons'
        : 'Уран зохиолыг хэлэлцэж, уншлагыг өргөтгөх',
    },
    {
      id: 'ibo-club',
      name: isEnglish ? 'IBO Club' : 'IBO Клуб',
      description: isEnglish
        ? 'Prepare for and engage with International Baccalaureate principles'
        : 'IBO-ийн зарчмыг судлах',
    },
    {
      id: 'astronomy',
      name: isEnglish ? 'Astronomy Club' : 'Одон орны Клуб',
      description: isEnglish
        ? 'Explore the cosmos and discover the wonders of space'
        : 'Сансаршил, сүүлтэй одны судалгаа',
    },
    {
      id: 'young-engineer',
      name: isEnglish ? 'Young Engineers' : 'Залуу Инженерүүд',
      description: isEnglish
        ? 'Apply engineering principles to real-world problem solving'
        : 'Инженерийн асуудлыг бодит байдлаар шийдэх',
    },
    {
      id: 'writing-debating-speech',
      name: isEnglish ? 'Writing, Debating & Speech' : 'Бичих, Маргалдах, Ярих',
      description: isEnglish
        ? 'Develop communication skills through writing, debate, and public speaking'
        : 'Бичих, маргалдах, ярихаар коммуникацийн ур чадвар хөгжүүлэх',
    },
    {
      id: 'chess-club',
      name: isEnglish ? 'Chess Club' : 'Шатрын Клуб',
      description: isEnglish
        ? 'Master strategic thinking and competitive chess play'
        : 'Шатраар сэтгэн ломоохыг сайжруулах',
    },
    {
      id: 'go-aspiration',
      name: isEnglish ? 'Go Aspiration' : 'Go Aspiration',
      description: isEnglish
        ? 'Learn the ancient game of Go and develop strategic thinking'
        : 'Go тоглоомоор стратегийн сэтгэлгээ бөгөөлөх',
    },
  ];

  const filteredClubs = searchText
    ? clubs.filter(club =>
        club.name.toLowerCase().includes(searchText.toLowerCase()) ||
        club.description.toLowerCase().includes(searchText.toLowerCase())
      )
    : clubs;

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
              {isEnglish ? 'Academic Clubs' : 'Академик Клубууд'}
            </h1>
            <p className="text-lg text-black text-opacity-70">
              {isEnglish
                ? 'Explore intellectual pursuits and advance your knowledge through specialized academic clubs focused on sciences, languages, entrepreneurship, and critical thinking.'
                : 'Мэргэжлийн академик клубуудаар оюун санааны ажилд оролцож мэдлэгээ сайжруулаарай'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b border-black border-opacity-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder={isEnglish ? 'Search clubs...' : 'Клуб хайх...'}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full max-w-md px-4 py-3 border-2 border-cardinal-red rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red"
          />
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredClubs.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {filteredClubs.map((club, index) => (
                <motion.div
                  key={club.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg overflow-hidden border-l-4 border-cardinal-red hover:shadow-lg transition-shadow"
                >
                  {/* Photo Section */}
                  <div className="h-40 bg-black flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white text-sm font-semibold">Featured Photo</p>
                    </div>
                  </div>
                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-black mb-3">
                      {club.name}
                    </h3>
                    <p className="text-black text-opacity-70 leading-relaxed">
                      {club.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-black text-opacity-60">
                {isEnglish ? 'No clubs found' : 'Клуб олдсонгүй'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
