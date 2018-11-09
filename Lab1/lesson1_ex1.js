function duck() {
    this.weight;
    this.colour;
    this.quack = function () {
        console.log("quack");
    };
}
new duck().quack();
