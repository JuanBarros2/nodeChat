module.exports = (application) =>{
    application.get('/', (req, res) => {
        console.log(application);
        application.controllers.index.index(application, req, res);
    });
}