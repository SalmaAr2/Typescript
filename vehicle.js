//Cette ligne définit une classe TypeScript nommée Car. Le mot-clé implements indique que la classe Car implémente l'interface Vehicle, ce qui signifie qu'elle doit fournir une implémentation pour toutes les propriétés et méthodes définies dans l'interface Vehicle.
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make; //affecte la valeur de make (la marque passée en paramètre) à la propriété make de l'objet Car.
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log('Car engine started');
    };
    return Car;
}());
//Cette ligne crée une nouvelle instance de la classe Car avec les valeurs spécifiées pour la marque, le modèle et l'année.
var myCar = new Car('lamborghini', 'Urus', 2024);
//Cette ligne appelle la méthode start sur l'objet myCar, ce qui entraîne l'affichage de "Car engine started" dans la console.
myCar.start();
