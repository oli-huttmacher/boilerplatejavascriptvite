import './footer.css';

export const Footer = (): HTMLElement => {
   //create div 
   const footerDiv = document.createElement('div');
   footerDiv.className = 'footer-container'; 

   //create el
   
   const texte: Array<string> = ["un", "deux", "trois"];
   texte.forEach(txt => {
      const fp = document.createElement('p');
      fp.textContent = txt;
      footerDiv.appendChild(fp);
   });
   return footerDiv;
};