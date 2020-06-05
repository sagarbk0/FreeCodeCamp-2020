// Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding");
  }
}

glideMixin(bird);
glideMixin(boat);

// Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  };
}

// Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("A cozy nest is ready");
})();

// Use an IIFE to Create a Module
let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();