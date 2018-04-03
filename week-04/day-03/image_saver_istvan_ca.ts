/****************
 * Interface II *
 ****************/

class ImageSaver {

  database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  save(path: string) {
    this.database.save(30, 10);
  }
}

interface Database {
  save(width, height);
}

/*************************************/

class MySql implements Database{
  save(width, height) {
    //here we can do some mysql specific stuff
  }
}

let myImageSaver = new ImageSaver(new MySql());


/************************************/


class Oracle implements Database{
  save(width, height) {
    //here we can do some oracle specific stuff
  }
}

let myImageSaver = new ImageSaver(new Oracle());


/************************************/

class TextDatabase implements Database {
  save(width, height) {
    //here we can do some text file specific stuff
  }
}

let myImageSaver = new ImageSaver(new TextDatabase());