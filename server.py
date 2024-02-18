import sqlite3
from flask import Flask, render_template, request

app = Flask(__name__)

def create_table():
    try:
        conn = sqlite3.connect('form_data.db')
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS submissions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT
            )
        ''')
        conn.commit()
        conn.close()
    except sqlite3.Error as e:
        print(f"An error occurred while creating the table: {str(e)}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/thank_you', methods=['POST'])
def thank_you():
    try:
        name = request.form.get('name')
        email = request.form.get('email')

        if not name or not email:
            return render_template('error.html', message='Please fill in all the fields.')

        conn = sqlite3.connect('form_data.db')
        cursor = conn.cursor()
        cursor.execute('INSERT INTO submissions (name, email) VALUES (?, ?)', (name, email))
        conn.commit()
        conn.close()

        return render_template('thank_you.html', name=name)
    except sqlite3.Error as e:
        print(f"An error occurred while storing the form data: {str(e)}")
        return render_template('error.html', message='An error occurred while storing the form data.')
    except Exception as e:
        print(f"An unexpected error occurred: {str(e)}")
        return render_template('error.html', message='An unexpected error occurred.')

if __name__ == '__main__':
    create_table()
    app.run(debug=True)
s