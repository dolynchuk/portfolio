

import './styles.css';
import { Hero } from '../../components/Hero/Hero';
import { Pixelate } from '../../components/Pixelate/Pixelate';
import { MainPageInfo } from './MainPageInfo';
import { MainPageMarquee } from './MainPageMarquee';
import { Invert } from '../../components/Invert/Invert';

export function Page() {
  return (
    <main className="mainPage">
      <Pixelate />
      <Invert />
      <MainPageInfo />
      <div className="heroContainer">
        <Hero />
      </div>
      <div className="marqueeContainer">
        <MainPageMarquee />
      </div>
    </main>
  );
}
+