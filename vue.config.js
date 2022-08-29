module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/links/" : "/",
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/assets/styles.scss";'
            }
        }
    }
}