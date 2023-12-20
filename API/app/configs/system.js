// system.js

module.exports = {
    appName: 'API',
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    logLevel: process.env.LOG_LEVEL || 'info',
    // Các thông số cấu hình khác tùy thuộc vào yêu cầu của ứng dụng
    // Các thông số cấu hình khác tùy thuộc vào yêu cầu của ứng dụng
    setupServer: function (app) {
        const port = this.port;

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    },
};
