module.exports = (application) =>{
    application.get('/', (req, res) => {
        console.log(application);
        application.app.controllers.index.index(application, req, res);
    });
}