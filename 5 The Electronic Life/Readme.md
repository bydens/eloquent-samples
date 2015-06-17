##Electronic Life

#How to run it?
Objects "Vector" and "Greed" - that generates a coordinate space.
The object "World" - draws the map
The object LifelikeWorld" - is responsible for displaying living creatures.
The object "actionTypes" - is responsible for the Commission of activism (food, movement, reproduction).
The object "Plant" is a plant.
The object SmartPlantEater" - herbivore.
The object of the "Predator" is a predator.


#What each symbol on a plan means?
First, form a space.
The object "Vector" is formed movable in two-dimensional space

Then, it creates a map of the World.
The object "Greed" - makes it possible to determine the coordinates on the map.

The variable "directions" contains an array of vectors of the world
The function "randomElement" - returns a random vector from the array "directions"
The object BouncingCritter" - is Bouncing off of obstacles in any direction.

The constructor of the object "World" - takes an array of strings (representing the net of the world), the object is "legend". This object tells what each of the symbols on the map.
The method "toString" of the object "World" builds the map as a string.



Animating lif

The method "turn" of the object "World", allows you to bypass the net and look for objects with metadata "act". And helping to do the action, if possible.

The method "turn" of the object "World", allows creatures to move.
Method "checkDestination of the" object "World" tests the ability to perform an action in the selected direction.

The object "View" - receives information about the current location of the creature and its environment.
The method of "look" object "View" - accepts a vector and returns the type prepyatsviya on an adjacent cell.
The method "findAll" object "View" - accepts an object type and returns an array with vectors pointing at him.

The method "find" object "View" - accepts an object type and returns the direction where to find him. Returns null if this object is not near.

The object constructor "LifelikeWorld" - the heir to the object "World", but with overridden method "LifelikeWorld".


Event handling

The object "actionTypes" - gives the chance of our being to act.
The method "grow" - increases the amount of energy.
The method "move" move.
The method "eat" - is responsible for eating other creatures (except the wall).
The method "reproduce" - responsible for reproduction.



Populating

The object "Plant".
Plants start with an energy level between 3 and 7, randomized so that they don’t all reproduce in the same turn. When a plant reaches 15 energy points and there is empty space nearby, it reproduces into that empty space. If a plant can’t reproduce, it simply grows until it reaches energy level 20.

The object "SmartPlantEater".
Similarly, "Plant", only SmartPlantEater - eating Plant.
And the energy level is higher than the Plant.

The object "Predator".
Similarly "SmartPlantEater", only Predator - eats SmartPlantEater.
And the energy level is higher than the SmartPlantEater.
#How to change plan?