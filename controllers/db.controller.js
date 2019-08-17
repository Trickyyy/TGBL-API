module.exports = {
    selectSingle: async(db, query, params = null) => {
        let res;
        if(params) {
            res = await db.query(query, params);
        }
        else {
            res = await db.query(query);
        };
        const data = res.rows[0];
        return data;
    },
    selectMultiple: async(db, query, params = null) => {
        let res;
        if(params) {
            res = await db.query(query, params);
        }
        else {
            res = await db.query(query);
        };
        const data = res.rows;
        return data;
    },
    fire: async(db, query, params) => {
        await db.query(query, params);
    }
}