(function(){'use strict';function EventManager() {
  this.listenerMap = {};

  this.on = function (event, callback) {
    this.listenerMap[event] = callback;
  };

  this.off = function (event) {
    if (!this.listenerMap[event]) return;

    delete this.listenerMap[event];
  };

  this.emit = function (event, payload) {
    if (!this.listenerMap[event]) {
      console.warn('unknown event: ' + event);
      return;
    }
    this.listenerMap[event](payload);
  };

  return this;
}const em = new EventManager();
em.on('test', function() {
    document.write('test');
});
em.emit('test');
em.off('test');
em.emit('test');
console.log(em);})();//# sourceMappingURL=bundle.js.map
