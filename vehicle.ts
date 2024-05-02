//on a une interface nommée vehicle avec les propriétes suivantes : make, modele, year , start
interface Vehicle  {
    make : string,
    model : string,
    year : number,
    start() : void
}
//Cette ligne définit une classe TypeScript nommée Car. Le mot-clé implements indique que la classe Car implémente l'interface Vehicle, ce qui signifie qu'elle doit fournir une implémentation pour toutes les propriétés et méthodes définies dans l'interface Vehicle.
class Car implements Vehicle {
    make : string;
    model : string;
    year : number;
    constructor(make: string, model: string, year: number) {
        this.make = make; //affecte la valeur de make (la marque passée en paramètre) à la propriété make de l'objet Car.
        this.model = model;
        this.year = year;
    }

    start(): void { //Cette méthode start est une implémentation de la méthode start définie dans l'interface Vehicle. Lorsqu'elle est appelée sur un objet Car, elle affiche simplement "Car engine started" dans la console.
        console.log('Car engine started')
    }
}

//Cette ligne crée une nouvelle instance de la classe Car avec les valeurs spécifiées pour la marque, le modèle et l'année.
const myCar = new Car('lamborghini', 'Urus' , 2024 )

//Cette ligne appelle la méthode start sur l'objet myCar, ce qui entraîne l'affichage de "Car engine started" dans la console.
myCar.start()