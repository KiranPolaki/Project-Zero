from flask import Flask, request, render_template, redirect, url_for # type: ignore
from pymongo import MongoClient # type: ignore
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient("mongodb+srv://polakisaikiran1:JzVO6oAfdingJrHM@cluster0.nuiturv.mongodb.net/")
db = client.userprofiles
users_collection = db.users

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json();
    print(data);
    # user_data = {
    #     'name': request.form['name'],
    #     'email': request.form['email'],
    #     'date_of_birth': request.form['date_of_birth'],
    #     'occupation': request.form['occupation'],
    #     'race': request.form['race'],
    #     'country': request.form['country'],
    #     'gender': request.form['gender'],
    #     'pronouns': request.form['pronouns'],
    #     'interests': request.form['interests'].split(',')
    # }
    # users_collection.insert_one(user_data)
    # return redirect(url_for('index'))
    return "ok"

if __name__ == '__main__':
    app.run(debug=True)