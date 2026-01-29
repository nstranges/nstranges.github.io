import { Switch, Route, Router } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <TooltipProvider>
      <Toaster />
      <Router base={base}>
        <AppRouter />
      </Router>
    </TooltipProvider>
  );
}

export default App;
