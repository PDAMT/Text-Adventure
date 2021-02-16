import { Pool, QueryResult } from 'pg';

//connection to ElephantSQL
const PG_URI: string = 'postgres://lsphvdli:5e_cWnTRaGxtukRofEs7mxtN33EMEu8b@ziggy.db.elephantsql.com:5432/lsphvdli';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text: string, params: any[], callback: (err: Error, result: QueryResult<any>) => void) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
