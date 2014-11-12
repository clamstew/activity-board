// For subtracting hours from a date
// for the comparison with commit
// message date
Date.prototype.minusHours = function(hrs) {
    this.setHours(this.getHours() - hrs);
    return this;
};