/**
 *Celem zadania jest napisanie programu, który obliczy koszt zakupów w sklepie z telefonami komórkowymi. Mając daną kwotę, program będzie kupował telefony dopóki starcza mu pieniędzy. Dopóki nie przekroczona zostanie pewna kwota pośrednia, do każdego telefony program dobierze jeszcze jakiś dodatek. Kwoty podawane są bez podatków, więc program musi do tego obliczyć jeszcze wydatek brutto. Na koniec program powinien wypisać ile kasy zostało wydane, informacja ta ma być odpowiednio sformatowana (znak dolara z przodu i dokładność dziesiętna kwoty do dwóch miejsc po przecinku).
 */

const amount: number = 10000;

const cellPhonePrice: number = 99.99;

const gift: number = 6.45;

const tax = 0.23;

let spend: number = 0;

while (spend < amount) {
    spend = spend + cellPhonePrice * (1 + tax);
};



console.log(`Z kwoty ${amount} zostalo wydane ${spend} zl`)