from curses import meta
from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import engine, meta, conn
users = Table("users", meta,
              Column("id", Integer, primary_key=True),
              Column("correo", String(255)), 
              Column("password", String(255)),
              Column("direccion",String(255))
        )

meta.create_all(engine)