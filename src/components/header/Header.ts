import './header.css';

export const Header = (): HTMLElement => {
   const headerContainer = document.createElement('div');
   headerContainer.className = 'header-container'; 
   
   const texte: Array<string> = ["un", "deux", "trois"];
   texte.forEach(txt => {
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = txt;
      headerContainer.appendChild(a);
   });
   return headerContainer;
};