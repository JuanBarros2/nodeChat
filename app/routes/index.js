module.exports = (application) =>{
    application.get('/', (req, res) => {
        console.log(application.app);
        application.app.controllers.index.index(application, req, res);
    });
}