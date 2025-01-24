import './header.css';

export const Gabarit = (): HTMLElement => {
   //create div 
   const div = document.createElement('div');
   div.className = 'container'; 

   //create el
   
   const texte: Array<string> = ["un", "deux", "trois"];
   texte.forEach(txt => {
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = txt;
      div.appendChild(a);
   });
   return div;
};