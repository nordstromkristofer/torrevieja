import React from 'react';
import Header from '../header';
import "./todo.css"




function Todo() {
  return (
    <div className="Todo">
      <div className='filler'></div>
      <Header />
      <h2 className='todorubrik'>Vid ankomst- När ni kommer till lägenheten</h2>
      <div className='todoboxes'>
        <div className='todobox'>
          <h1 className='boxrubrik'>Elektricitet</h1>
          <p className='boxparagraph'>Sätt på huvudströmbrytaren i elskåpet bakom dörren (se bild). I elskåpet är huvudströmbrytaren markerad med en tejpbit. Sätt även igång kylskåpet i köket (öppna dörren och vrid på ratten)</p>
        </div>
        <div className='todobox'>
          <h1 className='boxrubrik'>Vatten</h1>
          <p className='boxparagraph'>Det finns sammanlagt 5 huvudkranar, för att sätta på vattnet samt varmt respektive kallt i kök och badrum:

            Badrum
            I badrummet finns tre huvudkranar; Den översta är huvudkran för allt vatten i lägenheten. De två andra kranarna är för varmt respektive kallt vatten enbart i badrummet. För att sätta igång vattnet så skruva försiktigt på alla kranarna i motsols riktning. </p>
        </div>
        <div className='todobox'>
          <h1 className='boxrubrik'>Air conditioner</h1>
          <p className='boxparagraph'>Används när det är varmt ute, kan även användas med värme om det är kallt. Tänk på att AC drar mycket elektricitet, stäng därför av AC när ni inte är i lägenheten och stäng fönster/balkongdörr när den är igång. AC genererar kondenserat vatten på balkongen genom ett rör, ställ därför till exempel skurhinken eller en vattendunk som ni tömmer regelbundet. </p>
        </div>
      </div>
    </div>
  );
}

export default Todo;