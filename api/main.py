from fastapi import Body, FastAPI, status, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from pydantic import BaseModel, EmailStr
from models.user import users
from config.db import conn
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
class User(BaseModel):
    email: EmailStr = Body(...)
    password: str = Body(...,min_length=8)
class UserRegister(User):
    cpassword: str = Body(...,min_length=8)
    direccion: str = Body(...,min_length=10)
    direccion2: str = Body(None)

@app.get("/",name="Hello World")
async def index():
    try:
        res = conn.execute(users.select()).fetchall()
        return res
    except RecursionError as e:
        return "Error"
@app.post(
    path="/login",
    tags=['LOGIN SERVICE']
    )
async def login(user: User):
    if(user.email == "rgo1999@hotmail.com" and user.password == "password"):
        return {"status":"success"}
    else:
        raise HTTPException(status.HTTP_400_BAD_REQUEST,detail="Your credentials dont match")

@app.post(
    path="/register",
    tags=["LOGIN SERVICE"]
)
async def register():

    return {}