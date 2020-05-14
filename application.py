from cs50 import SQL
from flask import Flask, jsonify, redirect, render_template, request

# Configure application
app = Flask(__name__, static_url_path='/static')

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///shop.db")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/form", methods=["GET","POST"])
def form():
    name, email, message = None, None, None
    if request.method == "POST":
        name = request.form['name']
        if not name :
            return ("Must enter a name")
        email = request.form['email']
        if not email:
            return jsonify({'name':name})
        message = request.form['message']
        if not message:
            return jsonify({'email':email})
        if len(message) > 250:
            return jsonify({'message':"Message is too long!"})
        db.execute("INSERT INTO form VALUES (:name, :email, :message, datetime())",name=name,email=email,message=message)
        return jsonify({'success':"Thanks for your message, We will reply to you shortly."})
@app.route("/shop")
def shop():
    rows = db.execute("select * from stocks")
    return render_template("shop.html",rows=rows)

@app.route("/checkout", methods=["GET","POST"])
def checkout():
    if request.method == "GET":
        return render_template("checkout.html")

@app.route("/learnmore", methods=["GET","POST"])
def learnmore():
    if request.method == "GET":
        return render_template("learnmore.html")
    else:
        name = request.form.get("name")
        if not name:
            return render_template("apology.html",message="Please Provide a name")
        email = request.form.get("email")
        if not email:
            return render_template("apology.html",message="Please Provide an email")
        message = request.form.get("message")
        if not message:
            return render_template("apology.html",message="Please Provide a message")
        db.execute("INSERT INTO form VALUES (:name, :email, :message, datetime())",name=name,email=email,message=message)
        time.sleep(4)
        return render_template("learnmore.html")
@app.route("/who")
def who():
    return render_template("who.html")