from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1213",
    database="consultorio_db"
)
cursor = db.cursor(dictionary=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cadastro')
def cadastro():
    return render_template('cad.html')

@app.route('/clientes', methods=['POST'])
def adicionar_cliente():
    try:
        data = request.json
        cursor.execute(
            "INSERT INTO p_clientes (nome, email, telefone) VALUES (%s, %s, %s)",
            (data['nome'], data['email'], data['telefone'])
        )
        db.commit()
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
