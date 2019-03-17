const Koa = require('koa')
const app = new Koa()
const cors = require('koa-cors')

const router = require('koa-router')()

const city = require('./mock/city.json')
const index = require('./mock/index.json')
const detail = require('./mock/detail.json')

router.get('/api/city', async (ctx, next) => {
    ctx.body = city
})
router.get('/api/index', async (ctx, next) => {
    ctx.body = index
})
router.get('/api/detail', async (ctx, next) => {
    ctx.body = detail
})

app.use(cors())
app.use(router.routes())
app.listen(3000, () => {
    console.log('Listening at http://localhost:3000/')
})