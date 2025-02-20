import React from 'react';
import Header from '../header';
import "./todo.css"




function B4leave() {
  return (
    <div className="Todo">
      <div className='filler'></div>
      <Header />
      <h1 className='todorubrik'>Vid avgång – Innan ni lämnar lägenheten</h1>
      <p>Innan ni lämnar lägenheten så ska lägenheten städas och ställas i ordning. Generellt innebär det att dammsuga, dammtorka och våt torka alla ytor i lägenheten samt tvätta använda sängkläder samt handdukar. Dammsugare finns i garderoben och resterande rengöringsprodukter finns i badrummet. Nedan följer en checklista:</p>
      <div className='todoboxes'>
        <div className='todobox'>
          <h1 className='boxrubrik'>Tvätta</h1>
          <p className='boxparagraph'>använda sängkläder och handdukar. Rekommenderar att köra en timmes programmet på tvättmaskinen. På taket (vån 5 +1 trappa) finns tvättlinor och klädnypor för att hänga tvätten.</p>
        </div>

        <div className='todobox'>
          <h1 className='boxrubrik'>Badrum</h1>
          <p className='boxparagraph'>
            Använd gärna toalettpapper, tvål och duschkräm men se till att fylla med det ni använt så att det finns för kommande gäst.

            Se till att inga badrumstillbehör ligger på golvet (ex schampo, duschkräm osv) lägg dessa i rullkorgen
            Dammsug
            Torka golv och ytor inkl dusch
            Badrumsrengöring i toaletten
          </p>
        </div>
        <div className='todobox'>
          <h1 className='boxrubrik'>Kök</h1>
          <p className='boxparagraph'>Avfrosta kyl/frys, torka den sedan torr. Lämna en handduk o dörrarna lite öppna (som bilden nedan)
            Torka av ytor i köket lämna sedan skåpsdörr under diskho lite öppen (lämna lilla baljan under diskhon).
            Diska eventuell disk.
            Lämna ingen mat, donera istället överbliven mat till Raise for hope på andra sidan gatan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default B4leave;