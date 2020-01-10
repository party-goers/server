module.exports = (err,req,res,next)=>{
    console.log(`
        ERROR HAPPENED - LOG FROM ERROR HANDLER
        =======================================
    `);
    console.log(err);

    let status = err.status || 500
    let message = err.message || 'INTERNAL SERVER ERROR'

    switch (err.name) {
        case 'ValidationError':

            break;

        case 'MongoError':
            break;

        case 'SongKickError':
            status = 400
            message = err.message

        default:
            break;
    }

    res.status(status).json(message)
}
