import EventManager from 'https://farishan.github.io/js-event-manager/bundle.js'

const em = new EventManager()
em.on('test', function() {
    document.write('test')
})
em.emit('test')
em.off('test')
em.emit('test')
console.log(em)