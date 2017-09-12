import flask
import flask_sqlalchemy
import flask_restless
from flask_cors import CORS

# Create the Flask application and the Flask-SQLAlchemy object.

app = flask.Flask(__name__)
CORS(app)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = flask_sqlalchemy.SQLAlchemy(app)


class Bookmark(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode)
    url = db.Column(db.Unicode)


db.create_all()
manager = flask_restless.APIManager(app, flask_sqlalchemy_db=db)

# Create API endpoints, which will be available at /api/<tablename> by
# default. Allowed HTTP methods can be specified as well.
manager.create_api(Bookmark, methods=['GET', 'POST', 'DELETE', 'PUT'])

if __name__ == '__main__':
    app.run(debug=True, port=3001)
