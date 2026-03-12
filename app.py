from flask import Flask, render_template, jsonify, send_from_directory
import os

app = Flask(__name__, static_folder='static', template_folder='templates')

IMAGES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static', 'images')
ALLOWED_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.webp'}


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/images')
def get_images():
    if not os.path.isdir(IMAGES_DIR):
        os.makedirs(IMAGES_DIR, exist_ok=True)

    image_files = [
        f for f in os.listdir(IMAGES_DIR)
        if os.path.splitext(f)[1].lower() in ALLOWED_EXTENSIONS
    ]
    return jsonify(sorted(image_files))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
