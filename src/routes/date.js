


module.exports = (app) => {
    app.get('/date', async (req, res) => {

        try {
            let date = new Date();
            let time = date.getTime();
            let ts = Date.now()
            let hours = date.getHours();

            // current minutes
            let minutes = date.getMinutes();
            res.json({ date,time, ts, hours, minutes });
            console.log(hours,minutes);
        } catch (error) {
            console.log('error : ', error);
            res.json({ error });
        }

    }
    )
}

