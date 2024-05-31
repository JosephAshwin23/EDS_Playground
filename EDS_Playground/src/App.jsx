import "./App.css";
import FullCalendarHelper from "./FullCalendarHelper";
import ContextProvider from "./ContextProvider";
import Header from "./Header";
import { brand } from '@adaptavant/eds-brands/setmore';
import { Root } from '@adaptavant/eds-core';
import { translations } from '@adaptavant/eds-translations/english';
import { ErrorBoundary } from 'react-error-boundary';


function App() {
  return (
    <ContextProvider> 
      <Root brand={brand} className="h-full w-full"  colorScheme='light' translations={translations}>
      <ErrorBoundary  onError={console.error}>
      <FullCalendarHelper />
      <Header />
      </ErrorBoundary>
     </Root>
    </ContextProvider>
  );
}

export default App;
