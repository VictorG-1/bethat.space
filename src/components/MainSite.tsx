import { Header } from './Header';
import { Punchline } from './Punchline';
import { About } from './About';
import { Leadership } from './Leadership';
import { Services } from './Services';
import { ProjectsClients } from './ProjectsClients';
import { Media } from './Media';
import { Footer } from './Footer';
import bgImage from 'figma:asset/c621f8e2b94cd37ccbe0edbb8d8595d829d1df5c.png';

export function MainSite() {
  return (
    <div className="min-h-screen bg-black scroll-smooth font-sans">
      <Header />
      
      <main className="pt-20">
        {/* Parallax Background Container for Philosophy + About */}
        <div 
          className="relative"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll'
          }}
        >
          {/* Dark overlay for improved text readability */}
          <div className="absolute inset-0 bg-black/70" />
          
          <Punchline />
          <About />
        </div>
        
        <Leadership />
        <Services />
        <ProjectsClients />
        <Media />
      </main>
      
      <Footer />
    </div>
  );
}