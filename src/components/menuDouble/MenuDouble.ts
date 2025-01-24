import './menuDouble.css';

export const MenuDouble = (): HTMLElement => {
   //create div
   const doubleContainer = document.createElement('div');
   doubleContainer.className = 'double-container'; 

   //el 1 300 px------------------------------------------
   const contentLeft = document.createElement('div');
   contentLeft.className = "content-left";

   //el 2 600px--------------------------------------------
   //create div
   const contentRight = document.createElement('div');
   contentRight.className = "content-right";
   //create contenu h1
   const titre1 = document.createElement('H1');
   titre1.textContent = "titre Principal";
   //ajouter le contenu h1
   contentRight.appendChild(titre1);

      //fonction sup
      const listText: Array<string> = ["oli", "bobo", "grenade"];
   listText.forEach(txt => {
      const p = document.createElement('p');
      p.textContent = txt;
      contentLeft.appendChild(p);
   });

   //ajouter el a container
   doubleContainer.appendChild(contentLeft);
   doubleContainer.appendChild(contentRight);

   return doubleContainer;
};