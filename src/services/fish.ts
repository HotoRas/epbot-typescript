// SQLite에 저장된 물고기 데이터를 DB에 

// authored by @HotoRas <- python_object Epbot_origin::main.ManagementCog.reload_fish(this: This, ctx)
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import mongoose from 'mongoose';

const openFishDb = async () => open({
  filename: '../../resources/static/fishing.db',
  driver: sqlite3.Database,
  mode: sqlite3.OPEN_READONLY,
});

export const syncFish = async () => {
  // TODO: 물고기 데이터 동기화
  const fishdb = await openFishDb();
  const data = await fishdb.get('select * from fish');

  for (var i of data) {
    //log

    var formatted = `${i[0]}, '${i[1]}', ${i[2]}, '${i[3]}', ${i[4]}, '${i[5]}', ${i[6]}, ${i[7]}, ${i[8]}, ${i[9]}, ${i[10] ?? 'NULL'}`;
    //TODO insert into mongoose
  }

  //log
}
