
import './style.css';
import { Header } from './components/header/Header';
import { MenuDouble } from './components/menuDouble/MenuDouble';
import { Footer } from "./components/footer/Footer"
import { Presentation } from "./components/presentation/Presentation"
const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  app.appendChild(Header());
  app.appendChild(MenuDouble());
  app.appendChild(Presentation());
  app.appendChild(Footer());

}
