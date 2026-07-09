import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Attorney from "./pages/Attorney";
import PracticeAreas from "./pages/PracticeAreas";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sitemap from "./pages/Sitemap";
import Monroe from "./pages/Monroe";

// Practice Area Pages
import CriminalDefense from "./pages/practice-areas/CriminalDefense";
import PersonalInjury from "./pages/practice-areas/PersonalInjury";
import FamilyLaw from "./pages/practice-areas/FamilyLaw";
import CivilLitigation from "./pages/practice-areas/CivilLitigation";
import RealEstate from "./pages/practice-areas/RealEstate";
import EstatePlanning from "./pages/practice-areas/EstatePlanning";
import DuiOwi from "./pages/practice-areas/DuiOwi";
import DrugCharges from "./pages/practice-areas/DrugCharges";

function Router() {
  return (
    <Layout>
      <Switch>
        {/* Core Pages */}
        <Route path="/" component={Home} />
        <Route path="/attorney" component={Attorney} />
        <Route path="/practice-areas" component={PracticeAreas} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/contact" component={Contact} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/sitemap" component={Sitemap} />

        {/* Practice Area Parent Pages */}
        <Route path="/criminal-defense" component={CriminalDefense} />
        <Route path="/personal-injury" component={PersonalInjury} />
        <Route path="/family-law" component={FamilyLaw} />
        <Route path="/civil-litigation" component={CivilLitigation} />
        <Route path="/real-estate" component={RealEstate} />
        <Route path="/estate-planning" component={EstatePlanning} />

        {/* Criminal Defense Sub-Pages */}
        <Route path="/criminal-defense/dui-owi" component={DuiOwi} />
        <Route path="/criminal-defense/drug-charges" component={DrugCharges} />

        {/* Location Page */}
        <Route path="/monroe" component={Monroe} />

        {/* 404 */}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster
            theme="dark"
            toastOptions={{
              style: {
                background: "#111",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#E8E8E8",
              },
            }}
          />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
