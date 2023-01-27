/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.page = [homepage];
  this.cur = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.page = this.page.slice(0, this.cur + 1);
  this.page.push(url);
  this.cur = this.page.length - 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  //뒤로 갈 인덱스가
  let back_index = this.cur > steps ? this.cur - steps : 0;
  this.cur = back_index;
  return this.page[this.cur];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  //다음 이동할게 없으면 그대로 리턴
  let foward_index = this.page.length > this.cur + steps ? this.cur + steps : this.page.length - 1;
  this.cur = foward_index;
  return this.page[this.cur];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
