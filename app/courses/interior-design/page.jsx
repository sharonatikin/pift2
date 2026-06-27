import InteriorLearnBeyond from '../../../components/interior/InteriorLearnBeyond';
import InteriorCareers from '../../../components/interior/InteriorCareers';
import InteriorPortfolioPillars from '../../../components/interior/InteriorPortfolioPillars';
import InteriorProgramDetails from '../../../components/interior/InteriorProgramDetails';
import InteriorDesignJourney from '../../../components/interior/InteriorDesignJourney';
import InteriorFinalCTA from '../../../components/interior/InteriorFinalCTA';
import InteriorDesignLandingPage from '../../../components/interior/InteriorDesignLandingPage';
import SpacesInfluenceSection from '../../../components/interior/SpacesInfluenceSection';
import CreativitySpacesSection from '../../../components/interior/CreativitySpacesSection';
import CreativeEvolutionTimeline from '../../../components/interior/CreativeEvolutionTimeline';
import MasterInteriorDesign from '../../../components/interior/MasterInteriorDesign';
import LearnInsideStudios from '../../../components/interior/LearnInsideStudios';
import DesignIndustryTools from '../../../components/interior/DesignIndustryTools';
import HowSpacesAreCreated from '../../../components/interior/HowSpacesAreCreated';
import StudentDesignProjects from '../../../components/interior/StudentDesignProjects';

export default function InteriorPage() {
  return (
    <div className="overflow-x-hidden">
      <InteriorDesignLandingPage/>
      <SpacesInfluenceSection/>
      <CreativitySpacesSection/>
      <CreativeEvolutionTimeline/>
      <MasterInteriorDesign/>
      <LearnInsideStudios/>
      <DesignIndustryTools/>
      <HowSpacesAreCreated/>
      <StudentDesignProjects/>
      <InteriorLearnBeyond />
      <InteriorCareers />
      <InteriorPortfolioPillars />
      <InteriorProgramDetails />
      <InteriorDesignJourney />
      <InteriorFinalCTA />
    </div>
  );
}
