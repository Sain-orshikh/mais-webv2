import { Routes, Route } from 'react-router-dom';
import { StudentLifeLayout } from './StudentLifeLayout';
import { StudentLifeOverview } from './StudentLifeOverview';
import { AcademicClubsSection } from './AcademicClubsSection';
import { AthleticsSection } from './AthleticsSection';
import { ArtsMusicSection } from './ArtsMusicSection';
import { ServiceClubsSection } from './ServiceClubsSection';
import { DOFEPage } from './DOFEPage';
import { EventsSection } from './EventsSection';
import { NewsArchiveSection } from './NewsArchiveSection';

export function StudentLifePage() {
  return (
    <StudentLifeLayout>
      <Routes>
        <Route index element={<StudentLifeOverview />} />
        <Route path="academic-clubs" element={<AcademicClubsSection />} />
        <Route path="athletics" element={<AthleticsSection />} />
        <Route path="arts-music" element={<ArtsMusicSection />} />
        <Route path="service-clubs" element={<ServiceClubsSection />} />
        <Route path="dofe" element={<DOFEPage />} />
        <Route path="events" element={<EventsSection />} />
        <Route path="news-archive" element={<NewsArchiveSection />} />
      </Routes>
    </StudentLifeLayout>
  );
}
