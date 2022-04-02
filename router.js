const inventoryCtrl = require('./controller/inventoryCtrl')
module.exports = (app)=>{
    app.get('/', (req, res) => {
        res.send('Hello World!!')
      })
    app.get('/inventory/get',inventoryCtrl.getInventory)
    app.post('/inventory/create',inventoryCtrl.createInventory)
    app.delete('/inventory/delete',inventoryCtrl.deleteInventory)
    app.post('/inventory/update-qty',inventoryCtrl.updateInventory)
}