import { BaseLayout } from 'src/layout';
import {
  ControlSection,
  ResultsList,
} from 'src/pages-components/search-results';

const SearchResultsPage = () => {
  return (
    <BaseLayout>
      <ControlSection />
      <ResultsList />
    </BaseLayout>
  );
};

export default SearchResultsPage;
