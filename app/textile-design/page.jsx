import TextileHero from '../../components/textile/TextileHero';
import TextileOverview from '../../components/textile/TextileOverview';
import TextileSpecializations from '../../components/textile/TextileSpecializations';
import TextileCurriculumTimeline from '../../components/textile/TextileCurriculumTimeline';
import TextileCreativityCloud from '../../components/textile/TextileCreativityCloud';
import TextileStudiosGrid from '../../components/textile/TextileStudiosGrid';
import TextileTraditionSplit from '../../components/textile/TextileTraditionSplit';
import TextileCreationPipeline from '../../components/textile/TextileCreationPipeline';
import TextileCollectionsList from '../../components/textile/TextileCollectionsList';
import TextileLearnBeyond from '../../components/textile/TextileLearnBeyond';
import TextileCareersGrid from '../../components/textile/TextileCareersGrid';
import TextileConnectedIndustry from '../../components/textile/TextileConnectedIndustry';
import TextileProgramDetails from '../../components/textile/TextileProgramDetails';
import TextileJourneyPipeline from '../../components/textile/TextileJourneyPipeline';
import TextileFinalCTA from '../../components/textile/TextileFinalCTA';

export default function TextilePage() {
  return (
    <div className="overflow-x-hidden">
      <TextileHero />
      <TextileOverview />
      <TextileSpecializations />
      <TextileCurriculumTimeline />
      <TextileCreativityCloud />
      <TextileStudiosGrid />
      <TextileTraditionSplit />
      <TextileCreationPipeline />
      <TextileCollectionsList />
      <TextileLearnBeyond />
      <TextileCareersGrid />
      <TextileConnectedIndustry />
      <TextileProgramDetails />
      <TextileJourneyPipeline />
      <TextileFinalCTA />
    </div>
  );
}
