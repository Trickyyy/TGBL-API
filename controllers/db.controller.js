module.exports = {
    selectSingle: (db, query, params = null) => {
        let data;
        if(params) {
            db.query(query, [params], (err, res) => {
                data = res.rows[0];
            });
        }
        else {
            db.query(query, (err, res) => {
                data = res.rows[0];
            });
        };
        return data;
    },
    selectSingle: (db, query, params = null) => {
        let data;
        if(params) {
            db.query(query, [params], (err, res) => {
                data = res.rows;
            });
        }
        else {
            db.query(query, (err, res) => {
                data = res.rows;
            });
        };
        return data;
    },
}