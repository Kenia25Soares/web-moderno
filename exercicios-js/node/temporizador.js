const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 3', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})
// '*/5 Segundos em qualquer minuto| * 10 A hora sera 10| (* * Ignorar qualquer mês ou dia do mês) |3 DIa da semana, onde 0 e domingo, 1 e segunda, 2 terça...'

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate  -- parecida com a setTimeout, porém não tem o tempo do 20000
// setInterval  -- dispara função de tempos em tempos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]  // 1, 5 ou seja de segunda a sexta
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
